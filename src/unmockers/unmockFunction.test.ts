import exampleFunction from '@tests/dummies/exampleFunction'
import { mockFunction } from '../mockers'
import unmockFunction from './unmockFunction'

jest.mock('@tests/dummies/exampleFunction')

describe('Test `unmockFunction` in `unmockers`!', () => {
  it('Should return the module name when invoking the `getMockName`!', () => {
    const mocked =  mockFunction(exampleFunction, '@tests/dummies/exampleFunction')
    unmockFunction(mocked, '@tests/dummies/exampleFunction')
    expect(mocked.getMockName()).toBe('@tests/dummies/exampleFunction')
  })
})
