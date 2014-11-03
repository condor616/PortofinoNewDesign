
$(function() {
        var pull = $('a#mobile-nav');
        menu = $('nav ul');
		
        $(pull).on('click', function(e) {
            e.preventDefault();
            menu.slideToggle();
        });
        
        $(window).resize(function(){
            var w = $(this).width();
            if(w > 800 && menu.is(':hidden')) {
                menu.removeAttr('style');
            }
        });
		
        $('nav ul li').on('click', function(e) {                
            var w = $(window).width();
            if(w < 800 ) {
                menu.slideToggle();
            }
        });
		
        $(window).height($('nav ul').height());
        
});




$("document").ready(function($){
	
	var nav = $('nav');
	
	if ($(window).width() < 481){
			nav.addClass('fixed');
	}
	
	
	$(window).resize(function(){
	
		if ($(window).width() < 481){
			nav.addClass('fixed');
		}
		else{
			nav.removeClass('fixed');
		}
	});
	

	
});
