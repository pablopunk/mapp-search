# mapp-search 🔎 🖥

<p align="center">
  Search for Mac App Store ids given an App name
</p>

## Usage 

#### With `await`
```javascript
const search = require('mapp-search')

const id = await search('xcode')
console.log(id) # 497799835
```

#### With `then`
```javascript
const search = require('mapp-search')

search('xcode')
.then(console.log) # 497799835
```