// ========================
//   New Work Order : MAIN
// ========================
RMPApplication.debug("New Work Order : Application started");

// ========================
// Variables declaration
// ========================

// if "true", logs will be showed on the browser console
var debug = {
	"init" : false,
	"box" : false,
    "location" : false,
    "affiliate" : false,
    "insert" : false,
    "decision" : false
};

// other global variables
var view;
var login = {};
var affiliateList = null;       // group of alliliates for specific GRP_AFF view/scope
var selected_model = {};        // selected model according to input's user
var selected_location = null;   // selected location according to input's user
var enseigne = null;            // affiliate's login user
var wm_order = null;            // work order details saved in Service Now
var short_cat = null;           // to keep the selected category's short name

var error_title_notify = ${P_quoted(i18n("error_title_notify", "Erreur"))};
var error_thanks_notify = ${P_quoted(i18n("error_thanks_notify", "Merci de signaler cette erreur !"))};
var btn_ok = ${P_quoted(i18n("btn_ok", "OK"))};

// execute main program
init();

// ===============================
//   Initialization part
// ===============================
function init() 
{
    RMPApplication.debug("begin init : login = " + login);
    $("#id_spinner_insert").hide();                     // reset Web Interface  & hide sub-level area
    var options = {};
    var pattern = {};
    pattern.login = RMPApplication.get("login");
    c_debug(debug.init, "=> init: pattern = ", pattern);

    // CAPI for getting user information
    id_get_user_info_as_admin_api.trigger (pattern, options , get_info_ok, get_info_ko); 
    RMPApplication.debug("end init");
}

// ====================================================================================
//   Reset Action ("Réinitialiser" button or after a new Work Order request creation)
// ====================================================================================
function resetWI()
{
	RMPApplication.debug("begin resetWI");
    // hide decision tree's choices menu until one location is selected & validated
    $("#id_decision_tree").hide();
	RMPApplication.debug("end resetWI"); 
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
    login.affiliate = (!isEmpty(result.enseigne)) ? result.enseigne.trim().toUpperCase() : '';
    login.kiosk_list = (!isEmpty(result.acces_enseignes)) ? result.acces_enseignes.trim().toUpperCase() : '';
    login.country = (!isEmpty(result.pays)) ? result.pays.trim().toUpperCase() : '';
    login.location_code = (!isEmpty(result.code_magasin)) ? result.code_magasin.trim().toUpperCase() : '';
    login.division = (!isEmpty(result.division)) ? result.division.trim().toUpperCase() : '';
    login.region = (!isEmpty(result.region)) ? result.region.trim().toUpperCase() : '';
    login.is_super_user = (!isEmpty(result.is_super_user)) ? result.is_super_user.toUpperCase() : '';
    enseigne = login.affiliate;
    c_debug(debug.init, "=> get_info_ok: login = ", login);

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

    } else if ( (!isEmpty(login.affiliate)) && ((login.region == login.affiliate) || (login.division == login.affiliate)) ) {    // One affiliate, but country can be selected
        view = "AFFILIATE";

    } else if ( (!isEmpty(login.country)) && ((login.region == login.country) || (login.division == login.country)) ) {    // One country, but affiliate can be selected
        view = "COUNTRY";

    } else if ( !isEmpty(login.division) && (login.division != "NOT DEFINED") ) {
        view = "DIVISION";

    } else if ( !isEmpty(login.region) && (login.region != "NOT DEFINED") ) {
        view = "REGION";

    } else {               // Only one site: 1 country - 1 affiliate - 1 location
        view = "LOCAL";   
    }
    c_debug(debug.init, "get_info_ok: view = ", view);
    fillCountryBox(view);
    fillAffiliateBox(view);
    getFilteredLocations();

    RMPApplication.debug("end get_info_ok");
}

