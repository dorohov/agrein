
$(document.body).on('click.azbn', '.content-modal', {}, function(event){
	event.preventDefault();
	
	var _target = $(event.target);
	
	if( _target.hasClass('close-btn') || _target.hasClass('content-modal')) {
		
		$(document.body).removeClass('modalled');
		$('.content-modal').removeClass('active');
		
	}
	
});
