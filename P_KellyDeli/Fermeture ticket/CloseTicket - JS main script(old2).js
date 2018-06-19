// =======================================
//   Fermeture de ticket: id_main_script
// =======================================
RMPApplication.debug("Closure Ticket : Application started");

// ========================
// Variables declaration
// ========================

// if "true", logs will be showed on the browser console
var debug = {
    "user_info": false,
    "closure_code": false,
	"dates_check": false,
	"intervention": false,
	"information": false
};

var login = {};
var wt_ol = [];
var collectionid = "col_cloture_codes";

var error_title_notify = ${P_quoted(i18n("error_title_notify", "Error"))};
var info_title_notify = ${P_quoted(i18n("info_title_notify", "Information"))};
var error_thanks_notify = ${P_quoted(i18n("error_thanks_notify", "Thanks to report this error!"))};
var btn_ok = ${P_quoted(i18n("btn_ok", "OK"))};

init();

// ===============================
//   Initialization part
// ===============================
function init() 
{
	RMPApplication.debug("begin init");
	var options = {};
	var pattern = {};
	pattern.login = RMPApplication.get("email");
	c_debug(debug.user_info, "=> getPartnerInfo: pattern = ", pattern);

	id_get_user_info_as_admin_api.trigger (pattern, options , get_info_ok, get_info_ko); 
	RMPApplication.debug("end init");
}

// ============================================
// Get user details from user metadata details
// ============================================
function get_info_ok(result)
{
	RMPApplication.debug("begin get_info_ok: result =  " + JSON.stringify(result));
	c_debug(debug.user_info, "=> get_info_ok: result = " + JSON.stringify(result));

    // define "login" variable properties
	login.user = result.user;
	login.email = result.user;
	login.phone = result.phone;
    login.timezone = result.timezone;
    login.company = (!isEmpty(result.compagnie)) ? result.compagnie.trim().toUpperCase() : '';
    login.grp_affiliates = (!isEmpty(result.grp_ens)) ? result.grp_ens.trim().toUpperCase() : '';
    login.affiliate = (!isEmpty(result.enseigne)) ? result.enseigne.trim().toUpperCase() : '';
    login.country = (!isEmpty(result.pays)) ? result.pays.trim().toUpperCase() : '';
    login.location_code = (!isEmpty(result.code_magasin)) ? result.code_magasin.trim().toUpperCase() : '';
    login.division = (!isEmpty(result.division)) ? result.division.trim().toUpperCase() : '';
    login.region = (!isEmpty(result.region)) ? result.region.trim().toUpperCase() : '';
	login.is_super_user = (!isEmpty(result.is_super_user)) ? result.is_super_user.toUpperCase() : '';
	c_debug(debug.user_info, "=> get_info_ok: login = ", login);

    // Set Service Now dispatch group
    setDispatchGroup();

	RMPApplication.debug("end get_info_ok");
}

function get_info_ko(error)
{
    RMPApplication.debug("=> begin get_info_ko: error = " + JSON.stringify(error));
	c_debug(debug.user_info, "=> get_info_ko: error = ", error);
	var error_msg = ${P_quoted(i18n("user_info_ko_msg", "Unable to load user information!"))};
	notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
	RMPApplication.debug("end get_info_ko");
}

// ===================================================
// Set Dispatch group according to the login country
// ===================================================
function setDispatchGroup() 
{
	RMPApplication.debug("begin setDispatchGroup");
	c_debug(debug.user_info, "=> setDispatchGroup: input");
    RMPApplication.set("country", login.country);
    RMPApplication.set("timezone", login.timezone);

    // Match with SNOW Format
	var dispatch_group;
	if (include_string(RMPApplication.get("email"), "bizerba")) {
		RMPApplication.set("dispatch_group","Bizerba");
	} else if (RMPApplication.get("country") == "SPAIN") {
		RMPApplication.set("dispatch_group","Fujitsu Espagne");
	} else if (RMPApplication.get("country") == "BELGIUM") {
		RMPApplication.set("dispatch_group","Fujitsu Belgique");
	} else if (RMPApplication.get("country") == "NETHERLANDS") {
		RMPApplication.set("dispatch_group","Fujitsu Pays-Bas");
	} else if (RMPApplication.get("country") == "ITALY") {
		RMPApplication.set("dispatch_group","Fujitsu Italie");				
	} else if (include_string(RMPApplication.get("email"), "kellydeli")) {
		RMPApplication.set("dispatch_group", "IT KellyDeli");
	} else {
		RMPApplication.set("dispatch_group","MAINTAINER - PC30Net");
	}

	if (include_string(RMPApplication.get("dispatch_group"), "Fujitsu") || include_string(RMPApplication.get("dispatch_group"), "MAINTAINER")) {
		var my_pattern = {"dispatch_group" : "Fujitsu"};
	}
	else {
		var my_pattern = {"dispatch_group" : RMPApplication.get("dispatch_group")};
	}
	c_debug(debug.user_info, "=> user_info_ok: my_pattern = ", my_pattern);
    eval(collectionid).listCallback(my_pattern, {}, get_closure_codes_list_ok, get_closure_codes_list_ko);
    RMPApplication.debug("end user_info_ok");
}

