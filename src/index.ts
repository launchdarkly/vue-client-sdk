import { initialize, type LDClient, type LDUser, type LDOptions } from 'launchdarkly-js-client-sdk'
import { readonly, ref, type InjectionKey, type Ref, type App } from 'vue'
import { getLDFlag, type FlagRef } from './getLDFlag'
import { version } from '../package.json'
export { useLDReady, useLDFlag, ldInit, useLDClient } from './hooks'
export { launchDarklyGuard } from './guards'

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
   * Enables or disables automatically subscribing to live updates to flags referenced using {@link useLDFlag}.
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
export const LD_INIT = Symbol() as InjectionKey<(o?: LDPluginOptions) => [Readonly<Ref<boolean>>, LDClient]>
/**
 * Injection key used to retrieve a boolean ref indicating if the LaunchDarkly client has finished initializing.
 * Usage: `const ldReady = inject(LD_READY)`.
 * Alternatively use {@link useLDReady}.
 */
export const LD_READY = Symbol() as InjectionKey<Readonly<Ref<boolean>>>
/**
 * Injection key used to retrieve LaunchDarkly client. Usage: `const ldClient = inject(LD_CLIENT)`.
 * Alternatively use {@link useLDClient}.
 */
export const LD_CLIENT = Symbol() as InjectionKey<LDClient>
/**
 * Injection key used to retrieve `ldFlag` function. Usage: `const ldFlag = inject(LD_FLAG)`.
 * Alternatively use {@link useLDFlag}.
 */
export const LD_FLAG = Symbol() as InjectionKey<<T>(flagKey: string, defaultFlagValue?: T | undefined) => FlagRef<T>>

/**
 * Will hold the LaunchDarkly instance.
 */
export const launchDarklyClient = ref() as Ref<LDClient>

/**
 * Will hold the LaunchDarkly readiness.
 */
export const launchDarklyReady = ref(false) as Ref<boolean>

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
    const $ldInit = (initOptions: LDPluginOptions = {}): [Readonly<Ref<boolean>>, LDClient] => {
      const clientSideID = initOptions.clientSideID ?? pluginOptions.clientSideID
      if (!clientSideID) {
        throw new Error(`Cannot initialize LaunchDarkly without a clientSideID`)
      }
      const user = initOptions.user ?? pluginOptions.user ?? { anonymous: true }
      const options = initOptions.options ?? pluginOptions.options
      const wrapperOptions = { wrapperName: 'vue-client-sdk', wrapperVersion: version }
      const $ldClient = initialize(clientSideID, user, { ...wrapperOptions, ...options })
      app.provide(LD_CLIENT, $ldClient)
      const enableStreaming = pluginOptions.streaming === false || initOptions.streaming === false ? false : true
      app.provide(LD_FLAG, getLDFlag(ldReady, $ldClient, enableStreaming))

      // On Launch Darkly client ready
      $ldClient.on('ready', () => {
        ldReady.value = true
        launchDarklyReady.value = true
      })

      // Launch Darkly client instance assignation
      launchDarklyClient.value =  $ldClient

      return [$ldReady, $ldClient]
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
