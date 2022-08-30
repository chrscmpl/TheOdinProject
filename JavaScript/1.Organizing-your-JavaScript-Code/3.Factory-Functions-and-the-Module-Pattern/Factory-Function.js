const proto = {
	method1: function () {
		console.log(this.name);
	},
	method2: function () {},
};

const createPerson = function (name, age) {
	// const obj = Object.create(proto);
	// obj.name = name;
	// obj.getAge = () => age;
	// return obj;
	return Object.assign(Object.create(proto), { name: name, getAge: () => age });
};

const man = createPerson('will', 31);

man.method1();
console.log(man.age); //age is private
console.log(man.getAge());