// =====================================================
//  Creation of closure codes list
// =====================================================
function get_closure_codes_list_ok(result) 
{
    RMPApplication.debug("=> begin get_closure_codes_list_ok: result = " + JSON.stringify(result));
	var vb_codes = new Array();
	for (i=0; i<result.length; i++) {
		vb_codes.push({"label": result[i].closure_code, "value": result[i].closure_code});
	}	
	var a = new RMP_List();
	a.fromArray(vb_codes);
	RMPApplication.setList("vb_codes", a);
	
	// load WO and INV from Service Now
	load_WO_InvFromSN();

    RMPApplication.debug("end get_closure_codes_list_ok");
}

function get_closure_codes_list_ko(error) 
{
    RMPApplication.debug("=> begin get_closure_codes_list_ko: error = " + JSON.stringify(error));
	c_debug(debug.closure_code, "=> get_closure_codes_list_ko: error = ", error);
	var error_msg = ${P_quoted(i18n("get_closure_codes_list_ko_msg", "Unable to load closure codes!"))};
	notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
	RMPApplication.debug("end get_closure_codes_list_ko");
}

// ============================================
// Check if dates (start + end) match rules
// ============================================
function datesCheck() 
{
	RMPApplication.debug("begin datesCheck");
	c_debug(debug.dates_check, "=> begin datesCheck");

	// retrieve dates from WI
	var start_date = id_work_start.getValue() * 1000;				// locale timestamp value in milliseconds
	var end_date = id_work_end.getValue() * 1000;
	var work_start_l = RMPApplication.get("work_start_l");			// locale date & time string
	var work_end_l = RMPApplication.get("work_end_l");
	var now_date = Date.now();										// current timestamp value in milliseconds

	// check if start_date < end_date
	if (start_date > end_date) {
		c_debug(debug.dates_check, "=> datesCheck: start_date > end_date AND return FALSE");
		var error_msg = ${P_quoted(i18n("start_date_msg", "The date of intervention end can't be lower than the date of intervention start!"))};
		notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
		return false;
	}

	// check if end_date < current date&time
	if (end_date > now_date) {
		c_debug(debug.dates_check, "=> datesCheck: end_date > now_date AND return FALSE");
		var error_msg = ${P_quoted(i18n("end_date_msg", "The date of intervention end can't be higher than the current date & time!"))};
		notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
		return false;
	}

	// dates should be converted in UTC format before updating the ticket
    var start_date_utc  = moment(work_start_l, "DD/MM/YYYY HH:mm:ss").utc().format("DD/MM/YYYY HH:mm:ss");
    var end_date_utc  = moment(work_end_l, "DD/MM/YYYY HH:mm:ss").utc().format("DD/MM/YYYY HH:mm:ss");

    // we save UTC dates for ulterior use
	id_utc_work_start.setValue(start_date_utc);
	c_debug(debug.dates_check, "=> datesCheck: start_date_utc = ", start_date_utc);
	id_utc_work_end.setValue(end_date_utc);
	c_debug(debug.dates_check, "=> datesCheck: end_date_utc = ", end_date_utc);

	RMPApplication.debug("end datesCheck");
	c_debug(debug.dates_check, "=> datesCheck: return TRUE");
	return true;		// needed as called by pre-launch script "Fermer le ticket" button
}

// ==============================================================
//   Prepare query before loading WO and INV from Service Now
// ==============================================================

