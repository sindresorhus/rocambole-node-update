'use strict';
var assert = require('assert');
var rocambole = require('rocambole');
var updateNode = require('./');

function transformer (fn) {
	return function (str) {
		return rocambole.moonwalk(str, fn).toString();
	};
}

it('should update a AST node', function () {
	var update = transformer(function transform (node) {
		if (node.type === 'CallExpression') {
			updateNode(node, 'bar()');
		}
	});

	assert.strictEqual(update('if (true) { foo() }'), 'if (true) { bar() }');
	assert.strictEqual(update('log()'), 'bar()');
});

it('should update root AST node', function () {
	var update = transformer(function transform (node) {
		if (node.type === 'CallExpression' && node.callee.object.name === '$log') {
			updateNode(node, 'void 0');
		}
	});

	assert.strictEqual(update('a=0;$log.log()'), 'a=0;void 0');
	assert.strictEqual(update('$log.log()'), 'void 0');
});
