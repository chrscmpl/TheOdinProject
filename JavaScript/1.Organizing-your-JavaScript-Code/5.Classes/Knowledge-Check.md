## **Describe the pros and cons of using classes in JavaScript.**

Pros: 
- It resembles the syntax of other object oriented languages.

Cons:
- It resembles the syntax of other object oriented languages.

Also they allow private fields that prototype's methods can access I think.

## **How does JavaScript’s object creation differ from a language like Java or Ruby?**

While other object oriented languages need blueprints (classes) to create objects, enforcing inheritance on you, JavaScript is a crazy language where objects just exist, they can be wired up to other objects (prototypes) to access their properties, but they can also be given other properties on the go allowing for concepts such as **composition**.

## **Explain the differences between object constructors and classes.**

While the initialization computations in object constructors happen in the function's body, in classes they are put in the special **constructor** method, which in ES5 terms translates to the function itself.


```javascript
class Person{
  constructor(name){
    this.name = name;
  }
}

console.log(Person === Person.prototype.constructor);
```

    true


The methods declared inside the class block are automatically put in the class' prototype, and not on the instances. And you can declare private properties by declaring them in the class body prefixed by #, they also pair up very well with **getters** and **setters**, allowing **encapsulation**.

## **What are “getters” & “setters”?**

Getters and setters are basically fake computed properties. They are descriptors for accessor properties, which are properties that look like normal properties externally, but actually call their getters and setters when read/set.


```javascript
let user = {
  name: "John",
  surname: "Smith"
};

Object.defineProperty(user, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(" ");
  }
});

console.log(`result of getter: ${user.fullName}`); // John Smith

for(let key in user) console.log(`Enumerable property of object: ${key}`); // name, surname

const descriptor =  Object.getOwnPropertyDescriptor(user, 'fullName');
console.log(`get descriptor: ${descriptor.get}`);
console.log(`set descriptor: ${descriptor.set}`);
console.log(`enumerable descriptor: ${descriptor.enumerable}`);
console.log(`configurable descriptor: ${descriptor.configurable}`);
```

    result of getter: John Smith
    Enumerable property of object: name
    Enumerable property of object: surname
    get descriptor: get() {
        return `${this.name} ${this.surname}`;
      }
    set descriptor: set(value) {
        [this.name, this.surname] = value.split(" ");
      }
    enumerable descriptor: false
    configurable descriptor: false


They can only be defined in object literals and classes, this is how you would declare them in a class using private fields:


```javascript
class Temperature{
  units = {
  kelvin: 'kelvin',
  celsius: 'celsius',
  fahrenheit: 'fahrenheit'
  };

  #temperature;

  constructor(unit,temperature){
    for(const key in this.units)
      if(this.units[key] === unit.toLowerCase())
        this[key] = temperature;
  }
  get kelvin(){
    return this.#temperature;
  }
  set kelvin(kelvin){
    this.#temperature = kelvin;
  }
  get celsius(){
    return this.#temperature - 273.15;
  }
  set celsius(celsius){
    this.#temperature = celsius + 273.15;
  }
  get fahrenheit(){
    return (this.#temperature - 273.15) * 1.8 + 32; 
  }
  set fahrenheit(fahrenheit){
    this.#temperature = (fahrenheit - 32) / 1.8 + 273.15;
  }
}

const temperature = new Temperature('celsius', 0);

console.log(`Celsius: ${temperature.celsius}`);
console.log(`Kelvin: ${temperature.kelvin}`);
console.log(`Fahrenheit: ${temperature.fahrenheit}`);

temperature.kelvin = 0;
console.log('after temperature.kelvin = 0;')

console.log(`Celsius: ${temperature.celsius}`);
console.log(`Kelvin: ${temperature.kelvin}`);
console.log(`Fahrenheit: ${temperature.fahrenheit}`);
```

    Celsius: 0
    Kelvin: 273.15
    Fahrenheit: 32
    after temperature.kelvin = 0;
    Celsius: -273.15
    Kelvin: 0
    Fahrenheit: -459.66999999999996


## **Describe computed names and class fields.**

You can give computed names to properties (Though I did't really understand when would I want to do that).


```javascript
const arrayContents = 'fruits';

class myArray{
  constructor(...args){
    this.arr = [...args];
  }
  get [arrayContents](){
    return this.arr;
  }
}
const arr = new myArray('banana', 'apple', 'orange');

console.log(arr.fruits);
```

    [ 'banana', 'apple', 'orange' ]


Class fields allow you to declare properties directly inside the class body, it can be useful to clearly show the structure of the class before declaring any methods and it is required for private fields.


```javascript
class genericClass{
  field1;
  field2 = 5 + 6; //fields can be initialized with expressions
  #privatefield; //is private
  constructor(){
    //...
  }
}
```

## **Describe function binding.**

Classes provide a syntax to easily bind methods to the instance of the object, even when passed around as arguments to other functions.


```javascript
class Button {
  constructor(value) {
    this.value = value;
  }
  click = () => { // click() is bound to the current object
    console.log(this.value);
  }
}

function call(funct){
  funct();
}

const button = new Button(6);
call(button.click);
```

    6


## **How is inheritance used with classes?**

Inheritance is implemented with the `extends` keyword. Inside the class, the `super` keyword can be used to access the parent's methods and properties. We need to call the super's constructor in the constructor of the subclass before we can access them.


```javascript
class Robot{
  constructor(battery){
    this.battery = battery;
  }
}

class cleaningRobot extends Robot{
  constructor(battery){
    super(battery);
  }
  clean(){
    if(this.battery) console.log(`R2D2 is cleaning and has ${this.battery}% left`);
  }
}

const R2D2 = new cleaningRobot(99);
R2D2.clean();
```

    R2D2 is cleaning and has 99% left


## **Why is favoring Composition over Inheritance suggested?**

Inheritance can bring to complex trees of relationships between classes, that can be hard to escape.
Composition is creating objects based on **what they can do** instead of what they are,allowing for a much more flexible structure. To implement it we use **mix-ins**.


```javascript
class Animal{
  eat(){
    console.log('The animal ate');
  }
}

function swimmingMixin(Base){
  return class extends Base {
    swim(){
      console.log('The animal swam');
    }
  }
}

function flyingMixin(Base){
  return class extends Base {
    fly(){
      console.log('The animal flew');
    }
  }
}

class Duck extends flyingMixin(swimmingMixin(Animal)){
  boast(){
    console.log('I can do what I want');
  }
}

const duck = new Duck();
duck.eat();
duck.swim();
duck.fly();
duck.boast();
console.log(Duck.prototype);
```

    The animal ate
    The animal swam
    The animal flew
    I can do what I want
    Animal {}

