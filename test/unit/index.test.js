const {
  LIST_COUNTIES,
  CURRENCY_FORMAT,
  CHARS_MAX_10,
  CHARS_MIN_10,
  CHARS_MAX_100,
  WORDS_MAX_60,
  CHARS_MAX_250,
  SELECT_VARIABLE_TO_REPLACE,
  DELETE_POSTCODE_CHARS_REGEX,
  POSTCODE_REGEX,
  WHOLE_NUMBER_REGEX,
  SBI_REGEX,
  NUMBER_REGEX,
  NAME_ONLY_REGEX,
  PHONE_REGEX,
  EMAIL_REGEX,
  PROJECT_COST_REGEX,
  CHARS_MAX_18,
  ADDRESS_REGEX
} = require('../../src/index.js')
const { formatUKCurrency, setYarValue, getYarValue } = require('../../src/index.js')
describe('index.js', () => {
  it('should run tests', () => {
    expect(true).toBe(true)
  })
  it('should have constants', () => {
    // expect(constants).toBeDefined()
    expect(LIST_COUNTIES).toBeDefined()
    expect(CURRENCY_FORMAT).toBeDefined()
    expect(CHARS_MAX_10).toBeDefined()
    expect(CHARS_MIN_10).toBeDefined()
    expect(CHARS_MAX_100).toBeDefined()
    expect(WORDS_MAX_60).toBeDefined()
    expect(CHARS_MAX_250).toBeDefined()
    expect(SELECT_VARIABLE_TO_REPLACE).toBeDefined()
    expect(DELETE_POSTCODE_CHARS_REGEX).toBeDefined()
    expect(POSTCODE_REGEX).toBeDefined()
    expect(WHOLE_NUMBER_REGEX).toBeDefined()
    expect(SBI_REGEX).toBeDefined()
    expect(NUMBER_REGEX).toBeDefined()
    expect(NAME_ONLY_REGEX).toBeDefined()
    expect(PHONE_REGEX).toBeDefined()
    expect(EMAIL_REGEX).toBeDefined()
    expect(PROJECT_COST_REGEX).toBeDefined()
    expect(CHARS_MAX_18).toBeDefined()
    expect(ADDRESS_REGEX).toBeDefined()
  })

  it('should have functions', () => {
    expect(formatUKCurrency).toBeDefined()
    expect(setYarValue).toBeDefined()
    expect(getYarValue).toBeDefined()
  })
})
