import { launchDarklyGuard } from './guards'

const existingFlagKey = 'random-flag-key'
const existingFlagValue = 'random-flag-value'

jest.mock('./utils', () => ({
  watchEffectOnceAsync: () => Promise.resolve(),
}))

jest.mock('.', () => ({
  launchDarklyClient: {
    value: {
      variation: (flagKey: string, defaultValue?: unknown) => {
        if (existingFlagKey === flagKey) {
          return existingFlagValue
        }

        return defaultValue
      },
    },
  },
}))

describe('guards', () => {
  const genericFlag = 'myFlag'
  const genericDefaultValue = 'default-value'
  const genericArgs: unknown = []
  const genericCallback = () => genericDefaultValue

  const warnSpy = jest.spyOn(global.console, 'warn').mockImplementation(() => undefined)

  test('should return a function', () => {
    expect(launchDarklyGuard(existingFlagKey)).toMatchInlineSnapshot(`[Function]`)
  })

  test('should return a promise after invocation', () => {
    expect(launchDarklyGuard(existingFlagKey)(genericArgs)).toMatchInlineSnapshot(`Promise {}`)
  })

  test('should return undefined when the flag does not exist', async () => {
    const result = await launchDarklyGuard(genericFlag)(genericArgs)
    expect(result).toMatchInlineSnapshot(`undefined`)
  })

  test('should return the default value', async () => {
    const result = await launchDarklyGuard(genericFlag, null, genericDefaultValue)(genericArgs)
    expect(result).toBe(genericDefaultValue)
  })

  test('should return the callback value', async () => {
    const result = await launchDarklyGuard(genericFlag, genericCallback)(genericArgs)
    expect(result).toBe(genericDefaultValue)
  })

  test('should return the callback value (true)', async () => {
    const callbackValue = true
    const result = await launchDarklyGuard(genericFlag, () => callbackValue)(genericArgs)
    expect(result).toBe(callbackValue)
  })

  test('should return the callback value (false)', async () => {
    const callbackValue = false
    const result = await launchDarklyGuard(genericFlag, () => callbackValue)(genericArgs)
    expect(result).toBe(callbackValue)
  })

  test('should return the existing value (simulates a Launch Darkly real value)', async () => {
    const result = await launchDarklyGuard(existingFlagKey)(genericArgs)
    expect(result).toBe(existingFlagValue)
  })

  test('should have called console.warn)', async () => {
    expect(warnSpy).toHaveBeenCalled()
  })
})
