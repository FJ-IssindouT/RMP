// id_get_partner_info

var input = {"login": RMPApplication.get("email")};
var options = {};
id_get_user_info_as_admin.trigger(input, options, user_info_ok, user_info_ko);

function user_info_ok(result)
{
    RMPApplication.debug("=> begin user_info_ok: result = " + JSON.stringify(result));
    var pays = result.pays;
    RMPApplication.set("country", pays);
    RMPApplication.set("timezone", result.timezone);

    // Match with SNOW Format
	var dispatch_group;
	if (include_string(RMPApplication.get("email"), "bizerba")) {
		RMPApplication.set("dispatch_group","Bizerba");
	} else if (RMPApplication.get("country") == "SPAIN") {
		RMPApplication.set("dispatch_group","Fujitsu Espagne");
	} else if (RMPApplication.get("country") == "BELGIUM") {
		RMPApplication.set("dispatch_group","Fujitsu Belgique");
	} else if (include_string(RMPApplication.get("email"), "kellydeli")) {
		RMPApplication.set("dispatch_group", "IT KellyDeli");
	} else {
		RMPApplication.set("dispatch_group","Fujitsu Belgique");
	}

	if (include_string(RMPApplication.get("dispatch_group"), "Fujitsu")) {
		var my_pattern = {"dispatch_group" : "Fujitsu"};
	}
	else {
		var my_pattern = {"dispatch_group" : RMPApplication.get("dispatch_group")};
	}

    col_cloture_codes.listCallback(my_pattern, {}, closure_code_ok, closure_code_ko);
    RMPApplication.debug("end user_info_ok");
}

function user_info_ko(error)
{
    RMPApplication.debug("=> begin user_info_ko: error = " + JSON.stringify(error));
	c_debug(debug.user_info, "=> user_info_ko: error = ", error);
	var error_msg = ${P_quoted(i18n("user_info_ko_msg", "Error while loading user informations!"))};
	notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
	RMPApplication.debug("end user_info_ko");
}

function closure_code_ok(result) 
{
    RMPApplication.debug("=> begin closure_code_ok: result = " + JSON.stringify(result));
	var vb_codes = new Array();
	for (i=0; i<result.length; i++) {
		vb_codes.push({"label": result[i].closure_code, "value": result[i].closure_code});
	}	
	var a = new RMP_List();
	a.fromArray(vb_codes);
    RMPApplication.setList("vb_codes", a);
    RMPApplication.debug("end closure_code_ok");
}

function closure_code_ko(error) 
{
    RMPApplication.debug("=> begin closure_code_ko: error = " + JSON.stringify(error));
	c_debug(debug.closure_code, "=> closure_code_ko: error = ", error);
	var error_msg = ${P_quoted(i18n("closure_code_ko_msg", "Error while loading closure code!"))};
	notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
	RMPApplication.debug("end closure_code_ko");
}