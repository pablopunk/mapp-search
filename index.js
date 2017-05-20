const store = require('app-store-scraper')

const search = async (name, { number, all } = {number: 1, all: false}) => {
  if (number < 1) {
    throw Error(`Why would you want ${number} results`)
  } else if (number && all && number !== 1) {
    throw Error(`Seriously? you want all results or just ${number}?`)
  }
  const results = await store.search({ term: name, device: store.device.MAC })
  if (all) {
    number = results.length
  }
  const ids = results.slice(0, number).map(result => result.id)
  if (ids.length === 1) {
    return ids[0] // single result
  }
  return ids
}

module.exports = search
