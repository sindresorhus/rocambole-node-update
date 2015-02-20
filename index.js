'use strict';

var _tk = require('rocambole-token');

module.exports = function (node, str) {
	var newToken = {
		type: 'custom',
		value: str
	};

	if (node.startToken) {
		_tk.before(node.startToken, newToken)
	}

	if (node.endToken) {
		_tk.after(node.endToken, newToken)
	}
};
