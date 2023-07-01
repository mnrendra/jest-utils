import ExampleClass from '@tests/dummies/ExampleClass'
import exampleFn from '@tests/dummies/exampleFn'
import exampleFunction from '@tests/dummies/exampleFunction'
import exampleFunctionDeep from '@tests/dummies/exampleFunctionDeep'

import {
  mockClass,
  mockFn,
  mockFunction,
  mockFunctionDeep
} from '.'

jest.mock('@tests/dummies/ExampleClass')
jest.mock('@tests/dummies/exampleFn')
jest.mock('@tests/dummies/exampleFunction')
jest.mock('@tests/dummies/exampleFunctionDeep')

describe('Test `index` in `mockers`!', () => {
  describe('Test `mockClass` in `mockers`!', () => {
    it('Should return the module name when invoking the `getMockName`!', () => {
      const result = mockClass(ExampleClass, '@tests/dummies/ExampleClass')
      expect(result.getMockName()).toBe('@tests/dummies/ExampleClass')
    })
  })
  
  describe('Test `mockFn` in `mockers`!', () => {
    it('Should return the module name when invoking the `getMockName`!', () => {
      const result = mockFn(exampleFn, '@tests/dummies/exampleFn')
      expect(result.getMockName()).toBe('@tests/dummies/exampleFn')
    })
  })
  
  describe('Test `mockFunction` in `mockers`!', () => {
    it('Should return the module name when invoking the `getMockName`!', () => {
      const result = mockFunction(exampleFunction, '@tests/dummies/exampleFunction')
      expect(result.getMockName()).toBe('@tests/dummies/exampleFunction')
    })
  })
  
  describe('Test `mockFunctionDeep` in `mockers`!', () => {
    it('Should return the module name when invoking the `getMockName`!', () => {
      const result = mockFunctionDeep(exampleFunctionDeep, '@tests/dummies/exampleFunctionDeep')
      expect(result.getMockName()).toBe('@tests/dummies/exampleFunctionDeep')
    })
  })
})
