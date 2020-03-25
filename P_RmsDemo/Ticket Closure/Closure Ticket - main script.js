// ========================
//   Ticket Closure : MAIN
// ========================
RMPApplication.debug("Ticket Closure : Application started");

// ========================
// Variables declaration
// ========================

// if "true", logs will be showed on the browser console
var dbug = {
	"user_info": false,
	"language": false,
    "closure_code": false,
	"dates_check": false,
	"intervention": false,
	"information": false
};

var login = {};
var wt_ol = [];
var rmp_interf_tz = "Europe/Paris";
var col_all_lang = {};
var default_lang = "fr";									// Service Now Closure codes are defined in french 
var selected_lang = RMPApplication.get("language");			// What language was selected by user
var col_closure_codes = "col_cloture_codes_rmsdemo";		// Collection with closure codes information
var col_languages = "col_langues_rmsdemo";					// Collection with languages information
var clot_lbl_list = [
	"clot_vis_echg",
    "clot_vis_netreg",
    "clot_vis_piece",
    "clot_vis_remast",
    "clot_erreur_diag",
    "clot_hd_annul_clt",
    "clot_hd_annul_int",
    "clot_hd_doubl_rel",
    "clot_hd_telephone"
];

var error_title_notify = ${P_quoted(i18n("error_title_notify", "Erreur"))};
var info_title_notify = ${P_quoted(i18n("info_title_notify", "Information"))};
var error_thanks_notify = ${P_quoted(i18n("error_thanks_notify", "Merci de signaler cette erreur !"))};
var btn_ok = ${P_quoted(i18n("btn_ok", "OK"))};


// execute main program
init();

// ===============================
//   Initialization part
// ===============================
function init() 
{
	RMPApplication.debug("begin init");
	var options = {};
	var pattern = {};
	pattern.login = RMPApplication.get("login");
    c_debug(dbug.user_info, "=> init: pattern = ", pattern);

	id_get_user_info_as_admin_api.trigger (pattern, options , get_info_ok, get_info_ko); 
	RMPApplication.debug("end init");
}

// ============================================
// Get user details from user metadata details
// ============================================
function get_info_ok(result)
{
	RMPApplication.debug("begin get_info_ok: result =  " + JSON.stringify(result));
	c_debug(dbug.user_info, "=> get_info_ok: result = " + JSON.stringify(result));

    // define "login" variable properties
	login.user = result.user;
	login.email = (!isEmpty(result.user)) ? result.user.trim() : '';
    login.phone = (!isEmpty(result.phone)) ? result.phone.trim() : '';
    login.timezone = result.timezone;
    login.company = (!isEmpty(result.compagnie)) ? result.compagnie.trim().toUpperCase() : '';
    login.grp_affiliates = (!isEmpty(result.grp_ens)) ? result.grp_ens.trim().toUpperCase() : '';
    login.affiliate = (!isEmpty(result.enseigne)) ? result.enseigne.trim().toUpperCase() : '';
    login.country = (!isEmpty(result.pays)) ? result.pays.trim().toUpperCase() : '';
    login.location_code = (!isEmpty(result.code_magasin)) ? result.code_magasin.trim().toUpperCase() : '';
    login.division = (!isEmpty(result.division)) ? result.division.trim().toUpperCase() : '';
    login.region = (!isEmpty(result.region)) ? result.region.trim().toUpperCase() : '';
	login.is_super_user = (!isEmpty(result.is_super_user)) ? result.is_super_user.toUpperCase() : '';
    c_debug(dbug.init, "=> get_info_ok: login = ", login);

    // Set Service Now dispatch group
    setDispatchGroup();

	RMPApplication.debug("end get_info_ok");
}

