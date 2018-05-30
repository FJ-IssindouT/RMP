// Initialize some fields at program launch
init();

// ===============================
//   Initialization part
// ===============================
function init() 
{
	RMPApplication.debug("begin init");
	// "location_code" is known thanks to the url
	var input = {"location_code": RMPApplication.get("location_code")};
    c_debug(debug.init, "=> init: input = ", input);
	var options = {};
	id_get_location_by_code.trigger(input, options, init_ok, init_ko); 
    RMPApplication.debug("end init");
}

function init_ok(result)
{
    RMPApplication.debug("begin init_ok : result = " + JSON.stringify(result));
    c_debug(debug.init, "=> init_ok: result = ", result);
	RMPApplication.set("location_name", result.location_name);
	RMPApplication.set("kiosk_reference", result.kiosk_reference);
	RMPApplication.debug("end init_ok");
}

function init_ko(error)
{
    RMPApplication.debug("begin init_ko: error = " + JSON.stringify(error));
    c_debug(debug.init, "=> init_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("init_ko_msg", "Problème lors de l'initialisation !"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug("end init_ko"); 
}