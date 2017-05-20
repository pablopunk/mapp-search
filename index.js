const store = require('app-store-scraper')

const search = async (name, howMany = 1) => {
  if (howMany < 1) {
    throw Error(`Why would you want ${howMany} results`)
  }
  const results = await store.search({ term: name, device: store.device.MAC })
  const ids = results.slice(0, howMany).map(result => result.id)
  if (howMany === 1) {
    return ids[0] // single result
  }
  return ids
}

module.exports = search
