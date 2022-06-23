import { onBeforeUnmount, readonly, ref } from 'vue'
import type { LDClient } from 'launchdarkly-js-client-sdk'
import type { Ref } from 'vue'

export type FlagRef<T> = Readonly<Ref<T>>

export default function ($ldReady: Readonly<Ref<boolean>>, $ldClient: LDClient, enableStreaming: boolean) {
  return function getFlagRef<T>(flagKey: string, defaultFlagValue?: T): FlagRef<T> {
    const flagRef = ref($ldReady.value ? $ldClient.variation(flagKey, defaultFlagValue) : defaultFlagValue)
    if (!enableStreaming) {
      return readonly(flagRef)
    }

    const updateFlagRef = (newFlagValue: unknown) => flagRef.value = newFlagValue
    $ldClient.on(`change:${flagKey}`, updateFlagRef)
    onBeforeUnmount(() => $ldClient.off(`change:${flagKey}`, updateFlagRef))
    if (!$ldReady.value) {
      $ldClient.on('ready', () => updateFlagRef($ldClient.variation(flagKey, flagRef.value)))
    }
    return readonly(flagRef)
  }
}
