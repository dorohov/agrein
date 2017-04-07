

$(document.body).on('azbn.render.b-projects', '.b-projects', {}, function(event){
	event.preventDefault();
	
	if(screenJS.isMax(1199)) {
		
		/*
		if($(document.body).hasClass('is-mainpage')) {
			
			$('.b-projects .project-list .items .item').eq(0).trigger('click');
			
		} else {
			
			
			
		}
		*/
		
	} else {
		
		var b_projects = $(this);
		
		var btn_cont = $(document.body).find('header .header__container .item:last-child');
		
		var w1 = btn_cont.position().left;
		
		b_projects.find('.in-focus-project').css({
			width : w1 + 'px',
		});
		
		b_projects.find('.project-list').css({
			width : (b_projects.outerWidth(true) - w1) + 'px',
		});
		
		b_projects.find('.in-focus-project').trigger('azbn.render.in-focus-project');
		
		b_projects.find('.project-list').trigger('azbn.render.project-list', [4]);
		
		
		/*
		if($(document.body).hasClass('is-mainpage')) {
			
			$('.b-projects .project-list .items .item').eq(1).trigger('click');
			
		} else {
			
			
			
		}
		*/
		
	}
	
});
