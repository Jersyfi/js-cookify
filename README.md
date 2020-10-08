# Cookify

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Get Started](#get-started)
* [Options](#options)

## General info
This project is a simple designed GDPR Cookie Consent Banner with the Bootstrap Library.
The Bootstrap Javascript Librarays are not necessary for this Project.

## Technologies
Project is created with:
* Bootstrap 4.5
* JavaScript 1.8.5

## Setup
To run this project, use npm to install.

`npm i cookify`

## Get Started
To get started first you need to insert the bootstrap css into the head of your html code.
For more Information about bootstrap visit the [Documentation](https://getbootstrap.com/docs/4.5/).

```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
```

After that you need to paste the below code into the body of your html code.

```html
<script src="cookify.js"></script>
<script>
    document.addEventListener("DOMContentLoaded", function(event) {
        cookify.init();
    });
</script>
```

## Options
Inside the `cookify.init();` you can customize a huge range.

```javascript
cookify.init({
    "name": "cookify",
    "expire": 30,
    "bootstrap": true,
    "button": {
        "dimension": "35px",
        "bgColor": "#007bff",
        "color": "black",
        "svg": insert svg here,
        "text": insert text here,
        "fontSize": "1rem",
        "lineHeight": "1rem",
    },
    "settings": {
        "necessary": {
            "name": "Necessary",
            "desc": "Description of necessary",
        },
        "marketing": {
            "name": "Marketing",
            "desc": "Description of analytics",
        },
        and more...
    },
});
```
