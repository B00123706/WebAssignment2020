var coverheight = $('#cover-image').height();
$(window).scroll(function(){
	if($(window).scrollTop() > coverheight)
		$('#backtotop').addClass('visible');
	else
		$('#backtotop').removeClass('visible');
})

/*check on refresh*/
	if($(window).scrollTop() > coverheight)
		$('#backtotop').addClass('visible');
	else
		$('#backtotop').removeClass('visible');