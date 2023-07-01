import main from '.'

describe('Test `main`!', () => {
  it('Should return \'Hello World!\' when given an empty argument!', () => {
    const result = main()
    expect(result).toBe('Hello World!')
  })
})
