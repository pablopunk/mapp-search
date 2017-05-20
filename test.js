const test = require('ava')
const search = require('.')

test('Runs a simple search', async t => {
  const result = await search('xcode')
  t.true(Number.isInteger(result))
})

test('Runs with multiple results', async t => {
  const result = await search('xcode', 2)
  t.true(result.length === 2)
})

test('Errors when doing dumb things', async t => {
  search('xcode', -1).then(() => t.fail()).catch(() => t.pass())
})
