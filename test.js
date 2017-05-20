const test = require('ava')
const search = require('.')

test('Runs a simple search', async t => {
  const result = await search('xcode')
  t.true(Number.isInteger(result))
})

test('Runs with multiple results', async t => {
  const result = await search('xcode', {number: 2})
  t.true(result.length === 2)
})

test('Runs with all results', async t => {
  const result = await search('xcode', {all: true})
  t.true(result.length > 1)
})

test('Errors when doing dumb things', async t => {
  search('xcode', {number: -1}).then(() => t.fail()).catch(() => t.pass())
})

test('More errors', async t => {
  search('xcode', {number: 2, all: true}).then(() => t.fail()).catch(() => t.pass())
})
