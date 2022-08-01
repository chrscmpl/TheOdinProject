## \*\*Select

- Universal Selector

        * {
            property: value;
        }

- Type Selector

        div {
            property: value;
        }

- Class Selectors

        .class-name {
            property: value;
        }

- ID Selectors

        #id {
            property: value;
        }

- Grouping Selector

        .class-name1,
        .class-name2 {
            property: value;
        }

- Chaining Selector

        .class-name1.class-name2 {
            property: value;
        }

- Descendant Combinator

        .class-ancestor .class-child {
            property: value;
        }

---

## **Properties**

- color and background-color

        selector {
        /* keyword example: */
        color: red;
        /* hex example: */
        background-color: #1100ff;
        /* rgb example: */
        color: rgb(100, 0, 127);
        /* rgba example: */
        background-color: rgba(100, 0, 127, 0.3);
        /* hsl example: */
        color: hsl(15, 82%, 56%);
        }

- Typography Basics and text-align

        selector {
            font-family: "Times New Roman", sans-serif;
            font-size: 22px;
            font-weight: bold;
            /* or you can use a value */
            /* font-weight: 700;      */
            text-align: center;
        }

[CSS Web Safe Fonts](https://www.w3schools.com/cssref/css_websafe_fonts.asp)

- Size

        img {
            height: auto;
            width: 500px;
        }

---

## **The Cascade**

- Specificity

  1. Inline styles
  1. ID selectors
  1. Class selectors
  1. Type selectors
  1. Universal selector

- Inheritance
- Rule Order

---

## **Adding CSS to HTML**

- External CSS

        <head>
        <link rel="stylesheet" href="styles.css">
        ...
        </head>

- Internal CSS

        <head>
        <style>
            div {
            color: white;
            background-color: black;
            }

            p {
            color: red;
            }
        </style>
        ...
        </head>

- Inline CSS

        <body>
        <div style="color: white; background-color: black;">...</div>
        </body>
