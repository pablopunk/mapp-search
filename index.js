const got = require('got')

const itunesUrl = 'https://itunes.apple.com/search?media=software&entity=macSoftware'

const getResults = async (name, limit) => {
  const url = `${itunesUrl}&term=${name}&limit=${limit}`
  const response = await got(url)
  const results = JSON.parse(response.body).results
  return results
}

const search = async (name, { number, all } = {number: 1, all: false}) => {
  if (number < 1) {
    throw Error(`Why would you want ${number} results`)
  } else if (number && all && number !== 1) {
    throw Error(`Seriously? you want all results or just ${number}?`)
  }
  const results = await getResults(name, all ? 50 : number)
  const ids = results.map(result => result.trackId)
  if (ids.length === 1) {
    return ids[0] // single result
  }
  return ids
}

module.exports = search
