import exampleFn from '@tests/dummies/exampleFn'
import mockFn from './mockFn'

jest.mock('@tests/dummies/exampleFn')

describe('Test `mockFn` in `mockers`!', () => {
  it('Should return the module name when invoking the `getMockName`!', () => {
    const result = mockFn(exampleFn, '@tests/dummies/exampleFn')
    expect(result.getMockName()).toBe('@tests/dummies/exampleFn')
  })
})
