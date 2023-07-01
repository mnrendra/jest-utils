/**
 * Jest utility to mock the original `functionDeep` and make it the mocked
 * `jest.MockedFunctionDeep`.
 *
 * @param originalModule a `functionDeep` module as a `jest.MockableFunction`
 * @param moduleName a module name as a `string`
 * @returns mocked `functionDeep` as a `jest.MockedFunctionDeep`
 *
 * @see https://npmjs.com/package/@mnrendra/jest-utils
 */
const mockFunctionDeep = <T extends jest.MockableFunction>(
  originalModule: T,
  moduleName: string
): jest.MockedFunctionDeep<T> => {
  // jest.mock(moduleName)
  type MockedType = jest.MockedFunctionDeep<typeof originalModule>
  const mockedModule = originalModule as MockedType
  const original = jest.requireActual(moduleName)
  mockedModule.mockImplementation(original.default)
  mockedModule.mockName(moduleName)

  return mockedModule
}

export default mockFunctionDeep
