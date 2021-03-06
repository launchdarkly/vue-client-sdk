import { inject, readonly, ref } from 'vue'
import { useLDReady, useLDClient, ldInit, useLDFlag } from '.'

jest.mock('vue', () => ({
  ...jest.requireActual('vue'),
  inject: jest.fn(),
}))

const injectMocked = <jest.Mock<typeof inject>>inject

describe('when plugin has not been loaded', () => {
  test('useLDReady blows up', () => {
    expect(useLDReady).toThrowErrorMatchingInlineSnapshot(
      `"Injection of LD_READY failed. LaunchDarkly plugin may not have been loaded."`,
    )
  })

  test('useLDClient blows up', () => {
    expect(useLDClient).toThrowErrorMatchingInlineSnapshot(
      `"Injection of LD_CLIENT failed. LaunchDarkly plugin may not have been loaded."`,
    )
  })

  test('ldInit blows up', () => {
    expect(ldInit).toThrowErrorMatchingInlineSnapshot(
      `"Injection of LD_INIT failed. LaunchDarkly plugin may not have been loaded."`,
    )
  })

  test('useLDFlag blows up', () => {
    expect(() => useLDFlag('test-flag-key')).toThrowErrorMatchingInlineSnapshot(
      `"Injection of LD_FLAG failed. LaunchDarkly plugin may not have been loaded."`,
    )
  })
})

test('safeInject returns injectee', () => {
  injectMocked.mockImplementationOnce((() => readonly(ref(true))) as jest.Mock)

  const result = useLDReady()

  expect(result.value).toBe(true)
})
