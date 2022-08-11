import { type Ref } from 'vue';
import type { LDClient } from 'launchdarkly-js-client-sdk';
export declare type FlagRef<T> = Readonly<Ref<T>>;
export declare const getLDFlag: (ldReady: Ref<boolean>, $ldClient: LDClient, enableStreaming?: boolean) => <T>(flagKey: string, defaultFlagValue?: T | undefined) => Readonly<Ref<T>>;
