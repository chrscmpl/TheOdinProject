## **Selectors**

<ul>
<li>Universal Selector

    * {
        property:value;
    }

</li>
<li>Type Selector

    div {
        property:value;
    }

</li>
<li>Class Selectors

    .class-name {
        property:value;
    }

</li>
<li>ID Selectors

    #id {
        property:value;
    }

</li>
<li>Grouping Selector

    .class-name1,
    .class-name2 {
        property:value;
    }

</li>
<li>Chaining Selector

    .class-name1.class-name2 {
        property:value;
    }

</li>
<li>Descendant Combinator

    .class-ancestor .class-child {
        property:value;
    }

</li>
</ul>

---

## **Properties**

<ul>
<li>color and background-color

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

</li>
<li>Typography Basics and text-align

    selector {
        font-family: "Times New Roman", sans-serif;
        font-size: 22px;
        font-weight: bold;
        /* or you can use a value */
        /* font-weight: 700;      */
        text-align: center;
    }

</li>
<li>Size

    img {
        height: auto;
        width: 500px;
    }

</li>
</ul>

---

## **The Cascade**

<ul>
<li>
Specificity
<ol>
<li>Inline styles</li>
<li>ID selectors</li>
<li>Class selectors</li>
<li>Type selectors</li>
<li>Universal selector</li>
</ol>
</li>
<li>
Inheritance
</li>
<li>
Rule Order
</li>
</ul>

---

## **Adding CSS to HTML**

<ul>
<li>
External CSS

    <head>
    <link rel="stylesheet" href="styles.css">
    ...
    </head>

</li>
<li>
Internal CSS

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

</li>
<li>
Inline CSS

    <body>
    <div style="color: white; background-color: black;">...</div>
    </body>

</li>
</ul>
