## **What are the 3 values defined in the shorthand flex property (e.g. flex: 1 1 auto)?**

- `flex-grow` specifies how much a flex item grows in relation to other flex items.
- `flex-shrink` is only applied when the flex items in a flex container are too big for that container, it specifies how much a flex item shrinks in relation to other flex items, to fit the container.
- `flex-basis` specifies the starting size of a flex item. It's default value is `auto`, so it will look for width and height declarations for the item, but using a shorthand like `flex: 1;` will set it's value to 0. Using `flex: auto` is equivalent to writing `flex: 1 1 auto`.
