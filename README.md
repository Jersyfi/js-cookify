<p align="center"><img src="/img/socialcard.jpg" alt="Social Card of Cookify"></p>

![NPM Downloads](https://img.shields.io/npm/dt/cookify)
![NPM](https://img.shields.io/npm/v/cookify)
![Github Code Size](https://img.shields.io/github/languages/code-size/jersyfi/cookify)
![GitHub License](https://img.shields.io/github/license/jersyfi/cookify)

# Cookify

## General info
This is a simple full customizable cookie consent banner for gdpr law. This library is build on pure javascript for easy customization. You can choose your own CSS Framework, your own styles and only need to define query selectors.

## Documentation
To start with that project you can simple install Cookify with npm.

```bash
npm install cookify
```

After that you need to import the npm module correctly. How you need to import the npm correctly to your project depends on you. I will give an simple example for importing a npm module and how to initialize it in ordner to use the functions correctly.

```javascript
import Cookify from Cookify

var cookify = new Cookify
```

For customization you can inicialize Cookify with the following variables or functions described below. Every variable and function has a default value that you don't need to set it. But you need to watch on the described sheme in order to inicialize correctly.

```javascript
var cookify = new Cookify(
    dataName,
    actionCallback,
    trackingCallback,
    saveWithChange,
    saveByDefault,
    cookieDefault
)
```

dataName -> string (default: cookify) \
actionCallback -> function (default: () => {})\
trackingCallback -> function (default: () => {})\
saveWithChange -> boolean (default: false)\
saveByDefault -> boolean (default: false)\
cookieDefault -> string (default: necessary)

To explain the initialization better i will give a simple example with all variables and functions and how to use them. `dataName` is for the name that will show in the data storage for Cookify. The `actionCallback` is called after the user clicked on the following `data-c-action` fields. With that function you can close the cookie consent field as an example. Then you have the function `trackingCallback` for tracking user activity. This function needs a data variable where the data[0] stores all types and the viewed state and data[1] stores the actual date. `saveWithChange` can be set if you want to change the user selection when clicking on the input fields. The `saveByDefault` variable is for saving the selection when loading the first time. At least we have the `cookieDefault` variable where you can set the default cookie type name.

```javascript
var cookify = new Cookify('cookie_consent', function () {
    document.getElementById('element').style.display = none
  }, function (data) {
    console.log(data)
  }, false, false, 'necessary')
```

### Query Names

The query names are necessary for using Cookify. There are different checkboxes for controlling the cookie activity and you can handle the cookies with a few different actions. Below are all usable query names and how to use them properly.

You can only use the `data-c-check` on input fields. As an example for type checkbox.

**data-c-check="{string}"**

```html
<input data-c-check="necessary" type="checkbox">
```

You are able to set a preset value of the field. When you don't set this default value it is false.
  
**data-c-check-default="{boolean}"** (default: false)

```html
<input data-c-check="necessary" data-c-check-default="true" type="checkbox">
```

You have 3 ways to for saving. Use `accept` when you want the user to save the selected fields, `all` will select all fields and save them and `necessary` is for selecting only the necessary field.
  
**data-c-action="{string}"**
  - necessary (Save only the required cookies)
```html
<div data-c-action="necessary">Necessary</div>
```
  - all (Save the selected cookies)
```html
<div data-c-action="all">All</div>
```
  - accept (Save all cookies)
```html
<div data-c-action="necessary">Necessary</div>
```

That you are able to handle the scripts for the user selected types you need to set `data-c-script` where it is necessary. It is only possible to use the types that are used in the query names `data-c-check`. This will either work for scripts with import src or with inline scripts.

**data-c-script="{string}"**

```html
<script type="text/plain" src="example.js" data-c-script="necessary"></script>

<script type="text/plain" data-c-script="necessary">
  console.log(example)
</script>
```

### Helpers

When you want to know the exact state of a type or if the user viewed and agreed the consent already then use the `getDataState()` function. The output is a boolean value (true or false).

```javascript
cookify.getDataState('type')

cookify.getDataState(cookify.viewedName)
```

## Changelog
Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Credits
- [Jérôme Bastian Winkel](https://github.com/jersyfi)
- [All Contributors](../../contributors)

## License
The MIT License (MIT). Please see [License File](LICENSE) for more information.
