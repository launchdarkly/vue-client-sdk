import type { LDContext } from 'launchdarkly-js-client-sdk'
import type { LDPluginOptions } from './index'

/**
 * Helper function to get the context or fallback to classic user.
 * Safe to remove when the user property is deprecated.
 */
export const getContextOrUser = (config: LDPluginOptions): LDContext | undefined => config.context ?? config.user
