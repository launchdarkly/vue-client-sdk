import { ref, unref, nextTick } from 'vue'
import { watchEffectOnceAsync, watchEffectOnce } from './utils'

describe('utils', () => {
  const genericReactiveValue = ref(false)
  let genericCallback = jest.fn()
  let genericWatcher = () => unref(genericReactiveValue)

  function reset() {
    genericCallback.mockReset()
    genericReactiveValue.value = false
    genericCallback = jest.fn()
    genericWatcher = () => unref(genericReactiveValue)
  }

  test('watchEffectOnce', async () => {
    reset()
    watchEffectOnce(genericWatcher, genericCallback)
    genericReactiveValue.value = true
    await nextTick()

    expect(genericCallback).toBeCalled()
  })

  test('watchEffectOnceAsync', async () => {
    reset()
    const fulfilledStatus = 'fulfilled'
    const resultPromise = watchEffectOnceAsync(genericWatcher)
    genericReactiveValue.value = true
    await nextTick()
    const resultPromiseSettlement = await Promise.allSettled([resultPromise])
    const resultPromiseStatus = (resultPromiseSettlement.pop() || {}).status

    expect(resultPromiseStatus).toBe(fulfilledStatus)
  })
})
