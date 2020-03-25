// ================================
//   VideoAssistancePage : MAIN
// ================================
RMPApplication.debug("Video Assistance : Application started");

// ========================
// Variables declaration
// ========================

// if "true", logs will be showed on the browser console
var dbug = {
	"init": false,
	"intervention": false,
    "sight": false
};

var login = {};
var wt_ol = [];
var rmp_interf_tz = "Europe/Paris";
var col_all_lang = {};
var default_lang = "fr";									// Service Now Closure codes are defined in french 
var selected_lang = RMPApplication.get("language");			// What language was selected by user

var success_title_notify = ${P_quoted(i18n("success_title_notify", "Succès"))};
var error_title_notify = ${P_quoted(i18n("error_title_notify", "Erreur"))};
var warning_title_notify = ${P_quoted(i18n("warning_title_notify", "Information"))};
var error_thanks_notify = ${P_quoted(i18n("error_thanks_notify", "Merci de signaler cette erreur !"))};
var btn_ok = ${P_quoted(i18n("btn_ok", "OK"))};

var alert_note = "<strong>" + ${P_quoted(i18n("alert_note_", "Note :"))} + "</strong> ";


// execute main program
init();

// ===============================
//   Initialization part
// ===============================
function init() 
{
	RMPApplication.debug("begin init: login = " + login);
	resetWI();

	var options = {};
	var pattern = {};
	pattern.login = RMPApplication.get("login");
	c_debug(dbug.init, "=> init: pattern = ", pattern);

    // CAPI for getting user information
	id_get_user_info_as_admin_api.trigger (pattern, options , get_info_ok, get_info_ko); 
	RMPApplication.debug("end init");
}

// ======================
// Reset interface
// ======================
function resetWI()
{
    RMPApplication.debug("begin resetWI");
    c_debug(dbug.init, "=> resetWI");

    // Change information zone's content
    var request_alert_content = ${P_quoted(i18n("request_alert_content", "Vous allez établir une demande d'assistance par vidéo.<br>Le support IT va être notifié de votre demande et vous rappelera pour convenir d'un rendez-vous afin d'établir une liaison par vidéo."))};     
    $("#id_video_assistance_note").html(alert_note + request_alert_content);

    // var contexte = id_context.getValue();
    // contexte == "web" for desktop screen; otherwise (for tablet & mobile)

/*    if (contexte == "web") {       // desktop
		id_video_assistance_note.setVisible(true);

    } else {                        // tablet or mobile
        id_video_assistance_note.setVisible(false);		// don't show this alert to optimize screen size
    }
*/
    RMPApplication.debug("end resetWI"); 
}

// ============================================
// Get user details from user metadata details
// ============================================
function get_info_ok(result)
{
	RMPApplication.debug("begin get_info_ok: result =  " + JSON.stringify(result));
	c_debug(dbug.init, "=> get_info_ok: result = ", result);

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

	// Fill contact fields on screen
	RMPApplication.set ("id_email_login", login.email);
	RMPApplication.set ("id_phone_login", login.phone);

    // Set Service Now dispatch group
    setDispatchGroup();

	RMPApplication.debug("end get_info_ok");
}

function get_info_ko(error) 
{
    RMPApplication.debug("begin get_info_ko: error = " + JSON.stringify(error));
    c_debug(dbug.init, "=> get_info_ok: error = ", error);

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
		c_debug(dbug.init, "=> setDispatchGroup");
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

	// Load Work order and Intervention from Service Now
	load_WO_InvFromSN();

	RMPApplication.debug("end setDispatchGroup");
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
		
		var error_msg = ${P_quoted(i18n("inv_ok_msg", "Aucune intervention encore ouverte n'a été trouvée !"))};
    	notify_warning(warning_title_notify, error_msg);

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
    c_debug(dbug.intervention, "=> inv_ko: error = ", error);
	id_spinner.setVisible(false);
    var error_msg = ${P_quoted(i18n("inv_ko_msg", "Récupération impossible des interventions !"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug("end inv_ko");
}
