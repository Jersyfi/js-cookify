# Cookify

## Table of contents
* [General info](#general-info)
* [Setup](#setup)
* [Get Started](#get-started)
    * [Bootstrap](#bootstrap)
    * [Cookify](#cookify)
        * [Run it](#run-it)
        * [Initialization](#initialization)
        * [How to use](#how-to-use)
* [Example](#example)
* [Change Log](#change-log)

## General info
This project is a simple designed GDPR Cookie Consent Banner with the Bootstrap Library.\
Bootstrap Javascript Librarays are not necessary for this Project.\
You have no restriction in customizing this Cookie Consent Banner.

Project is created with:
* Bootstrap 4.5
* JavaScript 1.8.5

## Setup
Cookify can be installed by using npm install.\
Otherwise you can download and import the package by yourself.

```bash
npm i cookify
```

## Get Started
### Bootstrap
To get started first you need to insert the bootstrap css into the head of your html code.\
For more Information about bootstrap visit the [Documentation](https://getbootstrap.com/docs/4.5/).

```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
```

### Cookify

#### Run it
The Cookify class is exported so you can import it by requiring it.

```javscript
const { Cookify } = require('cookify');
```

You have two options to simply start with this project.

```javscript
window.top.cookify = new Cookify({
    'run': true,
});
```

```javscript
window.top.cookify = new Cookify();
cookify.run();
```

#### Initialization
You can customize Cookify by passing JSON data in three different ways.
First you can pass the data while constructing Cookify.
Secound you can call the a merged `init({ ... })` function.
Third you can access each component with its own `init...({ ... })` functions.

```javscript
window.top.cookify = new Cookify({
    'init': { ... }
});
```

```javscript
window.top.cookify = new Cookify();
cookify.init({ ... });
```

```javscript
window.top.cookify = new Cookify();
cookify.initName(' ... ');          // string
cookify.initExpire( ... );          // number
cookify.initSupport( ... );         // boolean
cookify.initViewInfo({ ... });      // object
cookify.initViewManage({ ... });    // object
cookify.initViewButton({ ... });    // object
cookify.initCookies({ ... });       // object
```

Following is described what data you can customize:

1. name\
__type:__ string

2. expire\
__type:__ number (in days)

3. support\
__type:__ boolean\
__value:__ true, false

4. view\
__type:__ object\
__value:__ info, manage, button

    * info & manage\
__type:__ object\
__value:__ header, text, button

        * header\
__type:__ string

        * text\
__type:__ string

        * button\
__type:__ object\
__value:__ settings, accept, reject, save

            *  settings, accept, reject & save\
__type:__ string\

    * button\
__type:__ object\
__value:__ svg, text

        * svg\
__type:__ string
__preset:__ cookie, fingerprint
__default:__ cookie

        * text\
__type:__ string

5. cookies\
__type:__ object\
__value:__ necessary (default), {cookie-type}

    * necessary & {cookie-type}\
__type:__ object\
__value:__ name, desc

        * name & desc\
__type:__ string

#### How to use
In order to use Cookify to toggle scripts on and off you need to modify your script tags like below.

```html
<script text="text/plain" src="example.js" cookify="necessary"><script>
```

In case you modifyed the name of Cookify inside the `cookify.init()` you need to apply this name also to your script tags.

```javscript
window.top.cookify = new Cookify({
    'init': {
        'name': 'gdpr',
    }
});
```

```javscript
window.top.cookify = new Cookify();
cookify.init({
    'name': 'gdpr',
});
```

```javscript
window.top.cookify = new Cookify();
cookify.name = 'gdpr';
```

```html
<script text="text/plain" src="example.js" gdpr="necessary"><script>
```

## Example
Easy to use examples for customizing Cookify.

```javascript
window.top.cookify = new Cookify({
    'init': {
        'view': {
            'info': {
                'header': 'We use Cookies',
                'text': 'We use cookies to provide and secure our websites, as well as to analyze the usage of our websites, in order to offer you a great user experience.',
            },
            'manage': {
                'header': 'Manage Cookies',
                'text': 'To learn more about our use of cookies see our <a href="#" target="_blank">Privacy Policy</a>.',
            },
            'button': {
                'svg': 'cookie',
            },
        },
        'cookies': {
            'necessary': {
                'name': 'Necessary',
                'desc': 'Are necessary to run the website',
            },
            'analytics': {
                'name': 'Analytics',
                'desc': 'To analyse the website traffic',
            },
        },
    },
    'run': true,
});
```

```javascript
window.top.cookify = new Cookify();

cookify.init({
    'view': {
        'info': {
            'header': 'We use Cookies',
            'text': 'We use cookies to provide and secure our websites, as well as to analyze the usage of our websites, in order to offer you a great user experience.',
        },
        'manage': {
            'header': 'Manage Cookies',
            'text': 'To learn more about our use of cookies see our <a href="#" target="_blank">Privacy Policy</a>.',
        },
        'button': {
            'svg': 'cookie',
        },
    },
    'cookies': {
        'necessary': {
            'name': 'Necessary',
            'desc': 'Are necessary to run the website',
        },
        'analytics': {
            'name': 'Analytics',
            'desc': 'To analyse the website traffic',
        },
    },
});

cookify.run();
```

```javascript
window.top.cookify = new Cookify();

cookify.initViewInfo({
    'header': 'We use Cookies',
    'text': 'We use cookies to provide and secure our websites, as well as to analyze the usage of our websites, in order to offer you a great user experience.',
});

cookify.initViewManage({
    'header': 'Manage Cookies',
    'text': 'To learn more about our use of cookies see our <a href="#" target="_blank">Privacy Policy</a>.',
});

cookify.initViewButton({
    'svg': 'cookie',
});

cookify.cookies({
    'necessary': {
        'name': 'Necessary',
        'desc': 'Are necessary to run the website',
    },
    'analytics': {
        'name': 'Analytics',
        'desc': 'To analyse the website traffic',
    },
})

cookify.run();
```

```stylesheet
.cookify.modal {
  width: 0;
  height: 0;
  overflow: unset;
}

.cookify .modal-dialog {
  position: relative;
  width: auto;
  margin: .5rem;
  pointer-events: none;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1030;
  float: left !important;
}

.cookify .modal-content {
  background-color: #000000;
  color: #ffffff;
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  border-radius: 0 !important;
  padding: 1rem !important;
}

.cookify .modal-header, .cookify .modal-footer {
  border: 0 !important;
}

.cookify .modal-body {
  padding-top: 0 !important;
}

@media (min-width: 576px) {
  .cookify .modal-dialog {
    max-width: 500px;
    margin: 1.75rem auto;
    max-width: 300px;
    margin: 1rem !important;
  }
}
```

## Change Log

### v2.1.0

* More options to in itialize data for cookify
* Extended examples

### v2.0.0

* JSON data can be passed directly while constucting `new Cookify({ ... })`
* Added Error Handling for the initialization
* Minimized the initialization process
* Dropped support for inline javascript styles and class names
Own CSS need to be created
* Added CSS example
* Added option to choose between a cookie or a fingerprint for the cookie button

### v1.1.3

* Added javascript inline styles and class names