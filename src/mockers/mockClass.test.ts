import ExampleClass from '@tests/dummies/ExampleClass'
import mockClass from './mockClass'

jest.mock('@tests/dummies/ExampleClass')

describe('Test `mockClass` in `mockers`!', () => {
  it('Should return the module name when invoking the `getMockName`!', () => {
    const result = mockClass(ExampleClass, '@tests/dummies/ExampleClass')
    expect(result.getMockName()).toBe('@tests/dummies/ExampleClass')
  })
})
