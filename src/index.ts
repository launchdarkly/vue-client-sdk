import { initialize, type LDClient, type LDContext, type LDOptions } from 'launchdarkly-js-client-sdk'
import { readonly, ref, type InjectionKey, type Ref, type App } from 'vue'
import { getLDFlag, type FlagRef } from './getLDFlag'
import { version } from '../package.json'
import { getContextOrUser } from './utils'
export { useLDReady, useLDFlag, ldInit, useLDClient } from './hooks'

// Export required types from the base SDK.
export type {
  LDClient,
  LDContext,
  LDOptions,
}

export type LDPluginOptions = {
  /**
   * Indicates which LaunchDarkly project to use. Must be provided here or in a call to {@link ldInit} for the SDK to work.
   */
  clientSideID?: string | undefined

  /**
   * A LaunchDarkly context object. If unspecified, an anonymous context
   * with kind: 'user' will be created and used.
   */
  context?: LDContext

  /**
   * @deprecated The `user` property will be removed in a future version,
   * please update your code to use context instead.
   */
  user?: LDContext

  /**
   * Whether or not to open a streaming connection to LaunchDarkly for live flag updates.
   *
   * If this is true, the client will always attempt to maintain a streaming connection; if false,
   * it never will. If you leave the value undefined (the default), the client will open a streaming
   * connection for live updates to flags referenced using {@link useLDFlag}.
   *
   * Note that if `streaming` is provided in `options`, it will take precedence.
   *
   * @defaultValue `undefined`
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

      const context = getContextOrUser(initOptions) ??
        getContextOrUser(pluginOptions) ?? { anonymous: true, kind: 'user' }

      const streaming = initOptions.streaming ?? pluginOptions.streaming
      const options = {
        ...(streaming !== undefined ? { streaming } : {}),
        ...(initOptions.options ?? pluginOptions.options),
      }
      const wrapperOptions = { wrapperName: 'vue-client-sdk', wrapperVersion: version }
      const $ldClient = initialize(clientSideID, context, { ...wrapperOptions, ...options })

      app.provide(LD_CLIENT, $ldClient)
      app.provide(LD_FLAG, getLDFlag(ldReady, $ldClient))

      $ldClient.on('ready', () => (ldReady.value = true))
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
