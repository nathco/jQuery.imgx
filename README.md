# jQuery.imgx
Lightweight jQuery extension for serving high-resolution images on desktop and mobile devices. Compatible with `@2x` and `@3x` image varients.

## Installation
Include the latest version of [jQuery](http://jquery.com/download) and `jQuery.imgx.js` in the `<head>` of your HTML document:
```html
<script src="jQuery.min.js"></script>  
<script src="jQuery.imgx.js"></script>
```
## How to Use
Reference the `imgx()` method and include `@2x and @3x` image varients in the same directory as the original source. The script will automatically load the appropriate image(s) for displays with high pixel density. Apple’s [naming convention](https://developer.apple.com/library/mac/documentation/GraphicsAnimation/Conceptual/HighResolutionOSX/Optimizing/Optimizing.html) for HD images is required. Demo: [code.bynathan.com/imgx](http://code.bynathan.com/imgx)

**jQuery**
```javascript
$(function() {  

    // All Images
    $('img').imgx();
    
    // Class Only
    $('.retina').imgx(); 

});
```

**CSS**
```css
img {
    display: block;
    height: auto;
    max-width: 100%;
}  
```  

## Release Notes
**jQuery.imgx 1.0**   
– Initial Release   
**jQuery.imgx 1.0.1**      
– Added `WebP` image format, thanks @jarjan       
– Modified structure for performance, thanks @elislade     

## Feedback
If you discover any issues or have questions regarding usage, please send a message to [mail@bynathan.com](mailto:mail@bynathan.com) or find me on twitter [@ByNathan](http://twitter.com/ByNathan).