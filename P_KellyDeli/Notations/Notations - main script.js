RMPApplication.debug("Main : Application started");

// ========================
// Variables declaration
// ========================

// if "true", logs will be showed on the browser console
var debug = {
    "init" : false,
    "language" : false,
    "status" : false,
    "content" : false,
    "eval" : false
}
var login = {};
var view = "";
var collectionid = "col_langues_kellydeli";
var col_lang_opt = {};
var content_value = JSON.parse(RMPApplication.get("my_json"));

var error_title_notify = ${P_quoted(i18n("error_title_notify", "Erreur"))};
var info_title_notify = ${P_quoted(i18n("info_title_notify", "Information"))};
var error_thanks_notify = ${P_quoted(i18n("error_thanks_notify", "Merci de signaler cette erreur !"))};
var btn_ok = ${P_quoted(i18n("btn_ok", "OK"))};

init();
load_language(RMPApplication.get("language"));

// ========================
// initialization part
// ========================
function init() 
{
    RMPApplication.debug("begin init : Login = " + login);
    $("#id_spinner_search").hide();
    $("#id_rowValidation").hide();

    // All date fields use specific jquery datepicker for more convenience
    $("#id_beginOpenedDateFilter").datepicker();
    $("#id_endOpenedDateFilter").datepicker();
    $("#id_beginClosedDateFilter").datepicker();
    $("#id_endClosedDateFilter").datepicker();

    var option = {};
    var pattern = {};
    pattern.login = RMPApplication.get("login");
    c_debug(debug.init, "=> init: pattern = ", pattern);

    id_get_user_info_as_admin_api.trigger(pattern, option , get_info_ok, get_info_ko); 

    RMPApplication.debug("end init");
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
    login.contract = result.compagnie.toUpperCase() + "\\" + result.enseigne.toUpperCase();
    login.company = (!isEmpty(result.compagnie)) ? result.compagnie.trim().toUpperCase() : '';
    login.affiliate = (!isEmpty(result.enseigne)) ? result.enseigne.trim().toUpperCase() : '';
    login.country = (!isEmpty(result.pays)) ? result.pays.trim().toUpperCase() : '';
    login.location_code = (!isEmpty(result.code_magasin)) ? result.code_magasin.trim().toUpperCase() : '';
    login.division = (!isEmpty(result.division)) ? result.division.trim().toUpperCase() : '';
    login.region = (!isEmpty(result.region)) ? result.region.trim().toUpperCase() : '';
    login.is_super_user = (!isEmpty(result.is_super_user)) ? result.is_super_user.toUpperCase() : '';

    // Define 'view' global variable, used to filter locations scope
    // Different profiles are: SUPERUSER-COMPANY-COUNTRY-DIVISION-REGION-LOCAL
    if (login.is_super_user == "YES") {   // View as SuperUser
        view = "SUPERUSER";

    } else if ( (login.region == login.company) || (login.division == login.company) ) {    // View all COMPANY
        view = "COMPANY";

    } else if ( (login.region == login.country) || (login.division == login.country) ) {    // COUNTRY view
        view = "COUNTRY";

    } else if ( !isEmpty(login.division) && (login.division != "NOT DEFINED") ) {
        view = "DIVISION";

    } else if ( !isEmpty(login.region) && (login.region != "NOT DEFINED") ) {
        view = "REGION";

    } else {                // Only one site: 1 country - 1 affiliate - 1 location
        view = "LOCAL";
    }
    
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
    eval(collectionid).listCallback(my_pattern, options, load_language_ok, load_language_ko);
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

        // next actions to do
        fillContent();
        fillSatisfaction();
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
            return 'none';
            break;
    }
    RMPApplication.debug("end getVarStatusValue");
}

// =======================================
// Get Var Priority Value
// =======================================
function getVarPriorityValue (priority)
{
    RMPApplication.debug("begin getVarPriorityValue");
    c_debug(debug.status, "=> getVarPriorityValue: priority = ", priority);

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
            return 'none';
            break;
    }
    RMPApplication.debug("end getVarPriorityValue");
}

// =======================================
//  Return value of variable
// =======================================
function translateExp (lang, expr)
{
    RMPApplication.debug("begin translateExp");
    c_debug(debug.status, "=> translateExp: lang = ", lang);
    c_debug(debug.status, "=>               expr = ", expr);
    return col_lang_opt[expr];
    RMPApplication.debug("end translateExp");
}

// retrieve data from "KD - Evaluation" process
function fillContent()
{
    RMPApplication.debug("begin fillContent");
    c_debug(debug.content, "=> fillContent: content_value = "  + JSON.stringify(content_value));
    // var content_value = JSON.parse(RMPApplication.get("my_json"));
    $("#id_number_detail").val (content_value.FUJITSU_NUMBER);
    $("#id_contract_detail").val (content_value.company);
    $("#id_affiliate_detail").val (content_value.affiliate + "/" + content_value.LOCATION_CODE);
    $("#id_opened_detail").val (content_value.OPENED_DATE);
    // translate priority and status coming from SNOW into the user language
    var priority = translateExp(col_lang_opt.code_language, getVarPriorityValue(content_value.PRIORITY));
    c_debug(debug.content, "=> fillContent: priority = ", priority);
    $("#id_priority_detail").val (priority);
    var status = translateExp(col_lang_opt.code_language, getVarStatusValue(content_value.STATUS));
    c_debug(debug.content, "=> fillContent: status = ", status);
    $("#id_state_detail").val (status);

    $("#id_closed_detail").val (content_value.CLOSURE_DATE);
    $("#id_short_description_detail").val (content_value.SHORT_DESCRIPTION);
    $("#id_description_detail").val (content_value.DESCRIPTION);
    RMPApplication.debug("end fillContent");
}

function fillSatisfaction()
{
    RMPApplication.debug("begin fillSatisfaction");
    c_debug(debug.content, "=> fillSatisfaction");
    // not yet evaluated & ticket status: solved or closed
    $("#id_rowSatisfaction").addClass("bkg-light-blue");
    $("#id_rowSatisfaction").show();
    $("#id_rating").show();
    $("#id_divHeartRating").show();
    $("#id_divComment").show();
    $("#id_comment").val ("");
    $("#id_comment").prop('readonly', false);
    // $("#id_divSendEval").show();
    RMPApplication.debug("end fillSatisfaction");
}

function setNotationValue(note)
{
    RMPApplication.debug("begin setNotationValue");
    c_debug(debug.content, "=> setNotationValue");
    RMPApplication.set("notation", note);
    RMPApplication.debug("end setNotationValue");
}

function check_eval(note, comments)
{
    RMPApplication.debug("begin check_eval");
    if ((parseInt(note) >= 1) && (parseInt(note) <= 3)) {
        // comment is mandatory for note <= 3
        c_debug(debug.content, "=> check_eval: note <= 3");
        if (isEmpty(comments)) {
            var title_dialog_empty = ${P_quoted(i18n("title_dialog_empty", "Commentaire obligatoire"))};
            var content_dialog_empty = ${P_quoted(i18n("content_dialog_empty", "Toute note inférieure à 3 doit être accompagnée d'un commentaire !"))};
            dialog_error(title_dialog_empty, content_dialog_empty, btn_ok);
            return false;
        } else {
            return true;
        }
    } else {
        return true;
    }
}