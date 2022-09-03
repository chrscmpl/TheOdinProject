## **Explain what npm is and where it was commonly used before being adopted on the frontend.**

npm is the most popular package manager originally intended for node.js, a JavaScript runtime designed to run on the server.

## **Describe what npm init does and what package.json is.**

npm init creates a package.json file in our project directory. A package.json file specifies the dependencies of our project and their required versions, making our build easily reproducible.

## **Know how to install packages using npm.**

To install a package using npm you simply need to run the `npm install <package name>` command, followed by the `--save` option for build dependencies or `--save-dev` for development dependencies.

## **Describe what a JavaScript module bundler like webpack is.**

It is a tool that can take different input files and build them into a browser compatible output file. This allows us to do things that we otherwise could not do like use features of future versions of JavaScript to then compile the code into a version supported by all browsers, or take the contents of multiple files and cram them into an optimized (and not easily readable) file for performance reasons.

## **Explain what the concepts “entry” and “output” mean as relates to webpack.**

The entry file is the main source file that links (directly or indirectly), every other file together, while the output file is the final result of the compilation.

## **Briefly explain what a development dependency is.**

Development dependencies are packages that are needed during development (linters, formatters, transpilers) but not for the actual compiled application to run.

## **Explain what “transpiling code” means and how it relates to frontend development.**

Transpilers are other languages that extend languages such as JavaScript and CSS to allow more features during development but are then compiled back to those languages. Examples are TypeScript for JavaScript, SASS for CSS.

## **Briefly describe what a task runner is and how it’s used in frontend development.**

Task runners are tools that can automate different parts of the building process using scripts. the most popular option today is to use the npm package itself for such tasks.

## **Describe how to write an npm automation script.**

In package.json, inside the `"scripts"` property, add a new property whose name is the one we will use to call the script, and the value are the actual commands to run.

```javascript
{
  "scripts": {
    "build": "webpack"
  }
}
```

## **Explain one of the main benefits of writing code in modules.**

It allows your code to be much better organized and clean, by separating it in different files and allowing you to easily use namespaces.

## **Explain “named exports” and “default exports”.**

Named exports are single functions / classes / objects / variables being exported by a module with a their name, to import a specific named export, you must use the name was exported with (though you can rename is using the `as` keyword) between curly brackets it.

Default exports are the fallback value when importing from a file, you can use any name in the import declaration and if it will be assigned to the default export of the module.

```javascript
//Person.js
class Person{
  constructor(name){
    this.name = name;
  }
}

function renamePerson(person, name){
  person.name = name;
}

export default Person;
export { renamePerson };
```

```javascript
//index.js
import human, { renamePerson as rename } from 'Person.js'

const person = new Person('john');
rename(person, 'mark');
```
