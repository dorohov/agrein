
$(document.body).on('azbn.ajax.get', null, {}, function(event, url){
	event.preventDefault();
	
	$.get(url, {}, function(data){
		
		$(document.body).trigger('azbn.content-modal.open', ['#project-viewer']);
		
	});
	
});

$(document.body).on('click.azbn', '.project-link', {}, function(event){
	event.preventDefault();
	
	var btn = $(this);
	var href = btn.attr('href') || '/';
	
	$(document.body).trigger('azbn.ajax.get', [href]);
	
});
