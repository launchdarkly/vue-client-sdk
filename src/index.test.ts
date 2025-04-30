import type { App } from 'vue'
import { initialize, type LDClient } from 'launchdarkly-js-client-sdk'
import { LDPlugin, LD_INIT, LD_READY } from '.'
import { getLDFlag } from './getLDFlag'

jest.mock('./getLDFlag')
const getLdFlagMock = <jest.Mock<typeof getLDFlag>>(<unknown>getLDFlag)
jest.mock('launchdarkly-js-client-sdk')
const initializeMock = <jest.Mock<typeof initialize>>(<unknown>initialize)
const onMock = jest.fn()
const ldClientMock = {
  variation: jest.fn(),
  on: onMock,
  off: jest.fn(),
} as unknown as LDClient
initializeMock.mockImplementation((() => ldClientMock) as jest.Mock)

const provideMock = jest.fn()

const app = {
  provide: provideMock,
} as unknown as App

describe('LDPlugin', () => {
  beforeEach(() => {
    provideMock.mockClear()
    onMock.mockClear()
    getLdFlagMock.mockClear()
  })

  test('throws if clientSideID is not provided', () => {
    expect(() => LDPlugin.install(app)).toThrowErrorMatchingInlineSnapshot(
      `"LaunchDarkly plugin requires a clientSideID unless deferInitialization option is used"`,
    )
  })

  test('provides LD_READY', () => {
    LDPlugin.install(app, { clientSideID: 'hk47' })

    expect(provideMock).toHaveBeenCalledWith(LD_READY, expect.objectContaining({ value: false }))
  })

  test('defers initialization', () => {
    LDPlugin.install(app, { deferInitialization: true })

    expect(provideMock).toHaveBeenCalledWith(LD_INIT, expect.any(Function))
  })

  test('throws if clientSideID is not provided when deferring initialization', () => {
    LDPlugin.install(app, { deferInitialization: true })

    expect(provideMock.mock.calls[1][1]).toThrowErrorMatchingInlineSnapshot(
      `"Cannot initialize LaunchDarkly without a clientSideID"`,
    )
  })

  test('ready event handler updates ref', () => {
    LDPlugin.install(app, { clientSideID: 'hk47' })
    const $ldReady = provideMock.mock.calls[0][1]
    const onReady = onMock.mock.lastCall[1]

    expect($ldReady.value).toBe(false)
    onReady()

    expect($ldReady.value).toBe(true)
  })

  test('defaults to streaming if not provided', () => {
    LDPlugin.install(app, { clientSideID: 'hk47' })

    expect(initializeMock).toHaveBeenCalledWith(expect.anything(), expect.anything(), expect.objectContaining({ streaming: true }))
  });

  test('passes streaming option through', () => {
    LDPlugin.install(app, { clientSideID: 'hk47', streaming: false })

    expect(initializeMock).toHaveBeenCalledWith(expect.anything(), expect.anything(), expect.objectContaining({ streaming: false }))
  })

  test('overrides streaming if provided in options', () => {
    LDPlugin.install(app, { clientSideID: 'hk47', streaming: false, options: { streaming: true } })

    expect(initializeMock).toHaveBeenCalledWith(expect.anything(), expect.anything(), expect.objectContaining({ streaming: false }))
  })
})
