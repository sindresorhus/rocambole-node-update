# Deprecated

The Rocambole project is no longer maintained.

---

# rocambole-node-update [![Build Status](https://travis-ci.org/sindresorhus/rocambole-node-update.svg?branch=master)](https://travis-ci.org/sindresorhus/rocambole-node-update)

> Update a [rocambole](https://github.com/millermedeiros/rocambole) AST node


## Install

```
$ npm install rocambole-node-update
```


## Usage

```js
const rocambole = require('rocambole');
const updateNode = require('rocambole-node-update');

rocambole.moonwalk('if (true) { foo() }', node => {
	if (node.type === 'CallExpression') {
		updateNode(node, 'bar()');
	}
}).toString();
//=> 'if (true) { bar() }'
```


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
