// ========================
//   IMAC : MAIN
// ========================
RMPApplication.debug("IMAC : Application started");

// ========================
// Variables declaration
// ========================

// if "true", logs will be showed on the browser console
var debug = {
    "init" : true,
    "box" : true,
    "categ" : true,
    "action" : true,
    "datas" : true,
    "process_btn" : true
};

var login = {};					// metadata user
var view;						// view definition according to metadata values
var affiliateList = null;       // group of alliliates for specific GRP_AFF view/scope
var selected_location = null;   // selected location according to input's user
var enseigne = null;            // affiliate's login user
var update_done = false;

var request = {};				// all informations related to the IMAC request 
								// => should be used as pattern to retrieve cost line in collection

var error_title_notify = ${P_quoted(i18n("error_title_notify", "Erreur"))};
var error_thanks_notify = ${P_quoted(i18n("error_thanks_notify", "Merci de signaler cette erreur!"))};
var btn_ok = ${P_quoted(i18n("btn_ok", "OK"))};

resetWI();	// reset WI
init();		// execute main program


// ======================
//   Reset interface
// ======================
function resetWI()
{
	RMPApplication.debug("begin resetWI");
    c_debug(debug.init, "=> resetWI");

	var selectedLang = "fr";                // french by default
    var datepicker_lang = selectedLang;
    var datepicker_lang = selectedLang;

	var contexte = id_context.getValue();
    // contexte == "web" for desktop screen and datepicker; otherwise (for tablet & mobile) datebox is used as calendar component
    c_debug(debug.init, "=> resetWI: contexte = ", contexte);

    if (contexte == "web") {       // desktop

	    var datepicker_options = $.extend(
	        {},       // empty object
	        $.datepicker.regional[datepicker_lang]
	    );

		// All date fields use specific jquery datepicker for more convenience
	    $("#id_techDate").datepicker(datepicker_options);
	    $("#id_runDate").datepicker(datepicker_options);
		$("#id_businessDate").datepicker(datepicker_options);
		$("#id_keyReturnDate").datepicker(datepicker_options);
	    $("#id_deliveryDate").datepicker(datepicker_options);
	    $("#id_collectDate").datepicker(datepicker_options);
	    // set a higher z-index value to show datepicker above any tooltip
	    $("#id_techDate").css('zIndex', 2);
	    $("#id_runDate").css('zIndex', 2);
		$("#id_businessDate").css('zIndex', 2);
		$("#id_keyReturnDate").css('zIndex', 2);
	    $("#id_deliveryDate").css('zIndex', 2);
	    $("#id_collectDate").css('zIndex', 2);

	} else {                        // tablet or mobile
        // Common Options for datebox pluggins
        var datebox_options = {
            mode: "flipbox",
            themeDate: "info",
            themeDatePick: "warning",
            useLang: selectedLang,
            minYear: 2016,
            maxYear: 2022,
            useSetButton: true,
            themeSetButton: "primary",
            //overrideSetDateButtonLabel: "Valider",
            useClearButton: true,
            themeClearButton: "warning",
            useCollapsedBut: true,
            useFocus: true,
            useInlineBlind: true
        };
        $("#id_techDate").datebox(datebox_options);
	    $("#id_runDate").datebox(datebox_options);
		$("#id_businessDate").datebox(datebox_options);
		$("#id_keyReturnDate").datebox(datebox_options);
	    $("#id_deliveryDate").datebox(datebox_options);
	    $("#id_collectDate").datebox(datebox_options);
    }	

    var req_type = id_request_type.getValue();
    if (isEmpty(req_type)) {
        c_debug(debug.init, "=> resetWI: req_type is empty!");
    	var categ = id_category.getValue();
    	if (!isEmpty(categ)) {
    		id_request_type.setValue(findRequestType(categ));
    		req_type = id_request_type.getValue();
    		setFamCat(req_type);
    	}
    } else {
        c_debug(debug.init, "=> resetWI: req_type is NOT empty!");
    	setFamCat(req_type);
    }

    var imac_statut = id_state.getValue();
    c_debug(debug.init, "=> resetWI: case [" + imac_statut + "]");
	switch (imac_statut) {			// What informations to show

		case "draft" : 		// IMAC request contains some datas
			$("#id_module_cards").hide();
			$("#id_user_choice_row").show();
			id_location_info.setVisible(true);
			id_location_info.close();
			id_imac_request.setVisible(true);
			id_imac_request.open();
			id_save_draft.setVisible(true);
			id_transfer_to_sdmo.setVisible(true);
			retrieveAllDatas();
			break;
		case "sent" : 		// IMAC fullfilled by customer and already sent to Fujitsu
			$("#id_module_cards").hide();
			$("#id_user_choice_row").show();
			id_location_info.setVisible(true);
			id_location_info.open();
			id_location_change.setVisible(false);
			id_location_validate.setVisible(false);
			id_imac_request.setVisible(true);
			id_imac_request.open();
			$("#id_woNb").removeAttr('disabled');
			$("#id_totalAmount").removeAttr('disabled');
			$("#id_deliveryDate").removeAttr('disabled');
			$("#id_collectDate").removeAttr('disabled');
			$("#id_fujitsuComments").removeAttr('disabled');
			id_imac_update.setVisible(true);				// only active for "Informations Fujitsu screen"
			id_sdmo_validation.setVisible(true);			// only active for "Informations Fujitsu screen"
			id_sdmo_cancellation.setVisible(true);       	// only active for "Informations Fujitsu screen"
			retrieveAllDatas();
			break;
        case "accepted" : 		// IMAC saved on Fujitsu side with additionnal informations
        case "planned" :
			$("#id_module_cards").hide();
			$("#id_user_choice_row").show();
			id_location_info.setVisible(true);
			id_location_info.open();
			id_location_change.setVisible(false);
			id_location_validate.setVisible(false);
			id_imac_request.setVisible(true);
			id_imac_request.open();
			$("#id_woNb").removeAttr('disabled');
			$("#id_totalAmount").removeAttr('disabled');
			$("#id_deliveryDate").removeAttr('disabled');
			$("#id_collectDate").removeAttr('disabled');
			$("#id_fujitsuComments").removeAttr('disabled');
			id_imac_update.setVisible(true);				// only active for "Informations Fujitsu screen"
			id_sdmo_validation.setVisible(true);			// only active for "Informations Fujitsu screen"
			id_sdmo_cancellation.setVisible(true);       	// only active for "Informations Fujitsu screen"
			retrieveAllDatas();
			break;
		case "achieved" : 	// IMAC achieved by Fujitsu SDMO
			$("#id_module_cards").hide();
			$("#id_user_choice_row").show();
			id_location_info.setVisible(true);
			id_location_info.open();
			id_location_change.setVisible(false);
			id_location_validate.setVisible(false);
			id_imac_request.setVisible(true);
			id_imac_request.open();
			id_imac_update.setVisible(false);				// only active for "Informations Fujitsu screen"
			id_sdmo_validation.setVisible(false);			// only active for "Informations Fujitsu screen"
			id_sdmo_cancellation.setVisible(false);      	// only active for "Informations Fujitsu screen"
			retrieveAllDatas();
			break;
		case "cancelled" : 	// IMAC cancelled by Fujitsu SDMO
			$("#id_module_cards").hide();
			$("#id_user_choice_row").show();
			id_location_info.setVisible(true);
			id_location_info.open();
			id_location_change.setVisible(false);
			id_location_validate.setVisible(false);
			id_imac_request.setVisible(true);
			id_imac_request.open();
			id_imac_update.setVisible(false);				// only active for "Informations Fujitsu screen"
			id_sdmo_validation.setVisible(false);			// only active for "Informations Fujitsu screen"
			id_sdmo_cancellation.setVisible(false);      	// only active for "Informations Fujitsu screen"
			retrieveAllDatas();
			break;
		default :  		// New IMAC request
			$("#id_module_cards").show();
			$("#id_user_choice_row").hide();	
			id_location_info.setVisible(false);
			id_imac_request.setVisible(false);
			id_save_draft.setVisible(false);
			id_transfer_to_sdmo.setVisible(false);
			// Fill technician & server boxes before retrieving real values
    		// fillTechnicianBox();
    		// fillServerBox();
			break;
	}

	RMPApplication.debug("end resetWI"); 
}

