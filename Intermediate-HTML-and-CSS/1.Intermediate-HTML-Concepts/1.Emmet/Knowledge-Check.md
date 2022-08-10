## **Why should you use Emmet?**

It saves you time.

---

## **What are some useful Emmet abbreviations?**

Emmet allows you to create multiple HTML elements using CSS style selectors, so you can create child elements using `>`, siblings using `+`, you can also group elements with brackets `()`. You can put the text contents of an element in curly brackets `{}` you can use `*` to create multiple elements at once and you can put `$` in any text field to have it replaced by an incremented value.

```html
<!-- (.container>ul>li*5{List item $})+footer>ul>li*5>a#footer-link-${click me} -->
<!-- EXPANDS TO: -->
<div class="container">
  <ul>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
    <li>List item 4</li>
    <li>List item 5</li>
  </ul>
</div>
<footer>
  <ul>
    <li><a href="" id="footer-link-1">click me</a></li>
    <li><a href="" id="footer-link-2">click me</a></li>
    <li><a href="" id="footer-link-3">click me</a></li>
    <li><a href="" id="footer-link-4">click me</a></li>
    <li><a href="" id="footer-link-5">click me</a></li>
  </ul>
</footer>
```

---

## **What syntax would you use to create this element `<p class="text"></p>`?**

```html
p.text
```

---

## **What syntax expands to an element with a child element inside of it? For example: `<div><p></p></div>`**

```html
div>p
```

---

## **What syntax would you use to create three elements that have the same class name?**

```html
.class-name*3
```
