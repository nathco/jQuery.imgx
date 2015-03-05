// jQuery extension for serving hi-res images
// Source: github.com/ByNathan/jQuery.imgx
// Version: 1.0

(function($) {

    $.fn.imgx = function() {
        
        var x2, x3;
        
        var dpi = function(density){
            return  '(-webkit-min-device-pixel-ratio:'+ density +')'+
                    '(-o-min-device-pixel-ratio: '+ density +'/1)'+
                    '(min--moz-device-pixel-ratio: '+ density +')'+
                    '(min-device-pixel-ratio: '+ density +')'+
                    '(min-resolution: '+ density +'dppx)';
        };
            
        x2 = function() {
            
            return 1 < window.devicePixelRatio ||
                       window.matchMedia &&
                       window.matchMedia(dpi(2)).matches ? !0 : !1;
        }();
            
        x3 = function() {
                             
            return 2 < window.devicePixelRatio ||
                       window.matchMedia &&
                       window.matchMedia(dpi(3)).matches ? !0 : !1;
        }();
            
        return this.each(function() {
        
            var src;

            if (x2) src = $(this).attr('src').replace(/\.(gif|jpg|jpeg|png)$/,'@2x.$1');
            if (x3) src = $(this).attr('src').replace(/\.(gif|jpg|jpeg|png)$/,'@3x.$1');
                          $(this).attr('src', src);
        });      
    };

})(jQuery);
