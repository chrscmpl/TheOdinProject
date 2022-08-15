## **What is the difference between static and relative positioning?**

- **static** positioning is the default positioning of every element of the web page and it will make them part of the document flow.
- **relative** positioning is the same as static but it allows you to move the element using the properties `top`,`bottom`,`left`,`right` without having to respect the document flow, and it also allows you to set a `z-index` to the element.

---

## **What is absolute positioning useful for?**

**Absolute** positioning removes an element from the document flow, and makes the position of the element relative to the nearest relative or absolute positioned parent element or the `<html>` element. It is useful to place elements wherever we want without disturbing the elements around them, and a couple of uses can be making images with captions on top of them, or placing icons on top of other elements.

---

## **What is the difference between fixed and sticky positioning?**

- **fixed** positioned elements are positioned relative to the viewport, so they will always stay in the exact same place, and they are not part of the document flow.
- **sticky** positioned elements act as relative positioned elements until you scroll past them, after which they will stay in the view port until you scroll past their parent element.
