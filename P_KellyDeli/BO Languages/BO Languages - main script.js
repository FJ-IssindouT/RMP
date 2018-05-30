RMPApplication.debug ("Application started");

// ==========================================
// Initialization PART (generic variable)
// according to the context
// ==========================================

// if "true", logs will be showed on the browser console
var debug = {
    "item": false
};

var itemName = "Language";      // what kind of item ?
var collectionid = "col_langues_kellydeli";

var var_list = 
{
    "code_language" : "code_language",

    "code_user_language" : "code_user_language",
    "code_datepicker" : "code_datepicker",
    "code_datebox" : "code_datebox",
    "code_heartrating" : "code_heartrating",
    "code_datatable" : "code_datatable",
    "code_moment" : "code_moment",

    "st_sent" : "st_sent",
    "st_waiting_diag" : "st_waiting_diag",
    "st_diagnosed" : "st_diagnosed",
    "st_assigned" : "st_assigned",
    "st_in_progress" : "st_in_progress",
    "st_closed_incomplete" : "st_closed_incomplete",
    "st_closed_complete" : "st_closed_complete",
    "st_cancelled" : "st_cancelled",
    "st_resolved" : "st_resolved",
    "st_unresolved" : "st_unresolved",
    "st_error" : "st_error",
    "st_approved" : "st_approved",
    "st_waiting_appro" : "st_waiting_appro",
    "st_unknown" : "st_unknown",

    "prio_critical" : "prio_critical",
    "prio_high" : "prio_high",
    "prio_moderate" : "prio_moderate",
    "prio_low" : "prio_low",
    "prio_planned" : "prio_planned",
    "prio_unknown" : "prio_unknown",

    "type_intervention" : "type_intervention",
    "type_imac" : "type_imac",
    "type_quotation" : "type_quotation",
    "type_preventive" : "type_preventive",
    "type_request" : "type_request",
    "type_project" : "type_project",
    "type_assistance" : "type_assistance",
    "type_unknown" : "type_unknown",

    "st_inv_draft" : "st_inv_draft",
    "st_inv_closed_complete" : "st_inv_closed_complete",
    "st_inv_closed_incomplete" : "st_inv_closed_incomplete",
    "st_inv_cancelled" : "st_inv_cancelled",
    "st_inv_dispatch" : "st_inv_dispatch",
    "st_inv_assigned" : "st_inv_assigned",
    "st_inv_accepted" : "st_inv_accepted",
    "st_inv_in_progress" : "st_inv_in_progress",
    "st_inv_unknown" : "st_inv_unknown",

    "date_full" : "date_full",
    "date_semi_full" : "date_semi_full",
    "date_only_date" : "date_only_date",
    "date_only_time" : "date_only_time",
    
    "separator_decimal" : "separator_decimal",
    "separator_thousand" : "separator_thousand",
    "currency_local" : "currency_local",
    "currency_symbol" : "currency_symbol"

};

var success_title_notify = ${P_quoted(i18n("success_title_notify", "Succès"))};
var error_title_notify = ${P_quoted(i18n("error_title_notify", "Erreur"))};
var error_thanks_notify = ${P_quoted(i18n("error_thanks_notify", "Merci de signaler cette erreur !"))};

// ==============================
// clean custom widget (CW) area
// variable: my_item
// ==============================
function clean_item()
{
    // clean widget area before any add-action
    RMPApplication.debug ("begin " + itemName + " Widget Area cleaned");
    c_debug(debug.item, "=> begin clean_item");
    for (key in var_list)  {
        if (key != "code_language") {
            RMPApplication.set(key, "");
        }
    }
    RMPApplication.debug("end " + itemName + " Widget Area cleaned");
}

// ======================
// add_item
// ======================
function add_item()
{
    RMPApplication.debug ("begin add_item");
    var code_language = RMPApplication.get("code_language");
    c_debug(debug.item, "=> add_item: code_language = ", code_language);
    var my_object = {};
    for (key in var_list)  {
        my_object[key] = RMPApplication.get(key);
    }
    
    if (!item_already_exists(code_language)) {

        c_debug(debug.item, "=> add_item: my_object", my_object);
        eval(collectionid).saveCallback(my_object, add_ok, add_ko);
        RMPApplication.debug ("New" + itemName.toUpperCase() + " added");
    } else {
        c_debug(debug.item, "=> update_item: my_object", my_object);
        update_item(my_object);
        RMPApplication.debug (itemName.toUpperCase() + " will be updated!");
    }
    RMPApplication.debug ("end add_item");
}

function add_ok(result)
{
    RMPApplication.debug("begin add_ok");
    c_debug(debug.item, "=> add_ok: result", result);
    var success_msg = ${P_quoted(i18n("add_ok_msg", "Nouvelle langue ajoutée !"))};
    notify_success(success_title_notify, success_msg);
    RMPApplication.debug("end add_ok");
}

