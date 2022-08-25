```css
.container {
 display: grid;
 /* grid-template-rows: 50px 50px;
  grid-template-columns: 60px 60px; */
 grid-template: 50px 50px / 60px 60px;
 grid-auto-rows: 50px;
 grid-auto-columns: 60px;
 grid-auto-flow: column;
 /* row-gap: 10px;
 column-gap: 20px; */
 gap: 10px 20px;
}
```

## **How does an HTML element become a grid item?**

By being inside of a grid container (`display: grid`).

---

## **What is the space between lines on the grid?**

It is the grid gap/gutter/alley.

---

## **How do you set gutters (also known as alleys) in the grid?**

With the `row-gap` and `column-gap` properties or the `gap` shorthand.

---

## **Describe what happens when you have more content than defined tracks.**

The excess items are placed on extra rows/columns depending on the value of the `grid-auto-flow` property.

---

## **How could you change the size for those undefined tracks?**

With the `grid-auto-rows` and `grid-auto-columns` properties.
