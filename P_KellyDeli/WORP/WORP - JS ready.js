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

	// prefer select2 component for autocompletion search box
	$.fn.select2.defaults.set( "theme", "bootstrap" );
	$('#id_locationFilter').select2({
	  placeholder: ${P_quoted(i18n('id_placehodler_site', 'Choisir un site'))},
	  width: '100%',
	  allowClear: true
	});

})