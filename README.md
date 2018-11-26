# Image repositioner

This is the javascript library this will help our image repositioning work easier

## Problem Statement
* Developers facing difficulty while they have a dynamic images to position for the different size of the containers
* focusing the image for different sizes of image

## Solution
* Developers can use this plugin to position their image in a container. If the image size is more than the container plugin fits in the image into container and based on their need they can position the image by giving position as a data attribute in the container
* User can have many containers to make the alignment
* If the image is smaller than the container it will automatically centers the image

## Condition
* It will work only if there only one image under one div container

## Installing
## step1
* step 1: Add the class irpcon to the div container you need
```
<div class="irpcon">
```
## step2
* step 2: Add "data-position" center or left or right to same div container
```
<div class="irpcon" data-position="center">
```
## step3
* step 3: ('div').imgrepos(); in your script file
```
 $(window).bind("load", function() {
  $('div').imgrepos();
});
```
Please refer the below link for clarification
```
(https://codepen.io/anandscode/pen/oQyyde)
```
Please find the below CDN script
```
<script src="https://cdn.jsdelivr.net/gh/anandyson/ImageRepositioner/imgrepos.js"></script>
```

## Authors

* **Anandraj Rajendran** - *Initial work* - [Anandyson](https://github.com/anandyson)

See also the list of [contributors](https://github.com/anandyson/ImageRepositioner/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
