# Cookify

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Contributing](#contributing)

## General info
This project is a simple designed GDPR Cookie Consent Banner with the Bootstrap Library.
The Bootstrap Javascript Librarays are not necessary for this Project.

## Technologies
Project is created with:
* Bootstrap 4
* JavaScript 1.8.5

## Setup
To run this project, download it.

## Contributing
To get started you need to insert the below code into your html code.

```html
<script src="cookify.js"></script>
<script>
    document.addEventListener("DOMContentLoaded", function(event) {
        cookify.init();
    });
</script>
```

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
