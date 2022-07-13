/// <reference types="launchdarkly-js-client-sdk" />
import { type LDPluginOptions } from '.';
/**
 * Indicates if the LaunchDarkly client has finished initializing. Uses Vue's inject API, and will only
 * work if run inside a Vue setup hook or `<script setup>`.
 *
 * @return Readonly boolean reference indicating if the LaunchDarkly client has finished initializing.
 */
export declare function useLDReady(): Readonly<import("vue").Ref<boolean>>;
/**
 * Provides the LaunchDarkly JavaScript client,
 * {@link https://launchdarkly.github.io/js-client-sdk/interfaces/_launchdarkly_js_client_sdk_.ldclient.html}.
 * Uses Vue's inject API, and will only work if run inside a Vue setup hook or `<script setup>`.
 */
export declare function useLDClient(): import("launchdarkly-js-client-sdk").LDClient;
/**
 * Initializes the LaunchDarkly client.
 * Uses Vue's inject API, and will only work if run inside a Vue setup hook or `<script setup>`.
 */
export declare function ldInit(initOptions: LDPluginOptions): [Readonly<import("vue").Ref<boolean>>, import("launchdarkly-js-client-sdk").LDClient];
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
export declare function useLDFlag<T>(flagKey: string, defaultValue?: T): Readonly<import("vue").Ref<T>>;