function load_WO_InvFromSN() 
{
    RMPApplication.debug("begin load_WO_InvFromSN");
    c_debug(debug.intervention, "=> load_WO_InvFromSN");

	var dispatch_group = RMPApplication.get("dispatch_group");
	var sn_query = "";											// query to be defined with following criterias
	sn_query += "co_u_full_name=KD\\KELLYDELI";					// contract definition
	sn_query += "^task_stateIN16,17,18";						// Intervention different states ready to be closed
	sn_query += "^wo_stateIN10,11,13,15,16,18";					// WO different states ready to be closed
	sn_query += "^usergrp_name=" + dispatch_group;
	
	var options = {};
	var input = {"query": sn_query};
    c_debug(debug.intervention, "=> load_WO_InvFromSN: sn_query = ", sn_query);
	id_get_interventions_list_api.trigger(input, options, inv_ok, inv_ko);

	RMPApplication.debug("end load_WO_InvFromSN");
}

function inv_ok(result)
{
	RMPApplication.debug("inv_ok : result =  " + result);

	wt_ol = result.result;
	c_debug(debug.intervention, "=> inv_ok: wt_ol = ", wt_ol);

	if (typeof(wt_ol) == 'undefined') {					// Aucun résultat
		
		var error_msg = ${P_quoted(i18n("inv_ok_msg", "No current Intervention found!"))};
    	notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);

	} else {
		var dispatch_group = RMPApplication.get("dispatch_group");
		var vb_wo = new Array();
		if (typeof(wt_ol[0]) == 'undefined') {			// 1 Seul résultat
				vb_wo.push({"label": wt_ol.task_number + " [" +  wt_ol.wo_number + "] - " + wt_ol.loc_name, "value": wt_ol.task_sys_id});

		} else {										// 1 liste de résultats
			for(i=0; i<wt_ol.length; i++) {
					vb_wo.push({"label": wt_ol[i].task_number + " [" +  wt_ol[i].wo_number + "] - " + wt_ol[i].loc_name, "value": wt_ol[i].task_sys_id});
			}			
		}
		var a = new RMP_List();
		a.fromArray(vb_wo);
		c_debug(debug.intervention, "=> inv_ok: vb_wo = ", vb_wo);
		RMPApplication.setList("vb_wo", a);			// List of interventions
		id_spinner.setVisible(false);
	}

	RMPApplication.debug("end inv_ok");
}

function inv_ko(error)
{
    RMPApplication.debug("begin inv_ko : error =  " + JSON.stringify(error));
	id_spinner.setVisible(false);
    var error_msg = ${P_quoted(i18n("inv_ko_msg", "Can not retrieve interventions!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug("end inv_ko");
}

// =====================================================================
//   Affiche la date et heure courantes mais sauvegarde la date utc
// =====================================================================
function setDate() 
{
	RMPApplication.debug("begin setDate");
	c_debug(debug.dates_check, "=> begin datesCheck");

    // Retrieving local current date&time
    var today = new Date();
    var local_date = moment(today, "DD/MM/YYYY HH:mm:ss").format("DD/MM/YYYY HH:mm:ss");
    id_date.setValue(local_date);
	c_debug(debug.dates_check, "=> datesCheck: local_date = ", local_date);

    // we save UTC dates for ulterior use
    var utc_date = moment(today, "DD/MM/YYYY HH:mm:ss").utc().format("DD/MM/YYYY HH:mm:ss");
    id_utc_date.setValue(utc_date);
    c_debug(debug.dates_check, "=> datesCheck: utc_date = ", utc_date);

	RMPApplication.debug("end setDate");
}

// ==============================================================
//   Ticket Information is filled after INV selection
// ==============================================================
function set_ticket_information() 
{
    RMPApplication.debug("begin set_ticket_information");
    c_debug(debug.information, "=> set_ticket_information");

	for(i=0; i<wt_ol.length; i++) {
		if (wt_ol[i].task_sys_id == RMPApplication.get("ticket_number")) {
			c_debug(debug.information, "=> set_ticket_information: wt_ol[" + i + "] = ", wt_ol[i]);
			RMPApplication.set("short_description", wt_ol[i].task_short_description);
			RMPApplication.set("description", wt_ol[i].task_description);
			var opened_at_date_utc  = moment(wt_ol[i].wo_opened_at, "YYYY-MM-DD HH:mm:ss").utc().format("DD/MM/YYYY HH:mm:ss");
			RMPApplication.set("opened_at", opened_at_date_utc);
			RMPApplication.set("diagnosis_description", wt_ol[i].task_diagnosis_description);
			id_short_description.setVisible(true);
			id_description.setVisible(true);
			id_opened_at.setVisible(true);
			if (!isEmpty(wt_ol[i].task_diagnosis_description)) {
				id_diagnosis_description.setVisible(true);
			}
			id_ticket_information.setVisible(true);
			break;
		}
	}	

	RMPApplication.debug("end set_ticket_information");
}
