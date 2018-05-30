// ========================
//   Ticket Closure : MAIN
// ========================
RMPApplication.debug("Ticket Closure : Application started");

// ========================
// Variables declaration
// ========================
var login = {};
var collectionid = "col_cloture_codes_rmsdemo";

// execute main program
init();

// ===============================
//   Initialization part
// ===============================
function init() 
{
	RMPApplication.debug("begin init : login = " + login);
	var options = {};
	var pattern = {};
	pattern.login = id_login.getValue();
    // console.log("=> init: pattern = ", pattern);

	id_get_user_info_as_admin_api.trigger (pattern, options , get_info_ok, get_info_ko); 
	RMPApplication.debug("end init");
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
    // console.log("=> get_info_ok: login = ", login);

	// Fill contact fields on screen
	// id_date.value = getDateTimeNow();

    // Set Service Now dispatch group
    setDispatchGroup();

	RMPApplication.debug("end get_info_ok");
}

function get_info_ko(error) 
{
    RMPApplication.debug("begin get_info_ko: error = " + JSON.stringify(error));
    // console.log("=> get_info_ko: error = ", error);

    var error_msg = ${P_quoted(i18n("get_info_ko_msg", "Erreur lors de la récupération des informations utilisateur!"))};
    alertify.error(error_msg);
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

	switch (login.country) {
		case "SPAIN": 
			dispatch_group = "Fujitsu Espagne";
			break;
		case "BELGIUM":		
			dispatch_group = "Fujitsu Belgique";
			break;
		default:
			dispatch_group = "RMSDEMO - Fujitsu France";
			break;
	}
	id_dispatch_group.setValue(dispatch_group);
	// RMPApplication.set("dispatch_group", dispatch_group);

	var options = {};
	var my_pattern = {};
	if (include_string(id_dispatch_group.getValue(), "Fujitsu")) {
		my_pattern.dispatch_group = "Fujitsu";
	}
	else {
		my_pattern.dispatch_group = id_dispatch_group.getValue();
	}

	console.log('=> setDispatchGroup: my_pattern', my_pattern);
	eval(collectionid).listCallback(my_pattern, options, get_closure_codes_list_ok, get_closure_codes_list_ko);

	RMPApplication.debug("end setDispatchGroup");
}

function get_closure_codes_list_ok(result) 
{
	RMPApplication.debug("begin get_closure_codes_list_ok: result =  " + JSON.stringify(result));
	// console.log("=> get_closure_codes_list_ok: result = ", result);
	var vb_codes = new Array();
	for (i=0; i<result.length; i++) {
		vb_codes.push({ "label": result[i].closure_code, "value": result[i].closure_code });
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
    RMPApplication.debug("begin get_closure_codes_list_ko: error = " + JSON.stringify(error));
    // console.log("=> get_closure_codes_list_ko: error = ", error);

    var error_msg = ${P_quoted(i18n("get_closure_codes_list_ko_msg", "Erreur lors de la récupération des codes de résolution!"))};
    alertify.error(error_msg);
    RMPApplication.debug("end get_closure_codes_list_ko"); 
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
    console.log("=> load_WO_InvFromSN: input = ", input);
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
    	alertify.error(error_msg);

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
		console.log("=> order_ok: input = ", input);
		id_get_work_order_tasks_list_api.trigger(input, options, inv_ok, inv_ko);
	}
	id_spinner.setVisible(false);
	RMPApplication.debug("end order_ok");
}

function order_ko(error)
{
    RMPApplication.debug("begin order_ko : error =  " + JSON.stringify(error));
	id_spinner.setVisible(false);
    var error_msg = ${P_quoted(i18n("order_ko_msg", "INFO: Erreur lors de la recherche des Work Order!"))};
    alertify.error(error_msg);
    RMPApplication.debug("end order_ko");
}


