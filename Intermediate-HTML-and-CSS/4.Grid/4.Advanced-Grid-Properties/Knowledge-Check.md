## **How do you create several grid tracks of the same size without manually typing each one out?**

using the `repeat()` function.

---

## **What is the difference between a static and dynamic size value?**

A static size value won't depend on the size of it's container, while a dynamic size will.

---

## **How can you assign a grid track a flexible value that changes depending on the remaining space available in the grid?**

Using `fr` units.

---

## **How can you assign grid tracks an uneven distribution of the remaining space in a grid?**

By giving them different `fr` values.

---

## **Which CSS functions will return the smallest or largest value supplied to them?**

`min()` and `max()`.

---

## **Which CSS Grid-only function allows you to supply a minimum and maximum track size that is calculated in realtime?**

`minmax()`.

---

## **Which global CSS function allows you to supply a minimum, ideal, and maximum value that is calculated in realtime?**

`clamp()`.

---

## **What attribute of repeat() can be used to fill in as many grid tracks as possible, given certain constraints?**

`auto-fit` and `auto-fill`.

---

## **What is the difference between auto-fit and auto-fill?**

When there are not enough items to fill one grid row, auto-fill will keep adding new columns even if they are empty, while auto-fit won't.
