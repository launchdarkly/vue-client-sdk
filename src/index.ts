import { initialize, type LDClient, type LDUser, type LDOptions } from 'launchdarkly-js-client-sdk'
import { readonly, ref, type InjectionKey, type Ref, type App } from 'vue'
import getFlagRef, { type FlagRef } from './getFlagRef'
export { useFlag } from './useFlag'

type LDInitOptions = {
  clientSideID?: string | undefined
  user?: LDUser | undefined
  streaming?: boolean
  deferInitialization?: boolean
  options?: LDOptions | undefined
}

type LDPluginOptions = LDInitOptions // can be extended with vue plugin specific options

export const LD_INIT = Symbol() as InjectionKey<(o: LDInitOptions) => LDClient>
export const LD_READY = Symbol() as InjectionKey<Readonly<Ref<boolean>>>
export const LD_CLIENT = Symbol() as InjectionKey<LDClient>
export const LD_FLAG = Symbol() as InjectionKey<<T>(flagKey: string, defaultFlagValue?: T | undefined) => FlagRef<T>>

export const LDPlugin = {
  install(app: App, pluginOptions: LDPluginOptions = {}) {
    const $ldReady = ref(false)
    const $ldInit = (initOptions: LDInitOptions) => {
      const clientSideID = initOptions.clientSideID ?? pluginOptions.clientSideID
      const user = initOptions.user ?? pluginOptions.user ?? { anonymous: true }
      const options = initOptions.options ?? pluginOptions.options

      if (clientSideID === undefined || user === undefined) {
        const errMessages: string[] = []
        if (clientSideID === undefined) errMessages.push('clientSideID is undefined')
        if (user === undefined) errMessages.push('user is undefined')
        throw new Error(`Cannot initialize LaunchDarkly: ${errMessages.join(', ')}`)
      }

      const $ldClient = initialize(clientSideID, user, options)
      app.provide(LD_CLIENT, $ldClient)
      const enableStreaming = pluginOptions.streaming === false || initOptions.streaming === false ? false : true
      app.provide(LD_FLAG, getFlagRef($ldReady, $ldClient, enableStreaming))
      $ldClient.on('ready', () => ($ldReady.value = true))
    }
    app.provide(LD_READY, readonly($ldReady))
    if (pluginOptions.deferInitialization) {
      app.provide(LD_INIT, $ldInit)
    } else if (!pluginOptions.clientSideID) {
      throw new Error('LaunchDarkly plugin requires a clientSideID unless deferInitialization option is used')
    } else {
      $ldInit(pluginOptions)
    }
  },
}
