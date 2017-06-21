	
$(document.body).on('azbn.ajax.get', null, {}, function(event, url){
	event.preventDefault();
	
	$.get(url, {}, function(data){
		
		//alert(url);
		
		var src_path = '#project-viewer.content-modal .modal-content';
		
		$(src_path).empty();
		
		var _content = $('<div/>',{
			html : data,
		});
		
		var content_html = _content.find(src_path).html();
		
		_content.empty().remove();
		
		$(src_path).html(content_html);
		
		window.history.pushState(null, null, url);
		
		$(document.body).trigger('azbn.content-modal.open', ['#project-viewer']);
		
	});
	
});

window.addEventListener('popstate', function(event) {
	//alert(JSON.stringify(event.state));
	//if(event.state && event.state.target) {
		$(document.body).trigger('azbn.ajax.get', [window.location.pathname]);
	//}
	
}, false);