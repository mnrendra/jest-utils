/**
 * Jest utility to unmock the mocked `jest.MockedFunction` and make it the
 * original of `function`.
 * 
 * @param mockedModule a mocked `function` module as a `jest.MockedFunction`
 * @param moduleName a module name as a `string`
 * 
 * @see https://npmjs.com/package/@mnrendra/jest-utils
 */
const unmockFunction = <T extends jest.MockableFunction>(
  mockedModule: jest.MockedFunction<T>,
  moduleName: string = mockedModule.getMockName()
): void => {
  const originalModule = jest.requireActual(moduleName)
  mockedModule.mockImplementation(originalModule.default)
  mockedModule.mockName(moduleName)
}

export default unmockFunction
