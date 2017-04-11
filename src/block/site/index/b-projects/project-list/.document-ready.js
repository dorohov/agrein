
$(document.body).on('azbn.render.project-list', '.b-projects .project-list', {}, function(event, amount){
	event.preventDefault();
	//event.stopPropogation();
	
	var block = $(this);
	
	if(screenJS.isMin(1200)) {
		
		var items = block.find('.items .item');
		
		amount = amount || 4;
		
		var h = items.eq(0).outerHeight(true);
		
		block
			.attr('data-item-amount', amount)
			.attr('data-item-height', h)
			.css({
				'height' : (h * amount) + 'px',
				'max-height' : (h * amount) + 'px',
			})
		;
		
	} else {
		
		
		
	}
	
});

$(document.body).on('click.azbn', '.b-projects .project-list .items .item', {}, function(event){
	event.preventDefault();
	
	var btn = $(this);
	var project_id = parseInt(btn.attr('data-project-id')) || 0;
	
	var items = btn.closest('.items');
	var block = items.closest('.project-list');
	
	if(screenJS.isMax(767)) {
		
		var href = btn.attr('href');
		
		$('.b-projects .in-focus-project').trigger('azbn.render.in-focus-project', [project_id]);
		
		$('.b-projects .in-focus-project .more a').trigger('click');
		
	} else if(screenJS.isMax(1199) && screenJS.isMin(768)) {
		
		var href = btn.attr('href');
		
		$('.b-projects .in-focus-project').trigger('azbn.render.in-focus-project', [project_id]);
		
		//$('.b-projects .in-focus-project .more a').trigger('click');
		
		btn.closest('.project-list').find('.item.active').removeClass('active');
		btn.addClass('active');
		
		$('html, body').animate({
			scrollTop: ($('.b-projects .in-focus-project').offset().top + 0)
		}, 400);
		
	} else {
		
		var item_arr = items.find('.item');
		
		var length = item_arr.length;
		var index = item_arr.index(btn);
		
		var amount = parseInt(block.attr('data-item-amount') || 4);
		var h = parseFloat(block.attr('data-item-height') || 0);
		
		if(index == 0 || index == 1) {
			
			items
				.css({
					transform : 'translateY(-' + 0 + 'px)',
				})
			;
			
		} else if(index == (length - 1) || index == (length - 2) || index == (length - 3)) {
			
			items
				.css({
					transform : 'translateY(-' + (items.outerHeight(true) - (amount * h)) + 'px)',
				})
			;
			
		} else {
			
			items
				.css({
					transform : 'translateY(-' + ((index - 1) * h) + 'px)',
				})
			;
			
		}
		
		
		$('.b-projects .in-focus-project').trigger('azbn.render.in-focus-project', [project_id]);
		
		
		btn.closest('.project-list').find('.item.active').removeClass('active');
		btn.addClass('active');
		
	}
	
});


(function(){
	
	var project_id = parseInt($('.b-projects').attr('data-project-id')) || 0;
	
	if(project_id > 0) {
		
		$('.b-projects .project-list .items .item[data-project-id="' + project_id + '"]').eq(0).trigger('click');
		
	} else {
		
		if(screenJS.isMax(1199)) {
			
			if(screenJS.isMax(767)) {
				
			} else {
				
				$('.b-projects .project-list .items .item').eq(0).trigger('click');
				
			}
			
		} else {
			
			$('.b-projects .project-list .items .item').eq(1).trigger('click');
			
		}
		
	}
	
})();