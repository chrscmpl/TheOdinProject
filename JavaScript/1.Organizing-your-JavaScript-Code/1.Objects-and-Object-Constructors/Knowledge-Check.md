## **Write an object constructor and instantiate the object.**

```javascript
function Book(title) {
 this.title = title;
}

const harryPotter = new Book('Harry Potter');
```

---

## **Describe what a prototype is and how it can be used.**

A prototype is an object another object inherits it's properties from. Every object has a `[[Prototype]]` property which can be either null or point to one and only one object. Prototypes are the way inheritance is implemented in JavaScript.

---

## **Explain prototypal inheritance.**

When assigning an object as another object's prototype, it inherits all of its properties and methods, because when a property is accessed on the object, JavaScript first searches for the property inside the object itself, if it isn't found it is searched for in the object's prototype, and then in the prototype's prototype, and so on...

---

## **Understand the basic do’s and don’t’s of prototypical inheritance.**

The best way to assign a prototype to an object is to use the `Object.create()` method, because this will give the object a separate copy of the prototype, and it makes it so that multiple objects with the same prototype can not interfere with each other's prototype.

If we assigned the prototype directly to two different objects, any change made to the prototype of one object would also reflect on the other object.

---

## **Explain what Object.create does**

`Object.create()` creates a new object using an existing object as the prototype.

---

## **How does this behave in different situations?**

_Because the function invocation has the biggest impact on this, from now on do not ask yourself:
Where is this taken from?
but do ask yourself:
How is the function invoked?
For an arrow function ask yourself:
What is this inside the outer function where the arrow function is defined?
This mindset is correct when dealing with this and will save you from the headache._

This points to the current context.

- Function calls and any function or method passed as an argument to another function by default use the global object (window in browsers) as their context.
- Methods use the object the method is called from as the context.
- The `new` keyword preceding constructors in objects declarations creates a new object for the constructor to use as the context.
- Function.prototype's methods such as `Function.prototype.call()` and `Function.prototype.apply()` call the function by explicitly giving it a set context, while `Function.prototype.bind()` returns a new function whose context is always going to be the one passed as an argument, and cannot be changed.
- Arrow functions automatically bind themselves to the current context, so `() => {...}` is equivalent to `(function () {...}).bind(this)`.
