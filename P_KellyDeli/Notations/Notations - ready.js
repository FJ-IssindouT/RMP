$(function () {

	// Tooltip functionnality
	$('[data-toggle="tooltip"]').mouseenter(function(){
	    var that = $(this);
	    that.tooltip('show');
	    setTimeout(function(){
	        that.tooltip('hide');
	    }, 2500);
	});
	
	$('[data-toggle="tooltip"]').mouseleave(function(){
	    $(this).tooltip('hide');
	});
	
})