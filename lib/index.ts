import { initialize, type LDClient, type LDUser, type LDOptions } from 'launchdarkly-js-client-sdk'
import { readonly, ref, type InjectionKey, type Ref, type App } from 'vue'
import getFlagRef, { type FlagRef } from './getFlagRef'

type LDPluginOptions = {
  clientSideID: string
  user: LDUser
  options?: LDOptions | undefined
}

export const ldReadyKey = Symbol() as InjectionKey<Readonly<Ref<boolean>>>
export const ldClientKey = Symbol() as InjectionKey<LDClient>
export const ldFlagKey = Symbol() as InjectionKey<<T>(flagKey: string, defaultFlagValue?: T | undefined) => FlagRef<T>>

export const LDPlugin = {
  install(app: App, { clientSideID, user, options }: LDPluginOptions) {
    const $ldClient = initialize(clientSideID, user, options)
    const $ldReady = ref(false)
    app.provide(ldReadyKey, readonly($ldReady))
    app.provide(ldClientKey, $ldClient)
    app.provide(ldFlagKey, getFlagRef($ldReady, $ldClient))
    $ldClient.on('ready', () => $ldReady.value = true)
  }
}
