// ========================
//   VideoAssistancePage : MAIN
// ========================
RMPApplication.debug("Video Assistance : Application started");

// ========================
// Variables declaration
// ========================
var login = {};
var error_title_notify = ${P_quoted(i18n("error_title_notify", "Erreur"))};
var warning_title_notify = ${P_quoted(i18n("warning_title_notify", "Information"))};
var error_thanks_notify = ${P_quoted(i18n("error_thanks_notify", "Merci de signaler cette erreur!"))};
var btn_ok = ${P_quoted(i18n("btn_ok", "OK"))};
var alert_note = "<strong>" + ${P_quoted(i18n("alert_note_", "Note"))} + ":</strong>";

// execute main program
init();

// ===============================
//   Initialization part
// ===============================
function init() 
{
	RMPApplication.debug("begin init : login = " + login);
	resetWI();
	var options = {};
	var pattern = {};
	pattern.login = RMPApplication.get("login");
    // console.log("=> init: pattern = ", pattern);

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

    // Change information zone's content
    var request_alert_content = ${P_quoted(i18n("request_alert_content", "Vous allez établir une demande d'assistance par vidéo.<br>Le support IT va être notifié de votre demande et vous rappelera pour convenir d'un rendez-vous afin d'établir une liaison par vidéo"))} + ".";     
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
	// console.log("=> get_info_ok: result = ", result);

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
    // console.log("=> get_info_ok: login = ", login);

	// Fill contact fields on screen
	// id_date.value = getDateTimeNow();
	id_email_login.setValue(login.email);
	id_phone_login.setValue(login.phone);

    // Set Service Now dispatch group
    setDispatchGroup();

	RMPApplication.debug("end get_info_ok");
}

