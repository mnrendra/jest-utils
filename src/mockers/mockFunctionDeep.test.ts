import exampleFunctionDeep from '@tests/dummies/exampleFunctionDeep'
import mockFunctionDeep from './mockFunctionDeep'

jest.mock('@tests/dummies/exampleFunctionDeep')

describe('Test `mockFunctionDeep` in `mockers`!', () => {
  it('Should return the module name when invoking the `getMockName`!', () => {
    const result = mockFunctionDeep(exampleFunctionDeep, '@tests/dummies/exampleFunctionDeep')
    expect(result.getMockName()).toBe('@tests/dummies/exampleFunctionDeep')
  })
})
