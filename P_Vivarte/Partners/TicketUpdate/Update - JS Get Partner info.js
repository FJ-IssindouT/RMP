// id_get_partner_info

var input = {"login": RMPApplication.get("connected_user")};
var options = {};
id_get_user_info_as_admin.trigger(input, options, user_info_ok, user_info_ko);

function user_info_ok(result)
{
	c_debug(debug.user_info, "=> user_info_ok: result = ", result);
    var pays = result.pays;
    RMPApplication.set("country", pays);
    RMPApplication.set("timezone", result.timezone);

    // Match with SNOW Format
	var dispatch_group;
	if (include_string(RMPApplication.get("connected_user"), "itancia")) {
		RMPApplication.set("dispatch_group","ST Itancia");
	} else if (pays == "SPAIN") {
		RMPApplication.set("dispatch_group", "FJ Espagne");
	} else if (pays == "ITALY") {
		RMPApplication.set("dispatch_group", "FJ Italie");
	} else if (pays == "PORTUGAL") {
        RMPApplication.set("dispatch_group", "FJ Portugal");
    } else if (pays == "GERMANY") {
        RMPApplication.set("dispatch_group", "Vivarte - ST SMC DE");
    } else if (pays == "NORWAY") {
		RMPApplication.set("dispatch_group", "Vivarte - ST SMC NOR");
	}
}

function user_info_ko(error)
{
    RMPApplication.debug("=> begin user_info_ko: error = " + JSON.stringify(error));
	c_debug(debug.user_info, "=> user_info_ko: error = ", error);
	var error_msg = ${P_quoted(i18n("user_info_ko_msg", "Error while loading user informations!"))};
	notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
	RMPApplication.debug("end user_info_ko");
}
