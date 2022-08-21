## **Explain what the form element is for and what two attributes it should always include.**

The **form** element ties all of the **input** elements inside of it together, visually and logically, because it submits all of their values together once a submit button inside of it is pressed. Forms should always include an **action** attribute, that specifies the address to which send the submitted data, and a **method** attribute, which can have the values of 'POST' when the submission is supposed to change data in the database, or 'GET' when it should only retrieve information.

---

## **Explain what form controls are at a high level.**

They are user interactable elements used to fill in the form.

---

## **What is the name attribute for?**

It determines the key that will correspond to the input control's value once the form is submitted.

---

## **What are the three most common form controls you can use for allowing users to select predefined options?**

Select dropdowns `<select>`, radio buttons `<input type='radio'>`, checkboxes `<input type='checkbox'>`.

---

## **What are the three types of buttons in HTML?**

- **submit** buttons will submit the entire form when pressed, they are the default type of button.
- **reset** buttons will reset every input field back to default.
- **button** buttons don't do anything by themselves and need to be programmed using JavaScript.

---

## **What are the two most challenging aspects of styling forms?**

Many browsers use different default styles for the different input types, and many of the input's properties require extra steps to customize, like setting the property `appearance: none`, or are just impossible to customize, like built in UIs to pick dates and colors.
