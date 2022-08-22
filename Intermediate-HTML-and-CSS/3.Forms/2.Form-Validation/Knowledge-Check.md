## **What does the required validation do?**

It makes the input invalid when empty.

---

## **What validations can you use for checking text length?**

`minlength` and `maxlength`.

---

## **How can you validate the minimum and maximum of numeric inputs?**

Using `min` and `max`.

---

## **What can you use the pattern validation for?**

To match an input with a regular expression to make sure it follows a determined pattern. It could be used in specific cases like checking for postal codes or to force the user to create a password matching certain criteria.

---

## **What pseudo CSS selectors are available for styling valid and invalid inputs?**

```css
/* Mainly */
:valid
:invalid

/* Also */
:in-range
:out-of-range
:required
:optional

/* Not directly related */
:focus
:focus-within
:focus-visible

:disabled
:enabled

:read-only
:read-write

:checked
:indeterminate
:default
```