function get_info_ko(error) 
{
    RMPApplication.debug("begin get_info_ko: error = " + JSON.stringify(error));
    c_debug(dbug.user_info, "=> get_info_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("get_info_ko_msg", "Récupération impossible des informations utilisateur !"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug("end get_info_ko"); 
} 

// ===================================================
// Set Dispatch group according to the login country
// ===================================================
function setDispatchGroup() 
{
	RMPApplication.debug("begin setDispatchGroup");
	c_debug(dbug.user_info, "=> setDispatchGroup: input");
    RMPApplication.set("country", login.country);
    RMPApplication.set("timezone", login.timezone);

	// Match with SNOW Format
	var dispatch_group;
	id_country.setValue(login.country);
	switch (login.country) {
		case "SPAIN": 
			dispatch_group = "RMSDEMO - Fujitsu Espagne";
			break;
		case "BELGIUM":		
			dispatch_group = "RMSDEMO - Fujitsu Belgique";
			break;
		case "FRANCE":
			dispatch_group = "RMSDEMO - Fujitsu France";
			break;
		default:
			dispatch_group = "RMSDEMO - Global Partner";
			break;
	}
	RMPApplication.set("dispatch_group", dispatch_group);

	load_languages_collection();

	RMPApplication.debug("end setDispatchGroup");
}

// ============================================
// get information for selected language
// ============================================
function load_languages_collection()
{
    RMPApplication.debug ("begin load_languages_collection");
    c_debug(dbug.language, "=> load_languages_collection");
    var my_pattern = {};
    var options = {};
    eval(col_languages).listCallback(my_pattern, options, load_languages_collection_ok, load_languages_collection_ko);
    RMPApplication.debug ("end load_languages_collection");
}

function load_languages_collection_ok(result)
{
    RMPApplication.debug ("begin load_languages_collection_ok");
    c_debug(dbug.language, "=> load_languages_collection_ok: result = ", result);
    if (result.length > 0) {
		col_all_lang = result;
        var success_msg = ${P_quoted(i18n("load_languages_collection_ok_msg", "Informations de la collection chargées !"))};
		// notify_success(info_title_notify, success_msg);
		set_closure_codes_list(default_lang, selected_lang);
    }
    RMPApplication.debug ("end load_languages_collection_ok");
}

function load_languages_collection_ko(error)
{
    RMPApplication.debug ("begin load_languages_collection_ko");
    c_debug(dbug.language, "=> load_languages_collection_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("load_languages_collection_ko_msg", "Récupération impossible des données de la collection des langues !"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug ("end load_languages_collection_ko");
}

// =====================================================
//  Creation of closure codes list
// =====================================================
function set_closure_codes_list(def_lang, sel_lang) 
{
	RMPApplication.debug("=> begin set_closure_codes_list");
	c_debug(dbug.closure_code, "    set_closure_codes_list : default_language = ", def_lang);
	c_debug(dbug.closure_code, "    set_closure_codes_list : selected_language = ", sel_lang);
	var def_lang_list = [];
	var sel_lang_list = [];

	for (i=0; i<col_all_lang.length; i++) {
		
		if (col_all_lang[i].code_language == def_lang) {					// get all default language closure codes
			for (j=0; j<clot_lbl_list.length; j++) {
				var value = clot_lbl_list[j];
				def_lang_list[j] = col_all_lang[i][value];
			}
		}

		if (col_all_lang[i].code_language == sel_lang) {					// get all selected language closure codes
			for (j=0; j<clot_lbl_list.length; j++) {
				var value = clot_lbl_list[j];
				sel_lang_list[j] = col_all_lang[i][value];
			}
		}
	}
	c_debug(dbug.closure_code, "    set_closure_codes_list : def_lang_list = ", def_lang_list);
	c_debug(dbug.closure_code, "    set_closure_codes_list : sel_lang_list = ", sel_lang_list);

	var vb_codes = new Array();
	for (i=0; i<sel_lang_list.length; i++) {
		vb_codes.push({"label": sel_lang_list[i], "value": def_lang_list[i]});
	}
	c_debug(dbug.closure_code, "    set_closure_codes_list : vb_codes = ", vb_codes);
		
	var a = new RMP_List();
	a.fromArray(vb_codes);
	RMPApplication.setList("vb_codes", a);
	
	// load WO and INV from Service Now
	load_WO_InvFromSN();

    RMPApplication.debug("end set_closure_codes_list");
}

// ====================================================================================
//   Check on front side if dates are correct and fit to SNow rules
// ====================================================================================
function datesCheck() 
{
	RMPApplication.debug("begin datesCheck");
	c_debug(dbug.dates_check, "=> begin datesCheck");

	// retrieve dates from WI
	var start_date = id_work_start.getValue() * 1000;				// locale timestamp value in milliseconds
	var end_date = id_work_end.getValue() * 1000;
	var work_start_l = RMPApplication.get("work_start_l");			// locale date & time string
	var work_end_l = RMPApplication.get("work_end_l");
	var now_date = Date.now();										// current timestamp value in milliseconds

	// check if start_date < end_date
	if (start_date > end_date) {
		c_debug(dbug.dates_check, "=> datesCheck: start_date > end_date AND return FALSE");
        var content1 = ${P_quoted(i18n("error_datesCheck_msg1", "La date de fin d'intervention ne peut précéder la date de début d'intervention !"))};
        notify_error(error_title_notify, content1 + ' ' + error_thanks_notify);
		return false;
	}

	// check if end_date < current date&time
	if (end_date > now_date) {
		c_debug(dbug.dates_check, "=> datesCheck: end_date > now_date AND return FALSE");
        var content2 = ${P_quoted(i18n("error_datesCheck_msg2", "La date de fin d'intervention ne peut être ultérieure à l'heure courante !"))};
        notify_error(error_title_notify, content2 + ' ' + error_thanks_notify);
		return false;
	}

	// As rmp.interface account is set with GMT+2 timezone in Service Now,
	// dates should be converted in UTC format before updating the ticket
    var start_date_local = moment.tz(work_start_l, "DD/MM/YYYY HH:mm:ss", login.timezone);
	var start_date_utc  = moment(start_date_local, "DD/MM/YYYY HH:mm:ss").tz(rmp_interf_tz).format("DD/MM/YYYY HH:mm:ss");
	var end_date_local = moment.tz(work_end_l, "DD/MM/YYYY HH:mm:ss", login.timezone);
	var end_date_utc  = moment(end_date_local, "DD/MM/YYYY HH:mm:ss").tz(rmp_interf_tz).format("DD/MM/YYYY HH:mm:ss");
    // var start_date_utc  = moment(work_start_l, "DD/MM/YYYY HH:mm:ss").utc().format("DD/MM/YYYY HH:mm:ss");
	// var end_date_utc  = moment(work_end_l, "DD/MM/YYYY HH:mm:ss").utc().format("DD/MM/YYYY HH:mm:ss");

    // we save UTC dates for ulterior use
    id_utc_work_start.setValue(start_date_utc);
    c_debug(dbug.dates_check, "=> datesCheck: start_date_utc = ", start_date_utc);
    id_utc_work_end.setValue(end_date_utc);
    c_debug(dbug.dates_check, "=> datesCheck: end_date_utc = ", end_date_utc);

	RMPApplication.debug("end datesCheck");
	c_debug(dbug.dates_check, "=> datesCheck: return TRUE");
	return true;		// needed as called by pre-launch script "Fermer le ticket" button
}

// ==============================================================
//   Prepare query before loading WO and INV from Service Now
// ==============================================================
function load_WO_InvFromSN() 
{
    RMPApplication.debug("begin load_WO_InvFromSN");
    c_debug(dbug.intervention, "=> load_WO_InvFromSN");

	var dispatch_group = RMPApplication.get("dispatch_group");
	var sn_query = "";												// query to be defined with following criterias
	sn_query += "co_u_full_nameSTARTSWITH" + login.company;			// contract definition
	sn_query += "^task_stateIN16,17,18";							// Intervention different states ready to be closed
	sn_query += "^wo_stateIN10,11,13,15,16,18";						// WO different states ready to be closed
	sn_query += "^usergrp_name=" + dispatch_group;
	
	var options = {};
	var input = {"query": sn_query};
    c_debug(dbug.intervention, "=> load_WO_InvFromSN: sn_query = ", sn_query);
	id_get_interventions_list_api.trigger(input, options, inv_ok, inv_ko);

	RMPApplication.debug("end load_WO_InvFromSN");
}

function inv_ok(result)
{
	RMPApplication.debug("inv_ok : result =  " + result);

	wt_ol = result.result;
	c_debug(dbug.intervention, "=> inv_ok: wt_ol = ", wt_ol);

	if (typeof(wt_ol) == 'undefined') {					// Aucun résultat
		
		var error_msg = ${P_quoted(i18n("inv_ok_msg", "Aucune intervention en cours n'a été trouvée !"))};
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
		c_debug(dbug.intervention, "=> inv_ok: vb_wo = ", vb_wo);
		RMPApplication.setList("vb_wo", a);			// List of interventions
		id_spinner.setVisible(false);
	}

	RMPApplication.debug("end inv_ok");
}

function inv_ko(error)
{
    RMPApplication.debug("begin inv_ko : error =  " + JSON.stringify(error));
	id_spinner.setVisible(false);
    var error_msg = ${P_quoted(i18n("inv_ko_msg", "Récupération impossible des interventions !"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug("end inv_ko");
}

// =====================================================================
//   Affiche la date et heure courantes mais sauvegarde la date utc
// =====================================================================
function setDate() 
{
	RMPApplication.debug("begin setDate");
	c_debug(dbug.dates_check, "=> begin datesCheck");

    // Retrieving local current date&time
    var today = new Date();
    var local_date = moment(today, "DD/MM/YYYY HH:mm:ss").format("DD/MM/YYYY HH:mm:ss");
    id_date.setValue(local_date);
	c_debug(dbug.dates_check, "=> datesCheck: local_date = ", local_date);

    // we save UTC dates for ulterior use
    var utc_date = moment(today, "DD/MM/YYYY HH:mm:ss").utc().format("DD/MM/YYYY HH:mm:ss");
    id_utc_date.setValue(utc_date);
    c_debug(dbug.dates_check, "=> datesCheck: utc_date = ", utc_date);

	RMPApplication.debug("end setDate");
}

// ==============================================================
//   Ticket Information is filled after INV selection
// ==============================================================
function set_ticket_information() 
{
    RMPApplication.debug("begin set_ticket_information");
    c_debug(dbug.information, "=> set_ticket_information");

	for(i=0; i<wt_ol.length; i++) {
		if (wt_ol[i].task_sys_id == RMPApplication.get("ticket_number")) {
			c_debug(dbug.information, "=> set_ticket_information: wt_ol[" + i + "] = ", wt_ol[i]);
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
