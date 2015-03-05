// jQuery extension for serving hi-res images
// Source: github.com/ByNathan/jQuery.imgx
// Version: 1.0

(function($) {

    $.fn.imgx = function() {
    
        return this.each(function() {
        
            var src, x2, x3;
            
            x2 = function() {
            
                var dpi = '(-webkit-min-device-pixel-ratio: 2)'+
                          '(-o-min-device-pixel-ratio: 2/1)'+
                          '(min--moz-device-pixel-ratio: 2)'+
                          '(min-device-pixel-ratio: 2)'+
                          '(min-resolution: 2dppx)';
                             
                return 1 < window.devicePixelRatio ||
                           window.matchMedia &&
                           window.matchMedia(dpi).matches ? !0 : !1;
            }();
            
            x3 = function() {

                var dpi = '(-webkit-min-device-pixel-ratio: 3)'+
                          '(-o-min-device-pixel-ratio: 3/1)'+
                          '(min--moz-device-pixel-ratio: 3)'+
                          '(min-device-pixel-ratio: 3)'+
                          '(min-resolution: 3dppx)';
                             
                return 2 < window.devicePixelRatio ||
                           window.matchMedia &&
                           window.matchMedia(dpi).matches ? !0 : !1;
            }();
            
            if (x2) src = $(this).attr('src').replace(/\.(gif|jpg|jpeg|png|webp)$/,'@2x.$1');
            if (x3) src = $(this).attr('src').replace(/\.(gif|jpg|jpeg|png|webp)$/,'@3x.$1');
                          $(this).attr('src', src);
        });      
    };

})(jQuery);
