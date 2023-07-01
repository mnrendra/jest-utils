import exampleFunction from '@tests/dummies/exampleFunction'
import mockFunction from './mockFunction'

jest.mock('@tests/dummies/exampleFunction')

describe('Test `mockFunction` in `mockers`!', () => {
  it('Should return the module name when invoking the `getMockName`!', () => {
    const result = mockFunction(exampleFunction, '@tests/dummies/exampleFunction')
    expect(result.getMockName()).toBe('@tests/dummies/exampleFunction')
  })
})
