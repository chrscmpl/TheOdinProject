## **How would you declare a custom property with a name of text-color?**

```css
:root {
  --text-color: #2244dd;
}
```

---

## **How would you access a custom property with a name of background-color?**

```css
.container {
  background-color: var(--background-color);
}
```

---

## **Where would you declare a custom property to have its scope be global and accessible by all other selectors?**

in the `:root` selector.

---

## **Where would you declare a custom property so that a user’s theme setting from their OS or browser was taken into account?**

In a media query.

```css
@media (prefers-color-scheme: dark) {
  :root {
    --bgc: #222222;
  }
}
```
