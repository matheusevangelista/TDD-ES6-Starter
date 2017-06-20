"use strict";

var _sum = require("../components/sum");

test('adds 1 + 2 to equal 3', function () {
	expect((0, _sum.sum)(1, 2)).toBe(3);
});