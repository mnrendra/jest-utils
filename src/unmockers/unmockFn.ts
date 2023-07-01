/**
 * Jest utility to unmock the mocked `jest.MockedFn` and make it the original of
 * `fn`.
 * 
 * @param mockedModule a mocked `fn` module as a `jest.MockedFn`
 * @param moduleName a module name as a `string`
 * 
 * @see https://npmjs.com/package/@mnrendra/jest-utils
 */
const unmockFn = <T extends jest.MockableFunction>(
  mockedModule: jest.MockedFn<T>,
  moduleName: string = mockedModule.getMockName()
): void => {
  const originalModule = jest.requireActual(moduleName)
  mockedModule.mockImplementation(originalModule.default)
  mockedModule.mockName(moduleName)
}

export default unmockFn
