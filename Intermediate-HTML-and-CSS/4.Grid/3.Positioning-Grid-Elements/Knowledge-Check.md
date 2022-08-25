```css
.grid-container {
 grid-template: 40px 40px 40px 40px 40px / 40px 40px 40px 40px 40px;
 grid-template-areas:
  'a a a a a'
  'b b b b b'
  'b b b b b'
  'c c d e .'
  'c c d . .';
}

.grid-item {
 grid-row-start: 2;
 grid-row-end: 4;

 grid-column-start: 1;
 grid-column-end: 6;

 grid-row: 2 / 4;
 grid-column: 1 / 6;

 grid-area: 2 / 1 / 4 / 6;

 grid-area: b;

 /* grid-column: 1 / -1;
 grid-column: 3 / span 3;
 grid-column: span 3 / 6; 
 grid-column: 1 / span d; */
}
```

## **Explain the difference between a track and a line.**

A track is the space between two horizontal or vertical lines. Tracks represent the actual rows and columns. Lines delimit the start and end of each track.

---

## **What is the smallest unit on a grid?**

A cell, which is the area between the closest two horizontal lines and the closest two vertical lines.

---

## **What kind of value do we give to the grid-column-start or grid-column-end properties?**

The vertical line on which the element begins and the vertical line on which the element ends.

---

## **Which property can we use to combine all the start and end values for a grid item?**

```css
.grid-item {
 grid-area: row-start / column-start / row-end / column-end;
}
```

---

## **Which grid container property can map out a visual structure of grid items?**

```css
.grid-container {
 grid-template-areas:
  'header header'
  'sidebar nav'
  'sidebar article'
  'footer footer';
}
```
