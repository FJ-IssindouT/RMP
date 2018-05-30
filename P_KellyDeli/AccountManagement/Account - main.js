RMPApplication.debug ("Application started");

// ========================
// Variables declaration
// ========================

// if "true", logs will be showed on the browser console
var debug = {
    "item": false
};

// following collections could be used
var col_locations = "col_locations_kellydeli";
var col_languages = "col_langues_kellydeli";

var success_title_notify = ${P_quoted(i18n("success_title_notify", "Succès"))};
var error_title_notify = ${P_quoted(i18n("error_title_notify", "Erreur"))};
var error_thanks_notify = ${P_quoted(i18n("error_thanks_notify", "Merci de signaler cette erreur!"))};

function count_locations() 
{
	RMPApplication.debug ("begin count_locations");
	var my_pipelines = [{$group: {_id: null,count: {$sum: 1}}}];
	c_debug(debug.item, "=> count_locations: my_pipelines = ", my_pipelines);
	var my_options = {};

	eval(col_locations).aggregateCallback(my_pipelines, my_options, count_locations_ok, count_locations_ko);
	RMPApplication.debug ("end count_locations");
}

function count_locations_ok (result) 
{
	RMPApplication.debug("begin count_locations_ok");
	c_debug(debug.item, "=> count_locations_ok: result = ", result);
	var success_msg = ${P_quoted(i18n("count_locations_ok", "kiosks recensés dans la collection!"))};
    notify_success(success_title_notify, result + ' ' + success_msg);
	// TO DO
	// MAJ id_location_nb
	RMPApplication.debug("end count_locations_ko");
}
function count_locations_ko (error) 
{
	RMPApplication.debug("begin count_locations_ko");
	c_debug(debug.item, "=> count_locations_ko: error = ", error);
	var error_msg = ${P_quoted(i18n("add_ko_msg", "Impossible de dénombrer le nombre de kioks!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug("end count_locations_ko");
}

function count_language() 
{
	RMPApplication.debug ("begin count_language");
	var my_pipelines = [{$group: {_id: null,count: {$sum: 1}}}];
	c_debug(debug.item, "=> count_language: my_pipelines = ", my_pipelines);
	var my_options = {};
	eval(col_languages).aggregateCallback(my_pipelines, my_options, count_language_ok, count_language_ko);
	RMPApplication.debug ("end count_language");
}

function count_language_ok (result) 
{
	RMPApplication.debug("begin count_language_ok");
	c_debug(debug.item, "=> count_language_ok: result = ", result);
	var success_msg = ${P_quoted(i18n("count_language_ok", "langues recensées dans la collection!"))};
    notify_success(success_title_notify, result + ' ' + success_msg);
	// TO DO
	// MAJ id_language_nb
	RMPApplication.debug("end count_language_ok");
}

function count_language_ko (error) 
{
	RMPApplication.debug("begin count_language_ko");
	c_debug(debug.item, "=> count_language_ok: error = ", error);
    var error_msg = ${P_quoted(i18n("add_ko_msg", "Impossible de dénombrer le nombre de langues!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug("end count_language_ko");
}