// ========================
// selection boxes filling
// ========================

// following function is executed in Post loaded script for hidden "Request Status" Widget
function fillTechnicianBox() 
{
    RMPApplication.debug("begin fillTechnicianBox");
    c_debug(debug.box, "=> begin fillTechnicianBox");

    var id_technicianRequest = $("#id_technicianRequest");
    var defaultValue = "yes";
    var yesNoList = JSON.parse(id_yesno_cl.getList()).list;
    for (i=0; i < yesNoList.length; i++) {
    	if (defaultValue == yesNoList[i].value) {
    		id_technicianRequest.append($("<option selected />").val(yesNoList[i].value).html("&#10143; " + yesNoList[i].label));
    	} else {
        	id_technicianRequest.append($("<option />").val(yesNoList[i].value).html("&#10143; " + yesNoList[i].label));
        }
    }
    if (isEmpty(id_technicianRequest.val())) {
    	id_technicianRequest.val(id_technician.getSelectedValue());
    }
    RMPApplication.debug("end fillTechnicianBox");
}

// following function is executed in Post loaded script for hidden "Request Type" Widget
function fillServerBox() 
{
    RMPApplication.debug("begin fillServerBox");
    c_debug(debug.box, "=> begin fillServerBox");

    var id_serverRequest = $("#id_serverRequest");
    var defaultValue = "no";
    var yesNoList = JSON.parse(id_yesno_cl.getList()).list;
    for (i=0; i < yesNoList.length; i++) {
    	if (defaultValue == yesNoList[i].value) {
    		id_serverRequest.append($("<option selected />").val(yesNoList[i].value).html("&#10143; " + yesNoList[i].label));
    	} else {
        	id_serverRequest.append($("<option />").val(yesNoList[i].value).html("&#10143; " + yesNoList[i].label));
        }
    }
    if (isEmpty(id_serverRequest.val())) {
    	id_serverRequest.val(id_server.getSelectedValue());
    }
    RMPApplication.debug("end fillServerBox");
}

// ====================================================================================
//   Reset Action ("Réinitialiser" button or after a new Work Order request creation)
// ====================================================================================
function resetAction() 
{
	RMPApplication.debug("begin resetAction");
	c_debug(debug.init, "=> begin resetAction");

	RMPApplication.debug("end resetAction");
}

// ===============================
//   Initialization part
// ===============================
function init() 
{
    RMPApplication.debug("begin init");
    
	// resetWI();						// reset Web Interface  & hide sub-level area
	var options = {};
	var pattern = {};
    pattern.login = RMPApplication.get("login");
    c_debug(debug.init, "=> init: pattern = ", pattern);

    // CAPI for getting user information
	id_get_user_info_as_admin_api.trigger (pattern, options , get_info_ok, get_info_ko); 
	RMPApplication.debug("end init");
}

// ============================================
// Get user details from user metadata details
// ============================================
function get_info_ok(result)
{
    RMPApplication.debug("begin get_info_ok: result =  " + JSON.stringify(result));
    c_debug(debug.init, "=> get_info_ok: result = ", result);

    // define "login" variable properties
	login.user = result.user;
	login.email = (!isEmpty(result.user)) ? result.user.trim() : '';
    login.phone = (!isEmpty(result.phone)) ? result.phone.trim() : '';
	login.timezone = result.timezone;
    login.company = (!isEmpty(result.compagnie)) ? result.compagnie.trim().toUpperCase() : '';
    login.grp_affiliates = (!isEmpty(result.grp_ens)) ? result.grp_ens.trim().toUpperCase() : '';
    login.affiliates_access = (!isEmpty(result.acces_enseignes)) ? result.acces_enseignes.trim().toUpperCase() : '';
    login.affiliate = (!isEmpty(result.enseigne)) ? result.enseigne.trim().toUpperCase() : '';
    login.country = (!isEmpty(result.pays)) ? result.pays.trim().toUpperCase() : '';
    login.location_code = (!isEmpty(result.code_magasin)) ? result.code_magasin.trim().toUpperCase() : '';
    login.division = (!isEmpty(result.division)) ? result.division.trim().toUpperCase() : '';
    login.region = (!isEmpty(result.region)) ? result.region.trim().toUpperCase() : '';
    login.is_super_user = (!isEmpty(result.is_super_user)) ? result.is_super_user.toUpperCase() : '';
    c_debug(debug.init, "=> get_info_ok: login = ", login);
	enseigne = login.affiliate;
	if (!isEmpty(login.affiliate)) {
		id_enseigne.setValue(login.affiliate);
		if (isEmpty(login.grp_affiliates)) {
			RMPApplication.set("lbl_enseigne_m", enseigne); 
		}
	}
	if (!isEmpty(login.affiliates_access)) {
		id_acces_enseignes.setValue(login.affiliates_access);
	}
	id_telephone_demandeur.setValue(login.phone);
	if (!isEmpty(login.country)) {
		id_pays_m.setSelectedValue(capitalize(login.country));
		id_new_pays.setSelectedValue(capitalize(login.country));
	}

	// Define 'view' global variable, used to filter locations scop	id_hidden_variables.setVisible(true);
    // Different profiles are: SUPERUSER-COMPANY-COUNTRY-DIVISION-REGION-LOCAL
	if (login.is_super_user == "YES") {   // View as SuperUser
	    view = "SUPERUSER";

	} else if ( (login.region == login.company) || (login.division == login.company) ) {    // All countries & affiliates are available
	    view = "COMPANY";

    } else if ( (!isEmpty(login.grp_affiliates)) && (login.grp_affiliates != "NOT DEFINED") ) {    // a group of affiliates
        view = "GRP_AFF";

    } else if ( (login.region == login.affiliate) || (login.division == login.affiliate) ) {    // One affiliate, but country can be selected
        view = "AFFILIATE";

	} else if ( (login.region == login.country) || (login.division == login.country) ) {    // One country, but affiliate can be selected
	    view = "COUNTRY";


	} else if ( !isEmpty(login.division) && (login.division != "NOT DEFINED") ) {
	    view = "DIVISION";

	} else if ( !isEmpty(login.region) && (login.region != "NOT DEFINED") ) {
	    view = "REGION";

	} else {               // Only one site: 1 country - 1 affiliate - 1 location
	    view = "LOCAL";   
	}
    id_view.setValue(view);
    c_debug(debug.init, "=> get_info_ok: view = ", view);
    
    var affiliateList = '';
    switch (login.grp_affiliates) {
        case 'SMC':
            affiliateList = 'COSMOPARIS,MINELLI,SAN MARINA';
            break;
        case 'HALLES':
            affiliateList = 'LA HALLE CHAUSSURE,LA HALLE MODE';
            break;
        default:
            break;
    }
    id_grp_aff.setValue(affiliateList);

    check_user_lanes();

	RMPApplication.debug("end get_info_ok");
}

