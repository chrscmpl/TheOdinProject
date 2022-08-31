## **Describe common bugs you might run into using constructors.**

- Not a bug but I might accidentally call the constructor without using the new keyword polluting the global scope.
- Changing the prototype of the constructor breaks `instanceof`.
- Calling `instanceof` with on an object created using a constructor and another constructor sharing the same prototype as the object's constructor returns true.
- Changing the constructor's prototype breaks the constructor property for all objects created after the change.

## **Write a factory method that returns an object.**

```javascript
const createPerson = function (name) {
  return {
    name: name,
    greet: function () {
      console.log(`Hi, I am ${this.name}`);
    },
  };
};

const john = createPerson('John');
console.log(john);
john.greet();
```

    { name: 'John', greet: [Function: greet] }
    Hi, I am John

## **Explain how scope works in JavaScript (bonus points if you can point out what ES6 changed!).**

Before `let` and `const` variables in JavaScript were function scoped, meaning that if they are declared inside a function, they are only accessible in that function or in functions inside of that function. Variables declared outside of functions are global and accessible everywhere in the code.
`let` and `const` variables are instead block scoped, meaning that the same rules that applied for functions also apply for any conditional statements of loops, like `if`, `else` and `switch` statements, `while`, `do while` and `for` loops.

## **Explain what Closure is and how it impacts private functions & variables.**

Closure if the ability of functions to be able to access variables inside the scope they were created in indefinitely, even after the function they were created in returns.

This makes it so that, if a function is using a variable or calling a method inside of it's scope, not accessible from the outside, and we somehow return the function, making it available from the outside, we will not have access to the variable/method, but the function will, and that is how private variables and methods are created in JavaScript.

## **Describe how private functions & variables are useful.**

They allow us to implement encapsulation and checking for our variables using setters and getters, and they allow us to construct interfaces in which we supply the users only of what they need to use, and not what the object needs internally to function.

## **Use inheritance in objects using the factory pattern.**

```javascript
const proto = {
  greet: function () {
    console.log(`Hi, I am ${this.name} and I am ${this.getAge()} years old`);
  },
  method2: function () {},
};

//age is private and we need to define whatever getter and setter for the function
//inside of the object itself, as prototypes cannot access private variables
const personFactory = function (name, age) {
  // const obj = Object.create(proto);
  // obj.name = name;
  // obj.getAge = () => age;
  // return obj;
  return Object.assign(Object.create(proto), { name: name, getAge: () => age });
};

const kate = personFactory('Kate', 62);

kate.greet();
```

    Hi, I am Kate and I am 62 years old

## **Explain the module pattern.**

The module pattern is another way to create an object with private and public members, but instead of using a factory function capable of making multiple instances of the object, it uses an IIFE.

```javascript
const math = (function () {
  //private variable
  const _pi = 3.14;

  //private methods
  const _multiply = function (acc, ...args) {
    return args.reduce((acc, x) => acc * x, acc);
  };

  const _power = function (base, ...exponents) {
    return base ** _multiply(...exponents);
  };

  //public method
  const areaOfCircle = function (r) {
    return _power(r, 2) * _pi;
  };

  // we return an object composed of only our public methods
  return { areaOfCircle };
})();

console.log(math.areaOfCircle(10));
```

    314

## **Describe IIFE. What does it stand for?**

IIFE stands for Immediately Invoked Function Expression, which are just function expressions wrapped inside of parenthesis followed by another pair of parenthesis to immediately call them.

Their advantage is that they create a new scope allowing us to use closure.

```javascript
(function () {})();
```

## **Briefly explain namespacing and how it’s useful.**

Using modules as namespaces we can avoid name conflicts and keep the global namespace clean.

```javascript
// dummy document object to make DOM_API ""work""
const document = {
  body: {
    appendChild: () => {},
  },
  createElement: () => {},
};

const calculator = (function () {
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

  const power = function (base, ...exponents) {
    return base ** multiply(...exponents);
  };

  return { add, subtract, multiply, divide, power };
})();

const DOM_API = (function (DOMElem) {
  const add = function (node) {
    DOMElem.appendChild(node);
    console.log('the element was added to the DOM');
  };
  return { add };
})(document.body);

console.log(calculator.add(1, 6, 13)); //20
DOM_API.add(document.createElement('div'));
// calculator.add() and DOM_API.add() are two separate functions that
// don't clash with each other
```

    20
    the element was added to the DOM
