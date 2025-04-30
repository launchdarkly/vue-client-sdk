import { onBeforeUnmount, readonly, ref, type Ref } from 'vue'
import type { LDClient } from 'launchdarkly-js-client-sdk'

export type FlagRef<T> = Readonly<Ref<T>>

export const getLDFlag = (ldReady: Ref<boolean>, $ldClient: LDClient) => {
  return function ldFlag<T>(flagKey: string, defaultFlagValue?: T): FlagRef<T> {
    const isLdReady = ldReady.value
    const flagValue = isLdReady ? $ldClient.variation(flagKey, defaultFlagValue) : defaultFlagValue
    const flagRef = ref(flagValue)

    const updateFlagRef = (newFlagValue: unknown) => (flagRef.value = newFlagValue)
    $ldClient.on(`change:${flagKey}`, updateFlagRef)
    onBeforeUnmount(() => $ldClient.off(`change:${flagKey}`, updateFlagRef))
    if (!isLdReady) {
      $ldClient.on('ready', () => updateFlagRef($ldClient.variation(flagKey, flagRef.value)))
    }
    return readonly(flagRef)
  }
}
