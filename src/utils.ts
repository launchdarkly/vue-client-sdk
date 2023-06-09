import { watchEffect } from 'vue'

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
