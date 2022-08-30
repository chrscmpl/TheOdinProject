const Module = (function () {
	const _privateMethod = function (x) {
		return x * 2;
	};

	publicMethod = function () {
		return _privateMethod(this.getValue());
	};

	anotherPublicMethod = function () {
		this.setValue(this.getValue() - 1);
	};

	return { publicMethod, anotherPublicMethod };
})();

function factoryFunction(value) {
	const obj = Object.create(Module);
	// You must define getters/setters on the object itself to make private variables
	// accessible to the prototype's methods
	obj.getValue = () => value;
	obj.setValue = newVal => (value = newVal);
	return obj;
}

const obj = factoryFunction(10);

console.log(obj.publicMethod());

obj.anotherPublicMethod();
console.log(obj.publicMethod());

console.log(obj.value ?? 'value is a private variable');

try {
	console.log(obj.privateMethod());
} catch {
	console.log('Cannot access private method');
}
