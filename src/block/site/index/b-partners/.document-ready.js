
$(document.body).on('azbn.render.logo-carousel', '.b-partners .logo-carousel', {}, function(event){
	event.preventDefault();
	
});

if($('.owl-carousel').length) {
	
	var owl = $('.owl-carousel');
	
	owl.owlCarousel({
		//center : true,
		items : 6,
		loop : true,
		nav : false,
		responsiveClass : true,
		margin:0,
		responsive : {
			0 : {
				items : 2,
			},
			768 : {
				items : 3,
			},
			992 : {
				items : 4,
			},
			1025 : {
				items : 6,
			},
		}
	});
	
	//__no-border
	
	owl.on('next.owl.carousel prev.owl.carousel resized.owl.carousel refreshed.owl.carousel initialized.owl.carousel changed.owl.carousel translated.owl.carousel azbn.owl.init', function(event) {
		
		owl.find('.owl-item.__no-border').removeClass('__no-border');
		owl.find('.owl-item.active').eq(-1).addClass('__no-border');
		
	});
	
	$(document.body).on('click.azbn', '.b-partners .logo-carousel .control a', {}, function(event){
		event.preventDefault();
		
		var btn = $(this);
		var btn_parent = btn.parent();
		
		if(btn_parent.hasClass('left')) {
			
			owl.trigger('prev.owl.carousel');
			
		} else if(btn_parent.hasClass('right')) {
			
			owl.trigger('next.owl.carousel');
			
		}
		
	});
	
	owl.trigger('azbn.owl.init');
	
}