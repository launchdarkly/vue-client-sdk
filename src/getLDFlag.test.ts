import { onBeforeUnmount, ref, type Ref } from 'vue'
import type { LDClient, LDFlagValue } from 'launchdarkly-js-client-sdk'
import { getLDFlag } from './getLDFlag'

jest.mock('vue', () => ({
  ...jest.requireActual('vue'),
  onBeforeUnmount: jest.fn(),
}))

const onBeforeUnmountMocked = <jest.Mock<typeof onBeforeUnmount>>onBeforeUnmount

const getMockLdClient = (value?: LDFlagValue) =>
  ({
    variation: jest.fn(() => value),
    on: jest.fn(),
    off: jest.fn(),
  } as unknown as LDClient)

describe('when ld client is not yet ready', () => {
  let ldClient: LDClient
  let flagRef: Readonly<Ref<string>>

  beforeEach(() => {
    onBeforeUnmountMocked.mockClear()
    ldClient = getMockLdClient('test-flag-value')
    flagRef = getLDFlag(ref(false), ldClient)('test-flag-key', 'default-flag-value')
  })

  test('returns ref to default flag value', () => {
    expect(flagRef.value).toBe('default-flag-value')
  })

  test('sets up a ready event handler', () => {
    expect(ldClient.on).toHaveBeenCalledWith('ready', expect.any(Function))
  })

  test('sets up onBeforeUnmount handler', () => {
    expect(onBeforeUnmount).toHaveBeenCalled()
  })
})

describe('when ld client is ready', () => {
  let ldClient: LDClient
  let flagRef: Readonly<Ref<string>>

  beforeEach(() => {
    onBeforeUnmountMocked.mockClear()
    ldClient = getMockLdClient('test-flag-value')
    flagRef = getLDFlag(ref(true), ldClient)('test-flag-key', 'default-flag-value')
  })

  test('returns ref to flag value', () => {
    expect(flagRef.value).toBe('test-flag-value')
  })

  test('sets up a change event handler', () => {
    expect(ldClient.on).toHaveBeenCalledWith('change:test-flag-key', expect.any(Function))
  })

  test('sets up onBeforeUnmount handler', () => {
    expect(onBeforeUnmount).toHaveBeenCalled()
  })
})

describe('when streaming is disabled', () => {
  describe('and ld is not yet ready', () => {
    let ldClient: LDClient
    let flagRef: Readonly<Ref<string>>

    beforeEach(() => {
      onBeforeUnmountMocked.mockClear()
      ldClient = getMockLdClient('test-flag-value')
      flagRef = getLDFlag(ref(false), ldClient, false)('test-flag-key', 'default-flag-value')
    })

    test('returns ref to default flag value', () => {
      expect(flagRef.value).toBe('default-flag-value')
    })

    test('does not set up event handlers', () => {
      expect(ldClient.on).not.toHaveBeenCalled()
    })

    test('does not set up onBeforeUnmount handler', () => {
      expect(onBeforeUnmount).not.toHaveBeenCalled()
    })
  })

  describe('and ld is ready', () => {
    let ldClient: LDClient
    let flagRef: Readonly<Ref<string>>

    beforeEach(() => {
      onBeforeUnmountMocked.mockClear()
      ldClient = getMockLdClient('test-flag-value')
      flagRef = getLDFlag(ref(true), ldClient, false)('test-flag-key', 'default-flag-value')
    })

    test('returns ref to flag value', () => {
      expect(flagRef.value).toBe('test-flag-value')
    })

    test('does not set up event handlers', () => {
      expect(ldClient.on).not.toHaveBeenCalled()
    })

    test('does not set up onBeforeUnmount handler', () => {
      expect(onBeforeUnmount).not.toHaveBeenCalled()
    })
  })
})

test('onBeforeUnmount disables change event handler', () => {
  const ldClient = getMockLdClient('test-flag-value')
  getLDFlag(ref(true), ldClient)('test-flag-key', 'default-flag-value')

  onBeforeUnmountMocked.mock.lastCall[0]()

  expect(ldClient.off).toHaveBeenCalledWith('change:test-flag-key', expect.any(Function))
})

test('ready event updates flag ref', () => {
  const ldClient = getMockLdClient('test-flag-value')
  const ldClientOnMocked = <jest.Mock<typeof ldClient.on>>ldClient.on
  const flagRef = getLDFlag(ref(false), ldClient)('test-flag-key', 'default-flag-value')
  expect(flagRef.value).toBe('default-flag-value')

  ldClientOnMocked.mock.calls[1][1]()

  expect(flagRef.value).toBe('test-flag-value')
})
