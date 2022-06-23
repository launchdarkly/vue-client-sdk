import { initialize, type LDClient, type LDUser, type LDOptions } from 'launchdarkly-js-client-sdk'
import { readonly, ref, type InjectionKey, type Ref, type App } from 'vue'
import getFlagRef, { type FlagRef } from './getFlagRef'

type LDInitOptions = {
  clientSideID?: string | undefined
  user?: LDUser | undefined
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
      const user = initOptions.user ?? pluginOptions.user
      const options = initOptions.options ?? pluginOptions.options

      if (clientSideID === undefined || user === undefined) {
        const errMessages: string[] = []
        if (clientSideID === undefined) errMessages.push('clientSideID is undefined')
        if (user === undefined) errMessages.push('user is undefined')
        throw new Error(`Cannot initialize LaunchDarkly: ${errMessages.join(', ')}`)
      }

      const $ldClient = initialize(clientSideID, user, options)
      app.provide(LD_CLIENT, $ldClient)
      app.provide(LD_FLAG, getFlagRef($ldReady, $ldClient))
      $ldClient.on('ready', () => $ldReady.value = true)
    }
    app.provide(LD_READY, readonly($ldReady))
    if (pluginOptions.clientSideID && pluginOptions.user) {
      $ldInit(pluginOptions)
    } else {
      app.provide(LD_INIT, $ldInit)
    }
  }
}
