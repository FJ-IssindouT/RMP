// ========================
//   Dashboard: MAIN
// ========================
RMPApplication.debug("Dashboard : Application started");

// ========================
// Variables declaration
// ========================

// if "true", logs will be showed on the browser console
var debug = {
    "init" : false,
    "box" : false,
    "site" : false,
    "query" : false,
    "sla" : false,
    "chart" : false
    // "order" : true
};

// other global variables
var login = {};                 // retrieve metadata user
var view = '';                  // define current profile view
var scope = null;               // scope of involved locations
var enseigne = null;            // affiliate's login user
var affiliateList = null;       // group of alliliates for specific profile
var var_location_list = null;   // all locations defined by entry filter
var sn_query = '';              // query sent to Service Now
var contractsListQuery = '';    // part of query with involved contracts will be re-used
var locationsListQuery = '';    // part of query with involved contracts will be re-used
var wos_array = null;           // all opened work orders with active SLA for selected locations

var error_title_notify = ${P_quoted(i18n("error_title_notify", "Erreur"))};
var error_thanks_notify = ${P_quoted(i18n("error_thanks_notify", "Merci de signaler cette erreur!"))};
var btn_ok = ${P_quoted(i18n("btn_ok", "OK"))};

// Identify special DIV for informations
var id_profile = $("#id_profile");
var id_company = $("#id_company");

init();     // trigger main process

// ========================
// Execute main process
// ========================
function init() 
{
    RMPApplication.debug("begin init : login = " + login);
    var option = {};
    var pattern = {};
    pattern.login = RMPApplication.get("login");
    c_debug(debug.init, "=> init: pattern = ", pattern);

    id_get_user_info_as_admin_api.trigger (pattern, option , get_info_ok, get_info_ko);
    RMPApplication.debug("end init");
}

// ============================================
// get user details from user metadata details
// ============================================
function get_info_ok(result) 
{
    RMPApplication.debug("begin get_info_ok : result = " + JSON.stringify(result));
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
    enseigne = login.affiliate;
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

    // Show View profile and Company
    id_profile.attr("value", view);
    id_profile.attr('readonly', 'readonly');
    id_company.attr("value", login.company);
    id_company.attr('readonly', 'readonly');
    c_debug(debug.init, "=> get_info_ok: view = ", view);

    fillCountryBox(view);       // Country selection if authorized
    fillAffiliateBox(view);     // Affiliate selection if authorized
    fillOtherInfo(view);        // Show Division / Region if manager
    getFilteredLocations();     // prepare query to submit to Service Now (check "Graphes JS script")
    RMPApplication.debug("end get_info_ok");
}

