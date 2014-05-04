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
		
        $('li').on('click', function(e) {                
            var w = $(window).width();
            if(w < 800 ) {
                menu.slideToggle();
            }
        });
		
        $('.panel').height($(window).height());
        
});




$("document").ready(function($){
	
	var nav = $('nav');
	
	$(window).scroll(function (){
	
		if ($(this).scrollTop() > 136){
			nav.addClass('fixed');
		}
		else{
			nav.removeClass('fixed');
		}
	
	});
	
});