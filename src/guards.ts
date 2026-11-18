import { unref } from 'vue'
import { launchDarklyClient, launchDarklyReady } from '.'
import { watchEffectOnceAsync } from './utils'

/**
 * Vue Router Guard.
 *
 * Provides a way to access flag values in the vue-router guards.
 * [per-route-guard](https://router.vuejs.org/guide/advanced/navigation-guards.html#per-route-guard)
 * Usage: `beforeEnter: launchDarklyGuard(flagKey, callback, defaultValue),`
 *
 * Custom logic can be apply using the callback parameter, when this parameter is passed it will be
 * in charge of the guard logic. The 'callback' function will hold the resulted flag and the injected
 * Vue Router params, check: [NavigationGuard](https://router.vuejs.org/api/interfaces/NavigationGuard.html)
 */
export function launchDarklyGuard<T>(flagKey: string, callback?: ((arg0: boolean, args: unknown) => void) | null, defaultValue?: T): (args: unknown) => Promise<boolean> {
  return async (...args) => {
    const fn = () => {
      const flag = launchDarklyClient.value.variation(flagKey, defaultValue)

      if (typeof flag !== 'boolean' && typeof callback !== 'function') {
        console.warn(`LaunchDarkly guard warning: Be careful, flag key '${flagKey}' does not returns boolean value (${flag}), therefore it can lead to unexpected results.`)
      }

      if (typeof callback === 'function') {
        return callback(flag, ...args)
      }

      return flag
    }

    if (!unref(launchDarklyReady)) {
      await watchEffectOnceAsync(() => unref(launchDarklyReady))
    }

    return fn()
  }
}