function inv_ok(result)
{
	RMPApplication.debug("inv_ok : result =  " + result);
	// console.log('=> inv_ok: result = ', result);

	var wt_ol = result.wm_task_list.getRecordsResult;
	console.log('=> inv_ok: wt_ol = ', wt_ol);

	if (typeof(wt_ol) == 'undefined') {				// Aucun résultat
		
		var error_msg = ${P_quoted(i18n("inv_ok_msg", "Aucune intervention encore ouverte n'a été trouvée!"))};
    	alertify.error(error_msg);

	} else {
		var dispatch_group = id_dispatch_group.getValue();
		var vb_wo = new Array();
		if (typeof(wt_ol[0]) == 'undefined') {		// 1 Seul résultat
			if ( include_string(wt_ol.dispatch_group, "Fujitsu") || include_string(wt_ol.dispatch_group, "Dispatch")  || include_string(wt_ol.dispatch_group, "RMSDEMO") ||	include_string(wt_ol.assignment_group, "Fujitsu") || include_string(wt_ol.assignment_group, "Dispatch") ) {
				vb_wo.push({"label": wt_ol.number + "-" + wt_ol.location, "value": wt_ol.sys_id});
				console.log("inv_ok 1");
			}
			console.log("inv_ok 2");

		} else {											// 1 liste de résultats
			for(i=0; i<wt_ol.length; i++) {
				if ( include_string(wt_ol[i].dispatch_group, "Fujitsu") || include_string(wt_ol[i].dispatch_group, "Dispatch")  || include_string(wt_ol[i].dispatch_group, "RMSDEMO") || include_string(wt_ol[i].assignment_group, "Fujitsu") || include_string(wt_ol[i].assignment_group, "Dispatch") ) {
					vb_wo.push({"label": wt_ol[i].number + "-" + wt_ol[i].location, "value": wt_ol[i].sys_id});
					console.log("inv_ok 3");
				}
			}			
		}
		console.log("inv_ok 4");
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
    var error_msg = ${P_quoted(i18n("inv_ko_msg", "INFO: Erreur lors de la recherche des Interventions!"))};
    alertify.error(error_msg);
    RMPApplication.debug("end inv_ko");
}

// ====================================================================================
//   Check on front side if dates are correct and fit to SNow rules
// ====================================================================================
function datesCheck() 
{
	RMPApplication.debug("begin datesCheck");
	// console.log("=> datesCheck");

	// retrieve dates from WI
	var start_date = id_work_start.getValue() * 1000;				// locale timestamp value in milliseconds
	var end_date = id_work_end.getValue() * 1000;
	var work_start_l = RMPApplication.get("work_start_l");			// locale date & time string
	var work_end_l = RMPApplication.get("work_end_l");
	var now_date = Date.now();										// current timestamp value in milliseconds

	// check if start_date < end_date
	if (start_date > end_date) {
		var title1 = ${P_quoted(i18n("error_datesCheck_title1", "ERREUR"))};
        var content1 = ${P_quoted(i18n("error_datesCheck_msg1", "La date de fin d'intervention ne peut précéder la date de début d'intervention!"))};
        RMPApplication.showErrorBox(title1, content1);
		return false;
	}

	// check if end_date < current date&time
	if (end_date > now_date) {
		var title2 = ${P_quoted(i18n("error_datesCheck_title2", "ERREUR"))};
        var content2 = ${P_quoted(i18n("error_datesCheck_msg2", "La date de fin d'intervention ne peut être ultérieure à l'heure courante!"))};
        RMPApplication.showErrorBox(title2, content2);
		return false;
	}

	// dates should be converted in UTC format before updating the ticket
    var start_date_utc  = moment(work_start_l, "DD/MM/YYYY HH:mm:ss").utc().format("DD/MM/YYYY HH:mm:ss");
    var end_date_utc  = moment(work_end_l, "DD/MM/YYYY HH:mm:ss").utc().format("DD/MM/YYYY HH:mm:ss");

    // we save UTC dates for ulterior use
    id_utc_work_start.setValue(start_date_utc);
    id_utc_work_end.setValue(end_date_utc);

	RMPApplication.debug("end datesCheck");
	
	// console.log("=> datesCheck: before returning TRUE");
	return true;		// needed as called by pre-launch script "Fermer le ticket" button
}