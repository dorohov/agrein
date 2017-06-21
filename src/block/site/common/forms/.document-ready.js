
$(document.body).on('submit.azbn', '#project-append form', {}, function(event){
	event.preventDefault();
	
	var form = $(this);
	
	var uniq = $(document.body).attr('data-uniq') || '';
	var uniq_i = $('<input/>', {
		name : 'uniq',
		value : uniq,
		type : 'hidden',
	});
	
	var sform = form.serialize();
	
	var _target = form.attr('data-target') || '/';
	
	$.post(_target, sform, function(data){
		
		form
			.find('input[name="uniq"]')
				.empty()
				.remove()
		;
		form
			.trigger('reset')
		;
		
		form.closest('.content-modal').find('.close-btn').trigger('click');
		
		setTimeout(function(){
			$(document.body).trigger('azbn.content-modal.open', ['#project-appended']);
		}, 333);
		
		
	});
	
});
