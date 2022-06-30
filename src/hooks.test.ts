import { inject, readonly, ref } from 'vue'
import { useLdReady, useLdClient, ldInit, useLdFlag } from '.'

jest.mock('vue', () => ({
  ...jest.requireActual('vue'),
  inject: jest.fn(),
}))

const injectMocked = <jest.Mock<typeof inject>>inject

describe('when plugin has not been loaded', () => {
  test('useLdReady blows up', () => {
    expect(useLdReady).toThrowErrorMatchingInlineSnapshot(
      `"Injection of LD_READY failed. LaunchDarkly plugin may not have been loaded."`,
    )
  })

  test('useLdClient blows up', () => {
    expect(useLdClient).toThrowErrorMatchingInlineSnapshot(
      `"Injection of LD_CLIENT failed. LaunchDarkly plugin may not have been loaded."`,
    )
  })

  test('ldInit blows up', () => {
    expect(ldInit).toThrowErrorMatchingInlineSnapshot(
      `"Injection of LD_INIT failed. LaunchDarkly plugin may not have been loaded."`,
    )
  })

  test('useLdFlag blows up', () => {
    expect(() => useLdFlag('test-flag-key')).toThrowErrorMatchingInlineSnapshot(
      `"Injection of LD_FLAG failed. LaunchDarkly plugin may not have been loaded."`,
    )
  })
})

test('safeInject returns injectee', () => {
  injectMocked.mockImplementationOnce((() => readonly(ref(true))) as jest.Mock)

  const result = useLdReady()

  expect(result.value).toBe(true)
})