function get_info_ko(error) 
{
    RMPApplication.debug("begin get_info_ko: error = " + JSON.stringify(error));
    // console.log("=> get_info_ko: error = ", error);

    var error_msg = ${P_quoted(i18n("get_info_ko_msg", "Récupération impossible des informations utilisateur!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug("end get_info_ko"); 
} 

// ===================================================
// Set Dispatch group according to the login country
// ===================================================
function setDispatchGroup() 
{
	RMPApplication.debug("begin setDispatchGroup");
	// console.log("=> setDispatchGroup");

	var dispatch_group;
	id_country.setValue(login.country);
	// RMPApplication.set("country", login.country);

	// Dispatch group definition according to country's user
	switch (login.country) {
		case "SPAIN": 
			dispatch_group = "Fujitsu Espagne";
			break;
		case "BELGIUM":		
			dispatch_group = "Fujitsu Belgique";
			break;
		default:
			dispatch_group = "Fujitsu France";
			break;
	}
	id_dispatch_group.setValue(dispatch_group);
	// RMPApplication.set("=> setDispatchGroup: dispatch_group = ", dispatch_group);

	var options = {};
	var my_pattern = {};
	if (include_string(id_dispatch_group.getValue(), "Fujitsu")) {
		my_pattern.dispatch_group = "Fujitsu";
	}
	else {
		my_pattern.dispatch_group = id_dispatch_group.getValue();
	}
	// console.log('=> setDispatchGroup: my_pattern = ', my_pattern);

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
	// console.log("=> load_WO_InvFromSN");

	var sn_query = "";											// query to be defined with following criterias
	sn_query += "^company.u_full_nameLIKE" + login.company;		// contract definition
	sn_query += "^stateIN10,11,13,15,16,18";					// different states ready to be closed

	var options = {};
	var input = {"wm_order_query": sn_query};
    // console.log("=> load_WO_InvFromSN: input = ", input);
	id_get_work_order_list_api.trigger(input, options, order_ok, order_ko);

	RMPApplication.debug("end load_WO_InvFromSN");
}

function order_ok(result)
{
	RMPApplication.debug("order_ok : result =  " + result);
	// console.log('=> order_ok: result = ', result);

	var wm_ol = result.wm_order_list.getRecordsResult;
	// console.log('=> order_ok: wm_ol = ', wm_ol);

	if (typeof(wm_ol) == 'undefined') {					// Aucun résultat

    	var error_msg = ${P_quoted(i18n("order_ok_msg", "Aucun Work Order n'a été trouvé!"))};
	    notify_warning(warning_title_notify, error_msg);

	} else {
		var wo_list = "";								// list of work orders

		if (typeof(wm_ol[0]) == 'undefined') {			// 1 Seul résultat
			wo_list = wm_ol.number;
		} else {										// 1 liste de résultats
			for (i=0; i<wm_ol.length; i++) {
				wo_list += ((i==0) ? "" : ",") + wm_ol[i].number;
			}
		}
		var sn_query = "parent.numberIN" + wo_list;
		sn_query += "^stateIN10,11,13,15,16,18";
		var input = {"wm_task_query": sn_query};		// different states ready to be closed
		var options = {};
		// console.log("=> order_ok: input = ", input);
		id_get_work_order_tasks_list_api.trigger(input, options, inv_ok, inv_ko);
	}
	id_spinner.setVisible(false);
	RMPApplication.debug("end order_ok");
}

function order_ko(error)
{
    RMPApplication.debug("begin order_ko : error =  " + JSON.stringify(error));
	id_spinner.setVisible(false);
    var error_msg = ${P_quoted(i18n("order_ko_msg", "Récupération impossible des Work Order!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug("end order_ko");
}


function inv_ok(result)
{
	RMPApplication.debug("inv_ok : result =  " + result);
	// console.log('=> inv_ok: result = ', result);

	var wt_ol = result.wm_task_list.getRecordsResult;
	// console.log('=> inv_ok: wt_ol = ', wt_ol);

	if (typeof(wt_ol) == 'undefined') {				// Aucun résultat
		
    	var error_msg = ${P_quoted(i18n("inv_ok_msg", "Aucune intervention encore ouverte n'a été trouvée!"))};
	    notify_warning(warning_title_notify, error_msg);

	} else {
		var dispatch_group = id_dispatch_group.getValue();
		var vb_wo = new Array();
		if (typeof(wt_ol[0]) == 'undefined') {		// 1 Seul résultat
			if ( include_string(wt_ol.dispatch_group, "Fujitsu") || include_string(wt_ol.dispatch_group, "Dispatch") ||	include_string(wt_ol.assignment_group, "Fujitsu") || include_string(wt_ol.assignment_group, "Dispatch") ) {
				vb_wo.push({"label": wt_ol.number + "-" + wt_ol.location, "value": wt_ol.sys_id});
				// console.log("inv_ok 1");
			}
			// console.log("inv_ok 2");

		} else {											// 1 liste de résultats
			for(i=0; i<wt_ol.length; i++) {
				if ( include_string(wt_ol[i].dispatch_group, "Fujitsu") || include_string(wt_ol[i].dispatch_group, "Dispatch") || include_string(wt_ol[i].assignment_group, "Fujitsu") || include_string(wt_ol[i].assignment_group, "Dispatch") ) {
					vb_wo.push({"label": wt_ol[i].number + "-" + wt_ol[i].location, "value": wt_ol[i].sys_id});
					// console.log("inv_ok 3");
				}
			}			
		}
		// console.log("inv_ok 4");
		var a = new RMP_List();
		a.fromArray(vb_wo);
		RMPApplication.setList("vb_wo", a);		// List of interventions
	}

	RMPApplication.debug("end inv_ok");
}

function inv_ko(error)
{
    RMPApplication.debug("begin inv_ko : error =  " + JSON.stringify(error));
	id_spinner.setVisible(false);
    var error_msg = ${P_quoted(i18n("inv_ko_msg", "Récupération impossible des interventions!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug("end inv_ko");
}