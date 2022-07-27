## **Name the three ways to declare a variable**

- `let` is the standard way to declare variables.
- `const` allows us to declare constants.
- `var` is the old keyword that was always used to declare variables before `let` and `const` were introduced, it works in a very similar way to `let`.

---

## **Which of the three variable declarations should you avoid and why?**

`var`, because `let` is the new standard I guess.

---

## **What rules should you follow when naming variables?**

Variables' names should be descriptive of their contents, not too long or too short, they can contain letters (case sensitive), numbers and the simbols '$' and '\_', but they can't start with a number. The most popular way of naming variables with multiple words is camelCase.

---

## **What should you look out for when using the + operator with numbers and strings?**

- Using `+` with numbers adds them as normal.
- using `+` with strings concatenates them.
- using `+` with numbers and strings will return a concatenated string.
- using the unary `+` before a string will return the string converted to a numerical value if possible.

---

## **How does the % operator work?**

It returns the remainder of a division.

---

## **Explain the difference between == and ===.**

`===` checks whether the two objects are of the same type, `==` does not.

---

## **When would you receive a NaN result?**

When trying to do arithmetic with non numeric objects.

---

## **How do you increment and decrement a number?**

By using the increment `++` and decrement `--` operators.

---

## **Explain the difference between prefixing and post-fixing increment/decrement operators.**

Using them as postfix will return the value before the operation, and using them as prefix will return the value after the operation. The difference is only noticeable if the increment/decrement happens in a bigger expression.

---

## **What is operator precedence and how is it handled in JS?**

Some operators have higher precedence than others. The order is easily deductible and uses the same rules as school math. `++` and `--` have high precedence so they will be execute first in an expression, same for the unary `+`. Assignment operations of course have low very precedence so they will be executed last. parenthesis `()` are used to override precedence.

---

## **How do you access developer tools and the console?**

`F12` or `right-click` > Inspect to access developer tools. Then click on the console tab to open it.

---

## **How do you log information to the console?**

By using the `log()` method of the `console` object.

    console.log("Hello world!");

---

## **What does unary plus operator do to string representations of integers?**

It converts them to Number objects.
