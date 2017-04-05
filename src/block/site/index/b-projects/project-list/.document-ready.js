
$(document.body).on('azbn.render.project-list', '.b-projects .project-list', {}, function(event, amount){
	event.preventDefault();
	//event.stopPropogation();
	
	var block = $(this);
	var items = block.find('.items .item');
	
	amount = amount || 4;
	
	var h = items.eq(0).outerHeight(true);
	
	block
		.attr('data-item-amount', amount)
		.attr('data-item-height', h)
		.css({
			height : (h * amount) + 'px',
		})
	;
	
});

$(document.body).on('click.azbn', '.b-projects .project-list .item', {}, function(event){
	event.preventDefault();
	
	var btn = $(this);
	
	var items = btn.closest('.items');
	var block = items.closest('.project-list');
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
	
	btn.closest('.project-list').find('.item.active').removeClass('active');
	btn.addClass('active');
	
});