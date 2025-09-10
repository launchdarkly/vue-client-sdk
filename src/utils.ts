import { watchEffect } from 'vue'

import type { LDContext } from 'launchdarkly-js-client-sdk'

import type { LDPluginOptions } from './index'

/**
 * @ignore
 * Run watchEffect until the watcher returns true, then stop the watch.
 * Once it returns true, the promise will resolve.
 * [Reference](https://github.com/auth0/auth0-vue/blob/main/src/utils.ts)
 */
export function watchEffectOnceAsync<T>(watcher: () => T) {
  return new Promise<void>(resolve => {
    watchEffectOnce(watcher, resolve)
  })
}

/**
 * @ignore
 * Run watchEffect until the watcher returns true, then stop the watch.
 * Once it returns true, it will call the provided function.
 * [Reference](https://github.com/auth0/auth0-vue/blob/main/src/utils.ts)
 */
export function watchEffectOnce<T>(watcher: () => T, fn: (value: void | PromiseLike<void>) => void) {
  const stopWatch = watchEffect(() => {
    if (watcher()) {
      fn()
      stopWatch()
    }
  })
}


/**
 * Helper function to get the context or fallback to classic user.
 * Safe to remove when the user property is deprecated.
 *
 * Ripped from react sdk:
 * https://github.com/launchdarkly/react-client-sdk-private/blob/a66fcdfd626c367e446c7c6f65cb9360f8dfad36/src/utils.ts#L9
 */
export const getContextOrUser = (config: LDPluginOptions): LDContext | undefined => config.context ?? config.user
