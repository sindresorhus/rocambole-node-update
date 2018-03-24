'use strict';
const rocamboleToken = require('rocambole-token');

module.exports = (node, newString) => {
	const newToken = {
		type: 'custom',
		value: newString
	};

	if (node.startToken) {
		rocamboleToken.before(node.startToken, newToken);
	}

	if (node.endToken) {
		rocamboleToken.after(node.endToken, newToken);
	}
};
