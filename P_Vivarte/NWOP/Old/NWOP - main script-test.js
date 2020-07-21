// ========================
//   New Work Order : MAIN
// ========================
RMPApplication.debug("New Work Order : Application started");

// #####################################
// Reactive different calls to SMS-capi
//    Lines: 1304
// #####################################

// ========================
// Variables declaration
// ========================
var view;
var login = {};
var affiliateList = null;       // group of affiliates for specific GRP_AFF view/scope
// var locationList = [];          // list of locations for selected filters
var selected_model = {};        // selected model according to input's user
var selected_location = null;   // selected location according to input's user
var enseigne = null;            // affiliate's login user
var selected_affiliate = {};    // selected affiliate according to input's user
var wm_order = null;            // work order details saved in Service Now
var var_catalog_col = null;     // temporary catalog collection object in memory
var cat_target = null;          // valid categories according preselection during execution
var brand_target = null;        // valid brands according preselection during execution
var model_target = null;        // valid models according preselection during execution
var short_cat = null;           // to keep the selected category's short name
// var prob_type = null;           // to keep the selected problem type's as labeled in Service Now

// execute main program
init();


// ===============================
//   Initialization part
// ===============================
function init() 
{
	RMPApplication.debug("begin init : login = " + login);
	$("#id_spinner_insert").hide();
	resetWI();						// reset Web Interface  & hide sub-level area
	var options = {};
	var pattern = {};
	pattern.login = RMPApplication.get("login");
    // console.log("=> init: pattern = ", pattern);

    // CAPI for getting user information
	id_get_user_info_as_admin_api.trigger (pattern, options , get_info_ok, get_info_ko); 
	RMPApplication.debug("end init");
}

// ======================
//   Reset interface
// ======================
function resetWI()
{
	RMPApplication.debug("begin resetWI");

	// Equipment model tree's choice 
	$("#id_familyRow").hide();	
	$("#id_categoryRow").hide();
	$("#id_brandRow").hide();
	$("#id_modelRow").hide();
	$("#id_selectedModelRow").hide();
	$("#id_divBackRow").hide();	
	// Clear different tree's lines choice
	$("#id_familyRow").html('');
 	$("#id_categoryRow").html('');
	$("#id_brandRow").html('');
	$("#id_modelRow").html('');
	$("#id_selectedItemModel").html('');
	// $("#id_selectedModelRow").html('');
	// Clear hidden fields, especially for a new request or a new item selection
	$("#id_selectedFamily").removeAttr("value");
 	$("#id_selectedCategory").removeAttr("value");
	$("#id_selectedBrand").removeAttr("value");
	$("#id_selectedModel").removeAttr("value");
	$("#id_selectedItemModel").removeAttr("value");

	id_refCustomer.value = '';
	id_descripton.value = '';

    // Create & cancel button => shown only if requestType is defined
    $("#id_rowButton").hide();
	RMPApplication.debug("end resetWI"); 
}

