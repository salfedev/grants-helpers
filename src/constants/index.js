const { LIST_COUNTIES } = require('./all-counties')
const regex = require('./regex')

module.exports = {
  LIST_COUNTIES,
  ...regex
}
