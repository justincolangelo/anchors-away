// Add our new method called as $('#someId').anchorTo(param2[optional], param3[optional])
jQuery.fn.anchorTo = function(rate, callback){
     
    // valid element?
    var $anchor = $(this.selector).length > 0 ? this : $('html, body');
    
    // Valid speed? Default to 1 second
    var speed = typeof rate === 'number' && rate % 1 == 0 ? rate : 1000;
    
    // Valid callback function supplied?
    var cb = typeof callback == 'function' ? callback : function(){};
    
    // Stop any previous scrolling, animate to anchor
    $('html, body').stop()
        .animate(
            { 
                'scrollTop': $anchor.offset().top 
            }, 
            speed, 
            'swing', // TODO: write options as parameter
            cb
        );
        
};


// Second way to do this 
jQuery.extend(
    {

        // Add our new method called as $.anchorTo(param1, param2[optional], param3[optional])
        anchorTo : function(toId, rate, callback){
            console.log($(toId).length);
            // setup id to navigate
            var $anchor = toId.length && toId.indexOf('#') == 0 ? $(toId) : $('#' + toId).length > 0 ? $('#' + toId) : $('html, body');
                
            // Valid speed? Default to 1 second
            var speed = typeof rate === 'number' && rate % 1 == 0 ? rate : 1000;
            
            // Valid callback function supplied?
            var cb = typeof callback == 'function' ? callback : function(){};
            
            // Is this a valid DOM element
            if($anchor.length){
                // Stop any previous scrolling, animate to anchor
                $('html, body').stop()
                    .animate(
                        { 
                            'scrollTop': $anchor.offset().top 
                        }, 
                        speed, 
                        'swing', // TODO: write options as parameter
                        cb
                    );
            }
        
        }
        
    }
);