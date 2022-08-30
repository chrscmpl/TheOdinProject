const calculator = (function () {
	//private variable
	const _pi = 3.14;

	const add = function (...args) {
		return args.reduce((acc, x) => acc + x);
	};

	const subtract = function (...args) {
		return args.reduce((acc, x) => acc - x);
	};

	const multiply = function (acc, ...args) {
		return args.reduce((acc, x) => acc * x, acc);
	};

	const divide = function (acc, ...args) {
		return args.reduce((acc, x) => acc / x, acc);
	};

	//private method
	const _power = function (base, ...exponents) {
		return base ** multiply(...exponents);
	};

	const areaOfCircle = function (r) {
		return _power(r, 2) * _pi;
	};

	return { add, subtract, multiply, divide, areaOfCircle };
})();

//for whatever reason I made the _power() method private (by not returning it), but
//both _power() and _pi can be accessed with, and only with, public methods of the module

console.log(calculator.add(1, 6, 9));
console.log(calculator.subtract(20, 7, 10));
console.log(calculator.multiply(2, 2, 5, 0.5));
console.log(calculator.divide(5, 2, 2));
console.log(calculator.areaOfCircle(8));
