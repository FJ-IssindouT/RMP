// ========================
//   Work Order Report : MAIN
// ========================
RMPApplication.debug("Main : Application started");

// ========================
// Variables declaration
// ========================

// if "true", logs will be showed on the browser console
var debug = {
    "init" : false,
    "language" : false,
    "box" : false,
    "status" : false,
    "priority" : false,
    "type" : false,
    "site" : false,
    "query" : false,
    "order" : false,
    "photo" : false,
    "task" : false,
    "detail" : true,
    "image" : false,
    "eval" : false,
    "progress" : false
};

// other global variables
var login = {};                     // retrieve metadata user
var view = "";                      // define current profile view
var scope = null;
var sn_query = null;
var affiliate_obj = null;
var affiliateList = null;           // group of alliliates for specific GRP_AFF view
var var_location_list = null;
var var_order_list = null;
var var_task_list = null;
var v_ol = null;
var col_lang_opt = {};

var error_title_notify = ${P_quoted(i18n("error_title_notify", "Erreur"))};
var info_title_notify = ${P_quoted(i18n("info_title_notify", "Information"))};
var error_thanks_notify = ${P_quoted(i18n("error_thanks_notify", "Merci de signaler cette erreur !"))};
var btn_ok = ${P_quoted(i18n("btn_ok", "OK"))};

// used collections list
var col_locations = "col_locations_kellydeli";
var col_languages = "col_langues_kellydeli";

// execute main program
init();

// ========================
// initialization part
// ========================
function init() 
{
    RMPApplication.debug("begin init : login = " + login);
    $("#id_spinner_search_top").hide();
    $("#id_spinner_search_bottom").hide();

    load_language(RMPApplication.get("language"));      // load WI language options

    var option = {};
    var pattern = {};
    pattern.login = RMPApplication.get("login");
    c_debug(debug.init, "=> init: pattern = ", pattern);

    id_get_user_info_as_admin_api.trigger(pattern, option , get_info_ok, get_info_ko);
    RMPApplication.debug("end init");
}

// ============================================
// get information for selected language
// ============================================
function load_language(code_language)
{
    RMPApplication.debug ("begin load_language");
    c_debug(debug.language, "=> load_language: code_language = ", code_language);
    var my_pattern = {};
    var options = {};
    my_pattern.code_language = code_language;
    eval(col_languages).listCallback(my_pattern, options, load_language_ok, load_language_ko);
    RMPApplication.debug ("end load_language");
}

function load_language_ok(result)
{
    RMPApplication.debug ("begin load_language_ok");
    c_debug(debug.language, "=> load_language_ok: result", result);
    if (result.length > 0) {
        col_lang_opt = result[0];
        var success_msg = ${P_quoted(i18n("load_ok_msg", "Informations de la collection chargées !"))};
        // notify_success(info_title_notify, success_msg);
        resetWI();                                          // reset Web Iterface
    }
    RMPApplication.debug ("end load_language_ok");
}

