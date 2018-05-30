$(function () {
    
	// Tooltip functionnality
	$('[data-toggle="tooltip"]').tooltip();
	// autocomplete functionnality for selection boxes

	// prefer select2 component for autocompletion search box
	$.fn.select2.defaults.set( "theme", "bootstrap" );
	$('#id_locationFilter').select2({
	  placeholder: ${P_quoted(i18n('id_placehodler_site', 'Choisir un site'))},
	  width: '100%',
	  allowClear: true
	});

})