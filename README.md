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

1. name
__type:__ string

---

2. expire
__type:__ number (in days)

---

3. support
__type:__ boolean
__value:__ true, false

---

4. view
__type:__ object
__value:__ info, settings, button

4. 1. info & settings
__type:__ object
__value:__ header, text, position, button

4. 1.1 header
__type:__ string

4. 1.2 text
__type:__ string

4. 1.3 position
__type:__ string
__preset:__ top-full, bottom-full, bottom-left, middle

4. 1.4 button
__type:__ object
__value:__ settings, accept, reject, save

4. 1.4.1 settings, accept, reject & save
__type:__ object
__value:__ text, background-color, position

4. 1.4.1.1 text
__type:__ string

4. 1.4.1.1 background-color
__type:__ string
__for:__ class

4. 1.4.1.1 position
__type:__ string
__for:__ class
__preset:__ full

4. 2. button
__type:__ object
__value:__ dimension, background-color, color, svg, text, font-size, line-height

4. 2.1 dimension
__type:__ string
__for:__ style -> width

4. 2.1 background-color
__type:__ string
__for:__ style -> background-color

4. 2.1 color
__type:__ string
__for:__ style -> color

4. 2.1 svg
__type:__ string

4. 2.1 text
__type:__ string

4. 2.1 font-size
__type:__ string
__for:__ style -> font-size

4. 2.1 line-height
__type:__ string
__for:__ style -> line-height

---

5. cookies
__type:__ object
__value:__ necessary (default), {cookie-type}

5. 1 necessary & {cookie-type}
__type:__ object
__value:__ name, desc

5. 1.1 name & desc
__type:__ string