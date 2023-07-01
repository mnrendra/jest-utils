import exampleFunctionDeep from '@tests/dummies/exampleFunctionDeep'
import { mockFunctionDeep } from '../mockers'
import unmockFunctionDeep from './unmockFunctionDeep'

jest.mock('@tests/dummies/exampleFunctionDeep')

describe('Test `unmockFunctionDeep` in `unmockers`!', () => {
  it('Should return the module name when invoking the `getMockName`!', () => {
    const mocked =  mockFunctionDeep(exampleFunctionDeep, '@tests/dummies/exampleFunctionDeep')
    unmockFunctionDeep(mocked, '@tests/dummies/exampleFunctionDeep')
    expect(mocked.getMockName()).toBe('@tests/dummies/exampleFunctionDeep')
  })
})