function load_language_ko(error)
{
    RMPApplication.debug ("begin load_language_ko");
    c_debug(debug.language, "=> load_language_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("load_ko_msg", "Récupération impossible des données de la langue !"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug ("end load_language_ko");
}

// ======================
// Reset interface
// ======================
function resetWI()
{
    RMPApplication.debug("begin resetWI");
    c_debug(debug.init, "=> resetWI");
    // Show only the necessary section: search
    id_search_filters.setVisible(true);
    id_search_results.setVisible(false);
    id_ticket_details.setVisible(false);

    // var selectedLang = (isEmpty(RMPApplication.get("language_list_label"))) ? "fr" : RMPApplication.get("language_list_label");                // french by default
    var selectedLang = col_lang_opt.code_language;
    var datebox_lang = col_lang_opt.code_datebox;
    var datepicker_lang = col_lang_opt.code_datepicker;

    var contexte = id_context.getValue();
    // contexte == "web" for desktop screen and datepicker; otherwise (for tablet & mobile) datebox is used as calendar component

    if (contexte == "web") {       // desktop

        var datepicker_options = $.extend(
            {},       // empty object
            $.datepicker.regional[datepicker_lang]
        );
        // All date fields use specific jquery datepicker for more convenience
        $("#id_beginOpenedDateFilter").datepicker(datepicker_options);
        $("#id_endOpenedDateFilter").datepicker(datepicker_options);
        // $("#id_beginClosedDateFilter").datepicker(datepicker_options);
        // $("#id_endClosedDateFilter").datepicker(datepicker_options);
        // set a high z-index value to show datepicker above any tooltip
        $("#id_beginOpenedDateFilter").css('zIndex', 2);
        $("#id_endOpenedDateFilter").css('zIndex', 2);
        // $("#id_beginClosedDateFilter").css('zIndex', 2);
        // $("#id_endClosedDateFilter").css('zIndex', 2);

    } else {                        // tablet or mobile
        // Common Options for datebox pluggins
        var datebox_options = {
            mode: "flipbox",
            themeDate: "info",
            themeDatePick: "warning",
            useLang: datebox_lang,
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
        $('#id_beginOpenedDateFilter').datebox(datebox_options);
        $('#id_endOpenedDateFilter').datebox(datebox_options);
        // $('#id_beginClosedDateFilter').datebox(datebox_options);
        // $('#id_endClosedDateFilter').datebox(datebox_options);
    }

    RMPApplication.debug("end resetWI"); 
}

// ============================================
// get user details from user metadata details
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
    
    fillStateBox();
    fillWoTypeBox();
    fillAffiliateBox(view);
    // fillCountryBox(view);    // function called by fillAffiliateBox
    // getFilteredLocations();

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

// ========================
// selection boxes filling
// ========================

// following function is executed in Post loaded script for hidden "Request Status" Widget
function fillStateBox() 
{
    RMPApplication.debug("begin fillStateBox");
    c_debug(debug.box, "=> fillStateBox");
    var text_statusFilter = ${P_quoted(i18n("statusFilter_text", "Tous les statuts"))};

    $("#id_statusFilter").append($("<option selected />").val('tous').html(text_statusFilter));
    var stateList = JSON.parse(id_request_status_cl.getList()).list;
    for (i=0; i < stateList.length; i++) {
        var stateLabel = translateExp(col_lang_opt.code_language, getVarStatusValue(stateList[i].label));
        $("#id_statusFilter").append("<option value='" + stateList[i].value + "'>&#10143; " + stateLabel + "</option>");
    }
    RMPApplication.debug("end fillStateBox");
}

// following function is executed in Post loaded script for hidden "Request Type" Widget
function fillWoTypeBox() 
{
    RMPApplication.debug("begin fillWoTypeBox");
    c_debug(debug.box, "=> fillWoTypeBox");
    var text_woTypeFilter = ${P_quoted(i18n("woTypeFilter_text", "Tous"))};

    $("#id_woTypeFilter").append($("<option selected />").val('tous').html(text_woTypeFilter));
    var typeList = JSON.parse(id_request_type_cl.getList()).list;
    for (i=0; i < typeList.length; i++) {
        var typeWOLabel = translateExp(col_lang_opt.code_language, getVarWOTypeValue(typeList[i].label));
        $("#id_woTypeFilter").append("<option value='" + typeList[i].value + "'>&#10143; " + typeList[i].label + "</option>");
    }
    RMPApplication.debug("end fillWoTypeBox");
}

// ===================================================================
// According to the view, fill the affiliate select box
//      This function is reduced as it concerns only one affiliate
// ===================================================================
function fillAffiliateBox(vue) 
{
    RMPApplication.debug("begin fillAffiliateBox : vue = ", vue);
    c_debug(debug.box, "=> fillAffiliateBox: vue = ", vue);

    affiliateList = [{ 'label': 'KELLYDELI', 'value': 'KELLYDELI' }];

    $("#id_affiliateFilter").append($("<option selected />").val('KELLYDELI').html('KELLYDELI'));
    $("#id_affiliateFilter").attr('readonly', 'readonly');

    fillCountryBox(view);   // Fill the country select box
    
    RMPApplication.debug ("end fillAffiliateBox"); 
}

// ========================================================
// According to the view, fill the country select box
// ========================================================
function fillCountryBox(vue) 
{
    RMPApplication.debug("begin fillCountryBox: vue = " + JSON.stringify(vue));
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

    // populate locations box at least one time
    getFilteredLocations();

    // Listen changes before populating locations select box
    $("#id_countryFilter").change(getFilteredLocations);

    RMPApplication.debug ("end fillCountryBox"); 
}

// =====================================================================
// According to the view, fill the available locations
// Note: a little bit different with same function in NewWorkOrderPage
// =====================================================================
function fillLocationBox(locations_array)
{
    RMPApplication.debug("begin fillLocationBox: locations_array = " + JSON.stringify(locations_array));
    c_debug(debug.box, "=> fillLocationBox: locations_array = ", locations_array);

    $("#id_locationFilter").empty();    // field reset

    var text_locationFilter = "";

    if (locations_array.length > 0) {

        // to permit the display of placeholder
        // $("#id_locationFilter").append($("<option />").html(''));

        if (locations_array.length > 1) {       // more than 1 only location

            text_locationFilter = ${P_quoted(i18n("locationFilter_text", "Ensemble des sites"))}; 
            $("#id_locationFilter").append($("<option selected />").val('tous').html(text_locationFilter));
            c_debug(debug.box, "=> fillLocationBox: Add => Ensemble des sites");
        }

        // locations_array is alphabetically ordered
        locations_array = locations_array.sort(sortArrayByKey({key: 'location_code', string: true}, false) );

        // We populate selection box with all locations match filter queries
        $.each(locations_array, function() {
            var id_i = this.location_code;
            var text_i = "&#10143; " + this.location_code + " - " + this.city.toUpperCase();
            // c_debug(debug.box, "=> fillLocationBox: location_code = ", this.location_code);
            if (locations_array.length == 1) {
                $("#id_locationFilter").append($("<option selected />").val(id_i).html(text_i));
            } else {  
                $("#id_locationFilter").append($("<option />").val(id_i).html(text_i));
            }
        });

    } else {
        // if locations_array is empty, "false" is affected to "value"
        text_locationFilter = ${P_quoted(i18n("locationFilter_text", "Aucun site pour la selection"))};
        $("#id_locationFilter").append($("<option selected />").val('false').html(text_locationFilter));
    }

    RMPApplication.debug("end fillLocationBox");
}

// =======================================
// Get Var Status Value
// =======================================
function getVarStatusValue (libelle)
{
    RMPApplication.debug("begin getVarStatusValue");
    c_debug(debug.status, "=> getVarStatusValue: libelle = ", libelle);

    switch (libelle)  {
        case "Brouillon" :
        case "Transmis" :
        case "Draft" :
        case "1" :
            return 'st_sent';
            break;
        case "Clos - Résolu" :
        case "Terminé - Complet" :
        case "Closed Complete" :
        case "3" :
            return 'st_closed_complete';
            break;
        case "Clos - Non résolu" :
        case "Terminé - Incomplet" :
        case "Closed Incomplete" :
        case "4" :
            return 'st_closed_incomplete';
            break;
        case "Clos - Annulé" :          
        case "Cancelled" :
        case "7" :
            return 'st_cancelled';
            break;
        case "Diagnostiqué" :
        case "Qualifié" :
        case "Diagnosed" :
        case "Qualified" :
        case "10" :
            return 'st_diagnosed';
            break;
        case "En attente d'approbation" :
        case "Awaiting Approval" :
        case "11" :
            return 'st_waiting_appro';
            break;
        case "Approuvé" :
        case "Approved" :
        case "13" :
            return 'st_approved';
            break;
        case "En attente de diagnostic" :
        case "Awaiting Diagnosis" :
        case "15" :
            return 'st_waiting_diag';
            break;
        case "Assigné" :
        case "Affecté" :
        case "Assigned" :
        case "16" :
            return 'st_assigned';
            break;
        case "En cours de résolution" :
        case "En cours de traitement" :
        case "Work In Progress" :
        case "18" :
            return 'st_in_progress';
            break;
        case "Erreur" :
        case "Error" :
        case "19" :
            return 'st_error';
            break;
        case "Résolu - En attente de cloture" : 
        case "Resolved" :
        case "20" :
            return 'st_resolved';
            break;
        case "Non résolu - En attente de cloture" :
        case "Unresolved" :
        case "21" :
            return 'st_unresolved';
            break;
        default:        // All status or no status selected)
            return 'st_unknown';
            break;
    }
    RMPApplication.debug("end getVarStatusValue");
}

// =======================================
// Get Var Intervention Status Value
// =======================================
function getVarINVStatusValue (libelle)
{
    RMPApplication.debug("begin getVarINVStatusValue");
    c_debug(debug.status, "=> getVarINVStatusValue: libelle = ", libelle);

    switch (libelle)  {
        case "Brouillon" :
        case "Transmis" :
        case "Draft" :
        case "1" :
            return 'st_inv_draft';
            break;
        case "Clos - Résolu" :
        case "Terminé - Complet" :
        case "Closed Complete" :
        case "3" :
            return 'st_inv_closed_complete';
            break;
        case "Clos - Non résolu" :
        case "Terminé - Incomplet" :
        case "Closed Incomplete" :
        case "4" :
            return 'st_inv_closed_incomplete';
            break;
        case "Clos - Annulé" :          
        case "Cancelled" :
        case "7" :
            return 'st_inv_cancelled';
            break;
        case "En attente d'affectation" :
        case "Pending Dispatch" :
        case "10" :
            return 'st_inv_dispatch';
            break;
        case "Assigné" :
        case "Affecté" :
        case "Assigned" :
        case "16" :
            return 'st_inv_assigned';
            break;
        case "Accepté" :
        case "Accepted" :
        case "17" :
            return 'st_inv_accepted';
            break;
        case "En cours de résolution" :
        case "Work In Progress" :
        case "18" :
            return 'st_inv_in_progress';
            break;
        default:        // All status or no status selected)
            return 'st_inv_unknown';
            break;
    }
    RMPApplication.debug("end getVarINVStatusValue");
}

// =======================================
// Get Var Priority Value
// =======================================
function getVarPriorityValue (priority)
{
    RMPApplication.debug("begin getVarPriorityValue");
    c_debug(debug.priority, "=> getVarPriorityValue: priority = ", priority);

    switch (priority)  {
        case '1':
        case '1 - Critical':
        case '1 - Critique':
            return "prio_critical";
            break;
        case '2':
        case '2 - High':
        case '2 - Elevée':
            return "prio_high";
            break;
        case '3':
        case '3 - Moderate':
        case '3 - Modérée':
            return "prio_moderate";
            break;
        case '4':
        case '4 - Low':
        case '4 - Basse':
            return "prio_low";
            break;
        case '5':
        case '5 - Planning':
            return "prio_planned";
            break;
        default:        // All priorities or no priority selected)
            return 'prio_unknown';
            break;
    }
    RMPApplication.debug("end getVarPriorityValue");
}

// =======================================
// Get Var Priority Value
// =======================================
function getVarWOTypeValue (wo_type)
{
    RMPApplication.debug("begin getVarWOTypeValue");
    c_debug(debug.type, "=> getVarWOTypeValue: wo_type = ", wo_type);

    switch (wo_type)  {
        case 'Devis':
            return "type_quotation";
            break;
        case 'IMAC':
            return "type_imac";
            break;
        case 'Preventive':
            return "type_preventive";
            break;
        case 'Request':
            return "type_request";
            break;
        case 'Project':
            return "type_project";
            break;
        case 'Intervention':
            return "type_intervention";
            break;
        case 'Assistance':
            return "type_assistance";
            break;
        default:        // All priorities or no priority selected)
            return 'type_unknown';
            break;
    }
    RMPApplication.debug("end getVarWOTypeValue");
}

// =======================================
// Get Status Value from ServiceNow data
// =======================================
function translateExp (lang, expr)
{
    RMPApplication.debug("begin translateExp");
    c_debug(debug.status, "=> translateExp: lang = ", lang);
    c_debug(debug.status, "=>               expr = ", expr);
    return col_lang_opt[expr];
    RMPApplication.debug("end translateExp");
}

// ======================================================================================================
// Retrieve values from country, affiliate & location to define request pattern to location collection
// ======================================================================================================
function getFilteredLocations()
{
    RMPApplication.debug("begin getFilteredLocations");
    c_debug(debug.site, "=> getFilteredLocations");

    // Retrieving user's input value
    var country_value = $("#id_countryFilter").val();
    var affiliate_value = $("#id_affiliateFilter").val();
    c_debug(debug.site, "=> getFilteredLocations: affiliate_value = ", affiliate_value);
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
        c_debug(debug.site, "=> getFilteredLocations: ADD => => Ensemble des sites");

    } else {

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
                    case 'XXXXX':                   // "XXXXX" abbreviated name of affiliates group
                        /*if ( (affiliate_value !== "tous") && (!isEmpty(affiliate_value)) ) {
                            input.affiliate = { "$regex" : affiliate_value, "$options" : "i"}; 
                        } else {
                            // TO DO: composer la query avec le nom "long" des (n) enseignes
                            input.affiliate = {};
                            input.affiliate.$in = ['Nom Enseigne 1', 'Nom Enseigne 2', 'Nom Enseigne 3']; 
                        }*/
                        break;
                    default:
                        /*if ( (affiliate_value !== "tous") && (!isEmpty(affiliate_value)) ) {
                            input.affiliate = { "$regex" : affiliate_value, "$options" : "i"};
                        }
                        break;*/
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
                        c_debug(debug.site, "getFilteredLocations : kiosk_list_array = ", kiosk_list_array);
                        input.location_code.$in = kiosk_list_array;
                    
                    } else {                            // only one kiosk is managed by this manager
                        input.location_code = { "$regex" : location_code_value, "$options" : "i"};
                    }
                }
        
        }
        //call api to location collection
        c_debug(debug.site, "=> getFilteredLocations: input = ", input);
        id_get_filtered_locations_api.trigger(input, options, get_locations_ok, get_locations_ko);
    }
    RMPApplication.debug("end getFilteredLocations");
}

