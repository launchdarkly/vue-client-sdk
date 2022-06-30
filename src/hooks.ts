import { inject, type InjectionKey } from 'vue'
import { LD_CLIENT, LD_FLAG, LD_INIT, LD_READY } from '.'

const safeInject = <T>(key: InjectionKey<T>, label: string): T => {
  const target = inject(key)
  if (target === undefined) {
    throw new Error(`Injection of ${label} failed. LaunchDarkly plugin may not have been loaded.`)
  }
  return target
}

export const useLdReady = () => safeInject(LD_READY, 'LD_READY')

export const useLdClient = () => safeInject(LD_CLIENT, 'LD_CLIENT')

export const useLdInit = () => safeInject(LD_INIT, 'LD_INIT')

export const useLdFlag = <T>(flagKey: string, defaultValue?: T) => safeInject(LD_FLAG, 'LD_FLAG')(flagKey, defaultValue)
