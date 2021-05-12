<p align="center"><img src="/img/socialcard.jpg" alt="Social Card of Cookify"></p>

![NPM Downloads](https://img.shields.io/npm/dt/cookify)
![NPM](https://img.shields.io/npm/v/cookify)
![Github Code Size](https://img.shields.io/github/languages/code-size/jersyfi/cookify)
![GitHub License](https://img.shields.io/github/license/jersyfi/cookify)

# Cookify

## General info
This is a simple full customizable cookie consent banner for gdpr law. This library is build on pure javascript for easy customization. You can choose your own CSS Framework, your own styles and only need to define query selectors.

### Project is created with
* JavaScript 1.8

## Documentation
(Working on)

dataName -> string (default: cookify) \
actionCallback -> function \
trackingCallback -> function \
saveWithChange -> boolean \
saveByDefault -> boolean \
cookieDefault -> string (default: necessary)

```javascript
import Cookify from Cookify()

var cookify = new Cookify
```

When you want to now if the usere viewed the content aready use:

```javascript
cookify.getDataState(cookify.viewedName)
```

How to tag input fields

```html
<input data-c-check="necessary" type="checkbox">
```

You are able to set a preset value of the field. \
When you don't set this default value it is false.

```html
<input data-c-check="necessary" data-c-check-default="true" type="checkbox">
```

How to tag script tags. \
It is possible to use normal script or a script with src.

```html
<script type="text/plain" src="example.js" data-c-script="necessary"></script>

<script type="text/plain" data-c-script="necessary">
  console.log(example)
</script>
```

How to tag action for saving the selection.
You have 3 ways to for saving. Use `accept` when you want the user to save the selected fields, `all` will select all fields and save them and `necessary` is for selecting only the necessary field.

```html
<div data-c-action="accept">
    Accept
</div>

<div data-c-action="all">
    All
</div>

<div data-c-action="necessary">
    Necessary
</div>
```


## Changelog
Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Credits
- [Jérôme Bastian Winkel](https://github.com/jersyfi)
- [All Contributors](../../contributors)

## License
The MIT License (MIT). Please see [License File](LICENSE) for more information.