function get_info_ko(error) 
{
    RMPApplication.debug("begin get_info_ko: error = " + JSON.stringify(error));
    c_debug(debug.init, "=> get_info_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("get_info_ko_msg", "Récupération impossible des informations utilisateur !"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug("end get_info_ko"); 
} 

// ========================================================
// According to the view, fill the affiliate select box
// ========================================================
function fillAffiliateBox(vue) 
{
    RMPApplication.debug("begin fillAffiliateBox : vue = ", vue);
    c_debug(debug.box, "=>  fillAffiliateBox: vue = ", vue);

    var affiliateListTemp = JSON.parse(id_affiliate_cl.getList()).list;
    c_debug(debug.box, "=>  fillAffiliateBox: affiliateListTemp = ", affiliateListTemp);
    var text_affiliateFilter = "";

    // Complete affiliate selection filter according connected profile
    switch (vue) {
        case "SUPERUSER" :
        case "COMPANY" : // see "COUNTRY"
        case "COUNTRY" :
            // Following line can be disabled if the concerned company only have one affiliate 
            // text_affiliateFilter = ${P_quoted(i18n("affiliateFilter_text", "TOUTES LES ENSEIGNES"))};
            // $("#id_affiliateFilter").append($("<option selected />").val('tous').html(text_affiliateFilter));
            affiliateList = JSON.parse(id_affiliate_cl.getList()).list;
            for (var i=0; i < affiliateList.length; i++) {
                $("#id_affiliateFilter").append($("<option />").val(affiliateList[i].value).html("&#10143; " + affiliateList[i].label.toUpperCase()))
            }
            // If we have only one affiliate, we can fix the following field as read-only
            $("#id_affiliateFilter").attr('readonly', 'readonly');
            break;

        case "GRP_AFF" :
            text_affiliateFilter = ${P_quoted(i18n("affiliateFilter_text", "TOUTES LES ENSEIGNES"))};
            $("#id_affiliateFilter").append($("<option selected />").val('tous').html(text_affiliateFilter));
            affiliateList = [];
            switch (login.grp_affiliates) {
                case 'XXXXX':                   // "XXXXX" abbreviated name of affiliates group
                    affiliateList = [{'label':'Nom Long Enseigne 1', 'value':'Nom Abrégé Enseigne 1'}, {'label':'Nom Long Enseigne 2', 'value':'Nom Abrégé Enseigne 2'}];
                    break;
                default:
                    break;
            }
            for (var i=0; i < affiliateList.length; i++) {
                $("#id_affiliateFilter").append($("<option />").val(affiliateList[i].value).html("&#10143; " + affiliateList[i].label.toUpperCase()));
            }
            break;

        case "AFFILIATE" : 
        case "DIVISION" :   // see "LOCAL"
        case "REGION" :     // see "LOCAL"
        case "LOCAL" :
            affiliateList = [];
            for (var i=0; i < affiliateListTemp.length; i++) {
                if (affiliateListTemp[i].label.toUpperCase() == login.affiliate.toUpperCase()) {
                     affiliateList = [{ 'label': affiliateListTemp[i].label.toUpperCase(), 'value': affiliateListTemp[i].value }];
                }
            }
            c_debug(debug.box, "fillAffiliateBox: affiliateList = ", affiliateList);
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
    c_debug(debug.box, "=>  fillCountryBox: vue = ", vue);

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
    c_debug(debug.box, "=>  fillLocationBox: locations_array = ", locations_array);
    
    $("#id_locationFilter").empty();    // field reset

    if (locations_array.length > 0) {
       // We propose a list of locations, but only one location must be selected by the user

        // to permit the display of placeholder
        $("#id_locationFilter").append($("<option />").html(''));

        // locations_array is alphabetically ordered
        locations_array = locations_array.sort(sortArrayByKey({key: 'location_code', string: true}, false) );

        // We populate selection box with all locations match filter queries
        $.each(locations_array, function() {
            var id_i = this.location_code;
            var text_i = "&#10143; " + this.city.toUpperCase() + " - " + this.location_code;
            if (locations_array.length == 1) {
                $("#id_locationFilter").append($("<option selected />").val(id_i).html(text_i));
            } else {  
                $("#id_locationFilter").append($("<option />").val(id_i).html(text_i));
            }
        });

    } else {    
        // if locations_array is empty, "false" is affected to "value"
        var text_locationFilter = ${P_quoted(i18n("no_locationFilter_text", "Aucun site pour la selection !"))};
        $("#id_locationFilter").append($("<option selected />").val('false').html(text_locationFilter));
    }
    c_debug(debug.box, "=> end fillLocationBox: locations_array = ", locations_array);

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

    // Retrieving user's input value
    var country_value = $("#id_countryFilter").val();
    var affiliate_value = $("#id_affiliateFilter").val();
    c_debug(debug.location, "=>  getFilteredLocations: affiliate_value = ", affiliate_value);
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
        c_debug(debug.location, "getFilteredLocations: => Ensemble des sites");

    } else {

        // define pattern to query RMP locations collection
        var input  = {};
        var options = {};

         // retrieve complete name of affiliate (actually abrreviate name is value)
        if ( (affiliate_value !== "tous") && (!isEmpty(affiliate_value)) ) {
            for (var i=0; i < affiliateList.length; i++) {
                if ( affiliate_value.toUpperCase() ==  affiliateList[i].value.toUpperCase() ) {
                    affiliate_value = affiliateList[i].label.toUpperCase();
                    c_debug(debug.location, "getFilteredLocations: affiliate_value = ", affiliate_value);
                }
            }
        }

        c_debug(debug.location, "=> getFilteredLocations: switch view = ", view);
        switch (view) {
            case "COMPANY" :
                if ( (country_value !== "tous") && (!isEmpty(country_value)) ) {
                    input.country = { "$regex" : country_value, "$options" : "i"};   
                }
                if ( (affiliate_value !== "tous") && (!isEmpty(affiliate_value)) ) {
                    input.affiliate = { "$regex" : affiliate_value, "$options" : "i"}; 
                }
                break;

            case "GRP_AFF" :
                if ( (country_value !== "tous") && (!isEmpty(country_value)) ) {
                    input.country = { "$regex" : country_value, "$options" : "i"};   
                }
                switch (login.grp_affiliates) {
                    case 'XXXXX':                   // "XXXXX" abbreviated name of affiliates group
                        if ( (affiliate_value !== "tous") && (!isEmpty(affiliate_value)) ) {
                            input.affiliate = { "$regex" : affiliate_value, "$options" : "i"}; 
                        } else {
                            // TO DO: composer la query avec le nom "long" des (n) enseignes
                            input.affiliate = {};
                            input.affiliate.$in = ['Nom Enseigne 1', 'Nom Enseigne 2', 'Nom Enseigne 3']; 
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
                if ( (country_value !== "tous") && (!isEmpty(country_value)) ) {
                    input.country = { "$regex" : country_value, "$options" : "i"};   
                }
                if ( (affiliate_value !== "tous") && (!isEmpty(affiliate_value)) ) {
                    input.affiliate = { "$regex" : affiliate_value, "$options" : "i"};
                }
                break;

            case "COUNTRY" :
                if ( (country_value !== "tous") && (!isEmpty(country_value)) ) {
                    input.country = { "$regex" : country_value, "$options" : "i"}; 
                } 
                if ( (affiliate_value !== "tous") && (!isEmpty(affiliate_value)) ) {
                    input.affiliate = { "$regex" : affiliate_value, "$options" : "i"};
                }
                break;

            case "DIVISION" :
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
                if ( (country_value !== "tous") && (!isEmpty(country_value)) ) {
                    input.country = { "$regex" : country_value, "$options" : "i"};  
                } 
                if ( (affiliate_value !== "tous") && (!isEmpty(affiliate_value)) ) {
                    input.affiliate = { "$regex" : affiliate_value, "$options" : "i"};
                }
                ///////////////////////////////////////////
                if ( (location_code_value !== "tous") && (!isEmpty(location_code_value)) ) {
                    input.location_code = {};
                    var kiosk_list = login.kiosk_list;
                    if (!(isEmpty(kiosk_list))) {       // Regional Manager manages several kiosks
                        var kiosk_list_array = [];
                        kiosk_list_array = kiosk_list.split(",");
                        c_debug(debug.location, "getFilteredLocations : kiosk_list_array = ", kiosk_list_array);
                        input.location_code.$in = kiosk_list_array;
                    
                    } else {                            // only one kiosk is managed by this manager
                        input.location_code = { "$regex" : location_code_value, "$options" : "i"};
                    }
                }
        }
        
        // call api to location collection
        c_debug(debug.location, "getFilteredLocations : input = ", input);
        id_get_filtered_locations_api.trigger(input, options, get_locations_ok, get_locations_ko);
    }
    RMPApplication.debug("end getFilteredLocations");
}

function get_locations_ok(result)
{
    RMPApplication.debug("begin get_locations_ok : result = " + JSON.stringify(result));
    c_debug(debug.location, "=> get_locations_ok : result = ", result);
    var result_array = result.res ;
    // Fill locations select box with locations result
    fillLocationBox(result_array);
    RMPApplication.debug("end get_locations_ok");
}

function get_locations_ko(error)
{
    RMPApplication.debug("begin get_locations_ko : error = " + JSON.stringify(error));
    c_debug(debug.location, "=> get_locations_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("get_locations_ko_msg", "Récupération impossible des informations du site !"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug("end get_locations_ko");
}

// ======================
//   Load_location
// ======================
function load_location()
{
    RMPApplication.debug("begin load_location");
    c_debug(debug.location, "=> load_location");
    var locationCode = $('#id_locationFilter').val();
    if (isEmpty(locationCode) || locationCode === "false" || locationCode === "tous") {
        $("#id_locationFilter").select2("close");
        /*var  title = ${P_quoted(i18n("error_location_title", "Erreur"))};
        var  content = ${P_quoted(i18n("location_selection", "Veuillez sélectionner un seul site, en utilisant si besoin les filtres PAYS et/ou ENSEIGNE..."))};
        dialog_error(title, content, btn_ok);*/
        return;
    }

    var my_pattern = {};
    var options = {};
    my_pattern.location_code = locationCode;
    c_debug(debug.location, "=> load_location: my_pattern =", my_pattern);
    id_get_location_by_code_api.trigger(my_pattern , options, load_location_ok, load_location_ko);
    RMPApplication.debug ("end load_location");
}

function load_location_ok(result)
{
    RMPApplication.debug("begin load_location_ok : result = " + JSON.stringify(result));
    c_debug(debug.location, "=> load_location_ok: result = ", result);
    selected_location = result;
    
    // Following line is enabled for a company with only one affiliate 
    enseigne = selected_location.affiliate.toUpperCase();
    /* // Following lines can be disabled if the concerned company only have one affiliate 
    selected_affiliate.affiliate = selected_location.affiliate.toUpperCase();
    $("#id_countryFilter").val(selected_location.country);
    // get abbreviate name of affiliate
    getAffiliate(selected_affiliate.affiliate); */

    // load and start decision tree to find an existing soluce or open a ticket
    load_decision_tree();
    RMPApplication.debug ("end load_location_ok");    
}

function load_location_ko(error) 
{
    RMPApplication.debug ("begin load_location_ko : error = " + JSON.stringify(error)); 
    c_debug(debug.location, "=> load_location_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("load_location_ko_msg", "Récupération impossible des informations du site !"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug ("end load_location_ko");    
}

// ========================================================
//  get complete informations of selected affiliate
// ========================================================
function getAffiliate(affiliate_value)
{
    RMPApplication.debug("=> begin getAffiliate: affiliate_value = ", affiliate_value);
    c_debug(debug.affiliate, "=> getAffiliate: affiliate_value = ", affiliate_value);
    var options = {};
    var input = {};
    var query = {};
    query.affiliate = { "$regex" : affiliate_value, "$options" : "i"};    // get selected affiliate value
    input.input_query = query; 
    c_debug(debug.affiliate, "=> getAffiliate: input = ", input);
    id_get_affiliate_api.trigger(input, options, affiliate_ok, affiliate_ko);
    RMPApplication.debug("end getAffiliate");
}

function affiliate_ok(result)
{
    RMPApplication.debug("begin affiliate_ok : result = " + JSON.stringify(result));
    c_debug(debug.affiliate, "=> affiliate_ok: result = ", result);
    var affiliate_obj = result.records[0];

    // createRequest(affiliate_obj);    // not called as get_affiliate function is not executed
    RMPApplication.debug("end affiliate_ok");
}

function affiliate_ko(error)
{
    RMPApplication.debug("begin affiliate_ko : error = " + JSON.stringify(error));
    c_debug(debug.affiliate, "=> affiliate_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("affiliate_ko_msg", "Récupération impossible des informations de la filiale !"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);  
    RMPApplication.debug("end affiliate_ko");
}

// =============================================================
// Create Work Order insertion request to Service Now
// =============================================================
function createRequest(aff_obj)
{
    RMPApplication.debug("begin createRequest: aff_obj = " + JSON.stringify(aff_obj));
    c_debug(debug.insert, "=> createRequest: aff_obj = ", aff_obj);

    var num_pos = $("#id_numPOS").val();
    var selectedFam = $("#id_selectedFamily").val();
    var selectedCat = $("#id_selectedCategory").val();
    var selectedBrand = $("#id_selectedBrand").val();
    var selectedModel = $("#id_selectedModel").val();
    var requestType = $("#id_requestType").val();
    var caller, logical_name, location, separator;
    
    switch (selected_location.affiliate) {

        case 'XXXXX':
            caller = "hotline@XXXXX.com";
            location = $.trim(selected_location.location_name);
            // logical_name format => MAG00BxxxCAI01
            logical_name = "MAG00" + selected_location.location_code + short_cat + num_pos;
            break;

        default:
            separator = "-";
            location = $.trim(selected_location.location) + separator + $.trim(selected_location.location_code);
            caller = "Resp " + location;
            logical_name = "MAG" + selected_location.location_code + short_cat + num_pos;
    }

    var work_order_type = requestType.toLowerCase();
    var category = selected_model.sn_category;
    // Change with 'selected_model.sn_u_problem_type' when collection is modified
    var product_type = selected_model.sn_u_product_type;
    var problem_type = selected_model.sn_u_problem_type;     
    var contract = aff_obj.company + "\\" + aff_obj.abbreviation;    // contract 
    var customer_site = location; 
    var contact_type = "RunMyStore";
    var qualification_group = "";
    var customer_reference = $("#id_refCustomer").val(); 
    var contact = $("#id_contact").val();
    // issue description will contain informations about impacted equipement
    var description_head = "- Matériel: " + selectedCat + " (" + selectedBrand + " - " + selectedModel + ")";
    var description_body = $("#id_descripton").val();
    var short_description = description_body.substring(0,99);
    var description = description_head + "\n" + "- Information: " + description_body;
    var expected_start = "";
    var priority = "3";		// 3 - Moderate
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
    work_order.sn_u_customer_site = customer_site;
    work_order.sn_state = state;
    work_order.sn_qualification_group = qualification_group;
    work_order.sn_short_description = short_description;
    work_order.sn_priority = priority;
    work_order.sn_u_contact_details = contact_detail;
    work_order.sn_u_work_order_type = work_order_type;
    work_order.sn_category = category;
    work_order.sn_u_product_type = product_type;
    work_order.sn_u_problem_type = problem_type;
    work_order.sn_expected_start = expected_start;
    work_order.sn_cmdb_ci = logical_name;

    $("#id_spinner_insert").show();

    c_debug(debug.insert, "=> createRequest: work_order = ", work_order);
    id_insert_work_order_api.trigger (work_order, options, insert_ok, insert_ko);

    // after insertion in Service Now => reload a new work order request screen
    resetWI();
    RMPApplication.debug("end createRequest");  
}

function insert_ok(result) 
{
    RMPApplication.debug("begin insert_ok : " + JSON.stringify(result));
    c_debug(debug.insert, "=> insert_ok: result = ", result);
    $("#id_spinner_insert").hide();
    wm_order = result;
    var title = ${P_quoted(i18n("id_title_1", "Information Suivi Demande"))};
    var content1 = ${P_quoted(i18n("id_msg_1", "Demande créée sous la référence"))};
    var content2 = ${P_quoted(i18n("id_msg_2", "Vous allez être contacté dans les plus brefs délais."))};
	dialog_success(title, content1 + ": \n<strong>" + wm_order.insertResponse.number + "</strong>\n" + content2, btn_ok);

    RMPApplication.debug("end insert_ok");  
}

function insert_ko(error) 
{
    RMPApplication.debug("begin insert_ko : error = " + JSON.stringify(error));
    c_debug(debug.insert, "=> insert_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("insert_ko_msg", "Création impossible du ticket !"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    $("#id_spinner_insert").hide();
    RMPApplication.debug("end insert_ko");      
}

function load_decision_tree()
{
    RMPApplication.debug("begin load_decision_tree");
    c_debug(debug.decision, "begin load_decision_tree");
    RMPApplication.set("loc_code", $('#id_locationFilter').val()); 

    // once location is set, we can start to browse the decision tree
    id_decision_tree.setVisible(true);
    RMPApplication.debug("end load_decision_tree");
}

// The next screen is opened with "location_code" value in the url
function load_next_screen(n_interface)
{
    RMPApplication.debug("begin load_next_screen : n_interface = " + JSON.stringify(n_interface));
    var url = "https://live.runmyprocess.com/live/112501480325272109/appli/";
    url += n_interface + "?P_mode=${P_mode}&P_language=${P_language}&location_code="
    url += RMPApplication.get("loc_code");
    c_debug(debug.decision, "=> load_next_screen: url = ", url);
    window.location = url;
    RMPApplication.debug("end load_next_screen");
}