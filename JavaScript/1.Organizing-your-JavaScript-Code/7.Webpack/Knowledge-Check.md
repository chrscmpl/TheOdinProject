## **How do you load CSS using webpack?**

By installing the corresponding loaders (css-loader, style-loader), and adding a new rule to `module.exports.module.rules` inside of `webpack.config.js`. A rule is composed by a `test` property whose value is a regular expression to match files based on their extension, and a `use` property that specifies the loaders to use (in reversed order).

## **How do you load images using webpack?**

By using webpack's built in asset modules, and adding a new rule to `module.exports.module.rules` that doesn't have a `use` property but a `type` property whose value is `'asset/resource'`.

## **How do you load fonts using webpack?**

in the exact same way as we did images but the extensions in the regular expression in the `test` property are of course going to be different.

## **How do you load data using webpack?**

You can import data from JSON files setting up anything, while you will need to install the corresponding loaders for other formats, and add corresponding rules. You can also include custom parsers for some file extensions that don't have a loader, in which case you will need to add a `require` statement to your `webpack.config.js`, and a `parser` property to your rules.

## **How would you track errors in bundled source code?**

By using a **source map**. There are different options, and the most basic one is `inline-source-map`, and to include it you simply need to add a `devtool` property to `module.exports` whose value is `inline-source-map`, and set the `mode` property to `development`. Doing this will make errors in the browser's console point to the exact files that produced them.