function get_info_ko(error) 
{
    RMPApplication.debug("begin get_info_ko: error = " + JSON.stringify(error));
    c_debug(debug.init, "=> get_info_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("get_info_ko_msg", "Récupération impossible des informations utilisateur!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug("end get_info_ko"); 
} 

// ====================================================================================
//   Check if user belong to different VIVARTE lanes
// ====================================================================================
function check_user_lanes() 
{
    RMPApplication.debug("begin check_user_lanes : login = " + login);
    c_debug(debug.init, "=> check_user_lanes: login = ", login);

	var options = {};
	var pattern = {};

    // CAPI for checking if user belong to some lanes
	id_check_user_lanes_api.trigger (pattern, options , check_user_lanes_ok, check_user_lanes_ko); 
	RMPApplication.debug("end check_user_lanes");
}

function check_user_lanes_ok(result) 
{
    RMPApplication.debug("begin check_user_lanes_ok: result =  " + JSON.stringify(result));
    c_debug(debug.init, "=> check_user_lanes_ok: result = ", result);

	// define other "login" variable properties
	login.is_sdmo = (result.is_sdmo == "true") ? true : false;
	login.is_it_group_mgr = (result.is_it_group_mgr == "true") ? true : false;
	login.is_grp_aff_mgr = (result.is_grp_aff_mgr == "true") ? true : false;
	login.is_affiliate_mgr = (result.is_affiliate_mgr == "true") ? true : false;
	login.is_country_mgr = (result.is_country_mgr == "true") ? true : false;
	login.is_region_division_mgr = (result.is_region_division_mgr == "true") ? true : false;
	login.is_local_user = (result.is_local_user == "true") ? true : false;
	login.is_desk_user = (result.is_desk_user == "true") ? true : false;
	login.is_vivarte_user = (result.is_vivarte_user == "true") ? true : false;
	login.is_imac_requestor = (result.is_imac_requestor == "true") ? true : false;
	login.is_imac_validator = (result.is_imac_validator == "true") ? true : false;
    login.is_imac_contributor = (result.is_imac_contributor == "true") ? true : false;
    c_debug(debug.init, "=> check_user_lanes_ok: login = ", login);

	set_section_visibility();

    RMPApplication.debug("end check_user_lanes_ok"); 
} 

function check_user_lanes_ko(error) 
{
    RMPApplication.debug("begin check_user_lanes_ko: error = " + JSON.stringify(error));
    c_debug(debug.init, "=> check_user_lanes_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("get_info_ko_msg", "Vérification impossible des droits de l'utilisateur!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug("end check_user_lanes_ko"); 
} 

// ====================================================================================
//   Set some sections visibility according to roles user
// ====================================================================================

function set_section_visibility() 
{
    RMPApplication.debug("begin set_section_visibility : login = " + login);
    c_debug(debug.init, "=> set_section_visibility: login.is_sdmo = ", login.is_sdmo);

	// Following section shoubd be visible only for SDMO usersPRET
	id_fujitsu_follow_up.setVisible(login.is_sdmo);
	id_fujitsu_follow_up.open();
	id_imac_history.setVisible(login.is_sdmo);

	fillTechnicianBox();
    fillServerBox();
    
	RMPApplication.debug("end set_section_visibility");
}

// ====================================================================================
//   Define IMAC Family and Category
// ====================================================================================
function setFamCat(type) 
{
    RMPApplication.debug("begin setFamCat");
    c_debug(debug.categ, "=> setFamCat: type = ", type);

	// save type of request for windows title
   	id_request_type.setValue(type);

	// Complete country selection filter according connected profile
    switch (type) {
        case "new_open" : 					// new shop open
        	request.family = "magasin";
        	request.category = "ouverture";
            break;
        case "re_open" : 					// shop re-open
        	request.family = "magasin";
        	request.category = "re-ouverture";
            break;            
        case "definitive_close" : 			// definitive shop close
        	request.family = "magasin";
        	request.category = "fermeture-definitive";
            break;
        case "temporary_close" : 			// temporaryshop close
        	request.family = "magasin";
        	request.category = "fermeture-provisoire";
            break;            
        case "move" : 						// shop move
        	request.family = "magasin";
        	request.category = "demenagement";
            break;
        case "add" : 						// new cash desk add
        	request.family = "caisse";
        	request.category = "ajout";
            break;            
        case "delete" : 					// cash desk deletion
        	request.family = "caisse";
        	request.category = "retrait";
            break;
        case "transfer" : 					// cash desk transfer
        	request.family = "caisse";
        	request.category = "deplacement";
            break;
        case "out_of_scope" : 					// cash desk transfer
        	request.family = "out_of_scope";
        	request.category = "out_of_scope";
            break;
    }

    // save what kind of category and action are requested
    id_category.setValue(request.category);

    // show a text box with choice's user as reminder
    showUserChoice();

	RMPApplication.debug("end setFamCat");
}

// ====================================================================================
//   Find request_type if category is already defined
// ====================================================================================
function findRequestType(cat) 
{
    RMPApplication.debug("begin findRequestType");
    c_debug(debug.categ, "=> findRequestType: cat = ", cat);
	var req_type = "";

	// Complete country selection filter according connected profile
    switch (cat) {
        case "ouverture" : 						// new shop open
        	req_type = "new_open";
            break;
        case "re-ouverture" : 					// shop re-open
        	req_type = "re_open";
            break;            
        case "fermeture-definitive" : 			// definitive shop close
        	req_type = "definitive_close";
            break;
        case "fermeture-provisoire" : 			// temporaryshop close
        	req_type = "temporary_close";
            break;            
        case "demenagement" : 					// shop move
        	req_type = "move";
            break;
        case "ajout" : 							// new cash desk add
        	req_type = "add";
            break;            
        case "delete" : 						// cash desk deletion
        	req_type = "delete";
            break;
        case "deplacement" : 					// cash desk transfer
        	req_type = "transfer";
            break;
        case "out_of_scope" : 					// cash desk transfer
        	req_type = "out_of_scope";
            break;
    }

    c_debug(debug.categ, "=> findRequestType: req_type = ", req_type);
    return req_type;

	RMPApplication.debug("end findRequestType");
}

// ====================================================================================
//   Reset Action ("Réinitialiser" button or after a new Work Order request creation)
// ====================================================================================
function showUserChoice() 
{
    RMPApplication.debug("begin showUserChoice");
    c_debug(debug.categ, "=> showUserChoice: request = ", request);

	var id_moduleCards = $("#id_module_cards");
	var id_userChoiceRow = $("#id_user_choice_row");
	var id_userChoiceImg = $("#id_user_choice_img");
	var id_userChoice = $("#id_user_choice");
	var id_imacTitle = $("#id_imac_title");
	var id_imacToDo = $("#id_imacToDo");
	var shop_img = "https://live.runmyprocess.com/live/112501480325272109/upload/05c7f6c0-25c7-11e7-869b-02b3a23437c9/locations_200.png";
	var cashDesk_img = "https://live.runmyprocess.com/live/112501480325272109/upload/eae44430-25c6-11e7-9176-0619bd984419/cash_desk_200.png";
	var outOfScope_img = "https://live.runmyprocess.com/live/112501480325272109/upload/1f832ee0-25c7-11e7-9176-0619bd984419/out_of_scope_200.png";
	var choice_img = "";
	var imacTitle = "";
	var fontAwesome = "";
	var matAction = "";
	var title = ${P_quoted(i18n("error_showUserChoice_title", "Information"))};
	var content = ${P_quoted(i18n("error_showUserChoice_msg", "Le type d'opération demandée n'a pas encore été implémenté!"))};

	switch (request.category) {
		case "ouverture" :
			imacTitle = ${P_quoted(i18n("new_open_imacTitle", "Ouverture de magasin"))};
			fontAwesome = "fa fa-plus-square fa-lg";
			matAction = "install";
			$("#id_rowBusinessDate").show();
			$("#id_rowKeyReturnDate").hide();
			break;
		case "re-ouverture" :
			imacTitle = ${P_quoted(i18n("re_open_imacTitle", "Ré-ouverture de magasin"))};
			fontAwesome = "fa fa-plus-square fa-lg";
			matAction = "install";
			$("#id_rowBusinessDate").show();
			$("#id_rowKeyReturnDate").hide();
			break;
		case "fermeture-definitive" :
			imacTitle = ${P_quoted(i18n("definitive_close_imacTitle", "Fermeture Définitive de magasin"))};
			fontAwesome = "fa fa-minus-square fa-lg";
			matAction = "delete";
			$("#id_rowBusinessDate").show();
			$("#id_rowKeyReturnDate").show();
			break;
		case "fermeture-provisoire" :
			imacTitle = ${P_quoted(i18n("temporary_close_imacTitle", "Fermeture Provisoire de magasin"))};
			fontAwesome = "fa fa-minus-square fa-lg";
			matAction = "delete";
			$("#id_rowBusinessDate").show();
			$("#id_rowKeyReturnDate").hide();
			break;
		case "demenagement" :
			imacTitle = ${P_quoted(i18n("move_imacTitle", "Déménagement de magasin"))};
			fontAwesome = "fa fa-arrows-alt fa-lg";
			matAction = "move";
			$("#id_rowBusinessDate").hide();
			$("#id_rowKeyReturnDate").show();
			break;
		case "ajout" :
			imacTitle = ${P_quoted(i18n("add_imacTitle", "Rajout de caisse(s)"))};
			fontAwesome = "fa fa-plus-circle fa-lg";
			matAction = "add";
			$("#id_rowBusinessDate").hide();
			$("#id_rowKeyReturnDate").hide();
			break;
		case "retrait" :
			imacTitle = ${P_quoted(i18n("delete_imacTitle", "Retrait de caisse(s)"))};
			fontAwesome = "fa fa-minus-circle fa-lg";
			matAction = "delete";
			$("#id_rowBusinessDate").hide();
			$("#id_rowKeyReturnDate").hide();
			break;
		case "deplacement" :
			imacTitle = ${P_quoted(i18n("transfer_imacTitle", "Déplacement de caisse(s)"))};
			fontAwesome = "fa fa-exchange fa-lg";
			matAction = "move";
			$("#id_rowBusinessDate").hide();
			$("#id_rowKeyReturnDate").hide();
			break;
		case "out_of_scope" :
			imacTitle = ${P_quoted(i18n("out_of_scope_imacTitle", "Demande hors catalogue"))};
			fontAwesome = "fa fa-file-o fa-lg";
			matAction = "out_of_scope";
			$("#id_rowBusinessDate").hide();
			$("#id_rowKeyReturnDate").hide();
			break;												
		default:
	        dialog_warning(title, content, btn_ok);
			resetWI();
			break;
	}

	switch (request.family) {
		case "magasin" : 
			choice_img = shop_img;
			break;
		case "caisse" : 
			choice_img = cashDesk_img;
			break;
		default : 
			choice_img = outOfScope_img;
			break;
	}

	var action = "Matériel à ";
	switch (matAction) {
		case "add" : 
			action += ${P_quoted(i18n("add_action", "ajouter"))};
			$("#id_rowBusinessDate").show();
			break;
		case "install" : 
			action += ${P_quoted(i18n("install_action", "installer"))};
			$("#id_rowBusinessDate").show();
			break;
		case "delete" : 
			action += ${P_quoted(i18n("delete_action", "retirer"))};
			$("#id_rowBusinessDate").show();
			break;
		case "move" : 
			action += ${P_quoted(i18n("move_action", "déplacer"))};
			$("#id_rowBusinessDate").hide();
			break;
		case "out_of_scope" :
			action = ${P_quoted(i18n("out_of_scope_action", "Préciser le périmètre concerné"))};
			break;
	}

    c_debug(debug.categ, "=> showUserChoice: matAction = " + matAction + "\n + action: " + action);

	// hide choice modules part
	id_moduleCards.hide();

	// resume selected IMAC choice
	var content = '<div class="module"><img class="img-circle" src="' + choice_img + '"></div>';
	id_userChoice.html('');
	id_userChoiceImg.html('');
	id_userChoiceImg.append(content);
	content = '<i class="' + fontAwesome + '"" aria-hidden="true"></i>';
	content += '&nbsp;&nbsp;' + imacTitle;
	id_userChoice.append(content);
	id_userChoiceRow.show();

	// set some fields values
	id_material_todo.setSelectedValue(matAction);
	id_material_action.setValue(matAction);
	id_imac_title.setValue(imacTitle);

	// show a little reminder about what action is requested
	id_imacToDo.html('');
	id_imacToDo.append(action);
	id_imacToDo.show();	


	// toggle location details part
	id_location_info.setVisible(true);

	RMPApplication.debug("end showUserChoice");
}

// ====================================================================================
//   validate or not user's input according pattern rules...
// ====================================================================================
function dataValidation() 
{
	RMPApplication.debug("begin dataValidation");
    var state_value = id_state.getValue();
    c_debug(debug.datas, "=> dataValidation: state = ", state_value);

	// set temporary variables for each HTML fields
	var id_technicianRequest = $("#id_technicianRequest");			// technicianRequest input
	var id_serverRequest = $("#id_serverRequest");					// serverRequest input
	var distanceCost = (id_distance_cost.getSelectedValue() == "yes") ? "yes" : "no";			// distance: more than 20 kms
	var id_cashdeskNb = $("#id_cashdeskNb");
	var id_scannerNb = $("#id_scannerNb");
	var id_handScannerNb = $("#id_handScannerNb");
	var id_tpeNb = $("#id_tpeNb");
	var id_tpaNb = $("#id_tpaNb");	
	var id_ticketPrinterNb = $("#id_ticketPrinterNb");
	var id_boPrinterNb = $("#id_boPrinterNb");
	var id_customerComments = $("#id_customerComments");
	var id_techDate = $("#id_techDate");
	var id_techTime = $("#id_techTime");
	var id_runDate = $("#id_runDate");
	var id_businessDate = $("#id_businessDate");
	var id_keyReturnDate = $("#id_keyReturnDate");
	var id_woNb = $("#id_woNb");
	var id_totalAmount = $("#id_totalAmount");
	var id_fujitsuComments = $("#id_fujitsuComments");
	var id_deliveryDate = $("#id_deliveryDate");
	var id_collectDate = $("#id_collectDate");
	var id_restrictedAccess = $("#id_restrictedAccess");
	var datum = "";

	// Customer set following values
	if (id_material_todo.getValue() == "move") {
		id_distance_cost.setSelectedValue(distanceCost);
	}
	id_technician.setSelectedValue(id_technicianRequest.val());
	id_server.setSelectedValue(id_serverRequest.val());
	id_cashdesk_nb.setValue(id_cashdeskNb.val());
	id_scanner_nb.setValue(id_scannerNb.val());
	id_hand_scanner_nb.setValue(id_handScannerNb.val());
	id_tpe_nb.setValue(id_tpeNb.val());
	id_tpa_nb.setValue(id_tpaNb.val());
	id_ticket_printer_nb.setValue(id_ticketPrinterNb.val());
	id_bo_printer_nb.setValue(id_boPrinterNb.val());
	id_customer_comments.setValue(id_customerComments.val());
	id_technician_time.setValue(id_techTime.val());
	id_restricted_access.setValue(id_restrictedAccess.val());

    var contexte = id_context.getValue();
    // contexte == "web" for desktop screen and datepicker; otherwise (for tablet & mobile) datebox is used as calendar component
    var date_separator = (contexte == "web") ? "/" :  "-";
    var temp_techTime = "10:00";

	if (!isEmpty(id_techDate.val())) {
		datum = stringToDateTime(id_techDate.val() + " " + temp_techTime, date_separator);
		datum = Math.round(datum.getTime()/ 1000);
		id_technician_date.setDate(datum);
	}
	if (!isEmpty(id_runDate.val())) {
		datum = stringToDateTime(id_runDate.val() + " " + temp_techTime, date_separator);
		datum = Math.round(datum.getTime()/ 1000);
		id_run_date.setDate(datum);
	}
	if (!isEmpty(id_businessDate.val())) {
		datum = stringToDateTime(id_businessDate.val() + " " + temp_techTime, date_separator);
		datum = Math.round(datum.getTime()/ 1000);
		id_business_date.setDate(datum);
	}
	if (!isEmpty(id_keyReturnDate.val())) {
		datum = stringToDateTime(id_keyReturnDate.val() + " " + temp_techTime, date_separator);
		datum = Math.round(datum.getTime()/ 1000);
		id_key_return_date.setDate(datum);
	}

	if (state_value == "sent" || state_value == "planned" || state_value == "accepted" || state_value == "achieved" || state_value == "cancelled") {

		id_wo_number.setValue(id_woNb.val());
		id_total_amount.setValue(id_totalAmount.val());
		id_fujitsu_comments.setValue(id_fujitsuComments.val());

		if (!isEmpty(id_deliveryDate.val())) {
			datum = stringToDateTime(id_deliveryDate.val() + " " + temp_techTime, date_separator);
			datum = Math.round(datum.getTime()/ 1000);
			id_delivery_date.setDate(datum);
		}
		if (!isEmpty(id_collectDate.val())) {
			datum = stringToDateTime(id_collectDate.val() + " " + temp_techTime, date_separator);
			datum = Math.round(datum.getTime()/ 1000);
			id_collect_date.setDate(datum);
		}	
	}

	switch (state_value) {
		case "sent" :
			// id_save_draft.setVisible(false);
            // id_transfer_to_sdmo.setVisible(false);
            c_debug(debug.datas, "=> dataValidation: DRAFT & SENT TO FUJITSU buttons should be hidden");
			break;
        case "planned" :
        case "accepted" :
			id_imac_update.setVisible(true);
			id_sdmo_validation.setVisible(true);
            id_sdmo_cancellation.setVisible(true);
            c_debug(debug.datas, "=> dataValidation: 3 SDMO buttons should be visible");
			break;
		case "achieved" :
			id_imac_update.setVisible(false);
			id_sdmo_validation.setVisible(false);
            id_sdmo_cancellation.setVisible(false);
            c_debug(debug.datas, "=> dataValidation: 3 SDMO buttons should be hidden");
			break;
		case "cancelled" :
			id_imac_update.setVisible(false);
			id_sdmo_validation.setVisible(false);
            id_sdmo_cancellation.setVisible(false);
            c_debug(debug.datas, "=> dataValidation: 3 SDMO buttons should be hidden");
			break;
		default: 		// state = "draft" or EMPTY
			id_save_draft.setVisible(true);
            id_transfer_to_sdmo.setVisible(true);
            c_debug(debug.datas, "=> dataValidation: DRAFT & SENT TO FUJITSU buttons should be visible");
			break;		
	}

	// =========================================================
	// TO DO: Liste de contrôle des erreurs possibles de saisie
	// =========================================================
	var toDoList = '<ul>';
	// List of input's control
	if (request.category != "out_of_scope") {

		if (!isEmpty(id_scannerNb.val())) {		// # of cashdesk is known

			if ( id_scannerNb.val() > id_cashdeskNb.val() ) {
				toDoList += '<li>Nb de scanner > Nb de caisse(s)</li>';
			}
			if ( id_handScannerNb.val() > id_cashdeskNb.val() ) {
				toDoList += '<li>Nb de douchette > Nb de caisse(s)</li>';
			}
			if ( id_tpeNb.val() > id_cashdeskNb.val() ) {
				toDoList += '<li>Nb de TPE(s) > Nb de caisse(s)</li>';
			}
			if ( id_tpaNb.val() > id_cashdeskNb.val() ) {
				toDoList += '<li>Nb de TPA(s) > Nb de caisse(s)</li>';
			}
			if ( id_ticketPrinterNb.val() > id_cashdeskNb.val() ) {
				toDoList += '<li>Nb d\'impr. ticket > Nb de caisse(s)</li>';
			}
			if ( id_boPrinterNb.val() > id_cashdeskNb.val() ) {
				toDoList += '<li>Nb d\'impr. A4 > Nb de caisse(s)</li>';
			}
		}
	}
	toDoList += '</ul>';

	update_done = true;

	RMPApplication.debug("end dataValidation");
}

// ====================================================================================
//   Save Draft by customer, IMAC request not sent to Fujitsu
// ====================================================================================
function saveDraft() 
{
    RMPApplication.debug("begin saveDraft");
    c_debug(debug.process_btn, "=> saveDraft");

	id_state.setValue("draft");
	dataValidation();

	RMPApplication.debug("end saveDraft");
	
	return true;		// needed as called by pre-launch script "Enregistrer sans envoyer" button
}

// ====================================================================================
//   Send IMAC request to Fujitsu SDMO
// ====================================================================================
function sendRequest() 
{
    RMPApplication.debug("begin sendRequest");
    c_debug(debug.process_btn, "=> sendRequest");

	var contexte = id_context.getValue();
	// contexte == "web" for desktop screen; otherwise (for tablet & mobile) warehouse Module is not available as actual data report's presentation is poor with Google tables

	var id_techDate = $("#id_techDate");
	var id_techTime = $("#id_techTime");
	var missing_info = ( isEmpty(id_techDate.val()) && isEmpty(id_techTime.val()) ) ? true : false;

	if (missing_info) { 

		var content = ${P_quoted(i18n("error_sendRequest_msg", "L'un des 2 champs doit être rempli <br>- <strong>Date d'intervention souhaitée</strong><br>- <strong>Horaire / Semaine</strong>"))};
		dialog_warning(error_title_notify, content, btn_ok);
		return false;		// not sent to SDMO as mandatory info are not provided

	} else {                       // tablet or mobile

		id_state.setValue("sent");
		// update IMAC global state
		imacStateUpdate();
		dataValidation();
		return true;		// needed as called by pre-launch script "Envoyer la demande" button
	}

	RMPApplication.debug("end sendRequest");
}

// ====================================================================================
//   Activate all fields and retrieve all datas for confirmation by Fujitsu SDMO
// ====================================================================================
function retrieveAllDatas() 
{
    RMPApplication.debug("begin retrieveAllDatas");
    c_debug(debug.datas, "=> retrieveAllDatas");

	// Fill technician & server boxes before retrieving real values
    fillTechnicianBox();
    fillServerBox();
    var state_value = id_state.getValue();
    c_debug(debug.datas, "=> retrieveAllDatas state = ", state_value);

	// set temporary variables for each HTML fields
	var id_technicianRequest = $("#id_technicianRequest");			// technicianRequest input
	var id_serverRequest = $("#id_serverRequest");					// serverRequest input
	var id_distanceCost = $("#id_distanceCost");					// distance: more than 20 kms
	var id_cashdeskNb = $("#id_cashdeskNb");
	var id_scannerNb = $("#id_scannerNb");
	var id_handScannerNb = $("#id_handScannerNb");
	var id_tpeNb = $("#id_tpeNb");
	var id_tpaNb = $("#id_tpaNb");	
	var id_ticketPrinterNb = $("#id_ticketPrinterNb");
	var id_boPrinterNb = $("#id_boPrinterNb");
	var id_customerComments = $("#id_customerComments");
	var id_techDate = $("#id_techDate");
	var id_techTime = $("#id_techTime");
	var id_runDate = $("#id_runDate");
	var id_businessDate = $("#id_businessDate");
	var id_keyReturnDate = $("#id_keyReturnDate");
	var id_woNb = $("#id_woNb");
	var id_totalAmount = $("#id_totalAmount");
	var id_fujitsuComments = $("#id_fujitsuComments");
	var id_deliveryDate = $("#id_deliveryDate");
	var id_collectDate = $("#id_collectDate");
	var id_restrictedAccess = $("#id_restrictedAccess");
	var datum = "";


	// Customer set following values
	id_technicianRequest.val(id_technician.getSelectedValue());
	id_serverRequest.val(id_server.getSelectedValue());
	id_cashdeskNb.val(id_cashdesk_nb.getValue());
	id_scannerNb.val(id_scanner_nb.getValue());
	id_handScannerNb.val(id_hand_scanner_nb.getValue());
	id_tpeNb.val(id_tpe_nb.getValue());
	id_tpaNb.val(id_tpa_nb.getValue());
	id_ticketPrinterNb.val(id_ticket_printer_nb.getValue());
	id_boPrinterNb.val(id_bo_printer_nb.getValue());
	id_customerComments.val(id_customer_comments.getValue());
	id_fujitsuComments.val(id_fujitsu_comments.getValue());
	id_techTime.val(id_technician_time.getValue());
	id_restrictedAccess.val(id_restricted_access.getValue());

	if (!isEmpty(id_wo_number.getValue())) {
		id_woNb.val(id_wo_number.getValue());
	}

	if (!isEmpty(id_total_amount.getValue())) {
		id_totalAmount.val(id_total_amount.getValue());
	}
	
    var contexte = id_context.getValue();
    // contexte == "web" for desktop screen and datepicker; otherwise (for tablet & mobile) datebox is used as calendar component
    var date_separator = (contexte == "web") ? "/" :  "-";

	var date_format = "DD" + date_separator + "MM" + date_separator + "YYYY";
	if (!isEmpty(id_technician_date.getDate())) {
		datum = moment.unix(id_technician_date.getDate()).format(date_format);
		id_techDate.val(datum);
	}
	if (!isEmpty(id_run_date.getDate())) {
		datum = moment.unix(id_run_date.getDate()).format(date_format);
		id_runDate.val(datum);
	}
	if (!isEmpty(id_business_date.getDate()) ) {
		datum = moment.unix(id_business_date.getDate()).format(date_format);
		id_businessDate.val(datum);
	}
	if (!isEmpty(id_key_return_date.getDate()) ) {
		datum = moment.unix(id_key_return_date.getDate()).format(date_format);
		id_keyReturnDate.val(datum);
	}
	if (!isEmpty(id_delivery_date.getDate())) {
		datum = moment.unix(id_delivery_date.getDate()).format(date_format);
		id_deliveryDate.val(datum);
	}
	if (!isEmpty(id_collect_date.getDate())) {
		datum = moment.unix(id_collect_date.getDate()).format(date_format);
		id_collectDate.val(datum);
	}		

	switch (state_value) {
		case "draft" : 
			id_save_draft.setVisible(true);			// only active for "Création de l'IMAC"
			id_transfer_to_sdmo.setVisible(true);	// only active for "Création de l'IMAC"
            break;
		case "achieved" : 
		case "cancelled" : 
			id_imac_update.setVisible(false);		// only active for "Informations Fujitsu screen"
			id_sdmo_validation.setVisible(false);	// only active for "Informations Fujitsu screen"
			id_sdmo_cancellation.setVisible(false);	// only active for "Informations Fujitsu screen"
			break;
        default :
            var id_woNb = $("#id_woNb");
            var id_techDate = $("#id_techDate");
            if (isEmpty(id_woNb.val()) || isEmpty(id_techDate.val())) {
                id_inter_planned.setChecked(false);
            } else {            // Intervention date & WO filled
                id_inter_planned.setChecked(true);
            }
            if (id_imac_achieved.isChecked()) {        // IMAC can't be achieved if not "achieved" state
                id_imac_achieved.setChecked(false);
            }
            if (id_imac_cancelled.isChecked()) {        // IMAC can't be cancelled if not "cancelled" state
                id_imac_cancelled.setChecked(false);
            }
			id_imac_update.setVisible(true);		// only active for "Informations Fujitsu screen"
			id_sdmo_validation.setVisible(true);	// only active for "Informations Fujitsu screen"
            id_sdmo_cancellation.setVisible(true);	// only active for "Informations Fujitsu screen"
            /* if (id_imac_update.isEnabled()) {
				// Update last informations related to present IMAC
				RMPApplication.save(updateImac, updateImacFail);
			} */
			break;
	}

	RMPApplication.debug("end retrieveAllDatas");
}

// ====================================================================================
//   validate or not user's input according pattern rules...
// ====================================================================================
function sdmoValidation() 
{
	RMPApplication.debug("begin sdmoValidation");
    var state_value = id_state.getValue();
    c_debug(debug.datas, "=> sdmoValidation: state = ", state_value);

	// set temporary variables for each HTML fields
	var id_technicianRequest = $("#id_technicianRequest");
	var id_serverRequest = $("#id_serverRequest");
	var distanceCost = (id_distance_cost.getSelectedValue() == "yes") ? "yes" : "no";			// distance: more than 20 kms
	var id_cashdeskNb = $("#id_cashdeskNb");
	var id_scannerNb = $("#id_scannerNb");
	var id_handScannerNb = $("#id_handScannerNb");
	var id_tpeNb = $("#id_tpeNb");
	var id_tpaNb = $("#id_tpaNb");	
	var id_ticketPrinterNb = $("#id_ticketPrinterNb");
	var id_boPrinterNb = $("#id_boPrinterNb");
	var id_customerComments = $("#id_customerComments");
	var id_techDate = $("#id_techDate");
	var id_techTime = $("#id_techTime");
	var id_runDate = $("#id_runDate");
	var id_businessDate = $("#id_businessDate");
	var id_keyReturnDate = $("#id_keyReturnDate");
	var id_woNb = $("#id_woNb");
	var id_totalAmount = $("#id_totalAmount");
	var id_fujitsuComments = $("#id_fujitsuComments");
	var id_deliveryDate = $("#id_deliveryDate");
	var id_collectDate = $("#id_collectDate");
	var id_restrictedAccess = $("#id_restrictedAccess");
	var datum = "";

	// Customer set following values
	if (id_material_todo.getValue() == "move") {
		id_distance_cost.setSelectedValue(distanceCost);
	}
	id_wo_number.setValue(id_woNb.val());
	id_total_amount.setValue(id_totalAmount.val());
	var id_tech = (isEmpty(id_technicianRequest.val())) ? "no" : id_technicianRequest.val();
	id_technician.setSelectedValue(id_tech);
	var id_serv = (isEmpty(id_serverRequest.val())) ? "no" : id_serverRequest.val();
	id_server.setSelectedValue(id_serv);
	id_cashdesk_nb.setValue(id_cashdeskNb.val());
	id_scanner_nb.setValue(id_scannerNb.val());
	id_hand_scanner_nb.setValue(id_handScannerNb.val());
	id_tpe_nb.setValue(id_tpeNb.val());
	id_tpa_nb.setValue(id_tpaNb.val());
	id_ticket_printer_nb.setValue(id_ticketPrinterNb.val());
	id_bo_printer_nb.setValue(id_boPrinterNb.val());
	id_customer_comments.setValue(id_customerComments.val());
	id_fujitsu_comments.setValue(id_fujitsuComments.val());
	id_technician_time.setValue(id_techTime.val());
	id_restricted_access.setValue(id_restrictedAccess.val());

    var contexte = id_context.getValue();
    // contexte == "web" for desktop screen and datepicker; otherwise (for tablet & mobile) datebox is used as calendar component
    var date_separator = (contexte == "web") ? "/" :  "-";
    var temp_techTime = "10:00";

	if (!isEmpty(id_techDate.val())) {
		datum = stringToDateTime(id_techDate.val() + " " + temp_techTime, date_separator);
		datum = Math.round(datum.getTime()/ 1000);
		id_technician_date.setDate(datum);
	}
	if (!isEmpty(id_runDate.val())) {
		datum = stringToDateTime(id_runDate.val() + " " + temp_techTime, date_separator);
		datum = Math.round(datum.getTime()/ 1000);
		id_run_date.setDate(datum);
	}
	if (!isEmpty(id_businessDate.val())) {
		datum = stringToDateTime(id_businessDate.val() + " " + temp_techTime, date_separator);
		datum = Math.round(datum.getTime()/ 1000);
		id_business_date.setDate(datum);
	}
	if (!isEmpty(id_keyReturnDate.val())) {
		datum = stringToDateTime(id_keyReturnDate.val() + " " + temp_techTime, date_separator);
		datum = Math.round(datum.getTime()/ 1000);
		id_key_return_date.setDate(datum);
	}
	if (!isEmpty(id_deliveryDate.val())) {
		datum = stringToDateTime(id_deliveryDate.val() + " " + temp_techTime, date_separator);
		datum = Math.round(datum.getTime()/ 1000);
		id_delivery_date.setDate(datum);
	}
	if (!isEmpty(id_collectDate.val())) {
		datum = stringToDateTime(id_collectDate.val() + " " + temp_techTime, date_separator);
		datum = Math.round(datum.getTime()/ 1000);
		id_collect_date.setDate(datum);
	}

	// =========================================================
	// TO DO: Liste de contrôle des erreurs possibles de saisie
	// =========================================================
	var toDoList = '<ul>';
	// List of input's control
	if (request.category != "out_of_scope") {

		if (!isEmpty(id_scannerNb.val())) {		// # of cashdesk is known

			if ( id_scannerNb.val() > id_cashdeskNb.val() ) {
				toDoList += '<li>Nb de scanner > Nb de caisse(s)</li>';
			}
			if ( id_handScannerNb.val() > id_cashdeskNb.val() ) {
				toDoList += '<li>Nb de douchette > Nb de caisse(s)</li>';
			}
			if ( id_tpeNb.val() > id_cashdeskNb.val() ) {
				toDoList += '<li>Nb de TPE(s) > Nb de caisse(s)</li>';
			}
			if ( id_tpaNb.val() > id_cashdeskNb.val() ) {
				toDoList += '<li>Nb de TPA(s) > Nb de caisse(s)</li>';
			}
			if ( id_ticketPrinterNb.val() > id_cashdeskNb.val() ) {
				toDoList += '<li>Nb d\'impr. ticket > Nb de caisse(s)</li>';
			}
			if ( id_boPrinterNb.val() > id_cashdeskNb.val() ) {
				toDoList += '<li>Nb d\'impr. A4 > Nb de caisse(s)</li>';
			}
		}
	}
	toDoList += '</ul>';

	switch (state_value) {
		case "achieved" :		
		case "cancelled" :
			if (id_imac_update.isEnabled()) {
				// Update last informations related to present IMAC
				RMPApplication.save(updateImac, updateImacFail);
			}
			id_imac_update.setVisible(false);
			id_sdmo_validation.setVisible(false);
			id_sdmo_cancellation.setVisible(false);
			break;
		default :
			id_imac_update.setVisible(true);
			id_sdmo_validation.setVisible(true);
			id_sdmo_cancellation.setVisible(true);
			break;
	}
	update_done = true;

	RMPApplication.debug("end sdmoValidation");
}

// ====================================================================================
//   IMAC closure by Fujitsu SDMO
// ====================================================================================
function woCloseIMAC() 
{
	RMPApplication.debug("begin woCloseIMAC");
    var id_woNb = $("#id_woNb");
    var id_techDate = $("#id_techDate");
    c_debug(debug.process_btn, "=> woCloseIMAC: id_woNb = ", id_woNb.val());
	update_done = false;

	if (isEmpty(id_woNb.val()) || isEmpty(id_techDate.val())) {
		var title = ${P_quoted(i18n("error_woCloseIMAC_title", "Erreur"))};
        var content = ${P_quoted(i18n("error_woCloseIMAC_msg", "Mise à jour impossible! L'un des 2 champs suivants n'est pas renseigné<br>- <strong>N° de Work Order</strong><br>- <strong>Date d'intervention</strong>"))};
        dialog_warning(title, content, btn_ok);
		return false;
	} else {
		id_state.setValue("achieved");
		id_imac_achieved.setChecked(true);
		// update IMAC global state
		updateImacBeforeEnd();

		RMPApplication.debug("end woCloseIMAC");

        c_debug(debug.process_btn, "=> woCloseIMAC: before returning TRUE");
		while (update_done == false) {
			// wait until flag update_done is setted to true
		}
		return true;		// needed as called by pre-launch script "Envoyer la demande" button
	}
}


// ====================================================================================
//   IMAC cancellation by Fujitsu SDMO
// ====================================================================================
function woImacCancel() 
{
    RMPApplication.debug("begin woImacCancel");
    c_debug(debug.process_btn, "=> woImacCancel");
	update_done = false;

	if (isEmpty(id_cancellation_reason.getValue())) {
		var title = ${P_quoted(i18n("error_woImacCancel_title", "Erreur"))};
        var content = ${P_quoted(i18n("error_woImacCancel_msg", "En cas d'<strong>annulation d'un IMAC</strong>, la raison doit être indiquée dans le champ prévu à cet effet!"))};
        dialog_warning(title, content, btn_ok);
		return false;
	} else {
		var id_fujitsuComments = $("#id_fujitsuComments");
		var new_fuji_comments = (isEmpty(id_fujitsu_comments.getValue()) ? "" : id_fujitsu_comments.getValue() + "\n-------------------\n" ) + "- Raison annulation: " + id_cancellation_reason.getValue();
		id_fujitsu_comments.setValue(new_fuji_comments);
		id_fujitsuComments.val(new_fuji_comments);
		id_state.setValue("cancelled");
		id_imac_cancelled.setChecked(true);
		// update IMAC global state
		updateImacBeforeEnd();

		RMPApplication.debug("end woImacCancel");

        c_debug(debug.process_btn, "=> woImacCancel: before returning TRUE");
		while (update_done == false) {
				// wait until flag update_done is setted to true
			}
		return true;		// needed as called by pre-launch script "Annuler l'IMAC" button
	}
}

// ====================================================================================
//   Update IMAC by SDMO => IMAC is still not done
// ====================================================================================
function updateImac() 
{
    RMPApplication.debug("begin updateImac");
    c_debug(debug.process_btn, "=> updateImac");
	update_done = false;

    if (id_inter_planned.isChecked()) {
		id_state.setValue("planned");
	} else if (id_imac_accepted.isChecked()) {
		id_state.setValue("accepted");
	} else {
        id_state.setValue("sent");
    }
	
	// update IMAC global state
	imacStateUpdate();
	dataValidation();

	RMPApplication.debug("end updateImac");
	
    c_debug(debug.process_btn, "=> updateImac: before returning TRUE");
	while (update_done == false) {
		// wait until flag update_done is setted to true
	}
	return true;		// needed as called by pre-launch script "Mettre à jour l'IMAC" button
}

// ====================================================================================
//   Update IMAC by SDMO => IMAC is still not done
// ====================================================================================
function updateImacBeforeEnd() 
{
    RMPApplication.debug("begin updateImacBeforeEnd");
    c_debug(debug.process_btn, "=> updateImacBeforeEnd");

	// update IMAC global state
	imacStateUpdate();
	sdmoValidation();

	RMPApplication.debug("end updateImacBeforeEnd");
}

// ====================================================================================
//   Update IMAC failure
// ====================================================================================
function updateImacFail() 
{
    RMPApplication.debug("begin updateImacFail");
    c_debug(debug.process_btn, "=> updateImacFail");
	
	RMPApplication.debug("end updateImacFail");
	
	return false;		// needed as called by pre-launch script "Mettre à jour l'IMAC" button
}

// ====================================================================================
//   IMAC state update by SDMO => state column report is filled with this info
// ====================================================================================
function imacStateUpdate() 
{
    RMPApplication.debug("begin ImacStateUpdate");
    c_debug(debug.process_btn, "=> ImacStateUpdate");

	var sent_state = ${P_quoted(i18n("sent_state", "Transmise"))};
	var accepted_state = ${P_quoted(i18n("accepted_state", "Acceptée"))};
	var planned_state = ${P_quoted(i18n("planned_state", "Inter.planifiée"))};
	var ordered_state = ${P_quoted(i18n("ordered_state", "Commandée"))};
	var achieved_state = ${P_quoted(i18n("achieved_state", "Réalisée"))};
	var cancelled_state = ${P_quoted(i18n("cancelled_state", "Annulée"))};

	var states = { 
		"sent": sent_state,
		"accepted": accepted_state,
		"planned": planned_state,
		"ordered": ordered_state,
		"achieved": achieved_state,
		"cancelled": cancelled_state
	};
	var state_content = "";
	var separator = " - ";
	if (id_state.getValue() == "sent") {
		state_content += ((state_content == "") ? "" : separator) + states.sent;
	}
	// state_content += ((state_content == "") ? "" : separator) + "<span style=\'background-color: red; color: white;\'>" + states.accepted + "</span>";
	if (id_inter_planned.isChecked()) {
		id_imac_accepted.setChecked(true);
		state_content += ((state_content == "") ? "" : separator) + states.accepted;
		state_content += ((state_content == "") ? "" : separator) + states.planned;
	} else if (id_imac_accepted.isChecked()) {
		state_content += ((state_content == "") ? "" : separator) + states.accepted;
	}
	/* if (id_order_requested.isChecked()) {	// Customer is not aware of this info
		state_content += ((state_content == "") ? "" : separator) + states.ordered;
	} */
	if (id_imac_achieved.isChecked()) {
		state_content = states.achieved;		// previous actions are cleared
	}
	if (id_imac_cancelled.isChecked()) {
		state_content = states.cancelled;		// previous actions are cleared
	}

	id_fujitsu_state.setValue(state_content);

	// Update last informations related to present IMAC
	RMPApplication.save(updateImac, updateImacFail);

	RMPApplication.debug("end ImacStateUpdate");
}