function get_info_ko(error) 
{
    RMPApplication.debug("get_info_ko : " + JSON.stringify(error));
    c_debug(debug.init, "=> get_info_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("get_info_ko_msg", "Récupération impossible des informations utilisateur!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug("end get_info_ko");
} 

// ========================
// selection boxes filling
// ========================

// ========================================================
// According to the view, fill the country select box
// ========================================================
function fillCountryBox(vue) 
{
    RMPApplication.debug("begin fillCountryBox");
    c_debug(debug.box, "=> fillCountryBox: vue = ", vue);

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

    // Listen changes before populating locations select box
    $("#id_countryFilter").change(getFilteredLocations);

    RMPApplication.debug ("end fillCountryBox"); 
}

// ========================================================
// According to the view, fill the affiliate select box
// ========================================================
function fillAffiliateBox(vue) 
{
    RMPApplication.debug("begin fillAffiliateBox");
    c_debug(debug.box, "=> fillAffiliateBox: vue = ", vue);

    var affiliateListTemp = JSON.parse(id_affiliate_cl.getList()).list;
    c_debug(debug.box, "=> fillAffiliateBox: affiliateListTemp = ", affiliateListTemp);

    var text_affiliateFilter = ${P_quoted(i18n("affiliateFilter_text", "TOUTES LES ENSEIGNES"))};

    // Complete affiliate selection filter according connected profile
    switch (vue) {
    case "SUPERUSER" :
        case "COMPANY" : // see "COUNTRY"
        case "COUNTRY" :
            // Following line can be disabled if the concerned company only have one affiliate 
            // $("#id_affiliateFilter").append($("<option selected />").val('tous').html(text_affiliateFilter));
            affiliateList = JSON.parse(id_affiliate_cl.getList()).list;
            var aff_list_length = affiliateList.length;
            for (var i=0; i < aff_list_length; i++) {
                if (aff_list_length > 1) {
                    if (i==0) {
                        // If we have more than one affiliate, "all" option for selection is added
                        $("#id_affiliateFilter").append($("<option selected />").val('tous').html(text_affiliateFilter));
                    }
                } else {
                    // If we have only one affiliate, we can fix the following field as read-only
                    $("#id_affiliateFilter").attr('readonly', 'readonly');
                }
                $("#id_affiliateFilter").append($("<option />").val(affiliateList[i].value).html("&#10143; " + affiliateList[i].label.toUpperCase()));
            }
            // If we have only one affiliate, we can fix the following field as read-only
            // $("#id_affiliateFilter").attr('readonly', 'readonly');
            break;

        case "GRP_AFF" :
            $("#id_affiliateFilter").append($("<option selected />").val('tous').html(text_affiliateFilter));
            affiliateList = [];
            switch (login.grp_affiliates) {
                case 'SOCIETE2':
                    affiliateList = [{'label':'SOCIETE 2A', 'value':'SOC2A'}, {'label':'SOCIETE 2B', 'value':'SOC2A'}];
                    break;
                case 'SOCIETE3':
                    affiliateList = [{'label':'SOCIETE 3A', 'value':'SOC3A'}, {'label':'SOCIETE 3B', 'value':'SOC3B'}, {'label':'SOCIETE 3C', 'value':'SOC3C'}];
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
            c_debug(debug.box, "=> fillAffiliateBox: affiliateList = ", affiliateList);
            $("#id_affiliateFilter").append($("<option selected />").val(affiliateList[0].value).html(affiliateList[0].label.toUpperCase()));
            $("#id_affiliateFilter").attr('readonly', 'readonly');
            break;
        default:
            break;
    }

    // Listen changes before populating dynamically locations select box
    if (affiliateListTemp.length > 1) {
        $("#id_affiliateFilter").change(getFilteredLocations);
    }

    RMPApplication.debug ("end fillAffiliateBox");
}

// function script executed in Post loaded script for hidden "Country List" Widget
function fillOtherInfo(vue) 
{
    RMPApplication.debug("begin fillOtherInfo");
    c_debug(debug.box, "=> fillOtherInfo: vue = ", vue);

    // Adapt this info area according the previous selection (country & affiliate)
    switch (vue) {
        case "DIVISION" :
            $("#id_otherInfo").val (login.division);
            $("#id_otherInfo").attr('readonly', 'readonly');
            $("#id_divOtherInfo").show();
            break;      
        case "REGION" :
            $("#id_otherInfo").val (login.region);
            $("#id_otherInfo").attr('readonly', 'readonly');
            $("#id_divOtherInfo").show();
            break;          
        case "LOCAL" :
            $("#id_otherInfo").val (login.location_code);           
            $("#id_otherInfo").attr('readonly', 'readonly');
            $("#id_divOtherInfo").show();
            break;
        default:
            $("#id_divOtherInfo").hide();
            break;
    }
    RMPApplication.debug ("end fillOtherInfo"); 
}

// ======================================================================================================
// Retrieve values from country, affiliate & location to define request pattern to location collection
// ======================================================================================================
function getFilteredLocations()
{
    RMPApplication.debug("begin getFilteredLocations");
    c_debug(debug.site, "=> getFilteredLocations");

    $("#id_spinner_search").show();         // show spinner before querying Service Now

    // Retrieving user's input value
    var country_value = $("#id_countryFilter").val();
    var affiliate_value = $("#id_affiliateFilter").val();
    c_debug(debug.site, "=> getFilteredLocations: affiliate_value = ", affiliate_value);
    var affiliate_label = $("#id_affiliateFilter").text(); 
    var division_value = login.division; 
    var region_value = login.region;
    var location_code_value = login.location_code;

    // define pattern to query RMP locations collection
    var input  = {};
    var options = {};

    // retrieve complete name of affiliate (actually abrreviate name is value)
    if ( (affiliate_value !== "tous") && (!isEmpty(affiliate_value)) ) {
        for (var i=0; i < affiliateList.length; i++) {
            if ( affiliate_value.toUpperCase() ==  affiliateList[i].value.toUpperCase() ) {
                affiliate_value = affiliateList[i].label.toUpperCase();
                c_debug(debug.site, "=> getFilteredLocations: affiliate_value = ", affiliate_value);
            }
        }
    }

    c_debug(debug.site, "=> getFilteredLocations: switch | view = ", view);
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
                    case 'SOCIETE2':
                        if ( (affiliate_value !== "tous") && (!isEmpty(affiliate_value)) ) {
                            input.affiliate = { "$regex" : affiliate_value, "$options" : "i"};

                        } else {
                            // TO DO: composer la query avec le nom des 2 enseignes
                            input.affiliate = {};
                            input.affiliate.$in = ['SOCIETE 2A', 'SOCIETE 2B']; 
                        }
                        break;
                    case 'SOCIETE3':
                        if ( (affiliate_value !== "tous") && (!isEmpty(affiliate_value)) ) {
                            input.affiliate = { "$regex" : affiliate_value, "$options" : "i"}; 

                        } else {
                            // TO DO: composer la query avec le nom des 3 enseignes
                            input.affiliate = {};
                            input.affiliate.$in = ['SOCIETE 3A', 'SOCIETE 3B', 'SOCIETE 3C']; 
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
                if ( (location_code_value !== "tous") && (!isEmpty(location_code_value)) ) {
                    input.location_code = { "$regex" : location_code_value, "$options" : "i"};
                }
        }
    
    //call api to location collection
    c_debug(debug.site, "=> getFilteredLocations: input = ", input);
    id_get_filtered_locations_api.trigger(input, options, get_locations_ok, get_locations_ko);

    RMPApplication.debug("end getFilteredLocations");
}


function get_locations_ok(result)
{
    RMPApplication.debug("begin get_locations_ok : result = " + JSON.stringify(result));
    var_location_list = result.res;
    c_debug(debug.site, "=> get_locations_ok : var_location_list = ", var_location_list);

    // Define an array with composed locations name
    var location_names_array = [];
    var separator, rule_name;
    for (var j = 0 ; j < var_location_list.length ; j++) {

        switch (var_location_list[j].affiliate.toUpperCase()) {
            case 'XXXXXX':              // case "XXXXXX" affiliate & location name's specific rule
                separator = "-";
                rule_name = "loca_rule_1";
                break;
            default:        // other affiliates with common rule
                separator = "-";
                rule_name = "loca_rule_2";
                break;
        }
        // c_debug(debug.site, "=> get_locations_ok : rule_name = ", rule_name);

        switch (rule_name) {
            case 'loca_rule_1':         //  case "XXXXXX" affiliate
                var loca_name = $.trim(var_location_list[j].location_name);
                break;
            case 'loca_rule_2':
                var loca_name = $.trim(var_location_list[j].location) + separator + $.trim(var_location_list[j].location_code);
                break;
        }   // -- end switch (rule_name)
        // c_debug(debug.site, "=> get_locations_ok : j = ", j);
        // c_debug(debug.site, "=> get_locations_ok : loca_name = ", loca_name);

        location_names_array.push(loca_name);
    }

    var selected_dashboard_tab = id_selected_dashboard_tab.getValue();
    c_debug(debug.site, "=> get_locations_ok : selected_dashboard_tab = ", selected_dashboard_tab);
    switch (selected_dashboard_tab) {
        case "kpi" :
            break;
        case "chart" :
        case "map" :
            setScopeLocations();
            break;
        default:
            break;
    }
    RMPApplication.debug("end get_locations_ok");
}

function get_locations_ko(error)
{
    RMPApplication.debug("begin get_locations_ko : error = " + JSON.stringify(error));
    c_debug(debug.site, "=> get_locations_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("get_locations_ko_msg", "Récupération impossible des informations du site!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug("end get_locations_ko");
}


// =========================================================================================
//  define scope & locations list according to view, country & affiliate, locations filter
// =========================================================================================
function setScopeLocations() 
{
    RMPApplication.debug("begin setScopeLocations");
    c_debug(debug.site, "=> setScopeLocations");
    var country_value = $("#id_countryFilter").val();
    var affiliate_value = $("#id_affiliateFilter").val();
    var allCountries = (country_value.toLowerCase() === "tous") ? true : false;
    var allAffiliates = (affiliate_value.toLowerCase() === "tous") ? true : false;

    sn_query = "";      // previous query reset

    // Set SCOPE variable: check if "tous" value is selected for country & affiliate filters
    c_debug(debug.site, "=> setScopeLocations: switch | view = ", view);
    switch (view) {
        case "COMPANY" :
            if (allCountries && allAffiliates) {    // "tous" + "tous" => company is enough
                scope = "COMPANY";
                getCompanyQuery();
            } else if (allCountries) {              // "tous" + 1 selected affiliate => contract is enough
                scope = "AFFILIATE";
                getContractFullName();              // by requesting affiliate collection
            } else if (allAffiliates) {             // 1 selected country + "tous" => query with country setted
                scope = "COUNTRY";
                getCompanyQuery();
            } else {
                scope = "AFFILIATECOUNTRY";
                getContractFullName();              // by requesting affiliate collection
            }
            break;

        case "GRP_AFF" :
            if (allCountries && allAffiliates) {    // "tous" + "tous" => company is enough
                scope = "GRP_AFF";
                getContractFullName();
            } else if (allCountries) {              // "tous" + 1 selected affiliate => contract is enough
                scope = "AFFILIATE";
                getContractFullName();              // by requesting affiliate collection
            } else if (allAffiliates) {             // 1 selected country + "tous" => query with country setted
                scope = "COUNTRY";
                getContractFullName();
            } else {
                scope = "AFFILIATECOUNTRY";
                getContractFullName();              // by requesting affiliate collection
            }
            break;

        case "AFFILIATE" :
            if (allCountries) {            // 1 selected country + "tous" => query with country setted
                scope = "AFFILIATE";
                getContractFullName();
            } else {
                scope = "AFFILIATECOUNTRY";
                getContractFullName();      // by requesting affiliate collection
            }
            break;

        case "COUNTRY" :
            if (allAffiliates) {            // 1 selected country + "tous" => query with country setted
                scope = "COUNTRY";
                getCompanyQuery();
            } else {
                scope = "AFFILIATECOUNTRY";
                getContractFullName();      // by requesting affiliate collection
            }
            break;

        case "DIVISION" :
            scope = "DIVISION";
            getContractFullName();          // by requesting affiliate collection
            break;

        case "REGION" :
            scope = "REGION";
            getContractFullName();          // by requesting affiliate collection
            break;

        case "LOCAL" :
            scope = "LOCAL";
            getContractFullName();          // by requesting affiliate collection
            break;
    }
    c_debug(debug.site, "=> setScopeLocations: scope = ", scope);

    RMPApplication.debug("end setScopeLocations");
}

// ===========================
//  company definition
// ===========================
function getCompanyQuery()
{
    RMPApplication.debug("begin getCompanyQuery");
    var company = login.company;
    if (isEmpty(company)) {
        var error_msg = ${P_quoted(i18n("error_getCompanyQuery_msg", "Le nom de la compagnie n'est pas pas défini!"))};
        notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify); 
        return;
    } else {
        var companyQuery = "^wo_companyLIKE" + login.company;
        c_debug(debug.query, "=> getCompanyQuery: companyQuery = ", companyQuery);  
        sn_query += companyQuery;       // query is completed
        getContractFullName();          // to define contract name
    }
    RMPApplication.debug("end getCompanyQuery");
}

// =============================================
//  compose Contract FullName
// =============================================
function getContractFullName()
{
    RMPApplication.debug("begin getContractFullName");
    c_debug(debug.query, "=> getContractFullName: view = ", view);
    var affiliate_value = $("#id_affiliateFilter").val();          //get selected affiliate value (only one can be selected)
    var allAffiliates = (affiliate_value.toLowerCase() === "tous") ? true : false;
    contractsListQuery = '';    // reset of previous query

    c_debug(debug.query, "=> getContractFullName: switch | scope = ", scope);
    switch (scope) {
        case "COUNTRY" :
        case "GRP_AFF" :         // affiliate_value = 'tous'
            var contractQuery = '';
            switch (login.grp_affiliates) {
                case 'SOCIETE2' :
                case 'SOCIETE3' :
                    var first = true;
                    // affiliateList contains all affiliates involded in the query
                    for (var i=0; i < affiliateList.length; i++) {
                        var contract = login.company + "\\" + affiliateList[i].value;          // contract definition
                        if (first == true) {
                            first = false;
                            contractQuery += "^co_u_full_nameIN" + contract.toUpperCase();      // special SN view
                            contractsListQuery += "^co_u_full_nameIN" + contract.toUpperCase();    // standard SN table
                        } else {
                            contractQuery += "," + contract.toUpperCase();
                            contractsListQuery += "," + contract.toUpperCase();
                        }
                    }
                    break;
                default :
                    break;
            }
            c_debug(debug.query, "=> getContractFullName: contractQuery = ", contractQuery);
            sn_query += contractQuery;          // query is completed
            getLocationQuery();                 // precise geographical area to limit search time
            break;

        default :

            if (allAffiliates) {
                getLocationQuery();             // precise geographical area to limit search time
            } else {
                var input = {};
                var query = {};
                query.abbreviation = { "$regex" : affiliate_value, "$options" : "i"};       // options for case INSENSITIVE
                input.input_query = query; 
                c_debug(debug.query, "=> getContractFullName: switch default: input = ", input);
                id_get_affiliate_api.trigger(input, {}, affiliate_ok, affiliate_ko);
            }
            break;
    }
    RMPApplication.debug("end getContractFullName");
}

function affiliate_ok(result)
{
    RMPApplication.debug("begin affiliate_ok : result = " + JSON.stringify(result));
    c_debug(debug.query, "=> affiliate_ok: result = ", result);
    if ( (result.records.length == undefined) || (result.records.length == 0) ) {
        var  error_affiliate_ok_title = ${P_quoted(i18n("error_affiliate_ok_title", "Résultat de la recherche"))};
        var  error_affiliate_ok_msg = ${P_quoted(i18n("error_affiliate_ok_msg", "Aucune enseigne ne répond aux critères!"))};
        dialog_error(error_affiliate_ok_title, error_affiliate_ok_msg, btn_ok);
        return;
    } else {
        affiliate_obj = result.records[0];
        var contract = affiliate_obj.company + "\\" + affiliate_obj.abbreviation;   // contract definition
        var contract_query = "^co_u_full_name=" + contract.toUpperCase();
        sn_query += contract_query;            // query is completed; special SN view
        c_debug(debug.query, "=> affiliate_ok: sn_query = ", sn_query);

        contractsListQuery += "^co_u_full_nameIN" + contract.toUpperCase();    // standard SN table
        c_debug(debug.query, "=> affiliate_ok: contractsListQuery = ", contractsListQuery);

        getLocationQuery();     // precise geographical area to limit search time
    }
    RMPApplication.debug("end affiliate_ok");
}

function affiliate_ko(error)
{
    RMPApplication.debug("begin affiliate_ko : error = " + JSON.stringify(error));
    c_debug(debug.query, "=> affiliate_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("affiliate_ko_msg", "Récupération impossible des informations de la filiale!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify); 
    RMPApplication.debug("end affiliate_ko");
}

// ===========================
//  locationFilter definition
// ===========================
function getLocationQuery()
{
    RMPApplication.debug("begin getLocationQuery");
    c_debug(debug.query, "=> getLocationQuery: scope = ", scope);
    var country_value = $("#id_countryFilter").val();
    var affiliate_value = $("#id_affiliateFilter").val();
    var locationQuery = "";     // temporary query
    locationsListQuery = "";

    switch (scope) {            // "scope" is defined in getLocations() function

        case "COMPANY" :        // contract is already defined and is enough to query SNOW
            break;

        case "GRP_AFF" :        // list of involved contracts are already defined 
            break;

        case "AFFILIATE" :      // contract is already defined and is enough to query SNOW
            break;              // "All countries" and 1 affiliate are selected

        case "COUNTRY" :
            locationQuery += "^loc_country=" + $.trim(country_value);
            locationsListQuery += "^loc_country=" + $.trim(country_value);
            break;              // "All affiliates" and 1 country are selected            

        case "AFFILIATECOUNTRY" :       // contract is already defined !
            locationQuery += "^loc_country=" + $.trim(country_value);
            locationsListQuery += "^loc_country=" + $.trim(country_value);
            break;

        case "DIVISION" :       // we can optimize SN query by adding division's location value
            locationQuery += "^loc_country=" + $.trim(country_value);
            locationsListQuery += "^loc_country=" + $.trim(country_value);
            locationQuery += "^loc_u_division=" + $.trim(login.division);
            locationsListQuery += "^loc_u_division=" + $.trim(login.division);
            break;

        case "REGION" :         // we can optimize SN query by adding region's location value
            locationQuery += "^loc_country=" + $.trim(country_value);
            locationsListQuery += "^loc_country=" + $.trim(country_value);
            locationQuery += "^loc_u_region=" + $.trim(login.region);
            locationsListQuery += "^loc_u_region=" + $.trim(login.region);
            break;

        case "LOCAL" :          // this kind of profile shouldn't access to Dashboard module
            locationQuery += "^loc_country=" + $.trim(country_value);
            locationQuery += "^loc_u_division=" + $.trim(login.division);
            locationQuery += "^loc_u_region=" + $.trim(login.region);
            locationQuery += "^cu_correlation_id=" + $.trim(login.location_code);
            break;

    }   // -- end switch (scope)

    c_debug(debug.query, "=> getLocationQuery: locationQuery = ", locationQuery);
    c_debug(debug.query, "=> getLocationQuery: locationsListQuery = ", locationsListQuery);
    sn_query += locationQuery;          // query is complete
    queryServiceNow();                  // request Service Now with sn_query

    RMPApplication.debug("end getLocationQuery");
}

/********************************
    fonctions transverses
*********************************/
function queryServiceNow()
{
    RMPApplication.debug("begin QueryServiceNow");

    // For reminder, sn_query already contains, when impacted:
    // names of company, affiliates, country, division, region

    // Only work orders with active SLA are interesting for cartography
    sn_query += "^tasksla_active=true";         // only WO with an associated active sla
    sn_query += "^tasksla_stage=in_progress";         // only WO with an associated active sla & in_progress stage

    var input = {};
    var options = {};
    input.query = sn_query;
    c_debug(debug.query, "=> queryServiceNow: sn_query = ", sn_query);

    id_get_work_order_sla_api.trigger(input, options, get_wos_sla_ok, get_wos_sla_ko);

    RMPApplication.debug("end QueryServiceNow");
}

function get_wos_sla_ok(result)
{
    RMPApplication.debug("begin get_wos_sla_ok : result = " + JSON.stringify(result));
    c_debug(debug.sla, "=> get_wos_sla_ok: result = ", result);

    wos_array = result.result;          // array of work orders with active SLA
    $("#id_spinner_search").hide();

    var selected_dashboard_tab = id_selected_dashboard_tab.getValue();
    c_debug(debug.sla, "=> get_wos_sla_ok: selected_dashboard_tab = ", selected_dashboard_tab);   
    
    switch (selected_dashboard_tab) {
        case "kpi" :
            // TO DO: function call with Satisfaction statistics
            break;
        case "chart" :
            getFilter();        // function call to prepare charts drawing
            break;
        case "map" :
            initMap();          // function call to place markers on Google Maps for work orders with active SLA
            break;
        default:
            break;
    }   
    RMPApplication.debug("end get_wos_sla_ok");
}

function get_wos_sla_ko(error)
{
    RMPApplication.debug("begin get_wos_sla_ko : error = " + JSON.stringify(error));
    c_debug(debug.sla, "=> get_wos_sla_ko: error", error);
    $("#id_spinner_search").hide();
    var error_msg = ${P_quoted(i18n("get_wos_sla_ko_msg", "Récupération impossible des interventions avec SLA en cours!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify); 
    RMPApplication.debug("end get_wos_sla_ko");
}
