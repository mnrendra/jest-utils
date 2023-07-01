/**
 * Jest utility to mock the original `fn` and make it the mocked
 * `jest.MockedFn`.
 *
 * @param originalModule a `fn` module as a `jest.MockableFunction`
 * @param moduleName a module name as a `string`
 * @returns mocked `fn` as a `jest.MockedFn`
 *
 * @see https://npmjs.com/package/@mnrendra/jest-utils
 */
const mockFn = <T extends jest.MockableFunction>(
  originalModule: T,
  moduleName: string
): jest.MockedFn<T> => {
  // jest.mock(moduleName)
  type MockedType = jest.MockedFn<typeof originalModule>
  const mockedModule = originalModule as MockedType
  const original = jest.requireActual(moduleName)
  mockedModule.mockImplementation(original.default)
  mockedModule.mockName(moduleName)

  return mockedModule
}

export default mockFn
