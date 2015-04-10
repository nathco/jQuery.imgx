# jQuery.imgx
Lightweight jQuery extension for serving high-resolution images on desktop and mobile devices. Compatible with `@2x, @3x, and @4x` image varients, using Apple’s recommended [naming convention](https://developer.apple.com/library/mac/documentation/GraphicsAnimation/Conceptual/HighResolutionOSX/Optimizing/Optimizing.html) for high-resolution graphics.

## Installation
Include the latest version of [jQuery](http://jquery.com/download) and `jQuery.imgx.js` in the `<head>` of your HTML document:
```html
<script src="jQuery.min.js"></script>  
<script src="jQuery.imgx.js"></script>
```
## How to Use
Reference the `imgx()` method and include `@2x, @3x, or @4x` image varients in the same directory as the original source. The script will automatically load the appropriate image(s) based on the display’s detected pixel density. See the live demo: [code.nath.co/imgx](http://code.nath.co/imgx)

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
**jQuery.imgx 1.0.2**      
– Added `screen` media type   
– Added support for `@4x` images              
– Regex is now case-insensitive, thanks @azmenak       

## Feedback
If you discover any issues or have questions regarding usage, please send a message to [code@nath.co](mailto:code@nath.co) or find me on GitHub [@nathco](https://github.com/nathco).