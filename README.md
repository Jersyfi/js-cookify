# Cookify

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Get Started](#get-started)
* [Configuration](#configuration)

## General info
This project is a simple designed GDPR Cookie Consent Banner with the Bootstrap Library.\
The Bootstrap Javascript Librarays are not necessary for this Project.

## Technologies
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
After that you need to paste the below code into the body of your html code.

```html
<script src="cookify.js"></script>
<script>
    document.addEventListener("DOMContentLoaded", function(event) {
        cookify.init();
    });
</script>
```

## Configuration
You can customize Cookify by passing JSON data in the `cookify.init()`.
Following is described what data you can customize

1. name\
__type:__ string

2. expire\
__type:__ number (in days)

3. support\
__type:__ boolean\
__value:__ true, false

4. view\
__type:__ object\
__value:__ info, settings, button

    * info & settings\
__type:__ object\
__value:__ header, text, position, button

        * header\
__type:__ string

        * text\
__type:__ string

        * position\
__type:__ string\
__preset:__ top-full, bottom-full, bottom-left, middle

        * button\
__type:__ object\
__value:__ settings, accept, reject, save

            *  settings, accept, reject & save\
__type:__ object\
__value:__ text, background-color, position

                * text\
__type:__ string

                * background-color\
__type:__ string\
__for:__ class

                * position\
__type:__ string\
__for:__ class\
__preset:__ full

    * button\
__type:__ object\
__value:__ dimension, background-color, color, svg, text, font-size, line-height

        * dimension\
__type:__ string\
__for:__ style -> width

        * background-color\
__type:__ string\
__for:__ style -> background-color

        * color\
__type:__ string\
__for:__ style -> color

        * svg\
__type:__ string

        * text\
__type:__ string

        * font-size\
__type:__ string\
__for:__ style -> font-size

        * line-height\
__type:__ string\
__for:__ style -> line-height

5. cookies\
__type:__ object\
__value:__ necessary (default), {cookie-type}

    * necessary & {cookie-type}\
__type:__ object\
__value:__ name, desc

        * name & desc\
__type:__ string

## Example

```javascript
cookify.init({
    "view": {
        "info": {
            "header": "We use Cookies",
            "text": 'We use cookies to provide and secure our websites, as well as to analyze the usage of our websites, in order to offer you a great user experience.',
            "position": "bottom-left",
            "button": {
                "settings": {
                    "text": "Manage",
                    "background-color": "btn-secondary",
                    "position" : "full",
                },
                "accept": {
                    "text": "Accept all",
                    "background-color": "btn-primary",
                    "position" : "full",
                },
            },
        },
        "settings": {
            "header": "Cookie Einstellungen",
            "text": 'To learn more about our use of cookies see our <a href="#" target="_blank">Privacy Policy</a>.',
            "position": "bottom-left",
            "button": {
                "reject": {
                    "text": "Manage",
                    "background-color": "btn-secondary",
                    "position" : "full",
                },
                "save": {
                    "text": "Reject all",
                    "background-color": "btn-primary",
                    "position" : "full",
                },
            },
        },
    },
    "cookies": {
        "necessary": {
            "name": "Necessary",
        },
        "analytics": {
            "name": "Analytics",
        },
        "marketing": {
            "name": "Marketing",
        },
    },
});
```
