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

## Custom results

```javascript
search('xcode', {number: 2}) # [ 497799835, 1083165894 ]
search('xcode', {all: true}) # [ 497799835, 1083165894, ... ]
```