// ====================================================================================
//   Reset Action ("Réinitialiser" button or after a new Work Order request creation)
// ====================================================================================
function resetAction() 
{
	RMPApplication.debug("begin resetAction");
	resetWI();
	load_family();
	RMPApplication.debug("end resetAction");
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
	enseigne = login.affiliate;
    // console.log("=> get_info_ok: login = ", login);

	// Fill contact fields on screen
	id_contact.value = login.user;
    id_phone.value = login.phone;
	id_dateDemande.value = getDateTimeNow();
    id_countryFilter.value = login.country;
    id_affiliateFilter.value = login.affiliate;
    id_locationFilter.value = login.location_code;

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

    // console.log("get_info_ok: view = ", view);
    fillAffiliateBox(view);
    fillCountryBox(view);
	getFilteredLocations();

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

// ========================================================
// According to the view, fill the affiliate select box
// ========================================================
function fillAffiliateBox(vue) 
{
    RMPApplication.debug("begin fillAffiliateBox : vue = ", vue);
    // console.log("=>  fillAffiliateBox: vue = ", vue);

    var affiliateListTemp = JSON.parse(id_affiliate_cl.getList()).list;
    // console.log("=>  fillAffiliateBox: affiliateListTemp = ", affiliateListTemp);
    var text_affiliateFilter = "";

    // Complete affiliate selection filter according connected profile
    switch (vue) {
        case "SUPERUSER" :
        case "COMPANY" : // see "COUNTRY"
        case "COUNTRY" :
            // Following line can be disabled if the concerned company only have one affiliate 
            text_affiliateFilter = ${P_quoted(i18n("affiliateFilter_text", "TOUTES LES ENSEIGNES"))};
            $("#id_affiliateFilter").append($("<option selected />").val('tous').html(text_affiliateFilter));
            affiliateList = JSON.parse(id_affiliate_cl.getList()).list;
            for (var i=0; i < affiliateList.length; i++) {
                $("#id_affiliateFilter").append($("<option />").val(affiliateList[i].value).html("&#10143; " + affiliateList[i].label.toUpperCase()))
            }
            // If we have only one affiliate, we can fix the following field as read-only
            // $("#id_affiliateFilter").attr('readonly', 'readonly');
            break;

        case "GRP_AFF" :
            text_affiliateFilter = ${P_quoted(i18n("affiliateFilter_text", "TOUTES LES ENSEIGNES"))};
            $("#id_affiliateFilter").append($("<option selected />").val('tous').html(text_affiliateFilter));
            affiliateList = [];
            switch (login.grp_affiliates) {
                case 'SMC':
                    affiliateList = [{'label':'COSMOPARIS', 'value':'COSMO'}, {'label':'MINELLI', 'value':'MINELLI'}, {'label':'SAN MARINA', 'value':'SMARINA'}];
                    break;
                case 'HALLES':
                    affiliateList = [{'label':'LA HALLE CHAUSSURE', 'value':'CEC'}, {'label':'LA HALLE MODE', 'value':'HAV'}];
                    break;
                default:
                    break;
            }
            for (var i=0; i < affiliateList.length; i++) {
                $("#id_affiliateFilter").append($("<option />").val(affiliateList[i].value).html("&#10143; " + affiliateList[i].label.toUpperCase()));

            }
            break;

        case "AFFILIATE" :  // see "LOCAL"
        case "DIVISION" :   // see "LOCAL"
        case "REGION" :     // see "LOCAL"
        case "LOCAL" :
            affiliateList = [];
            for (var i=0; i < affiliateListTemp.length; i++) {
                if (affiliateListTemp[i].label.toUpperCase() == login.affiliate.toUpperCase()) {
                     affiliateList = [{ 'label': affiliateListTemp[i].label.toUpperCase(), 'value': affiliateListTemp[i].value }];
                }
            }
            // console.log("fillAffiliateBox: affiliateList = ", affiliateList);
            $("#id_affiliateFilter").append($("<option selected />").val(affiliateList[0].value).html(affiliateList[0].label.toUpperCase()));
            $("#id_affiliateFilter").attr('readonly', 'readonly');
            break;
    }

    // Listen changes before populating dynamically locations select box
    $("#id_affiliateFilter").change(getFilteredLocations);
    RMPApplication.debug ("end fillAffiliateBox"); 
}

// ========================================================
// According to the view, fill the country select box
// ========================================================
function fillCountryBox(vue) 
{
    RMPApplication.debug("begin fillCountryBox: vue = " + JSON.stringify(vue));
    // console.log("=>  fillCountryBox: vue = ", vue);

    var text_countryFilter = "";

    // Complete country selection filter according connected profile
    switch (vue) {
        case "SUPERUSER" :
            // no instructions for the moment

        case "COMPANY" :        // see "AFFILIATE"
        case "GRP_AFF" :        // see "AFFILIATE"
        case "AFFILIATE" :  
            // ATTENTION: we use a hidden CustomRMP component List to generate our own list
            // First option include all countries to avoid a huge selection of all countries
            text_countryFilter = ${P_quoted(i18n("countryFilter_text", "TOUS LES PAYS"))};
            $("#id_countryFilter").append($("<option selected />").val('tous').html(text_countryFilter));
            var countryList = JSON.parse(id_country_cl.getList()).list;
            countryList = countryList.sort(sortArrayByKey({key: 'label', string: true}, false) );
            $.each(countryList, function() {
                var id_i = this.value;
                var text_i = "&#10143; " + this.label.toUpperCase();
                if ( this.label.toUpperCase() == login.country.toUpperCase() ) {
                    $('#id_countryFilter[value="tous"]').attr('selected', false);
                    $("#id_countryFilter").append($("<option selected />").val(id_i).html(text_i));
                } else {
                    $("#id_countryFilter").append($("<option />").val(id_i).html(text_i));
                }
            });
            // getFilteredLocations();
            break;

        case "COUNTRY" :    // see "LOCAL"
        case "DIVISION" :   // see "LOCAL"
        case "REGION" :     // see "LOCAL"
        case "LOCAL" :
            $("#id_countryFilter").append($("<option selected />").val(login.country).html(login.country.toUpperCase()));
            $("#id_countryFilter").attr('readonly', 'readonly');
            break;
    }

    // Listen changes before populating dynamically locations select box
    $("#id_countryFilter").change(getFilteredLocations);

    RMPApplication.debug ("end fillCountryBox"); 
}

// ========================================================
// According to the view, fill the available locations
// ========================================================
function fillLocationBox(locations_array)
{
    RMPApplication.debug("begin fillLocationBox : locations_array = " + JSON.stringify(locations_array));
    // console.log("=>  fillLocationBox: locations_array = ", locations_array);
    
    // Reset especially products navigation part
    resetWI();
    
    $("#id_locationFilter").empty();    // field reset

    // locationList = [];

    if (locations_array.length > 0) {
       // We propose a list of locations, but only one location must be selected by the user

        // to permit the display of placeholder
        $("#id_locationFilter").append($("<option />").html(''));

        // locations_array is alphabetically ordered
        locations_array = locations_array.sort(sortArrayByKey({key: 'location_code', string: true}, false) );

        // We populate selection box with all locations match filter queries
        $.each(locations_array, function() {
            var id_i = this.location_code;
            var text_i = "&#10143; " + this.location_code + " - " + this.city.toUpperCase();
            if (locations_array.length == 1) {
                $("#id_locationFilter").append($("<option selected />").val(id_i).html(text_i));
            } else {  
                $("#id_locationFilter").append($("<option />").val(id_i).html(text_i));
            }
        });

    } else {    
        // if locations_array is empty, "false" is affected to "value"
        var text_locationFilter = ${P_quoted(i18n("locationFilter_text", "Aucun site pour la selection"))};
        $("#id_locationFilter").append($("<option selected />").val('false').html(text_locationFilter));
    }

    // Listen changes before populating dynamically locations select box
    $("#id_locationFilter").change(load_location);

    RMPApplication.debug("end fillLocationBox");
}

// ======================================================================================================
// Retrieve values from country, affiliate & location to define request pattern to location collection
// ======================================================================================================
function getFilteredLocations()
{   
    RMPApplication.debug("begin getFilteredLocations");
    // console.log("=>  getFilteredLocations");

    // reset WI in case end-user change current filter, which be validated again !
    resetWI();

    // Retrieving user's input values 
    var country_value = $("#id_countryFilter").val();
    var affiliate_value = $("#id_affiliateFilter").val();
    // console.log("=>  getFilteredLocations: affiliate_value = ", affiliate_value);
    var affiliate_label = $("#id_affiliateFilter").text();
    var division_value = login.division; 
    var region_value = login.region;
    var location_code_value = login.location_code;

    // According to specific views, if "tous" value is set for one of country & affiliate boxes
    if ((view ==="COMPANY" && country_value === "tous" && affiliate_value ==="tous") || (view ==="GRP_AFF" && affiliate_value ==="tous") || (view ==="AFFILIATE" && country_value ==="tous") || (view ==="COUNTRY" && affiliate_value ==="tous")) {

        var text_locationFilter = ${P_quoted(i18n("locationFilter_text", "Ensemble des sites"))};

        // we propose only one value for all locations "Ensemble des sites"
        $("#id_locationFilter").empty();    // previous value reset
        $("#id_locationFilter").append($("<option selected />").val('tous').html(text_locationFilter));
        // console.log('getFilteredLocations: => Ensemble des sites');

    } else {

        // define pattern to query RMP locations collection
        var input  = {};
        var options = {};

        // retrieve complete name of affiliate (actually abrreviate name is value)
        if ( (affiliate_value !== "tous") && (!isEmpty(affiliate_value)) ) {
            for (var i=0; i < affiliateList.length; i++) {
                if ( affiliate_value.toUpperCase() ==  affiliateList[i].value.toUpperCase() ) {
                    affiliate_value = affiliateList[i].label.toUpperCase();
                    // console.log("getFilteredLocations: affiliate_value = ", affiliate_value);
                }
            }
        }

        switch (view) {
            case "COMPANY" :
                // console.log("switch COMPANY");
                if ( (country_value !== "tous") && (!isEmpty(country_value)) ) {
                    input.country = { "$regex" : country_value, "$options" : "i"};   
                }
                if ( (affiliate_value !== "tous") && (!isEmpty(affiliate_value)) ) {
                    input.affiliate = { "$regex" : affiliate_value, "$options" : "i"}; 
                }
                break;

            case "GRP_AFF" :
                // console.log("switch GRP_AFF");
                if ( (country_value !== "tous") && (!isEmpty(country_value)) ) {
                    input.country = { "$regex" : country_value, "$options" : "i"};   
                }
                switch (login.grp_affiliates) {
                    case 'SMC':
                        if ( (affiliate_value !== "tous") && (!isEmpty(affiliate_value)) ) {
                            input.affiliate = { "$regex" : affiliate_value, "$options" : "i"}; 
                        } else {
                            // TO DO: composer la query avec le nom des 3 enseignes
                            input.affiliate = {};
                            input.affiliate.$in = ['COSMOPARIS', 'MINELLI', 'SAN MARINA']; 
                        }
                        break;
                    case 'HALLES':
                        if ( (affiliate_value !== "tous") && (!isEmpty(affiliate_value)) ) {
                            input.affiliate = { "$regex" : affiliate_value, "$options" : "i"}; 
                        } else {
                            // TO DO: composer la query avec le nom des 2 enseignes
                            input.affiliate = {};
                            input.affiliate.$in = ['LA HALLE CHAUSSURE', 'LA HALLE MODE']; 
                        }
                        break;
                    default:
                        if ( (affiliate_value !== "tous") && (!isEmpty(affiliate_value)) ) {
                            input.affiliate = { "$regex" : affiliate_value, "$options" : "i"};
                        }
                        break;
                }
                break;

            case "AFFILIATE" :
                // console.log("switch AFFILIATE");
                if ( (country_value !== "tous") && (!isEmpty(country_value)) ) {
                    input.country = { "$regex" : country_value, "$options" : "i"};   
                }
                if ( (affiliate_value !== "tous") && (!isEmpty(affiliate_value)) ) {
                    input.affiliate = { "$regex" : affiliate_value, "$options" : "i"};
                }
                break;

            case "COUNTRY" :
                // console.log("switch COUNTRY");
                if ( (country_value !== "tous") && (!isEmpty(country_value)) ) {
                    input.country = { "$regex" : country_value, "$options" : "i"}; 
                } 
                if ( (affiliate_value !== "tous") && (!isEmpty(affiliate_value)) ) {
                    input.affiliate = { "$regex" : affiliate_value, "$options" : "i"};
                }
                break;

            case "DIVISION" :
                // console.log("switch DIVISION");
                if ( (country_value !== "tous") && (!isEmpty(country_value)) ) {
                    input.country = { "$regex" : country_value, "$options" : "i"};  
                }
                if ( (affiliate_value !== "tous") && (!isEmpty(affiliate_value)) ) {
                    input.affiliate = { "$regex" : affiliate_value, "$options" : "i"};
                }
                if ( (division_value !== "tous") && (!isEmpty(division_value)) ) {
                    input.division = { "$regex" : division_value, "$options" : "i"};
                } 
                break;

            case "REGION" :
                // console.log("switch REGION");
                if ( (country_value !== "tous") && (!isEmpty(country_value)) ) {
                    input.country = { "$regex" : country_value, "$options" : "i"};  
                } 
                if ( (affiliate_value !== "tous") && (!isEmpty(affiliate_value)) ) {
                    input.affiliate = { "$regex" : affiliate_value, "$options" : "i"};
                }
                if ( (region_value !== "tous") && (!isEmpty(region_value)) ) {
                    input.region = { "$regex" : region_value, "$options" : "i"};
                }
                break;

            case "LOCAL" :
                // console.log("switch LOCAL");
                if ( (country_value !== "tous") && (!isEmpty(country_value)) ) {
                    input.country = { "$regex" : country_value, "$options" : "i"};  
                } 
                if ( (affiliate_value !== "tous") && (!isEmpty(affiliate_value)) ) {
                    input.affiliate = { "$regex" : affiliate_value, "$options" : "i"};
                }
                if ( (location_code_value !== "tous") && (!isEmpty(location_code_value)) ) {
                    input.location_code = { "$regex" : location_code_value, "$options" : "i"};
                }
        }
        
        //call api to location collection
        // console.log("getFilteredLocations : input = ", input);
        id_get_filtered_locations_api.trigger(input, options, get_locations_ok, get_locations_ko);
    }
    RMPApplication.debug("end getFilteredLocations");
}

function get_locations_ok(result)
{
    RMPApplication.debug("begin get_locations_ok : result = " + JSON.stringify(result));
    // console.log("begin get_locations_ok : result = ", result);
    var result_array = result.res ;
    fillLocationBox(result_array);

    RMPApplication.debug("end get_locations_ok");
}

function get_locations_ko(error)
{
    RMPApplication.debug("begin get_locations_ko : error = " + JSON.stringify(error));
    // console.log("=> get_locations_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("get_locations_ko_msg", "Erreur lors de la récupération des informations du site!"))};
    alertify.error(error_msg);
    RMPApplication.debug("end get_locations_ko");
}

// ======================
//   Load_location
// ======================
function load_location()
{
    RMPApplication.debug("begin load_location");
	// console.log("=> load_location");
	var locationCode = $('#id_locationFilter').val();
    if (isEmpty(locationCode) || locationCode === "false") {
        $("#id_locationFilter").select2("close");
        /*var  title = ${P_quoted(i18n("error_location_title", "Erreur"))};
        var  content = ${P_quoted(i18n("location_selection", "Veuillez sélectionner un seul site, en utilisant si besoin les filtres PAYS et/ou ENSEIGNE..."))};
        RMPApplication.showErrorBox(title, content);*/
        return;
    }
    // capi
    var my_pattern = {};
    var options = {};
    my_pattern.location_code = locationCode;
    id_get_location_by_code_api.trigger(my_pattern , options, load_location_ok, load_location_ko);
    RMPApplication.debug ("end load_location");
}

function load_location_ok(result)
{
    RMPApplication.debug("begin load_location_ok : result = " + JSON.stringify(result));
	// console.log("=> load_location_ok: result = ", result);
    selected_location = result;
    selected_affiliate.affiliate = selected_location.affiliate.toUpperCase();
    $("#id_countryFilter").val(selected_location.country);
    
    // get abbreviate name of affiliate
    getAffiliate(selected_affiliate.affiliate);

    RMPApplication.debug ("end load_location_ok");    
}

function load_location_ko(error) 
{
    RMPApplication.debug ("begin load_location_ko : error = " + JSON.stringify(error)); 
    // console.log("=> load_location_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("load_location_ko_msg", "Erreur lors de la récupération des informations du site!"))};
    alertify.error(error_msg);
    RMPApplication.debug ("end load_location_ko");    
}

// ========================================================
//  get complete informations of selected affiliate
// ========================================================
function getAffiliate(affiliate_value)
{
    RMPApplication.debug("=> begin getAffiliate: affiliate_value = ", affiliate_value);
    // console.log("=> getAffiliate: affiliate_value = ", affiliate_value);

    var options = {};
    var input = {};
    var query = {};

    // query.abbreviation = { "$regex" : affiliate_value, "$options" : "i"};    // get selected affiliate value
    query.affiliate = { "$regex" : affiliate_value, "$options" : "i"};    // options for case INSENSITIVE
    input.input_query = query; 
    // console.log("getAffiliate: input = ", input);
    id_get_affiliate_api.trigger(input, options, affiliate_ok, affiliate_ko);
    RMPApplication.debug("end getAffiliate");
}

function affiliate_ok(result)
{
    RMPApplication.debug("begin affiliate_ok : result = " + JSON.stringify(result));
    // console.log("=> affiliate_ok: result = ",result);
    selected_affiliate = result.records[0];

    $("#id_affiliateFilter").val(selected_affiliate.abbreviation);
    
    // start equipment model selection (4 choices: family-category-brand-model)
    load_catalog();

    RMPApplication.debug("end affiliate_ok");
}

function affiliate_ko(error)
{
    RMPApplication.debug("begin affiliate_ko : error = " + JSON.stringify(error));
    // console.log("=> affiliate_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("affiliate_ko_msg", "Erreur lors de la récupération des informations de la filiale! Merci de reporter votre incident!"))};
    alertify.error(error_msg);  
    RMPApplication.debug("end affiliate_ko");
}

// ==========================
// Load catalog collection
// ==========================
function load_catalog()
{
	RMPApplication.debug ("begin load_catalog");
    // console.log("=> load_catalog");

    // query catalog collection (capi)
    var input = {};
    var options = {};
    input.input_query = {};     // we load all catalog's items from collection (max 1000)
    id_get_catalog_api.trigger(input, options, load_catalog_ok, load_catalog_ko);

    RMPApplication.debug ("end load_catalog"); 
}

function load_catalog_ok(result) 
{	
    RMPApplication.debug ("begin load_catalog_ok: result = " + JSON.stringify(result));
	// console.log("=> load_catalog_ok: result = ", result);

	// define global variable to store catalog collection
	var_catalog_col = result.records;
	load_family(var_catalog_col);
    RMPApplication.debug ("end load_catalog_ok"); 
}

function load_catalog_ko(error) 
{
    RMPApplication.debug ("begin load_catalog_ko : " + JSON.stringify(error));
    // console.log("=> load_catalog_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("load_catalog_ko_msg", "ERREUR lors du chargement de la collection Catalogue!"))};
    alertify.error(error_msg);
    RMPApplication.debug ("end load_catalog_ko");    
}

// ========================================================
//  Family selection and reduce model target object
// ========================================================
function load_family(catalog)
{
	RMPApplication.debug ("begin load_family: catalog = " + JSON.stringify(catalog));
    // console.log("=> load_family: catalog = ", catalog);
	if ( (var_catalog_col.length == 0) || isEmpty(var_catalog_col) ) {
		var error_msg = ${P_quoted(i18n("load_family_error_msg", "Erreur: le catalogue des équipements est VIDE !"))};
        alertify.error(error_msg);
        var  title = ${P_quoted(i18n("error_family_title", "Catalogue"))};
        var  content = ${P_quoted(i18n("error_family_msg", "Désolé, la collection Catalogue est VIDE !"))};
        RMPApplication.showErrorBox(title, content);
		return;
	}

	var item_fam_menu = "";

	// Select all families and define div elements
	for (var i=0; i<var_catalog_col.length; i++) {
		if (var_catalog_col[i].class == "family") {		// Select lines only if class = "family"

			if (!isEmpty(var_catalog_col[i].affiliates)) {
				if (var_catalog_col[i].affiliates.indexOf(selected_affiliate.affiliate) >-1 ) {		// Select lines only if available for this affiliate

	    		item_fam_menu += '<div id="id_itemFamMenu_' + i + '" class="col-lg-2 col-md-3 col-sm-4 col-xs-6 col-centered">'
					+ '<a class="text-center" onclick="load_category(\'' + var_catalog_col[i].family +'\');">'
					+ '<i class="homeImage">'
					+ '<img class="homeIcon" src="' + var_catalog_col[i].media_url + '"><br>'
					+ '<div class="homeThumbnail">'
					+ '<span class="homeTitle">' + var_catalog_col[i].family + '</span>'
					+ '</div></i></a></div>';
				}
			}
		}
	}
	// console.log("item_fam_menu = ", item_fam_menu);
	// hide all sub-level rows
	$("#id_categoryRow").hide();
	$("#id_brandRow").hide();
	$("#id_modelRow").hide();
	$("#id_selectedModelRow").hide();
	$("#id_divBackRow").hide();
	$("#id_familyRow").html('');
	$("#id_familyRow").append(item_fam_menu);		// show the first level "family" of the catalog tree
	$("#id_familyRow").show();						// hide other levels
	RMPApplication.debug ("end load_family");
}

// ========================================================
//  Category selection and reduce model target object
// ========================================================
function load_category(fam) 
{
	RMPApplication.debug ("begin load_category: fam = " + JSON.stringify(fam));
	// console.log('fam = ', fam);
	
    $("#id_selectedFamily").attr("value", fam);     // store the selected family

    // query catalog collection (capi)
    var options = {};
    var input_obj = {};
    var query_obj = {};
    query_obj.family = fam;
    input_obj.input_query = query_obj;      // retrieve elements with 'family=fam' matching; 
    id_get_catalog_api.trigger(input_obj, options, load_category_ok, load_category_ko);

    RMPApplication.debug ("end load_category");
}

function load_category_ok(result) 
{

	RMPApplication.debug ("begin load_category_ok: result = " + JSON.stringify(result));
	// console.log('=> load_category_ok: result = ', result);

	var selectedFam = $("#id_selectedFamily").val();
	var item_cat_menu = "";
	var cat_list = [];
	var reduce_cat_list = [];
	cat_target =  result.records;  //array of objects

	// resume categories into a reduce array, available for selected family
	for (var i=0; i<cat_target.length; i++) {

		if (!isEmpty(cat_target[i].affiliates)) {
			if (cat_target[i].affiliates.indexOf(selected_affiliate.affiliate) >-1 ) {		// Select lines only if available for this affiliate
		
				if ( (cat_target[i].class == "model") && (cat_target[i].family == selectedFam) ) {
					cat_list.push(cat_target[i].category);
				}
				reduce_cat_list = reduce_array(cat_list);
			}
		}		
	}
	// console.log('reduce_cat_list = ', reduce_cat_list);

	if (reduce_cat_list.length == 0) {
		var title = ${P_quoted(i18n("error_category_title", "Catalogue"))};
        var content = ${P_quoted(i18n("category_error_msg", "Aucun modèle n'est disponible pour cette branche"))};
        RMPApplication.showErrorBox(title, content + ": \n" + selectedFam);
		resetAction();
		return;
	} else {
		for (var i=0; i<var_catalog_col.length; i++) {
			if (var_catalog_col[i].class == "category") {

				if (!isEmpty(var_catalog_col[i].affiliates)) {
					if (var_catalog_col[i].affiliates.indexOf(selected_affiliate.affiliate) >-1 ) {		// Select lines only if available for this affiliate

						for (var j=0; j<reduce_cat_list.length; j++) {
							if (reduce_cat_list[j] == var_catalog_col[i].category) {
								item_cat_menu += '<div id="id_itemCatMenu_' + i + '" class="col-lg-2 col-md-3 col-sm-4 col-xs-6 col-centered">'
									+ '<a class="text-center" onclick="load_brand(\'' + var_catalog_col[i].category +'\');">'
									+ '<i class="homeImage">'
									+ '<img class="homeIcon" src="' + var_catalog_col[i].media_url + '"><br>'
									+ '<div class="homeThumbnail">'
									+ '<span class="homeTitle">' + var_catalog_col[i].category + '</span>'
									+ '</div></i></a></div>';
							} 
						}
					}
				}
			}
		}
	}
	// console.log("item_cat_menu = ", item_cat_menu);
	$("#id_familyRow").hide();						// hide other levels
	$("#id_brandRow").hide();	
	$("#id_modelRow").hide();
	$("#id_selectedModelRow").hide();
 	$("#id_categoryRow").html('');
	$("#id_categoryRow").append(item_cat_menu);		// prepare categories to be proposed
	$("#id_categoryRow").show();					// show the second level "category" for selected family
	$("#id_divBackRow").show();
	RMPApplication.debug ("end load_category_ok");
}

function load_category_ko(error) 
{
    RMPApplication.debug ("begin load_category_ko : error = " + JSON.stringify(error));
    // console.log("=> load_category_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("load_category_error_msg", "Erreur lors du chargement de la catégorie!"))};
    alertify.error(error_msg);    
    RMPApplication.debug ("end load_category_ko");    
}

// ========================================================
//  Brand selection and reduce models target object
// ========================================================
function load_brand(cat) 
{
	RMPApplication.debug ("begin load_brand: cat = " + JSON.stringify(cat));
	// console.log('cat = ', cat);

	$("#id_selectedCategory").attr("value", cat);           // store the selected category

    // query catalog collection (capi)
    var options = {};
    var input_obj = {};
    var query_obj = {};
    query_obj.family = $("#id_selectedFamily").val() ;
    query_obj.category = cat;
    input_obj.input_query = query_obj;       // retrieve elements with family already defined & 'category=cat' matching
    id_get_catalog_api.trigger(input_obj, options, load_brand_ok, load_brand_ko);

    RMPApplication.debug ("end load_brand");
}

function load_brand_ok(result)
{
	RMPApplication.debug ("begin load_brand_ok: result = " + JSON.stringify(result));
	// console.log('=> load_brand_ok : result =  ', result);

	var selectedFam = $("#id_selectedFamily").val();
	var selectedCat = $("#id_selectedCategory").val();
	var item_brand_menu = "";
	var brand_list = [];
	var reduce_brand_list = [];
	brand_target =  result.records;    // array of objetcs

	// resume brands into a reduce array, available for selected family & category
	for (var i=0; i<brand_target.length; i++) {
		if (!isEmpty(brand_target[i].affiliates)) {
			if (brand_target[i].affiliates.indexOf(selected_affiliate.affiliate) >-1 ) {		// Select lines only if available for this affiliate

				if ( (brand_target[i].class == "model") && (brand_target[i].family == selectedFam) && (brand_target[i].category == selectedCat) ) {
					brand_list.push(brand_target[i].brand);
				}
				reduce_brand_list = reduce_array(brand_list);
			}
		}	
	}
	// console.log('reduce_brand_list: ', reduce_brand_list);

	if (reduce_brand_list.length == 0) {
		var title = ${P_quoted(i18n("error_brand_title", "Catalogue"))};
        var content = ${P_quoted(i18n("brand_error_msg", "Aucun modèle n'est disponible pour cette branche"))};
        RMPApplication.showErrorBox(title, content + ": \n" + selectedFam + ' - ' + selectedCat);
		resetAction();
		return;		
	} else {
		for (var i=0; i<var_catalog_col.length; i++) {
			if (var_catalog_col[i].class == "brand") {

				if (!isEmpty(var_catalog_col[i].affiliates)) {
					if (var_catalog_col[i].affiliates.indexOf(selected_affiliate.affiliate) >-1 ) {		// Select lines only if available for this affiliate

						for (var j=0; j<reduce_brand_list.length; j++) {
							if (reduce_brand_list[j] == var_catalog_col[i].brand) {
								item_brand_menu += '<div id="id_itemBrandMenu_' + i + '" class="col-lg-2 col-md-3 col-sm-4 col-xs-6 col-centered">'
									+ '<a class="text-center" onclick="load_model(\'' + var_catalog_col[i].brand +'\');">'
									+ '<i class="homeImage">'
									+ '<img class="homeIcon" src="' + var_catalog_col[i].media_url + '"><br>'
									+ '<div class="homeThumbnail">'
									+ '<span class="homeTitle">' + var_catalog_col[i].category + '</span></div>'
									+ '</i></a></div>';
							}
						}
					}
				}
			}

			// Define the shortCategory => will be used to create the request
			if ( (var_catalog_col[i].class == "category") && (var_catalog_col[i].family == selectedFam) && (var_catalog_col[i].category == selectedCat) ) {

				if (!isEmpty(var_catalog_col[i].affiliates)) {
					if (var_catalog_col[i].affiliates.indexOf(selected_affiliate.affiliate) >-1 ) {		// Select lines only if available for this affiliate

						short_cat = var_catalog_col[i].short_cat;
						// console.log("short_cat = ", short_cat);
					}
				}
			}

		}
	}
	// console.log("item_brand_menu = ", item_brand_menu);
	$("#id_familyRow").hide();						// hide other levels
	$("#id_categoryRow").hide();	
	$("#id_modelRow").hide();
	$("#id_selectedModelRow").hide();
	$("#id_brandRow").html('');
	$("#id_brandRow").append(item_brand_menu);		// prepare brands to be proposed
	$("#id_brandRow").show();						// show the third level "brand" for selected family & category
	$("#id_divBackRow").show();	
	RMPApplication.debug ("end load_brand_ok");	
}

function load_brand_ko(error) 
{
    RMPApplication.debug ("begin load_brand_ko : error = " + JSON.stringify(error));
    // console.log("load_brand_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("load_brand_error_msg", "Erreur lors du chargement de la marque!"))};
    alertify.error(error_msg);     
    RMPApplication.debug ("end load_brand_ko");    
}

// ========================================================
//  Model selection and reduce models target object
// ========================================================
function load_model(bra) 
{
	RMPApplication.debug ("begin load_model : bra = " + JSON.stringify(bra));
	// console.log('bra = ', bra);

	$("#id_selectedBrand").attr("value", bra);     // store the selected brand

    // query catalog collection (capi)
    var options = {}; 
    var input_obj = {};
    var query_obj = {};
    query_obj.family = $("#id_selectedFamily").val() ;
    query_obj.category = $("#id_selectedCategory").val();
    query_obj.brand = bra;
    input_obj.input_query = query_obj;
    
    // load entries matching selected family & category & brand
    id_get_catalog_api.trigger(input_obj, options, load_model_ok, load_model_ko);
	RMPApplication.debug ("end load_model");
}

function load_model_ok(result) 
{
	RMPApplication.debug ("begin load_model_ok : result = " + JSON.stringify(result));
    // console.log('=> load_model_ok : result =  ', result);

	var selectedFam = $("#id_selectedFamily").val();
	var selectedCat = $("#id_selectedCategory").val();
	var selectedBrand = $("#id_selectedBrand").val();
	var model_list = [];
	var reduce_model_list = [];
	var item_model_menu = "";
	var account_id = RMPApplication.get("account");
	var model_img_path = 'https://live.runmyprocess.com/live/' + account_id + '/upload';	// compose path to RMP instance images
	model_target = result.records;
	// console.log('=> load_model_ok : result =  ', result);

	// resume models into a reduce array, available for selected family & category & brand
	for (var i=0; i<model_target.length; i++) {

		if (!isEmpty(model_target[i].affiliates)) {
			if (model_target[i].affiliates.indexOf(selected_affiliate.affiliate) >-1 ) {		// Select lines only if available for this affiliate

				if ( (model_target[i].class == "model") && (model_target[i].family == selectedFam) && (model_target[i].category == selectedCat) &&  (model_target[i].brand == selectedBrand) ) {
					model_list.push(model_target[i].model);
				}
				reduce_model_list = reduce_array(model_list);
			}
		}		
	}
	// console.log('reduce_model_list = ', reduce_model_list);

	// find the chosen model if existing according previous selections and show it
	for (var i=0; i<var_catalog_col.length; i++) {
		if (var_catalog_col[i].class == "model") {

			if (!isEmpty(var_catalog_col[i].affiliates)) {
				if (var_catalog_col[i].affiliates.indexOf(selected_affiliate.affiliate) >-1 ) {		// Select lines only if available for this affiliate

				// console.log('i:', i, 'var_catalog_col[i] = ', var_catalog_col[i]);
				
					for (var j=0; j<reduce_model_list.length; j++) {
						if ( (var_catalog_col[i].model == reduce_model_list[j]) && (var_catalog_col[i].family == selectedFam) && (var_catalog_col[i].category == selectedCat) && (var_catalog_col[i].brand == selectedBrand) ) {

							var model_img_url = "";
							if (isEmpty(var_catalog_col[i].media_url)) {
								model_img_url = model_img_path + '/' + var_catalog_col[i].idmedia + '/' + var_catalog_col[i].file_name;
							} else {
								model_img_url = var_catalog_col[i].media_url;
							}
							
							item_model_menu += '<div id="id_itemModelMenu_' + i + '" class="col-lg-2 col-md-3 col-sm-4 col-xs-6 col-centered">'
										+ '<a class="text-center" onclick="select_model(\'' + var_catalog_col[i].model + '\',\'' + model_img_url + '\',\'' + var_catalog_col[i].sn_category + '\',\'' + var_catalog_col[i].problem_type + '\',\'' + var_catalog_col[i].sn_u_product_type + '\');">'
                                        // + '<a class="text-center" onclick="select_model(' + var_catalog_col[i] + ',\'' + model_img_url + '\');">'
										+ '<i class="homeImage">'
										+ '<img class="homeIcon" src="' + model_img_url + '"><br>'
										+ '<div class="homeThumbnail">'
										+ '<span class="homeTitle">' + var_catalog_col[i].category + '<br>' + var_catalog_col[i].brand + ' - ' + var_catalog_col[i].model + '</span>'
										+ '</div></i></a></div>';
							break;
						}
					}
				}
			}
		}
	}
	// console.log('item_model_menu = ', item_model_menu);
	if (isEmpty(item_model_menu)) {
		var title = ${P_quoted(i18n("error_model_title", "Catalogue"))};
        var content = ${P_quoted(i18n("model_error_msg", "Aucun modèle existant pour cet équipement"))};
        RMPApplication.showErrorBox(title, content + ": \n" + selectedFam + ' - ' + selectedCat + ' - ' + selectedBrand);
		resetAction();
		return;	
	} else {
		$("#id_familyRow").hide();
		$("#id_categoryRow").hide();
		$("#id_brandRow").hide();
		$("#id_selectedModelRow").hide();
		$("#id_modelRow").html('');	
		$("#id_modelRow").append(item_model_menu);		// show the model corresponding to all previous selections
		$("#id_modelRow").show();
		$("#id_divBackRow").show();
	}
	RMPApplication.debug ("end load_model_ok");	
}

function load_model_ko(error) 
{
    RMPApplication.debug ("begin load_model_ko : error = " + JSON.stringify(error));
    // console.log("load_model_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("load_model_error_msg", "Erreur lors du chargement du modèle!"))};
    alertify.error(error_msg);  
    RMPApplication.debug ("end load_model_ko");
}

// ===================================================================
//  According to previous choices => model image is visible or not
// ===================================================================
function select_model(mod_mod, mod_img, mod_cat, mod_prob, mod_prod) 
// function select_model(mod, mod_img, pb_type) 
{
	// RMPApplication.debug ("begin select_model : mod = " + mod + "\n pb_type = " + pb_type);
    RMPApplication.debug ("begin select_model : mod_mod = " + mod_mod + "\n mod_img = " + mod_img);
	// console.log('select_model: mod_mod = ', mod_mod);
    // console.log('\nselect_model: mod_img = ', mod_img);
    selected_model.model = mod_mod;
    selected_model.sn_category = mod_cat;
    selected_model.sn_u_problem_type = mod_prob;
    selected_model.sn_u_product_type = mod_prod;

	$("#id_selectedModel").attr("value", mod_mod);     // store the selected model
	var divModel = "";
	var selectedFam = $("#id_selectedFamily").val();
	var selectedCat = $("#id_selectedCategory").val();
	var selectedBrand = $("#id_selectedBrand").val();
	var selectedModel = $("#id_selectedModel").val();
	// prob_type = pb_type;
	
	// Only one entry from catalog matches with selected family & category & brand & model
    divModel += '<i class="homeImage">'
			+ '<img class="homeIcon" src="' + mod_img + '"><br>'
			+ '<div class="homeThumbnail">'
			+ '<span class="homeTitle">' + selectedCat + '<br>' + selectedBrand + ' - ' + selectedModel + '</span>'
			+ '</div></i>';
	// console.log('divModel = ', divModel);
	$("#id_familyRow").hide();
	$("#id_categoryRow").hide();
	$("#id_brandRow").hide();
	$("#id_modelRow").hide();
	$("#id_selectedItemModel").append(divModel);
	$("#id_selectedItemModel").show();
	$("#id_selectedModelRow").show();
	$("#id_divBackRow").hide();

	// Show a new row to let user precising more details about the encountered issue
	show_details_request();
    
	RMPApplication.debug ("end select_model");
}

// =============================================
// Back to previous level in the selection tree
// =============================================
function backAction()
{
	RMPApplication.debug ("begin backAction");
    // console.log('=> backAction');
	var selectedFam = $("#id_selectedFamily").val();
	var selectedCat = $("#id_selectedCategory").val();
	var selectedBrand = $("#id_selectedBrand").val();
	var selectedModel = $("#id_selectedModel").val();
	// console.log(selectedFam, '-', selectedCat, '-', selectedBrand, '-', selectedModel);

	if (!isEmpty(selectedModel)) {
		$("#id_selectedModel").removeAttr("value");
		$("#id_modelRow").html('');
		load_model(selectedBrand);
		return;
	} else if (!isEmpty(selectedBrand)) {
		$("#id_selectedBrand").removeAttr("value");
		$("#id_brandRow").html('');
		load_brand(selectedCat);
		return;
	} else if (!isEmpty(selectedCat)) {
		$("#id_selectedCategory").removeAttr("value");
		$("#id_categoryRow").html('');
		load_category(selectedFam);
		return;
	} else {
		$("#id_selectedFamily").removeAttr("value");
		$("#id_familyRow").html('');
		load_family();
		return;
	}
	RMPApplication.debug ("end backAction");	
}

// =============================================================
// Once one equipment selected, show last part of ticket form
// =============================================================
function show_details_request()
{
	RMPApplication.debug ("begin show_details_request");
    // console.log('=> show_details_request');
	fillPosBox();
    fillPriorityBox();
	fillRequestBox();
	$("#id_selectedModelRow").show();
	$("#id_rowButton").show();

	RMPApplication.debug ("end show_details_request");	
}

// ========================
// selection boxes filling
// ========================
function fillPosBox() 
{
	RMPApplication.debug("begin fillPosBox");
    // console.log('=> fillPosBox');

	var numberPOS = 10;		// Value to change according to number of POS
	$("#id_numPOS").html('');

    // #POS must contain 2 digits
    for (var i=0; i<numberPOS; i++) {
        if (i < 1) {
            $("#id_numPOS").append("<option value='" + "0" + (i+1) + "' selected>&#10143; " + "0" + (i+1) + "</option>");
        } else if (i < 9) {
            $("#id_numPOS").append("<option value='" + "0" +(i+1) + "'>&#10143; " + "0" + (i+1) + "</option>");
        } else {
            $("#id_numPOS").append("<option value='" + (i+1) + "'>&#10143; " + (i+1) + "</option>");
        }
    }
    RMPApplication.debug("end fillPosBox");
}

function fillPriorityBox() 
{
    RMPApplication.debug("begin fillPriorityBox");
    // console.log('=> fillPriorityBox');

    var defaultPriority = "2";
    // ATTENTION: we use a hidden CustomRMP component List to generate our own list
    var priorityList = JSON.parse(id_priority_cl.getList()).list;
    $("#id_priority").html('');
    for (var i=0; i < priorityList.length; i++) {
        if (priorityList[i].value == defaultPriority) {
            $("#id_priority").append("<option value='" + priorityList[i].value + "' selected>&#10143; " + priorityList[i].label + "</option>");
        } else {
        $("#id_priority").append("<option value='" + priorityList[i].value + "'>&#10143; " + priorityList[i].label + "</option>");
        }
    }
    return;
    RMPApplication.debug("end fillPriorityBox");
}

function fillRequestBox() 
{
	RMPApplication.debug("begin fillRequestBox");
    // console.log('=> fillRequestBox');

	var defaultType = "intervention";
    // ATTENTION: we use a hidden CustomRMP component List to generate our own list
	var typeList = JSON.parse(id_request_type_cl.getList()).list;
	$("#id_requestType").html('');
	for (var i=0; i < typeList.length; i++) {
		if (typeList[i].value == defaultType) {
			$("#id_requestType").append("<option value='" + typeList[i].value + "' selected>&#10143; " + typeList[i].label + "</option>");
            $("#id_requestType").attr('readonly', 'readonly');
		} else {
        // only one kind of request Type => "Intervention"    
		// $("#id_requestType").append("<option value='" + typeList[i].value + "'>&#10143; " + typeList[i].label + "</option>");
		}
	}
	return;
    RMPApplication.debug("end fillRequestBox");
}

// =============================================================
// Create Work Order insertion request to Service Now
// =============================================================
function createRequest()
{
	RMPApplication.debug("begin createRequest");
    // console.log("=> begin createRequest");

	var num_pos = $("#id_numPOS").val();
	var selectedFam = $("#id_selectedFamily").val();
	var selectedCat = $("#id_selectedCategory").val();
	var selectedBrand = $("#id_selectedBrand").val();
	var selectedModel = $("#id_selectedModel").val();
	var requestType = $("#id_requestType").val();
	var caller, logical_name, location, separator;
	
	switch (selected_location.affiliate) {

        case 'CAROLL':
            // caller = (login.is_super_user == "NON") ? login.user : "hotline@caroll.com";
            caller = "hotline@caroll.com";
            // separator = "-";
            location = $.trim(selected_location.location_name);
            // category = (requestType.toUpperCase() == "INTERVENTION") ? "Maintenance Normale" : null;
            // logical_name format => MAG00BxxxCAI01
            logical_name = "MAG00" + selected_location.location_code + short_cat + num_pos;
            break;

		default:
            separator = "-";
            location = $.trim(selected_location.location) + separator + $.trim(selected_location.location_code);
			// caller = login.user;
            caller = "Resp " + location;
            logical_name = "MAG" + selected_location.location_code + short_cat + num_pos;
	}

	var work_order_type = requestType.toLowerCase();
    var category = selected_model.sn_category;
    // Change with 'selected_model.sn_u_problem_type' when collection is modified
    var problem_type = selected_model.sn_u_problem_type;     
    var product_type = selected_model.sn_u_product_type;
	var contract = selected_affiliate.company + "\\" + selected_affiliate.abbreviation;    // SNOW contract name
    var customer_site = location; 
    var contact_type = "RunMyStore";
    var qualification_group = "";
    var customer_reference = $("#id_refCustomer").val(); 
    var contact = $("#id_contact").val();
    // issue description will contain informations about impacted equipement
    var description_head = "- Matériel: " + selectedCat + " (" + selectedBrand + " - " + selectedModel + ")";
    var description_body = $("#id_descripton").val();
    var short_description = (isEmpty(description_body)) ? "Non renseigné" : description_body.substring(0,99);
    var description = description_head + "\n" + "- Information: " + description_body;
    var expected_start = "";
    // var expected_start = getExpectedStartDateSN(7);
    var priority = $("#id_priority").val();
    var state = "1";    // draft
    
    if ( $('#id_phone').val()=== "not defined" || isEmpty($('#id_phone').val()) ) {
        //if no phone has been submited we use the selected location phone
        var contact_detail = selected_location.email + "\n" + selected_location.phone;
    } else {
        var contact_detail = selected_location.email + "\n" + $('#id_phone').val();
    }

	// define insertion query before sending to Service Now
	var options = {};
    var work_order = {};
	work_order.sn_caller = caller;
	work_order.sn_contract = contract;
	work_order.sn_contact_type = contact_type;
	work_order.sn_correlation_id = customer_reference;
	work_order.sn_description = description;
	work_order.sn_location = location;
	work_order.sn_state = state;
	work_order.sn_qualification_group = qualification_group;
	work_order.sn_short_description = short_description;
	work_order.sn_priority = priority;
	work_order.sn_category = category;
	work_order.sn_u_contact_details = contact_detail;
	work_order.sn_u_customer_site = customer_site;
	work_order.sn_u_work_order_type = work_order_type;
	work_order.sn_u_problem_type = problem_type;
	work_order.sn_u_product_type = product_type;
  	work_order.sn_expected_start = expected_start;
	work_order.sn_cmdb_ci = logical_name;

    $("#id_spinner_insert").show();

  	console.log("=> createRequest: work_order = ", work_order);
	id_insert_work_order_api.trigger (work_order, options, insert_ok, insert_ko);

	// after insertion in Service Now => reload a new work order request screen
	resetAction();
	RMPApplication.debug("end createRequest");	
}

function insert_ok(result) 
{
	RMPApplication.debug("begin insert_ok : " + JSON.stringify(result));
	// console.log("=> insert_ok: result = ", result);
	$("#id_spinner_insert").hide();
	wm_order = result;
    var title = ${P_quoted(i18n("insert_ok_title", "Information Suivi Demande"))};
    var content = ${P_quoted(i18n("insert_ok_msg", "Demande créée sous la référence:"))};
    RMPApplication.showErrorBox(title, content + ": \n" + wm_order.insertResponse.number + "\n");
    
    resetWI();      // reset web interface before a new request

    // Twilio API is unavailable until further notice
    //var input1 = {};
    //input1.message = "RunMyStore: votre demande a été créée sous le n° " + wm_order.insertResponse.number;
	// input1.to_tel = login.phone;
	//id_send_wo_confirmation_by_sms_api.trigger(input1, {}, sms_ok, sms_ko);
	
	// var input2 = {};
	// NOTE: expectedStartDate can't be automatically defined according the present SLA
	// input2.message = "RunMyStore: Demande n° "+ wm_order.insertResponse.number + " => Intervention planifiée le : " + getExpectedStartDateRMP(7);
	// input2.to_tel = login.phone;
	// Twilio API is unavailable until further notice
	//id_send_wo_assignation_by_sms_api.trigger(input2, {}, sms_ok, sms_ko);

	RMPApplication.debug("end insert_ok");	
}

function insert_ko(error) 
{
    RMPApplication.debug("begin insert_ko : error = " + JSON.stringify(error));
    // console.log("=> insert_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("insert_ko_msg", "Erreur lors de la création du ticket!"))};
    alertify.error(error_msg);
	$("#id_spinner_insert").hide();
	RMPApplication.debug("end insert_ko");		
}

function sms_ok(result) 
{
	RMPApplication.debug("begin sms_ok : " + JSON.stringify(result));
    // console.log("=> sms_ok: result = ", result);
	var success_msg = ${P_quoted(i18n("sms_ok_msg", "SMS envoyé avec succès!"))};
    alertify.success(success_msg);
	RMPApplication.debug("end sms_ok");		
}

function sms_ko(error) 
{
    RMPApplication.debug("begin sms_ko : error = " + JSON.stringify(error));
    // console.log("=> sms_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("sms_ko_msg", "Erreur: SMS non envoyé!"))};
    alertify.error(error_msg);
	RMPApplication.debug("end sms_ko");	    
}
