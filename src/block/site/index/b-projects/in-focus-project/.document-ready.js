
$(document.body).on('azbn.render.in-focus-project', '.b-projects .in-focus-project', {}, function(event, project_id){
	event.preventDefault();
	//event.stopPropogation();
	
	if(screenJS.isMin(768)) {
		
		var b_projects = $(document.body).find('.b-projects');
		
		var in_focus_project = b_projects.find('.in-focus-project');
		var in_focus_project__logo = in_focus_project.find('.logo');
		
		var btn_cont = $(document.body).find('header .header__container .site-logo');
		var btn_cont__closest = btn_cont.closest('header');
		
		var mrg = btn_cont.offset().left;
		
		
		if(project_id) {
			
			//console.log('Project id:', project_id);
			
			var project = SiteData.projects[project_id];
			//var in_focus_project = $('.b-projects .in-focus-project');
			
			in_focus_project.find('.country-flag img').attr('src', project.flag);
			in_focus_project.find('.logo img').attr('src', project.logo);
			in_focus_project.find('.type').html(project.type);
			in_focus_project.find('.title').html(project.title);
			in_focus_project.find('.desc').html(project.desc);
			
			in_focus_project.find('.more a').attr('href', project.link);
			
			in_focus_project.css({
				'background-image' : 'url(' + project.image.full + ')',
			})
			
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