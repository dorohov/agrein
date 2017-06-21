
$(document.body).on('click.azbn', '.project-link', {}, function(event){
	event.preventDefault();
	
	var btn = $(this);
	var href = btn.attr('href') || '/';
	
	$(document.body).trigger('azbn.ajax.get', [href]);
	
});
