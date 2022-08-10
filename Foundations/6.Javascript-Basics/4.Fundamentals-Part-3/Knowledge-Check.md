## **What are functions useful for?**

To reuse code without having to rewrite it and make our scripts dynamic.

---

## **How do you invoke a function?**

By writing it's name followed by parentheses in which to put arguments in necessary.

```javascript
factorial(5);
```

---

## **What are anonymous functions?**

Functions used in expressions or passed as arguments to other functions, written inline without giving them a name;

```javascript
btn.addEventListener('click', function () {
  alert('You clicked the button');
});
```

---

## **What is function scope?**

Scope defines the places in our code in which variables can be accessed. Local variables, which are declared inside a function, will only be accessible in that function.

---

## **What are return values?**

It's the value a function returns in an expression when called.

---

## **What are arrow functions?**

Arrow functions are a more concise way to write anonymous functions.

```javascript
array.forEach(element => console.log(element));
```

If there is exactly one argument the parentheses can be omitted (if there are none they must be present), and if there is only one line in the body of the function, both curly brackets and return keyword can be omitted as well.
