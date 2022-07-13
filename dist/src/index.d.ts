import { type LDClient, type LDUser, type LDOptions } from 'launchdarkly-js-client-sdk';
import { type InjectionKey, type Ref, type App } from 'vue';
import { type FlagRef } from './getLDFlag';
export { useLDReady, useLDFlag, ldInit, useLDClient } from './hooks';
export declare type LDPluginOptions = {
    /**
     * Indicates which LaunchDarkly project to use. Must be provided here or in a call to {@link ldInit} for the SDK to work.
     */
    clientSideID?: string | undefined;
    /**
     * User definition.
     *
     * @defaultValue Defaults to anonymous user, `{ anonymous: 'true' }`
     */
    user?: LDUser | undefined;
    /**
     * Enables or disables automatically subscribing to live updates to flags referenced using {@link useLDFlag}.
     *
     * @defaultValue `true`
     */
    streaming?: boolean;
    /**
     * Defers initialization of the LaunchDarkly client until {@link ldInit} is called explicitly.
     *
     * @defaultValue `false`
     */
    deferInitialization?: boolean;
    /**
     * Options to pass to the underlying javascript SDK.
     */
    options?: LDOptions | undefined;
};
/**
 * Injection key used to retreive LaunchDarkly client initialization function. Usage: `const ldInit = inject(LD_INIT)`.
 * Alternatively use {@link ldInit}.
 */
export declare const LD_INIT: InjectionKey<(o?: LDPluginOptions | undefined) => [Readonly<Ref<boolean>>, LDClient]>;
/**
 * Injection key used to retrieve a boolean ref indicating if the LaunchDarkly client has finished initializing.
 * Usage: `const ldReady = inject(LD_READY)`.
 * Alternatively use {@link useLDReady}.
 */
export declare const LD_READY: InjectionKey<Readonly<Ref<boolean>>>;
/**
 * Injection key used to retrieve LaunchDarkly client. Usage: `const ldClient = inject(LD_CLIENT)`.
 * Alternatively use {@link useLDClient}.
 */
export declare const LD_CLIENT: InjectionKey<LDClient>;
/**
 * Injection key used to retrieve `ldFlag` function. Usage: `const ldFlag = inject(LD_FLAG)`.
 * Alternatively use {@link useLDFlag}.
 */
export declare const LD_FLAG: InjectionKey<(<T>(flagKey: string, defaultFlagValue?: T | undefined) => Readonly<Ref<T>>)>;
/**
 * Vue plugin wrapper for the LaunchDarkly JavaScript SDK.
 *
 * If provided with a clientSideID will initialize the LaunchDarkly client automatically (unless `deferInitialization` is true).
 *
 * @see LDPluginOptions for configuration options
 */
export declare const LDPlugin: {
    install(app: App, pluginOptions?: LDPluginOptions): void;
};
