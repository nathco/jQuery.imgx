// Plugin: jQuery.imgx
// Source: github.com/nathco/jQuery.imgx
// Author: Nathan Rutzky
// Update: 1.0.2

(function($) {

    $.fn.imgx = function() {
        
        var dpi = function(density) {
        
            return '(screen and -webkit-min-device-pixel-ratio:'+ density +')'+
                   '(screen and -o-min-device-pixel-ratio: '+ density +'/1)'+
                   '(screen and min--moz-device-pixel-ratio: '+ density +')'+
                   '(screen and min-device-pixel-ratio: '+ density +')'+
                   '(screen and min-resolution: '+ density +'dppx)';
        };
            
        var x2 = function() {
            
            return 1 < window.devicePixelRatio ||
                       window.matchMedia &&
                       window.matchMedia(dpi(2)).matches ? !0 : !1;
        }();
            
        var x3 = function() {
                             
            return 2 < window.devicePixelRatio ||
                       window.matchMedia &&
                       window.matchMedia(dpi(3)).matches ? !0 : !1;
        }();
        
        var x4 = function() {
                             
            return 3 < window.devicePixelRatio ||
                       window.matchMedia &&
                       window.matchMedia(dpi(4)).matches ? !0 : !1;
        }();
            
        return this.each(function() {
        
            var src;

            if (x2) src = $(this).attr('src').replace(/\.(gif|jpg|jpeg|png|webp)$/i,'@2x.$1');
            if (x3) src = $(this).attr('src').replace(/\.(gif|jpg|jpeg|png|webp)$/i,'@3x.$1');
            if (x4) src = $(this).attr('src').replace(/\.(gif|jpg|jpeg|png|webp)$/i,'@4x.$1');
                          $(this).attr('src', src);
        });      
    };

})(jQuery);