## **How do you open developer tools?**

`f12` or right-click > inspect on an element.

---

## **How do you change screen size of a website using developer tools?**

By clicking on 'Toggle device toolbar' or `ctrl+shift+M`.

---

## **What is a breakpoint?**

A tool that allows you to pause your script at a specific time following a certain rule, to follow closely the order your instructions are executed, and to view the state of every variable in scope at each stop. Breakpoints can be set to pause the script on a specific line, after evaluating a certain condition, using event listeners, after changes are made in the DOM tree, etc.

---

## **How do you set a breakpoint?**

- line-of-code breakpoints are set by clicking on the number of the line you want to set the breakpoint to from the script in the sources tab.
- conditional-line-of-code breakpoints are set in the same way except you right click on the number of the line ad select 'add conditional breakpoint.
- DOM-breakpoints are set by right clicking on an element in the html and selecting 'break on ...'.
- XHR-Fetch breakpoints are set by expanding the 'XHR breakpoints' pane in the sources tab and clicking on the add button.
- Event listener breakpoints are set by expanding the 'Event Listener breakpoints' pane in the sources tab and checking the categories or specific events wanted.
- Exception breakpoints are set by clicking the 'pause on exceptions' button in the sources tab.
- Function breakpoints are set by replacing the call of a function with `debug(functionName)` in your script.
