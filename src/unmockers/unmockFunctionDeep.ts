/**
 * Jest utility to unmock the mocked `jest.MockedFunctionDeep` and make it the
 * original of `functionDeep`.
 * 
 * @param mockedModule a mocked `functionDeep` module as a `jest.MockedFunctionDeep`
 * @param moduleName a module name as a `string`
 * 
 * @see https://npmjs.com/package/@mnrendra/jest-utils
 */
const unmockFunctionDeep = <T extends jest.MockableFunction>(
  mockedModule: jest.MockedFunctionDeep<T>,
  moduleName: string = mockedModule.getMockName()
): void => {
  const originalModule = jest.requireActual(moduleName)
  mockedModule.mockImplementation(originalModule.default)
  mockedModule.mockName(moduleName)
}

export default unmockFunctionDeep
