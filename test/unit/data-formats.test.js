const { formatUKCurrency } = require('../../src/functions')
describe('Data formats', () => {
  test('check formatUKCurrency() - string', () => {
    expect(formatUKCurrency('string')).toEqual('NaN')
  })

  test('check formatUKCurrency() - 1 digit number', () => {
    expect(formatUKCurrency(4)).toEqual('4')
  })

  test('check formatUKCurrency() - 5 digit number', () => {
    expect(formatUKCurrency(40000.0)).toEqual('40,000')
  })
})
