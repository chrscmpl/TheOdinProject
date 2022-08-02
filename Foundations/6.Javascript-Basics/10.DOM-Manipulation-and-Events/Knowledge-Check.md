## **What is the DOM?**

**DOM** stands for **Document Object Model** and it is the result of the browser parsing our HTML.
It is composed by a tree of **nodes** with different relationships depending on how they are arranged in the HTML.

---

## **How do you target the nodes you want to work with?**

There are different methods of the document object to do so, but the ones with the most complete functionality are:

```javascript
const element = document.querySelector('selector');
const elements = document.querySelectorAll('selector'); //will return a nodeList, not an array
```

---

## **How do you create an element in the DOM?**

You use the `createElement()` method.

```javascript
const child = document.createElement('tag name');
```

---

## **How do you add an element to the DOM?**

You append it to an existing element.

```javascript
const parent = document.querySelector('.container');

parent.appendChild(child);

//or you can insert it before a specific sibling
parent.insertBefore(child, sibling);
```

---

## **How do you remove an element from the DOM?**

You use the `remove` method of the parent.

```javascript
parent.removeChild(child);
```

---

## **How can you alter an element in the DOM?**

- You can make the script set an attribute for the element:

  ```javascript
  element.setAttribute('style', 'color: blue;');
  element.getAttribute('style');
  element.removeAttribute('style');
  ```

- You can also change its style through the style property:

  ```javascript
  element.style.color = 'blue';
  element.style.backgroundColor = 'pink'; //all rules that have multiple words are written in camelCase
  element.style.cssText = 'color: blue; background-color: pink;';
  ```

- But the cleaner way to change the style of an element is by adding and removing a class with rules specified in the css file:

  ```javascript
  element.classList.add('class');
  element.classList.remove('class');
  element.classList.toggle('class');
  element.classList.contains('class');
  ```

---

## **When adding text to a DOM element, should you use textContent or innerHTML? Why?**

You should use `textContent`, because `innerHTML` can be subject to **javascript injection** if we allow that text to be entered directly by the user, one example would be if someone wrote the following in a search bar that then displayed the search somewhere on the page using `innerHTML`:

```html
<img src onerror="alert(document.cookie)" />
```

If using `innerHTML` the text would be interpreted as a real `<img>` element, to be inserted where the content of the search is supposed to be, and since the there is no source for the image, whatever function inside the `onerror` attribute is going to be executed.

---

## **Where should you include your JavaScript tag in your HTML file when working with DOM nodes?`**

Either at the end of the page or in the head while adding to it the `defer` attribute.

```html
<head>
	...
	<script src="./index.js" defer></script>
</head>
```

---

## **How do “events” and “listeners” work?**

**Events** are actions that occur on the webpage, they can be of many types, such as `click`, `dblclick`, `keydown`, `keyup`. Event **listeners** are attached to the elements of the DOM, and they execute a **callback function** whenever a specific kind of event occurs for the element.

---

## **What are three ways to use events in your code?**

- By giving the HTML element a specific attribute:

  ```html
  <button onclick="alert('You clicked the button')">Click Me</button>
  ```

- By assigning a callback function to a specific property of the DOM element:

  ```javascript
  const btn = document.querySelector('button');
  btn.onclick = () => alert('You clicked the button');
  ```

- By attaching an event listener to a DOM element using the apposite method:

  ```javascript
  const btn = document.querySelector('button');

  btn.addEventListener('click', () => alert('You clicked the button'));
  ```

---

## **Why are event listeners the preferred way to handle events?**

It allows us to attach multiple listeners to an element, and it is also more readable imho.

---

## **What are the benefits of using named functions in your listeners?**

It makes the code more readable and the function reusable.

---

## **How do you attach listeners to groups of nodes?**

Supposing you have a nodeList or array of nodes you iterate through it and add the listener to every element.

```javascript
// logs into the console the element of the nodeList/array that we clicked.
elements.forEach(element =>
	element.addEventListener('click', e => console.log(e.target))
);
```

---

## **What is the difference between the return values of querySelector and querySelectorAll?**

`querySelector` will return the first element corresponding to a certain selector, `querySelectorAll` will return a **nodeList** containing all the elements that correspond. A nodeList looks a lot like an array but it isn't, so it also doesn't have most array methods, but an array can be initialised from it in two ways:

```javascript
const nodes = document.querySelectorAll('div');

const array1 = Array.from(nodes);

//or using the spread operator
const array2 = [...nodes];
```

---

## **What does a “nodelist” contain?**

References to multiple nodes.

---

## **Explain the difference between “capture” and “bubbling”.**

When an event happens, listeners are normally calculated from the top to bottom, meaning that if an event triggered a listener of a parent element and a child, and also a child of that child and so on, the trigger condition of the listeners is calculated **recursively**, and once the end is reached, the callback functions are called starting from the bottom up; this is called **bubbling**.

Alternatively, we can add an option to the event listener `{capture: true}`, that will make it so that the callback functions are called before checking if the event listeners of an element's children are triggered, so they are called from top to bottom; this would be called **capture**.

We can also decide not to trigger multiple event listeners when we trigger the event listener of a child element; we can do this by adding a line to the callback function:

```javascript
function cbFunction(e){
	...
	e.stopPropagation();
	...
}
```

---

## **notes**

- The `e` object is always passed to the callback function by the event listener, whether we decide to use it or not. It represents the current event and has tons of useful properties and methods. `e` is just a name we give it to reference it in that function, we could also decide to call it something else like `event`.
- The `this` keyword, used inside a method, references the object that method was called on.
