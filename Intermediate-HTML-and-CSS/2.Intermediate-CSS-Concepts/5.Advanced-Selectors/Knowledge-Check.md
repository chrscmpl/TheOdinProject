## **What is the difference between the child combinator and the descendant combinator?**

The descendant combinator selects every element with a certain ancestor, the child combinator only selects elements that are direct children of their parent.

---

## **How does the syntax of pseudo-classes and pseudo-elements differ?**

`:pseudo-class` vs `::pseudo-element`

---

## **Do pseudo-classes exist somewhere in HTML? Do pseudo-elements?**

No, they are a way to simulate the existence of a certain class/element without modifying the HTML.

---

## **Name two ways you could select every second child of an element, starting with the first.**

```css
element > child:nth-child(2n)
element > child:nth-child(even)
```

---

## **What is the difference between div:first-child and div:last-child? What will each select?**

- `:first-child` will select elements that are the first child of their parent.
- `:last-child` will select elements that are the last child of their parent.

Duh.

---

## **What selector would you use to style a button a user is currently hovering over? How about one that is currently being clicked on?**

```css
button:hover
button:active
```

---

## **How could you select all input elements with a type of text?**

```css
input[type="text"]
```

---

## **How could you select all classes that begin with thunder?**

```css
[class^="thunder"]
```
