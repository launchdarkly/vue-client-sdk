import type { LDContext } from 'launchdarkly-js-client-sdk'
import type { LDPluginOptions } from './index'

/**
 * Helper function to get the context or fallback to classic user.
 * Safe to remove when the user property is deprecated.
 *
 * Ripped from react sdk:
 * https://github.com/launchdarkly/react-client-sdk-private/blob/a66fcdfd626c367e446c7c6f65cb9360f8dfad36/src/utils.ts#L9
 */
export const getContextOrUser = (config: LDPluginOptions): LDContext | undefined => config.context ?? config.user
