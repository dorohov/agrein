


$(document.body).on('click.azbn', '.content-modal', {}, function(event){
	event.preventDefault();
	
	var _target = $(event.target);
	
	if( _target.hasClass('close-btn') || _target.hasClass('content-modal')) {
		
		$(document.body).removeClass('modalled');
		$('.content-modal').removeClass('active');
		
	}
	
});


$(document.body).on('azbn.content-modal.open', null, {}, function(event, uid){
	event.preventDefault();
	
	$(uid + '.content-modal').addClass('active');
	$(document.body).addClass('modalled');
	
});


$(document.body).on('click.azbn', '.modal-link', {}, function(event){
	event.preventDefault();
	
	var btn = $(this);
	var href = btn.attr('href') || '#';
	
	$(document.body).trigger('azbn.content-modal.open', [href]);
	
});
