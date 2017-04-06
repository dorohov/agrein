
$(document.body).on('azbn.render.logo-carousel', '.b-partners .logo-carousel', {}, function(event){
	event.preventDefault();
	
	/*
	var block = $(this);
	var items = block.find('.item');
	var hidden = block.closest('.b-partners').find('.hidden-container');
	
	items
		.each(function(index){
			$(this).attr('data-item-width', $(this).outerWidth(true));
		})
		.detach()
	;
	
	hidden.empty();
	block.empty();
	
	var w = block.outerWidth(true);
	
	(function(){
		
		var _w = 0;
		var cont = $('<div/>', {
			'class' : 'logo-container',
		});
		
		items
			.each(function(index){
				
				var el = $(this);
				var el_w = parseInt(el.attr('data-item-width'));
				
				//console.log(el_w);
				
				var __w = _w + el_w;
				
				if(__w > w || __w == w) {
					
					_w = 0;
					cont.appendTo(hidden);
					
					cont = $('<div/>', {
						'class' : 'logo-container',
					});
					
				}
				
				_w = _w + el_w;
				
				cont.append(el);
				
			})
		
	})();
	*/
	
	/*
	if(!type || typeof type == 'undefined') {
		
		
		
	} else if(type == 'prev') {
		
		
		
	} else if(type == 'next') {
		
		
		
	}
	*/
	
	//alert(type);
	
});

/*
$(document.body).on('click.azbn', '.b-partners .logo-carousel .control a', {}, function(event){
	event.preventDefault();
	
	var btn = $(this);
	var btn_parent = btn.parent();
	var type = null;
	
	if(btn_parent.hasClass('left')) {
		
		type = 'prev';
		
	} else if(btn_parent.hasClass('right')) {
		
		type = 'next';
		
	}
	
	$('.b-partners .logo-carousel .logo-container').trigger('azbn.render.logo-carousel.logo-container', [type]);
	
});
*/


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
				items : 1,
			},
			768 : {
				items : 2,
			},
			992 : {
				items : 3,
			},
			1025 : {
				items : 6,
			},
		}
	});
	
	//__no-border
	
	owl.on('next.owl.carousel prev.owl.carousel resized.owl.carousel refreshed.owl.carousel initialized.owl.carousel azbn.owl.init', function(event) {
		
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