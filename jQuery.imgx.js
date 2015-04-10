// Plugin: jQuery.imgx
// Source: github.com/nathco/jQuery.imgx
// Author: Nathan Rutzky
// Update: 1.0.2

(function($) {

    $.fn.imgx = function(options) {
        
        // settings object that can be overridden by options object on init
        var settings = {
            seperator: "@",
            xFactors: [2,3,4]
        };
        
        if (options) {
            //if options is there try to override settings with options
            for (var attrname in settings) {
                if (options.hasOwnProperty(attrname)) {
                    settings[attrname] = options[attrname];
                }
		    }
        }
        
        var seperator = settings.seperator;
        var xFactors = settings.xFactors;
        
        var dpi = function(density) {
        
            return '(screen and -webkit-min-device-pixel-ratio:'+ density +')'+
                   '(screen and -o-min-device-pixel-ratio: '+ density +'/1)'+
                   '(screen and min--moz-device-pixel-ratio: '+ density +')'+
                   '(screen and min-device-pixel-ratio: '+ density +')'+
                   '(screen and min-resolution: '+ density +'dppx)';
        };
        
        function xTest(factor){
            
            return factor-1 < window.devicePixelRatio ||
                       window.matchMedia &&
                       window.matchMedia(dpi(factor)).matches ? !0 : !1;
        }
        
        var xTests = { /* x2, x3, x4, ... */ };
        
        // cache results of xFactor window tests in the xTests object
        for( var i = 0; i < xFactors.length-1; i++) {
            const xFactor = xFactors[i];
            xTests["x" + xFactor] = xTest(xFactor);
        }
            
        return this.each(function() {
        
            var src;
            
            // loop through all xFactors. Ex. x2, x3, x4, ...
            for( var i = 0; i < xFactors.length; i++) {
                const xFactor = xFactors[i];
                // if the cache of the xFactor test is true set src to appropriate string
                if (xTests["x" + xFactor]) {
                    src = $(this).attr('src').replace(/\.(gif|jpg|jpeg|png|webp)$/i, seperator + xFactor + 'x.$1');
                }
            }
            $(this).attr('src', src);
        });      
    };

})(jQuery);
