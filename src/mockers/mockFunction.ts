/**
 * Jest utility to mock the original `function` and make it the mocked
 * `jest.MockedFunction`.
 *
 * @param originalModule a `function` module as a `jest.MockableFunction`
 * @param moduleName a module name as a `string`
 * @returns mocked `function` as a `jest.MockedFunction`
 *
 * @see https://npmjs.com/package/@mnrendra/jest-utils
 */
const mockFunction = <T extends jest.MockableFunction>(
  originalModule: T,
  moduleName: string
): jest.MockedFunction<T> => {
  // jest.mock(moduleName)
  type MockedType = jest.MockedFunction<typeof originalModule>
  const mockedModule = originalModule as MockedType
  const original = jest.requireActual(moduleName)
  mockedModule.mockImplementation(original.default)
  mockedModule.mockName(moduleName)

  return mockedModule
}

export default mockFunction
