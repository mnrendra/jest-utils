/**
 * Jest utility to mock the original `class` and make it the mocked
 * `jest.MockedClass`.
 * 
 * @param originalModule a `class` module as a `jest.Constructable`
 * @param moduleName a module name as a `string`
 * @returns mocked `class` as a `jest.MockedClass`
 * 
 * @see https://npmjs.com/package/@mnrendra/jest-utils
 */
const mockClass = <T extends jest.Constructable>(
  originalModule: T,
  moduleName: string
): jest.MockedClass<T> => {
  // jest.mock(moduleName)
  type MockedType = jest.MockedClass<typeof originalModule>
  const mockedModule = originalModule as MockedType
  const original = jest.requireActual(moduleName)
  mockedModule.mockImplementation(original.default)
  mockedModule.mockName(moduleName)

  return mockedModule
}

export default mockClass
