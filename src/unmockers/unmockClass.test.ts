import ExampleClass from '@tests/dummies/ExampleClass'
import { mockClass } from '../mockers'
import unmockClass from './unmockClass'

jest.mock('@tests/dummies/ExampleClass')

describe('Test `unmockClass` in `unmockers`!', () => {
  it('Should return the module name when invoking the `getMockName`!', () => {
    const mocked =  mockClass(ExampleClass, '@tests/dummies/ExampleClass')
    unmockClass(mocked, '@tests/dummies/ExampleClass')
    expect(mocked.getMockName()).toBe('@tests/dummies/ExampleClass')
  })
})
