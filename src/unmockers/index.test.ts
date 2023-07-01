import ExampleClass from '@tests/dummies/ExampleClass'
import exampleFn from '@tests/dummies/exampleFn'
import exampleFunction from '@tests/dummies/exampleFunction'
import exampleFunctionDeep from '@tests/dummies/exampleFunctionDeep'

import {
  mockClass,
  mockFn,
  mockFunction,
  mockFunctionDeep
} from '../mockers'

import {
  unmockClass,
  unmockFn,
  unmockFunction,
  unmockFunctionDeep
} from '.'

jest.mock('@tests/dummies/ExampleClass')
jest.mock('@tests/dummies/exampleFn')
jest.mock('@tests/dummies/exampleFunction')
jest.mock('@tests/dummies/exampleFunctionDeep')

describe('Test `index` in `unmockers`!', () => {
  describe('Test `unmockClass` in `unmockers`!', () => {
    it('Should return the module name when invoking the `getMockName`!', () => {
      const mocked =  mockClass(ExampleClass, '@tests/dummies/ExampleClass')
      unmockClass(mocked, '@tests/dummies/ExampleClass')
      expect(mocked.getMockName()).toBe('@tests/dummies/ExampleClass')
    })
  })
  
  describe('Test `unmockFn` in `unmockers`!', () => {
    it('Should return the module name when invoking the `getMockName`!', () => {
      const mocked =  mockFn(exampleFn, '@tests/dummies/exampleFn')
      unmockFn(mocked, '@tests/dummies/exampleFn')
      expect(mocked.getMockName()).toBe('@tests/dummies/exampleFn')
    })
  })
  
  describe('Test `unmockFunction` in `unmockers`!', () => {
    it('Should return the module name when invoking the `getMockName`!', () => {
      const mocked =  mockFunction(exampleFunction, '@tests/dummies/exampleFunction')
      unmockFunction(mocked, '@tests/dummies/exampleFunction')
      expect(mocked.getMockName()).toBe('@tests/dummies/exampleFunction')
    })
  })
  
  describe('Test `unmockFunctionDeep` in `unmockers`!', () => {
    it('Should return the module name when invoking the `getMockName`!', () => {
      const mocked =  mockFunctionDeep(exampleFunctionDeep, '@tests/dummies/exampleFunctionDeep')
      unmockFunctionDeep(mocked, '@tests/dummies/exampleFunctionDeep')
      expect(mocked.getMockName()).toBe('@tests/dummies/exampleFunctionDeep')
    })
  })
})