function add_ko(error)
{
    //Error while adding item in the collection
    RMPApplication.debug("begin add_ko");
    c_debug(debug.item, "=> update_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("add_ko_msg", "Sauvegarde impossible de langue !"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug("end add_ko");
}

// ======================
// udpate_item
// ======================
function update_item(my_object)
{
    RMPApplication.debug ("begin update_item");
    c_debug(debug.item, "=> update_item: my_object = ", my_object);
    var my_pattern = {};
    my_pattern.code_language = RMPApplication.get("code_language");
    eval(collectionid).updateCallback(my_pattern, my_object, update_ok, update_ko);
    RMPApplication.debug ("end update_item");
}

function update_ok(result)
{
    RMPApplication.debug ("begin update_ok");
    c_debug(debug.item, "=> update_ok: result", result);
    var success_msg = ${P_quoted(i18n("update_ok_msg", "Informations correctement mises à jour !"))};
    notify_success(success_title_notify, success_msg);
    RMPApplication.debug ("end update_ok");
}

function update_ko(error)
{
    //Error while updating item in the collection
    RMPApplication.debug ("begin update_ko");
    c_debug(debug.item, "=> update_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("update_ko_msg", "Mise à jour impossible de la collection !"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug ("end update_ko");
}

// ======================
// load_item
// ======================
function load_item(code_language)
{
    RMPApplication.debug ("begin load_item");
    c_debug(debug.item, "=> load_item: code_language = ", code_language);
    var my_pattern = {};
    my_pattern.code_language = code_language;
    RMPApplication.debug ("my_pattern.code_language = " + my_pattern.code_language);    
    eval(collectionid).listCallback(my_pattern, {}, load_ok, load_ko);
    RMPApplication.debug ("end load_item");
}

function load_ok(result)
{
    RMPApplication.debug ("begin load_ok");
    c_debug(debug.item, "=> load_ok: result", result);
    clean_item();
    if (result.length > 0) {
        for (key in var_list)  {
            if (key != "code_language") { 
                RMPApplication.set(key, result[0][key])
            }
        }
        var success_msg = ${P_quoted(i18n("load_ok_msg", "Informations de la collection chargées !"))};
        notify_success(success_title_notify, success_msg);
    }
    RMPApplication.debug ("end load_ok");
}

function load_ko(error)
{
    RMPApplication.debug ("begin load_ko");
    c_debug(debug.item, "=> load_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("load_ko_msg", "Récupération impossible des données !"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug ("end load_ko");
}

// ======================
// delete_item
// ======================
function delete_item(code_language)
{
    RMPApplication.debug ("begin delete_item");
    c_debug(debug.item, "=> delete_item: code_language = ", code_language);
    var my_pattern = {};
    my_pattern.code_language = code_language;
    RMPApplication.debug ("my_pattern.code_language = " + my_pattern.code_language);  
    eval(collectionid).removeCallback(my_pattern, delete_ok, delete_ko);
    RMPApplication.debug ("end delete_item");
}

function delete_ok(result)
{
    RMPApplication.debug ("begin delete_ok");
    c_debug(debug.item, "=> delete_ok: result", result);
    var success_msg = ${P_quoted(i18n("delete_ok_msg", "Site supprimé !"))};
    notify_success(success_title_notify, success_msg);
    // clean_item();
    RMPApplication.debug ("end delete_ok");
}

function delete_ko(error)
{
    //Error while deleting item from the collection
    RMPApplication.debug ("begin delete_ko");
    c_debug(debug.item, "=> delete_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("delete_ko_msg", "Suppression impossible du site !"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug ("end delete_ko");
}

// ======================
// Other functions
// ======================
function item_already_exists(code_language) 
{
    RMPApplication.debug ("begin function item_already_exists");
    c_debug(debug.item, "=> item_already_exists: code_language = ", code_language);
    var my_pattern = {};
    my_pattern.code_language = code_language;
    var options = {};
    options.asynchronous = false;
    res = false;
    eval(collectionid).listCallback(my_pattern, options, exists_ok, exists_ko);
    RMPApplication.debug ("end function item_already_exists");
    return res;
}

function exists_ok(result)
{
    RMPApplication.debug ("begin exists_ok");
    c_debug(debug.item, "=> exists_ok: result", result);
    if(result[0]) {
        res = true;
    } else {
        res = false;
    }
    RMPApplication.debug ("end exists_ok");
}

function exists_ko(error) 
{
    RMPApplication.debug ("begin exists_ko");
    c_debug(debug.item, "=> exists_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("exists_ko_msg", "La langue n'a pu être trouvée !"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug ("end exists_ko");
}