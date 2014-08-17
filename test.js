'use strict';
var assert = require('assert');
var rocambole = require('rocambole');
var updateNode = require('./');

it('should update a AST node', function () {
	var str = rocambole.moonwalk('if (true) { foo() }', function (node) {
		if (node.type === 'CallExpression') {
			updateNode(node, 'bar()');
		}
	}).toString();

	assert.strictEqual(str, 'if (true) { bar() }');
});
