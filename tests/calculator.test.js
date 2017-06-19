import {Calculator} from '../src/components/calculator';

let calc;
beforeAll(() => {

	calc = new Calculator();
});

test('deveria testar a multiplicação', () => {
	expect(calc.mult(3, 2)).toBe(6);
});