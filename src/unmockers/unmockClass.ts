/**
 * Jest utility to unmock the mocked `jest.MockedClass` and make it the original
 * of `class`.
 * 
 * @param mockedModule a mocked `class` module as a `jest.MockedClass`
 * @param moduleName a module name as a `string`
 * 
 * @see https://npmjs.com/package/@mnrendra/jest-utils
 */
const unmockClass = <T extends jest.Constructable>(
  mockedModule: jest.MockedClass<T>,
  moduleName: string = mockedModule.getMockName()
): void => {
  const originalModule = jest.requireActual(moduleName)
  mockedModule.mockImplementation(originalModule.default)
  mockedModule.mockName(moduleName)
}

export default unmockClass
