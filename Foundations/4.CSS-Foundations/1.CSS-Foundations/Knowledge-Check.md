## **What are the main differences between external, internal, and inline CSS?**

- External CSS is the preferred method of adding style to an HTML page and consists of adding an external CSS file in the directory of a project and link it to the HTML page by adding in the head:

          <link rel="stylesheet" href="./style.css">

- Internal CSS consists of adding css contents directly in the html file inside a `<style>` tag. This can cause the HTML file to become bigger and messier.
- inline CSS is the messiest one and consists of adding the style to a single element directly by giving it a `style` attribute.

---

## **What is the syntax for class and ID selectors?**

    .class-selector{
        property: value;
    }

    #id-selector{
        property: value;
    }

---

## **How would you apply a single rule to two different selectors?**

By grouping them:

    selector1,
    selector2{
        property: value;
    }

---

## **Given an element that has an id of title and a class of primary, how would you use both attributes for a single rule?**

By chaining them:

    #title.primary{
        property: value;
    }

---

## **What does the descendant combinator do?**

It targets only the elements that have the second selector and have an ancestor with the first selector:

    #ancestor #child{
        property: value;
    }

---

## **Between a rule that uses one class selector and a rule that uses three type selectors, which rule has the higher specificity?**

The one with the class selector.
