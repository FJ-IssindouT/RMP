// Initialize some fields at program launch
init();

// ===============================
//   Initialization part
// ===============================
function init() 
{
	RMPApplication.debug("begin init : login = " + login);

	RMPApplication.set("variables.location_code", RMPApplication.get("location_code"));
    RMPApplication.set("last_question", "Aucune solution trouvée, décrivez votre problème de façon précise!");   
	var pattern = {};
	pattern.login = RMPApplication.get("login");
    c_debug(debug.init, "=> init: pattern = ", pattern);
    var options = {};
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

	// Define 'view' global variable, used to filter locations scope
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
    c_debug(debug.init, "=> get_info_ok: view = ", view);

    load_location();

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

// ======================
//   Load_location
// ======================
function load_location()
{
    RMPApplication.debug("begin load_location");
	var locationCode = RMPApplication.get("variables.location_code");
	c_debug(debug.init, "=> load_location: locationCode = ", locationCode);
	if (isEmpty(locationCode) || locationCode === "false" || locationCode === "tous") {
        // $("#id_locationFilter").select2("close");
        /*var  title = ${P_quoted(i18n("error_location_title", "Erreur"))};
        var  content = ${P_quoted(i18n("location_selection", "Veuillez sélectionner un seul site, en utilisant si besoin les filtres PAYS et/ou ENSEIGNE..."))};
		RMPApplication.showErrorBox(title, content);*/
		return;
	}

    var my_pattern = {};
    var options = {};
    my_pattern.location_code = locationCode;
    c_debug(debug.init, "my_pattern = ", JSON.stringify(my_pattern));
    id_get_location_by_code_api.trigger(my_pattern , options, load_location_ok, load_location_ko);
    RMPApplication.debug ("end load_location");
}

function load_location_ok(result)
{
    RMPApplication.debug("begin load_location_ok : result = " + JSON.stringify(result));
	c_debug(debug.init, ("=> load_location_ok: result = ", result);
    selected_location = result;
    RMPApplication.set("selected_location", selected_location);
    selected_affiliate.affiliate = selected_location.affiliate.toUpperCase();

    // get abbreviate name of affiliate
    getAffiliate(selected_affiliate.affiliate);

    RMPApplication.debug ("end load_location_ok");    
}

function load_location_ko(error) 
{
    RMPApplication.debug ("begin load_location_ko : error = " + JSON.stringify(error)); 
    c_debug(debug.init, "=> load_location_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("load_location_ko_msg", "Récupération impossible des informations du site!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug ("end load_location_ko");    
}

// ========================================================
//  get complete informations of selected affiliate
// ========================================================
function getAffiliate(affiliate_value)
{
    RMPApplication.debug("=> begin getAffiliate: affiliate_value = ", affiliate_value);
    c_debug(debug.init, "=> getAffiliate: affiliate_value = ", affiliate_value);

    var options = {};
    var input = {};
    var query = {};

    // query.abbreviation = { "$regex" : affiliate_value, "$options" : "i"};    // get selected affiliate value
    query.affiliate = { "$regex" : affiliate_value, "$options" : "i"};          // get selected affiliate value
    input.input_query = query; 
    c_debug(debug.init, "getAffiliate: input = ", input);
    id_get_affiliate_api.trigger(input, options, affiliate_ok, affiliate_ko);
    RMPApplication.debug("end getAffiliate");
}

function affiliate_ok(result)
{
    RMPApplication.debug("begin affiliate_ok : result = " + JSON.stringify(result));
    c_debug(debug.init, "=> affiliate_ok: result = ",result);
    selected_affiliate = result.records[0];
    RMPApplication.set("selected_affiliate", selected_affiliate);

    RMPApplication.debug("end affiliate_ok");
}

function affiliate_ko(error)
{
    RMPApplication.debug("begin affiliate_ko : error = " + JSON.stringify(error));
    c_debug(debug.init, "=> affiliate_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("affiliate_ko_msg", "Erreur lors de la composition du nom de contrat!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug("end affiliate_ko");
}
