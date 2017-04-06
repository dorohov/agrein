


$(document.body).on('submit.azbn', '#project-append form', {}, function(event){
	event.preventDefault();
	
	var form = $(this);
	var sform = form.serialize();
	
	var target = form.attr('data-target') || '/';
	
	$.post(target, sform, function(data){
		
		form.closest('.content-modal').find('.close-btn').trigger('click');
		
		$(document.body).on('azbn.content-modal.open', ['#project-appended']);
		
	});
	
});
