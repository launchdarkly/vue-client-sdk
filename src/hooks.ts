import { inject, type InjectionKey } from 'vue'
import { LD_CLIENT, LD_FLAG, LD_INIT, LD_READY, type LDPluginOptions } from '.'

const safeInject = <T>(key: InjectionKey<T>, label: string): T => {
  const target = inject(key)
  if (target === undefined) {
    throw new Error(`Injection of ${label} failed. LaunchDarkly plugin may not have been loaded.`)
  }
  return target
}

/**
 * Indicates if the LaunchDarkly client has finished initializing. Uses Vue's inject API, and will only
 * work if run inside a Vue setup hook or `<script setup>`.
 *
 * @return Readonly boolean reference indicating if the LaunchDarkly client has finished initializing.
 */
export function useLDReady() {
  return safeInject(LD_READY, 'LD_READY')
}

/**
 * Provides the LaunchDarkly JavaScript client,
 * {@link https://launchdarkly.github.io/js-client-sdk/interfaces/_launchdarkly_js_client_sdk_.ldclient.html}.
 * Uses Vue's inject API, and will only work if run inside a Vue setup hook or `<script setup>`.
 */
export function useLDClient() {
  return safeInject(LD_CLIENT, 'LD_CLIENT')
}

/**
 * Initializes the LaunchDarkly client.
 * Uses Vue's inject API, and will only work if run inside a Vue setup hook or `<script setup>`.
 */
export function ldInit(initOptions: LDPluginOptions) {
  return safeInject(LD_INIT, 'LD_INIT')(initOptions)
}

/**
 * Evaluates a single feature flag. Automatically subscribes to streamed updates
 * unless the `streaming` option was set to false.
 * Uses Vue's inject API, so will only work if run inside a Vue setup hook or `<script setup>`.
 *
 * @typeParam T - Type of the flag's value. Can be inferred if a default value is provided.
 * @param flagKey Key of the feature flag to be evaluated.
 * @param defaultValue Default value to be used while flag value loads, or if flag cannot be found.
 *
 * @return Readonly ref to the flag's value.
 */
export function useLDFlag<T>(flagKey: string, defaultValue?: T) {
  return safeInject(LD_FLAG, 'LD_FLAG')(flagKey, defaultValue)
}
