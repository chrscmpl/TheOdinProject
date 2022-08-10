## **What is the difference between objects and arrays?**

For the practical side, object store [key : value] pairs where the key is usually a string (or a symbol), while arrays are indexed with numbers. Objects also supply us with various operations to check whether a property is present in an object and to iterate through all of the properties of an object and we can also access properties with the dot notation and create constructors for the objects:

```javascript
// IN OPERATOR
const someBoolean = 'key' in object; // returns true if object has a property 'key'

// FOR IN
for (key in object) console.log(`${key}: ${object[key]}`); // iterates through every property

//DOT NOTATION
return object.key ?? object.realProperty;
// supposing the object doesn't contain a property called key
// and we are trying to use the dot notation with a variable,
// object.realProperty will be returned because we cant use
// variable names with the dot notation (JS will look for a
// property called key)

//OBJECT LITERAL
const person{
  name: 'John',
  age: Math.floor(Math.random() * 100),
  greet(){
    return `Hi, I am ${this.name} and I am ${this.age} years old.`;
  }
}

//CONSTRUCTOR
function Person(name) {
  this.name = name ?? 'no name';
  this.age = Math.floor(Math.random() * 100);
  this.greet = function () {
    return `Hi, I am ${this.name} and I am ${this.age} years old.`;
  };
}
```

The other big "difference" between objects and arrays is that object is a fundamental type of JavaScript, and array is just an instance of an object for which a class, constructor, methods and properties were created.

---

## **How do you access object properties?**

Either with the dot notation or with the square brackets, that allow us to use variables just like with an array.

---

## **What is Array.prototype.map() useful for?**

It returns a new array with the same length as the starting one, with every element being the element at the same index in the starting array after passing through a function.

---

## **What is Array.prototype.reduce() useful for?**

It returns a single value obtained from calling a certain function on every element and storing the returned value on an accumulator, that is also always passed to the function as the first argument and must be specified as the second argument of reduce.
