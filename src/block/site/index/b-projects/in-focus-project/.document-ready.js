
$(document.body).on('azbn.render.in-focus-project', '.b-projects .in-focus-project', {}, function(event, data){
	event.preventDefault();
	//event.stopPropogation();
	
	if(screenJS.isMax(767)) {
		
		var b_projects = $(document.body).find('.b-projects');
		
		var in_focus_project = b_projects.find('.in-focus-project');
		var in_focus_project__logo = in_focus_project.find('.logo');
		
		var btn_cont = $(document.body).find('header .header__container .site-logo');
		var btn_cont__closest = btn_cont.closest('header');
		
		var mrg = btn_cont.offset().left;
		
		
		if(data) {
			
		}
		
		
		//var h = in_focus_project__logo.position().top;
		
		in_focus_project
			.css({
				'padding-left' : mrg + 'px',
			})
			.find('.country-flag')
				.css({
					//top : h + 'px',
					right : mrg + 'px',
				})
		;
		
	} else {
		
		
		
	}
	
});


$(document.body).on('click.azbn', '.b-projects .in-focus-project .next-project a', {}, function(event){
	event.preventDefault();
	
	var btn = $(this);
	
	var list = $('.b-projects .project-list');
	var items = list.find('.item');
	var active = items.filter('.active');
	var next = active.next();
	
	if(next.length) {
		next.trigger('click');
		//console.log(next);
	} else {
		items.eq(0).trigger('click');
		//console.log(next);
	}
	
});