function get_locations_ok(result)
{
    RMPApplication.debug("begin get_locations_ok : result = " + JSON.stringify(result));
    var_location_list = result.res;
    c_debug(debug.site, "=> get_locations_ok : var_location_list = ", var_location_list);

    // Fill locations select box with locations result
    fillLocationBox(var_location_list);
    RMPApplication.debug("end get_locations_ok");
}


function get_locations_ko(error)
{
    RMPApplication.debug("begin get_locations_ko : error = " + JSON.stringify(error));
    c_debug(debug.site, "=> get_locations_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("get_locations_ko_msg", "Récupération impossible des informations du site !"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug("end get_locations_ko");
}

// ===================================================================
// Get Work Order List From ServiceNow when clicking on Search button 
// ===================================================================
function getWorkOrderListFromServiceNow() 
{
    RMPApplication.debug("begin getWorkOrderListFromServiceNow");
    c_debug(debug.order, "=> getWorkOrderListFromServiceNow");

    id_search_results.setVisible(false);
    initDataTable();
    clearOrderDataTable();
    clearTaskDataTable();
    var wo_type = $("#id_woTypeFilter").val();

    // TO DO
    // Adjust the following values with the contract
    switch (wo_type) {
        case 'intervention':
            break;
        case 'imac':
            break;
        case 'tous':
            break;
        default:
            var  title = ${P_quoted(i18n("error_getWOListFromSN_title", "Type d'incident"))};
            var  content = ${P_quoted(i18n("error_getWOListFromSN_msg", "La recherche pour le type d'incident sélectionné n'est pas encore implémentée !"))};
            dialog_error(title, content, btn_ok);
            return;
            break;
    }
    getFilter();

    RMPApplication.debug("end getWorkOrderListFromServiceNow");
}

// ===========================
//  favorite filter
// ===========================
function favoriteFilter(favQuery)
{
    RMPApplication.debug("begin favoriteFilter: favQuery = ", favQuery);
    c_debug(debug.query, "=> favoriteFilter: favQuery = ", favQuery);
    initDataTable();
    clearOrderDataTable();

    // retrieve values and prepare query
    sn_query = "";

    // specific queries according to selected button
    switch (favQuery) {
        case 'opened' :
            var status = ["1", "10", "11", "13", "15", "16", "18"];
            sn_query += "wo_stateIN" + $.trim(status[0]);
            for (i=1; i<status.length; i++) {
                sn_query += "," + $.trim(status[i]);
            }

            // Results are limited to the last 30 days
            var today = new Date();
            var dat = moment(today).subtract(1,'months').format("YYYY-MM-DD");
            sn_query += "^wo_opened_at&gt;=" + dat;
            break;

        case 'closed_one_month' :
            var status = ["3", "4", "20", "21"];
            sn_query += "wo_stateIN" + $.trim(status[0]);
            for (i=1; i<status.length; i++) {
                sn_query += "," + $.trim(status[i]);
            }
            var today = new Date();
            var dat = moment(today).subtract(1,'months').format("YYYY-MM-DD");
            // closed_at should be filled by Service Now after 7 days
            // We prefer use u_resolution_time which register the last actions in Service Now
            // sn_query += "^closed_at&gt;=" + dat;
            sn_query += "^wo_u_resolution_time&gt;=" + dat;
            break;

        case 'currentMonth' :
            var today = new Date(), y = today.getFullYear(), m = today.getMonth();
            var firstday = new Date(y, m, 1);
            firstday = moment(firstday).format("YYYY-MM-DD");
            sn_query += "wo_opened_at&gt;=" + firstday;
            break;

        case 'lastOne' :        // by default, all ordered by creation date
            var  title = ${P_quoted(i18n("error_favoriteFilter_title", "INFO Recherche"))};
            var  content = ${P_quoted(i18n("error_favoriteFilter_msg", "Ce résultat peut être obtenu en cliquant directement sur le bouton [Rechercher] situé en bas de l'écran."))};
            dialog_info(title, content, btn_ok);
            return;
            break;

        default:     
            break;
    }

    getLocations();
    RMPApplication.debug("end favoriteFilter");
}

// ===========================
//  work order filter
// ===========================
function getFilter()
{
    RMPApplication.debug("begin getFilter");
    c_debug(debug.query, "=> getFilter");

    // retrieve values and prepare query
    sn_query = "";
    sn_query += getWoNumberQuery();         
    sn_query += getCorrelationIdQuery();
    sn_query += getStatusQuery();
    sn_query += getWoTypeQuery();
    sn_query += getDescriptionQuery();
    sn_query += getOpenedAtQuery();
    sn_query += getClosedAtQuery();
    
    getLocations();     // retrieve company, contract and locations

    RMPApplication.debug("end getFilter");
}

// ===========================
//  send query to Service Now
// ===========================
function queryServiceNow()
{
    RMPApplication.debug("begin queryServiceNow: sn_query = ", sn_query);
    c_debug(debug.query, "=> queryServiceNow: sn_query = ", sn_query);
    $("#id_spinner_search_top").show();
    $("#id_spinner_search_bottom").show();
    clearOrderDataTable();
    clearTaskDataTable();
    
    var input = {};
    var option = {};
    input.query = sn_query;
    c_debug(debug.query, "=> queryServiceNow: input = ", input);
    id_get_work_order_list_api.trigger(input, option, order_ok, order_ko);

    RMPApplication.debug("end queryServiceNow");
}

function order_ok(result)
{
    RMPApplication.debug("order_ok : result =  " + result);
    c_debug(debug.order, "=> order_ok: result", result);

    if (isEmpty(result.result) || (result.result.length == 0)) {
        var_order_list = null;
        c_debug(debug.order, "=> order_ok: var_order_list (null) = ", var_order_list);

        var  title = ${P_quoted(i18n("order_ok_title", "Résultat de la recherche"))};
        var  content = ${P_quoted(i18n("order_ok_msg", "Aucun ticket ne correspond aux critères donnés !"))};
        dialog_info(title, content, btn_ok);

        id_search_results.setVisible(false);
        $("#id_spinner_search_top").hide();
        $("#id_spinner_search_bottom").hide();
        return;

    } else {
        var_order_list = result.result;
        c_debug(debug.order, "=> order_ok: var_order_list (not empty) = ", var_order_list);
    }
    
    showOrderArray();
    RMPApplication.debug("end order_ok");
}

function order_ko(error) 
{
    RMPApplication.debug("begin order_ko : error =  " + JSON.stringify(error));
    c_debug(debug.order, "=> order_ko: error", error);
    $("#id_spinner_search_top").hide();
    $("#id_spinner_search_bottom").hide();

    var error_msg = ${P_quoted(i18n("order_ko_msg", "Récupération impossible des informations de Work Order !"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug("end order_ko");
}

// ===================================================
// Show or not the Work Order list in table
// ===================================================
function showOrderArray()
{
    RMPApplication.debug("begin fillOrderArray");
    c_debug(debug.order, "=> fillOrderArray");
    
    if (var_order_list.length != 0) {
        fillOrderArray();               // some orders to show
    } else {
        $("#id_spinner_search_top").hide();
        $("#id_spinner_search_bottom").hide();
        clearOrderDataTable();
    }
    RMPApplication.debug("end task_ok");
}

// ===================================================
// Fill Order Array with Service Now Request Results
// ===================================================
function fillOrderArray()  
{
    RMPApplication.debug("begin fillOrderArray");
    c_debug(debug.order, "=> fillOrderArray: var_order_list = ", var_order_list);

    if (var_order_list == null) {
        $("#id_spinner_search_top").hide();
        $("#id_spinner_search_bottom").hide();
        RMPApplication.debug("fillOrderArray : var_order_list not set ");
        var  title1 = ${P_quoted(i18n("error_fillOrderArray_title1", "Résultat de la recherche"))};
        var  content1 = ${P_quoted(i18n("error_fillOrderArray_msg1", "Aucune demande ne correspond à votre recherche ! <br> (var_order_list non défini)"))};
        dialog_info(title1, content1, btn_ok);
        return;
    }
    $('#id_tab_wm_order').DataTable().clear();

    // Dealing with a single object or an array of objects
    var var_ol = (var_order_list.length == undefined) ? [var_order_list] : var_order_list;
    c_debug(debug.order, "=> fillOrderArray: var_ol = ", var_ol);
    for (i=0; i < var_ol.length; i++) {
        try {

            // var expected_start = "", site_code = "";
            var opened_at = "";
            var expected_start = "";
            var closed_at = "";
            var u_resolution_time = "";
            var site_name = var_ol[i].loc_name;
            c_debug(debug.order, "=> fillOrderArray: var_ol[i].loc_name = ", var_ol[i].loc_name);

            var notation = (isEmpty(var_ol[i].wo_u_customer_satisfaction)) ? "" : setNotation(var_ol[i].wo_u_customer_satisfaction, i);

            if (var_ol[i].wo_opened_at != "") {
                var opened_at_utc = moment.tz(var_ol[i].wo_opened_at, "UTC");
                opened_at = moment(opened_at_utc, "YYYY-MM-DD HH:mm:ss").tz(login.timezone).format("DD/MM/YYYY HH:mm:ss");
            }
            if (var_ol[i].wo_expected_start != "") {
                var expected_start_utc = moment.tz(var_ol[i].wo_expected_start, "UTC");
                expected_start = moment(expected_start_utc, "YYYY-MM-DD HH:mm:ss").tz(login.timezone).format("DD/MM/YYYY HH:mm:ss");
            }
            if (var_ol[i].wo_closed_at != "") {
                var closed_at_utc = moment.tz(var_ol[i].wo_closed_at, "UTC");
                closed_at = moment(closed_at_utc, "YYYY-MM-DD HH:mm:ss").tz(login.timezone).format("DD/MM/YYYY HH:mm:ss");
            }
            if (var_ol[i].wo_u_resolution_time != "") {
                var u_resolution_time_utc = moment.tz(var_ol[i].wo_u_resolution_time, "UTC");
                u_resolution_time = moment(u_resolution_time_utc, "YYYY-MM-DD HH:mm:ss").tz(login.timezone).format("DD/MM/YYYY HH:mm:ss");
            }
            
            var row = new Array (
                "",
                "<button onClick=\"getTaskList(" + i + ");\" class=\"btn_style_loupe loupe\">" + var_ol[i].wo_number + " " + "<i class=\"fa fa-search fa-lg\" aria-hidden=\"true\"></i></button>",
                var_ol[i].wo_short_description.substring(0,45),
                "<span id='id_state" + i + "'>" + translateExp(col_lang_opt.code_language, getVarStatusValue(var_ol[i].wo_state)) + "</span>",
                notation,
                site_name,
                opened_at,
                u_resolution_time
                // closed_at,
                // site_code,
                // expected_start
            );
            // c_debug(debug.order, "=> fillOrderArray: row = ", row);
            $('#id_tab_wm_order').DataTable().row.add(row);
        } catch (ee) {
            alert(ee.message);
        }
    }
    $("#id_spinner_search_top").hide();
    $("#id_spinner_search_bottom").hide();
    id_search_filters.close();
    id_search_results.setVisible(true);
    $('#id_tab_wm_order').DataTable().draw();
    RMPApplication.debug("end fillOrderArray");
}

// ======================================
// Get Task List related to one work order
// ======================================
function getTaskList(indice) 
{
    RMPApplication.debug("begin getTaskList");
    c_debug(debug.task, "=> getTaskList");
    id_index.setValue(indice);
    var query = "parent.number=" + var_order_list[indice].wo_number;

    var options = {};
    var pattern =  {"wm_task_query": query};
    c_debug(debug.task, "=> getTaskList: pattern = ", pattern);
    id_get_work_order_tasks_list_api.trigger(pattern, options, task_ok, task_ko);
    RMPApplication.debug("end getTaskList");
}

function task_ok(result) 
{
    RMPApplication.debug("begin task_ok : result =  " + JSON.stringify(result)); 
    c_debug(debug.task, "=> task_ok: result = ", result);
    if (result.wm_task_list == "") {
        var_task_list = null;
        c_debug(debug.task, "=> task_ok: var_task_list (null) = ", var_task_list);
        clearTaskDataTable();
        id_search_results.setVisible(true);
        $("#id_spinner_search_top").hide();
        $("#id_spinner_search_bottom").hide();
        // return;
    } else {
        var_task_list = result.wm_task_list.getRecordsResult;
        c_debug(debug.task, "=> task_ok: var_task_list (not empty) = ", var_task_list);
    }
    
    if (var_order_list.length != 0) {
        var indice = id_index.getValue();
        c_debug(debug.task, "=> task_ok: call displayDetail | indice = ", indice);
        displayDetail(indice);

    } else {
        clearOrderDataTable();
    }
    RMPApplication.debug("end task_ok");
}

function task_ko(error) 
{
    RMPApplication.debug("begin task_ko : error =  " + JSON.stringify(error));
    c_debug(debug.task, "=> task_ko: error = ", error);
    $("#id_spinner_search_top").hide();
    $("#id_spinner_search_bottom").hide();
    clearTaskDataTable();
    var error_msg = ${P_quoted(i18n("task_ko_msg", "Récupération impossible des interventions !"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug("end task_ko");
}

// ==================================
// Display details selected Ticket
// ==================================
function displayDetail(indice)
{
    RMPApplication.debug("displayDetail : indice =  " + indice);
    v_ol = var_order_list[indice];
    c_debug(debug.detail, "=> displayDetail: v_ol (mini) = ", v_ol);

    // we want all details for the following work order before showing on the screen
    var wo_query = "^wo_number=" + $.trim(v_ol.wo_number);
    var input = {};
    var options = {};
    input.query = wo_query;
    // var input =  {"query": wo_query};
    c_debug(debug.detail, "=> displayDetail: input = ", input);
    id_get_work_order_full_details_api.trigger(input, options, wo_details_ok, wo_details_ko);

    RMPApplication.debug("end displayDetail");
}

function wo_details_ok(result) 
{
    RMPApplication.debug("begin wo_details_ok : result =  " + JSON.stringify(result));
    // c_debug(debug.detail, "=> wo_details_ok: result = ", result);
    v_ol_init = v_ol;
    c_debug(debug.detail, "=> wo_details_ok: v_ol_init (mini) = ", v_ol_init);
    v_ol = result.result[0];
    c_debug(debug.detail, "=> wo_details_ok: result = ", result);
    c_debug(debug.detail, "=> wo_details_ok: v_ol (full) = ", v_ol);

    // Screen change: WOs list => WO details
    id_search_filters.setVisible(false);
    id_search_results.setVisible(false);
    id_ticket_details.setVisible(true);
    
    var text_error_detail = ${P_quoted(i18n("error_detail_text", "Non trouvé !"))};
    var company_detail = (isEmpty(login.company)) ? v_ol.co_u_full_name.toUpperCase() : login.company;
    var affiliate_detail = (isEmpty(v_ol.co_name)) ? v_ol.co_u_full_name : v_ol.co_name;
    var country_detail = (isEmpty(v_ol.loc_country)) ? text_error_detail : v_ol.loc_country.toUpperCase();
    var location_detail = (isEmpty(v_ol.loc_name)) ? text_error_detail : v_ol.loc_name;
    var loc_code = v_ol.cu_correlation_id;

    // timezones are managed by the following block
    if (v_ol.wo_opened_at != "") {
        var opened_at_utc = moment.tz(v_ol.wo_opened_at, "UTC");
        var opened_at = moment(opened_at_utc, "YYYY-MM-DD HH:mm:ss").tz(login.timezone).format("DD/MM/YYYY HH:mm:ss");
    }
    if (v_ol.wo_closed_at != "") {
        var closed_at_utc = moment.tz(v_ol.wo_closed_at, "UTC");
        var closed_at = moment(closed_at_utc, "YYYY-MM-DD HH:mm:ss").tz(login.timezone).format("DD/MM/YYYY HH:mm:ss");
    }
    if (v_ol.wo_u_resolution_time != "") {
        var u_resolution_time_utc = moment.tz(v_ol.wo_u_resolution_time, "UTC");
        var u_resolution_time = moment(u_resolution_time_utc, "YYYY-MM-DD HH:mm:ss").tz(login.timezone).format("DD/MM/YYYY HH:mm:ss");
    }

    $("#id_number_detail").val (v_ol.wo_number);
    $("#id_correlation_id_detail").val (v_ol.wo_correlation_id);
    $("#id_caller_detail").val (v_ol.user_name);
    $("#id_contact_detail").val (v_ol.wo_u_contact_details);
    $("#id_opened_detail").val (opened_at);
    $("#id_priority_detail").val (translateExp(col_lang_opt.code_language, getVarPriorityValue(v_ol.wo_priority)));
    $("#id_state_detail").val (translateExp(col_lang_opt.code_language, getVarStatusValue(v_ol.wo_state)));
    // $("#id_closed_detail").val (wo_closed_at);          // administrative closure
    $("#id_closed_detail").val (u_resolution_time);     // real closure date
    $("#id_category_detail").val (v_ol.cat_u_label  );
    $("#id_product_type_detail").val (v_ol.prod_u_label );
    $("#id_problem_type_detail").val (v_ol.prob_u_label );
    $("#id_short_description_detail").val (v_ol.wo_short_description);
    $("#id_description_detail").val (v_ol.wo_description);
    $("#id_close_notes").val (v_ol.wo_close_notes);

    // Try to show product image associated with the opened ticket
    link_to_photo(v_ol.wo_number);

    // Fill a 2nd table with tasks associated to current work order
    fillTaskArray(v_ol.wo_number);
    var number = v_ol.wo_number;
    
    // Fill statisfaction part if already evaluated or if closed since 5 days
    var eval_note = v_ol.wo_u_customer_satisfaction;
    var eval_comment = v_ol.wo_u_satisfaction_comment;
    fillSatisfaction(eval_note, eval_comment);

    // Draw a progress bar to follow request status
    $("#id_rowProgression").show();
    setProgression(number);

    $("#id_rowValidation").hide();

    RMPApplication.debug("end wo_details_ok");
}

function wo_details_ko(error) 
{
    RMPApplication.debug("begin wo_details_ko : error =  " + JSON.stringify(error));
    c_debug(debug.detail, "=> wo_details_ko : error = ", error);
    $("#id_spinner_search_top").hide();
    $("#id_spinner_search_bottom").hide();
    var error_msg = ${P_quoted(i18n("wo_details_ko_msg", "Récupération impossible des informations de Work Order !"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify); 
    RMPApplication.debug("end wo_details_ko");
}

// ==============================
// Get photo from collection
// ==============================
function link_to_photo(wo_number)
{
    RMPApplication.debug("link_to_photo : wo_number =  " + wo_number);
    c_debug(debug.photo, "=> link_to_photo: wo_number", wo_number);
    var input = {};
    input.wo_number = wo_number;
    id_get_picture_in_collection.trigger(input, {}, get_photo_ok, get_photo_ko);
    RMPApplication.debug("end link_to_photo");
}

function get_photo_ok (result)
{
    RMPApplication.debug("get_photo_ok : result =  " + result);
    c_debug(debug.photo, "=> get_photo_ok: result.my_obj = ", result.my_obj);
    if (result.my_obj.length != 0) {
        var id_attachment = $("#id_attachment");
        id_attachment.html('');
        var content = "";
        for (var i = 0; i< result.my_obj.length; i++) {
            content = content +  '<p><i class="fa fa-file-image-o" aria-hidden="true"></i> <a href="' + result.my_obj[i].url + '" target="_blank">' + result.my_obj[i].name+ '</a></p>';
        }
        id_attachment.append(content);
    }
    RMPApplication.debug("end get_photo_ok");
}

function get_photo_ko (error)
{
    RMPApplication.debug("begin get_photo_ko : error =  " + JSON.stringify(error));
    c_debug(debug.photo, "=> get_photo_ko: error", error);

    var error_msg = ${P_quoted(i18n("order_ko_msg", "Récupération impossible des photos !"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug("end get_photo_ko");
}

// ==============================================
// Fill Task Array with data from ticket details
// ==============================================
function fillTaskArray(wm_order_num)  
{
    RMPApplication.debug ("begin fillTaskArray");
    c_debug(debug.task, "=> fillTaskArray: wm_order_num = ", wm_order_num);

    if (var_task_list == null) {
        c_debug(debug.task, "=> fillTaskArray: var_task_list (null)");
        return;
    }

    $('#id_tab_wm_task').DataTable().clear();
    // Dealing with a single object or an array of objects
    var var_tl = (var_task_list.length == undefined) ? [var_task_list] : var_task_list;
    c_debug(debug.task, "=> fillTaskArray: var_tl = ", var_tl);

    for (j=0; j < var_tl.length; j++) {
        try {
            if (var_tl[j].parent == undefined) continue;
            if (var_tl[j].parent == wm_order_num) {
                var row = new Array (
                    "",
                    var_tl[j].number,
                    var_tl[j].description,
                    translateExp(col_lang_opt.code_language, getVarINVStatusValue(var_tl[j].state)),
                    var_tl[j].opened_at,
                    var_tl[j].closed_at,
                    var_tl[j].dispatch_group,
                    var_tl[j].u_sla,
                    var_tl[j].close_notes,
                    var_tl[j].u_code_cause,
                    var_tl[j].u_code_resolution
                );
                $('#id_tab_wm_task').DataTable().row.add(row)
            }
        } catch (ee) {
            alert(ee.message);
        }
    }
    $('#id_tab_wm_task').DataTable().draw();
}

// ==========================================
// Show satisfaction areas under conditions
// ==========================================
function fillSatisfaction(note, evalComment)
{
    RMPApplication.debug("begin fillSatisfaction");
    c_debug(debug.eval, "=> fillSatisfaction: note = ", note);
    c_debug(debug.eval, "=> fillSatisfaction: evalComment = ", evalComment);

    if (!isEmpty(note)) {                             // already evaluated
        $("#id_divEvaluation").show();
        $("#id_evaluation").rating({
            language: 'fr',
            size: 'sm',
            theme: 'rating-rms-fa',
            showClear: false,
            filledStar: '<i class="fa fa-lg fa-heart"></i>',
            emptyStar: '<i class="fa fa-lg fa-heart-o"></i>'
        });
        $("#id_evaluation").rating('update', note);
        $("#id_evaluation").rating('refresh', {readonly: true});
        c_debug(debug.eval, "=> fillSatisfaction: #1");

        if (!isEmpty(evalComment)) {                  // show comment only if not empty
            $("#id_divEvalComment").show();
            $("#id_evalComment").val (evalComment);
            $("#id_evalComment").attr('readonly', 'readonly');
            c_debug(debug.eval, "=> fillSatisfaction: #2");
        } else {                                
            $("#id_divEvalComment").hide();
            c_debug(debug.eval, "=> fillSatisfaction: #3");
        }
    } else {
        $("#id_divEvaluation").hide();
        $("#id_divEvalComment").hide();
        c_debug(debug.eval, "=> fillSatisfaction: #4");
    } 
    RMPApplication.debug("end fillSatisfaction");
}

// ==========================================================
// Set numerous of hearts according to customer satisfaction 
// ==========================================================
function setNotation(note, indice)
{
    RMPApplication.debug("begin setNotation: note = ", note);
    c_debug(debug.eval, "=> setNotation: note = ", note);
    var column_notation = "";
    var style = 'style="font-size: 1.2em; color: ';
    var heart = '<i class="fa fa-heart"></i>';
    if (note == '0') {
        column_notation = '<div id="id_notation' + indice + '">- &#216; -</div>';
    } else {
        switch (note) {
            case '1':
                star = heart;
                style += '#D9534F;"';
                break;
            case '2':
                star = heart+heart;
                style += '#F0AD4E;"';
                break;
            case '3':
                star = heart+heart+heart;
                style += '#5BC0DE;"';
                break;
            case '4':
                star = heart+heart+heart+heart;
                style += '#337AB7;"';
                break;
            case '5':
                star = heart+heart+heart+heart+heart;
                style += '#5CB85C;"';
                break;
        }
        column_notation = '<div id="id_notation' + indice + '"><span ' + style + '>' + star + '</span></div>';  
    }
    c_debug(debug.eval, "=> setNotation: column_notation = ", column_notation);
    return column_notation;
    RMPApplication.debug("end setNotation");
}

// ==================================
// Get notation value from user input
// ==================================
function setNotationValue(note)
{
    RMPApplication.debug("begin setNotationValue");
    c_debug(debug.eval, "=> setNotationValue: note = ", note);
    $("#id_selectedNotation").val(note);
    RMPApplication.debug("end setNotationValue");
}

// ====================================
// Reset fields after New Search click
// ====================================
function displayDetailClose()
{
    RMPApplication.debug("begin displayDetailClose");
    c_debug(debug.detail, "=> displayDetailClose");
    id_search_filters.setVisible(true);
    id_search_results.setVisible(true);
    id_ticket_details.setVisible(false);
    $("#id_number_detail").val ("");
    $("#id_correlation_id_detail").val ("");
    $("#id_caller_detail").val ("");
    $("#id_contact_detail").val ("");   
    $("#id_company_detail").val ("");
    $("#id_country_detail").val ("");
    $("#id_affiliate_detail").val ("");
    $("#id_location_detail").val ("");
    $("#id_city_detail").val ("");
    $("#id_opened_detail").val ("");
    $("#id_priority_detail").val ("");
    $("#id_state_detail").val ("");
    $("#id_closed_detail").val ("");
    $("#id_category_detail").val ("");
    $("#id_product_type_detail").val ("");
    $("#id_problem_type_detail").val ("");
    $("#id_short_description_detail").val ("");
    $("#id_description_detail").val ("");
    // $("#id_attachment").html ("");           // to activate as soon as attachment is valid
    clearTaskDataTable();
    $("#id_rowProgression").hide();
    RMPApplication.debug("end displayDetailClose");
}

function setProgression(numb) 
{
    RMPApplication.debug("begin setProgression : numb =  " + numb);
    var selectedValue = 0; 
    var state = $("#id_state_detail").val();
    c_debug(debug.progress, "=> setProgression: state : ", state);
    var state_val = getStatusValue(v_ol.wo_state);
    c_debug(debug.progress, "=> setProgression: state_val : ", state_val);

    switch (state_val)
    {
        case '1':                   // "Draft"
            selectedValue = 1;
            break;
        case '11':                  // "Awaiting Approval"
        case '13':                  // "Approved"
            selectedValue = 2;
            break;
        case '15':                  // "Awaiting Diagnosis" 
            selectedValue = 3;
            break;
        case '10':                  // "Diagnosed", "Qualified"
            selectedValue = 4;
            break;
        case '16':                  // "Assigned"
            selectedValue = 5;
            break;            
        case '18':                  // "Work In Progress"
            selectedValue = 6;
            break;
        case '20':                  // "Resolved"
        case '21':                  // "Unresolved"
            selectedValue = 7;
            break;
        case '3':                   // "Closed Complete"
        case '4':                   // "Closed Incomplete"
            selectedValue = 7;
            break;
        case '7':                   // "Cancelled"
            selectedValue = 8;
            break;
        case '19':                  // "Error"
        default:
            break;
    }
    c_debug(debug.progress, "=> setProgression: selectedValue : ", selectedValue);
    if (selectedValue == 0) {
        return;                 // progression row should not be showed
    }

    // Draw the progression bar according the current work order status
    var title1 = ${P_quoted(i18n("setProgression_title1_text", "Transmise"))};
    var title2 = ${P_quoted(i18n("setProgression_title2_text", "Approuvée"))};
    var title3 = ${P_quoted(i18n("setProgression_title3_text", "Diagnostiquée"))};
    var title4 = ${P_quoted(i18n("setProgression_title4_text", "Planifiée"))};
    var title5 = ${P_quoted(i18n("setProgression_title5_text", "En cours"))};
    var title6 = ${P_quoted(i18n("setProgression_title6_text", "Réalisée"))};
    $('#id_title1').html(title1);
    $('#id_title2').html(title2);
    $('#id_title3').html(title3);
    $('#id_title4').html(title4);
    $('#id_title5').html(title5);
    $('#id_title6').html(title6);
    // draw different step circles
    for (i = 1; i < 7; i++) {
        $('#id_circle' + i).attr("class", "circle");
        var new_i = i;
        if ( (i != 1) && (selectedValue != 2) ) {
            new_i = i - 1;
        }     
        $('#id_label' + i).html(new_i);
    }
    // draw bars between different step circles
    for (i = 1; i < 6; i++) {
        $('#id_bar' + i).attr("class", "bar");
    }
    
    $('#id_circle' + selectedValue).attr("class", "circle active");
    for (j = selectedValue - 1; j > 0; j--) {
        $('#id_circle' + j).attr("class", "circle done")
        $('#id_label' + j).html('&#10003;');
    }

    var limit = selectedValue - 1;
    if (selectedValue == 8) {
        var rejected = ${P_quoted(i18n("setProgression_rejected_text", "Rejetée"))};
        for (i=1; i<7; i++) {
            $('#id_circle' + i).attr("class", "circle reject");
            $('#id_label' + i).html('&#10007;');
            $('#id_title' + i).html(rejected);
            if (i<6) {
                $('#id_bar' + i).attr("class", "bar reject");
            }
        }
    } else {
        for (i=1; i<selectedValue; i++) {
            if ( (i==limit) && (limit!=6) ) {
                $('#id_bar' + i).attr("class", "bar half");
            } else if (i!=limit) {
                $('#id_bar' + i).attr("class", "bar done");
            }
        }
    }

    if (selectedValue != 2) {       // No need to show Validation step if no validation process exists
        $('#id_circle2').attr("class", "hidden");
        $('#id_bar1').attr("class", "hidden");
    }

    RMPApplication.debug("end setProgression");
}

// =======================================
// Get Status Value from ServiceNow data
// =======================================
function getStatusValue (libelle)
{
    RMPApplication.debug("begin getStatusValue");
    c_debug(debug.status, "=> getStatusValue: libelle = ", libelle);

        switch (libelle)  {
        case "Brouillon" :
        case "Transmis" :
        case "Draft" :
        case "1" :
            return '1';
            break;
        case "Clos - Résolu" :
        case "Terminé - Complet" :
        case "Closed Complete" :
        case "3" :
            return '3';
            break;
        case "Clos - Non résolu" :
        case "Terminé - Incomplet" :
        case "Closed Incomplete" :
        case "4" :
            return '4';
            break;
        case "Clos - Annulé" :          
        case "Cancelled" :
        case "7" :
            return '7';
            break;
        case "Diagnostiqué" :
        case "Qualifié" :
        case "Diagnosed" :
        case "Qualified" :
        case "10" :
            return '10';
            break;
        case "En attente d'approbation" :
        case "Awaiting Approval" :
        case "11" :
            return '11';
            break;
        case "Approuvé" :
        case "Approved" :
        case "13" :
            return '13';
            break;
        case "En attente de diagnostic" :
        case "Awaiting Diagnosis" :
        case "15" :
            return '15';
            break;
        case "Assigné" :
        case "Affecté" :
        case "Assigned" :
        case "16" :
            return '16';
            break;
        case "Accepté" :
        case "Accepted" :
        case "17" :
            return '17';
            break;
        case "En cours de résolution" :
        case "En cours de traitement" :
        case "Work In Progress" :
        case "18" :
            return '18';
            break;
        case "Erreur" :
        case "Error" :
        case "19" :
            return '19';
            break;
        case "Résolu - En attente de cloture" : 
        case "Resolved" :
        case "20" :
            return '20';
            break;
        case "Non résolu - En attente de cloture" :
        case "Unresolved" :
        case "21" :
            return '21';
            break;
        default:        // All status or no status selected)
            return '0';
            break;
    }
    RMPApplication.debug("end getStatusValue");
}

// ======================
//  datatable clean
// ======================
function clearOrderDataTable()
{
    RMPApplication.debug("begin clearOrderDataTable");
    $('#id_tab_wm_order').DataTable().clear();
    $('#id_tab_wm_order').DataTable().draw();
    RMPApplication.debug("end clearOrderDataTable");
}

function clearTaskDataTable()
{
    RMPApplication.debug("begin clearOrderDataTable");
    $('#id_tab_wm_task').DataTable().clear();
    $('#id_tab_wm_task').DataTable().draw();
    RMPApplication.debug("end clearOrderDataTable");
}

// ===========================
// Table initialization
// ===========================
function initDataTable()
{
    RMPApplication.debug("begin initDataTable");
    
    var datatable_language = col_lang_opt.code_datatable;
    var datatable_lang_option = {};
    for (i=0; i<datatable_lang.length; i++) {
        if (datatable_lang[i].language == datatable_language) {
            datatable_lang_option = datatable_lang[i].options;
            break;
        }
    }
    
    var ticket_nb_col = ${P_quoted(i18n("ticket_nb_col", "N° Ticket"))};
    var ticket_site_col = ${P_quoted(i18n("ticket_site_col", "Site"))};
    var ticket_desc_abr_col = ${P_quoted(i18n("task_desc_abr_col", "Description (abrégée)"))};
    var status_col = ${P_quoted(i18n("status_col", "Statut"))};
    var ticket_opened_col = ${P_quoted(i18n("ticket_opened_col", "Date Ouverture"))};
    var ticket_closed_col = ${P_quoted(i18n("ticket_closed_col", "Date Fermeture"))};
    var ticket_eval_col = ${P_quoted(i18n("ticket_eval_col", "Evaluation"))};
    var task_nb_col = ${P_quoted(i18n("task_nb_col", "N° Tâche"))};
    var task_desc_col = ${P_quoted(i18n("task_desc_col", "Description"))};
    var task_affected_col = ${P_quoted(i18n("task_affected_col", "Affectée à"))};

    // datatable visibility change according screen context
    var contexte = id_context.getValue();   
    switch (contexte) {
        case "web" :
            var responsive_options = true;
            var tab_wm_order_col = [
                { title : "", visible : false },
                { title : ticket_nb_col },
                { title : ticket_desc_abr_col },
                { title : status_col }, 
                { title : ticket_eval_col, orderable: false },
                { title : ticket_site_col },
                { title : ticket_opened_col },
                { title : ticket_closed_col }
            ];
            var tab_wm_task_col = [
                { title : "", visible : false },
                { title : task_nb_col },
                { title : task_desc_col },
                { title : status_col },
                { title : task_affected_col }
            ];
            break;
        case "tablet" :
            var responsive_options = {
               details: { type: 'column' }
            };
            var columDefs_options = [
                {
                    className: 'control',
                    orderable: false,
                    targets:   0
                },
            ];
            var tab_wm_order_col = [
                { title : "", visible: false },
                { title : ticket_nb_col },
                { title : ticket_desc_abr_col },
                { title : status_col }, 
                { title : ticket_eval_col, orderable: false },
                { title : ticket_site_col },
                { title : ticket_opened_col },
                { title : ticket_closed_col }
            ];
            var tab_wm_task_col = [
                { title : "", visible : false },
                { title : task_nb_col },
                { title : task_desc_col },
                { title : status_col },
                { title : task_affected_col }
            ];
            break;
        case "mobile" :
            var responsive_options = {
               details: { type: 'column' }
            };
            var columDefs_options = [
                {
                    className: 'control',
                    orderable: false,
                    targets:   0
                },
            ];
            var tab_wm_order_col = [
                { title : "" },
                { title : ticket_nb_col },
                { title : ticket_desc_abr_col, className: "not-mobile" },
                { title : status_col, className: "not-mobile" }, 
                { title : ticket_eval_col, orderable: false, className: "not-mobile" },
                { title : ticket_site_col },
                { title : ticket_opened_col },
                { title : ticket_closed_col, className: "not-mobile" }
            ];
            var tab_wm_task_col = [
                { title : "", "orderable": false },
                { title : task_nb_col },
                { title : task_desc_col, className:  "not-mobile" },
                { title : status_col },
                { title : task_affected_col, className: "not-mobile" }
            ];
            break;
    };
    // order by opened date
    var order_wm_options = [6, 'desc'];

    // what date format to apply
    var dateFormatLang = col_lang_opt.date_full;
    var momentFormatLang = col_lang_opt.code_moment;

    // #id_tab_wm_order table options
    if ( $.fn.dataTable.isDataTable('#id_tab_wm_order') == false ) {
        $.fn.dataTable.moment(dateFormatLang, momentFormatLang);
        $('#id_tab_wm_order').DataTable({
            responsive: responsive_options,
            columns: tab_wm_order_col,
            columnDefs: columDefs_options,
            order: order_wm_options,
            ordering: true,
            searching: false,       // Disable searching abilities in DataTables
            lengthChange: false,    // Disable user ability to change number of records per page
            "pagingType": "full_numbers",
            "language": datatable_lang_option
        });
    }
    // #id_tab_wm_task table options
    if ( $.fn.dataTable.isDataTable('#id_tab_wm_task') == false ) {
        $.fn.dataTable.moment(dateFormatLang, momentFormatLang);
        $('#id_tab_wm_task').DataTable({
            responsive: responsive_options,
            columns: tab_wm_task_col,
            columnDefs: columDefs_options,
            ordering: false,
            searching: false,       // Disable searching abilities in DataTables
            lengthChange: false,    // Disable user ability to change number of records per page
            "pagingType": "full_numbers",
            "language": datatable_lang_option
        });
    }
    RMPApplication.debug("end initDataTable");
}
