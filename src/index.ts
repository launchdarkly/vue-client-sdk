import { initialize, type LDClient, type LDUser, type LDOptions } from 'launchdarkly-js-client-sdk'
import { readonly, ref, type InjectionKey, type Ref, type App } from 'vue'
import { getLdFlag, type FlagRef } from './getLdFlag'
export { useLdReady, useLdFlag, ldInit, useLdClient } from './hooks'

export type LDPluginOptions = {
  /**
   * Indicates which LaunchDarkly project to use. Must be provided here or in a call to {@link ldInit} for the SDK to work.
   */
  clientSideID?: string | undefined
  /**
   * User definition.
   *
   * @defaultValue Defaults to anonymous user, `{ anonymous: 'true' }`
   */
  user?: LDUser | undefined
  /**
   * Enables or disables automatically subscribing to live updates to flags referenced using {@link useLdFlag}.
   *
   * @defaultValue `true`
   */
  streaming?: boolean
  /**
   * Defers initialization of the LaunchDarkly client until {@link ldInit} is called explicitly.
   *
   * @defaultValue `false`
   */
  deferInitialization?: boolean
  /**
   * Options to pass to the underlying javascript SDK.
   */
  options?: LDOptions | undefined
}

/**
 * Injection key used to retreive LaunchDarkly client initialization function. Usage: `const ldInit = inject(LD_INIT)`.
 * Alternatively use {@link ldInit}.
 */
export const LD_INIT = Symbol() as InjectionKey<(o?: LDPluginOptions) => [LDClient, Readonly<Ref<boolean>>]>
/**
 * Injection key used to retreive a boolean ref indicating if the LaunchDarkly client has finished initializing.
 * Usage: `const ldReady = inject(LD_READY)`.
 * Alternatively use {@link useLdReady}.
 */
export const LD_READY = Symbol() as InjectionKey<Readonly<Ref<boolean>>>
/**
 * Injection key used to retreive LaunchDarkly client. Usage: `const ldclient = inject(LD_CLIENT)`.
 * Alternatively use {@link useLdClient}.
 */
export const LD_CLIENT = Symbol() as InjectionKey<LDClient>
/**
 * Injection key used to retreive `ldFlag` function. Usage: `const ldFlag = inject(LD_FLAG)`.
 * Alternatively use {@link useLdFlag}.
 */
export const LD_FLAG = Symbol() as InjectionKey<<T>(flagKey: string, defaultFlagValue?: T | undefined) => FlagRef<T>>

/**
 * Vue plugin wrapper for the LaunchDarkly JavaScript SDK.
 *
 * If provided with a clientSideID will initialize the LaunchDarkly client automatically (unless `deferInitialization` is true).
 *
 * @see LDPluginOptions for configuration options
 */
export const LDPlugin = {
  install(app: App, pluginOptions: LDPluginOptions = {}) {
    const ldReady = ref(false)
    const $ldReady = readonly(ldReady)
    const $ldInit = (initOptions: LDPluginOptions = {}): [LDClient, Readonly<Ref<boolean>>] => {
      const clientSideID = initOptions.clientSideID ?? pluginOptions.clientSideID
      if (!clientSideID) {
        throw new Error(`Cannot initialize LaunchDarkly without a clientSideID`)
      }
      const user = initOptions.user ?? pluginOptions.user ?? { anonymous: true }
      const options = initOptions.options ?? pluginOptions.options
      const $ldClient = initialize(clientSideID, user, options)
      app.provide(LD_CLIENT, $ldClient)
      const enableStreaming = pluginOptions.streaming === false || initOptions.streaming === false ? false : true
      app.provide(LD_FLAG, getLdFlag(ldReady.value, $ldClient, enableStreaming))
      $ldClient.on('ready', () => (ldReady.value = true))
      return [$ldClient, $ldReady]
    }
    app.provide(LD_READY, $ldReady)
    if (pluginOptions.deferInitialization) {
      app.provide(LD_INIT, $ldInit)
    } else if (!pluginOptions.clientSideID) {
      throw new Error('LaunchDarkly plugin requires a clientSideID unless deferInitialization option is used')
    } else {
      $ldInit(pluginOptions)
    }
  },
}
