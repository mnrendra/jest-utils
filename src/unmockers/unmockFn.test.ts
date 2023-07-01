import exampleFn from '@tests/dummies/exampleFn'
import { mockFn } from '../mockers'
import unmockFn from './unmockFn'

jest.mock('@tests/dummies/exampleFn')

describe('Test `unmockFn` in `unmockers`!', () => {
  it('Should return the module name when invoking the `getMockName`!', () => {
    const mocked =  mockFn(exampleFn, '@tests/dummies/exampleFn')
    unmockFn(mocked, '@tests/dummies/exampleFn')
    expect(mocked.getMockName()).toBe('@tests/dummies/exampleFn')
  })
})
