jQuery.extend(
    {

        // Add our new method called as $.anchorTo(param1, param2[optional], param3[optional])
        anchorTo : function(toId, rate, callback){

            // setup id to navigate
            var $anchor = $('#' + toId);
            
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