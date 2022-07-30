## **What are the eight data types in JavaScript?**

- `number` = double precision IEEE 754 numbers.
- `bigint` = numbers of any length.
- `string` = strings (char is a single character string).
- `boolean` = True or False.
- `null` = unknown value.
- `undefined` = uninitialized or not declared variable.
- `symbol` = unique identifiers (??).
- `object` = complex data types.

---

## **Which data type is NOT primitive?**

`object`.

---

## **What is the relationship between null and undefined?**

`undefined` should not be assigned to a variable manually and it should only represent uninitialized variables, if a value is not known, `null` should be assigned instead.
In boolean expressions they are always equal to each other and nothing else, unless the strict equality `===` operator is used.

---

## **What is the difference between single, double, and backtick quotes for strings?**

Single `'` and double `"` quotes are essentially the same, but should be used coherently. Backtick quotes `` ` `` are used to create template literals which include more functionalities, like including variables or expressions in them by wrapping them like this `${expression}` or inserting new lines without using escape characters.

---

## **What is the term for embedding variables/expressions in a string?**

Concatenation.

---

## **Which type of quote lets you embed variables/expressions in a string?**

Backtick quotes `` ` ``.

---

## **How do you embed variables/expressions in a string?**

By inserting them in the template literal like this

    `this is a template literal and it ends with an embedded expression or variable ${something}`;

Or with the `+` operator for normal strings

    "this is a normal string followed by an expression/variable/string literal" + something;

---

## **How do you escape characters in a string?**

By preceding them with `\`.

---

## **What is the difference between the slice/substring/substr string methods?**

- `str.slice(start, end)` takes the index of the first character to include and the index of the last character to include + 1. If the first argument is a negative number the starting index will be calculated starting from the last character.
- `str.substring(start, end)` is the same as `slice()` but if the first argument is negative then the resulting substring will start from the first character of the string.
- `str.substr(start, length)` is the same as `slice()` but the second argument is the number of characters to include in the substring rather than the index of the last character.

---

## **What are the three logical operators and what do they stand for?**

- OR `||` essentially works like a boolean OR but it actually returns the first truthy value in an expression instead of true, and if no value is truthy it returns the last value instead of false.
- AND `&&` essentially works like a boolean AND but it actually returns the first falsy value in an expression instead of false, and if no value is falsy it returns the last value instead of true.
- NOT `!` works like a boolean NOT and it converts the value to it's boolean representation so writing `!!value` is the same as `Boolean(value)`.

---

## **What are the comparison operators?**

Comparison operators evaluate boolean expressions and return boolean values, there are:

- `>`
- `<`
- `>=`
- `<=`
- `==` which is the non strict equality operator, which will attempt to convert every value to a number before comparing them.
- `!=`
- `===` which is the strict equality operator, and will always return false if the values it compares do not share the same type.
- `!==`

---

## **What are truthy and falsy values?**

Truthy values are values which will evaluate to true in a boolean expression, falsy values are values which will evaluate to false.

---

## **What are the falsy values in JavaScript?**

- `0`
- `""`
- `null`
- `undefined`
- `NaN`

Everything else is truthy.

---

## **What are conditionals?**

Conditional statements include if else, switch case and the ternary operator.

---

## **What is the syntax for an if/else conditional?**

    if(condition)
    {
      ...
    }
    else
    {
      ...
    }

---

## **What is the syntax for a switch statement?**

    switch(expression)
    {
      case expression1:
        ...
        break;
      case expression2:
        ...
        break;
      default:
        ...
    }

---

## **What is the syntax for a ternary operator?**

    condition ? expression returned if true : expression returned if false;

---

## **What is nesting?**

We can nest multiple conditionals like if statements:

    if(...)
    {
      if(...)
      {
        ...
      }
      else
      {
        ...
      }
    }
    else if(...)
    {
      ...
    }
    else
    {
      ...
    }

Or even ternary operators:

    let variable = condition1 ? ... : condition2 ? ... : ...
