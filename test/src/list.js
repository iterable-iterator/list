import test from 'ava';

import {range} from '@iterable-iterator/range';

import {list} from '../../src/index.js';

test('range(0)', (t) => {
	t.deepEqual(list(range(0)), []);
});

test('range(5)', (t) => {
	t.deepEqual(list(range(5)), [0, 1, 2, 3, 4]);
});

test('""', (t) => {
	t.deepEqual(list(''), []);
});

test('"ABC"', (t) => {
	t.deepEqual(list('ABC'), ['A', 'B', 'C']);
});

test('[]', (t) => {
	t.deepEqual(list([]), []);
});

test('[{}, undefined, null]', (t) => {
	t.deepEqual(list([{}, undefined, null]), [{}, undefined, null]);
});
