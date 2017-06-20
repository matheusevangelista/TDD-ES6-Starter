'use strict';

var _calculator = require('../components/calculator');

var calc = void 0;
beforeAll(function () {

	calc = new _calculator.Calculator();
});

test('deveria testar a multiplicação', function () {
	expect(calc.mult(3, 2)).toBe(6);
});