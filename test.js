import test from 'ava';
import rocambole from 'rocambole';
import m from '.';

const transformer = fn => string => rocambole.moonwalk(string, fn).toString();

test('update a AST node', t => {
	const update = transformer(node => {
		if (node.type === 'CallExpression') {
			m(node, 'bar()');
		}
	});

	t.is(update('if (true) { foo() }'), 'if (true) { bar() }');
	t.is(update('log()'), 'bar()');
});

test('update root AST node', t => {
	const update = transformer(node => {
		if (node.type === 'CallExpression' && node.callee.object.name === '$log') {
			m(node, 'void 0');
		}
	});

	t.is(update('a=0;$log.log()'), 'a=0;void 0');
	t.is(update('$log.log()'), 'void 0');
});
