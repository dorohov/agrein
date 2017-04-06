(function(){
	
	if($('.mcs-content').length) {
		
		var blocks = $('.mcs-content');
		
		blocks.mCustomScrollbar('destroy');
		
		blocks.each(function(index){
			
			var block = $(this);
			
			$('.mcs-content').mCustomScrollbar({
				axis : 'y',
				setHeight : (block.parent().outerHeight(true) - 90) + 'px',
				alwaysShowScrollbar : 2,
				live : true,
			});
			
		});
		
	}
	
})();