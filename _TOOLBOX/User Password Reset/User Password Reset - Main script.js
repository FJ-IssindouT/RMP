RMPApplication.debug ("Application started");

// ==========================================
// Initialization PART (generic variable)
// according to the context
// ==========================================

// if "true", logs will be showed on the browser console
var dbug = {
    "init": false,
    "pres": false,
    "user_info": false,
    "update": false,
    "report": false
};

var itemName = "User";      // what kind of item ?

var user_properties = 
{
    "user_name" : "result.user_info.name",
    "user_id" : "result.user_info.id",
    "user_email" : "result.user_info.login",
    "user_status" : "result.user_info.status",
    "user_language" : "result.user_info.i18n",
    "user_profile" : "result.user_info.profile"
};

var root_lvl = ["user_name", "user_id", "user_email", "user_status", "user_language", "user_profile"];
var type_choice_list = [];
var upper_var = ["user_country", "user_region", "user_location", "user_kiosks_list", "user_status", "user_profile"];

var login = {};
var selected_user = {};
var old_values = {};
var values_changed = {};

var success_title_notify = ${P_quoted(i18n("success_title_notify", "Succès"))};
var error_title_notify = ${P_quoted(i18n("error_title_notify", "Erreur"))};
var error_thanks_notify = ${P_quoted(i18n("error_thanks_notify", "Merci de signaler cette erreur !"))};

// initialize main program
init();


// ===============================
//   Initialization part
// ===============================
function init() 
{
    RMPApplication.debug("begin init");
    c_debug(dbug.init, "** BEGIN init **");

    CSS_changes();
    prepare_user_action();

    RMPApplication.debug("end init");
}

// ===============================
//   Apply some specific CSS
// ===============================
function CSS_changes()
{
    RMPApplication.debug("begin CSS_changes");
    c_debug(dbug.init, "** BEGIN CSS_changes **");
    id_user.setVisible(false);
    id_new_password.setVisible(false);
    $("#id_user").addClass("bkg-light-blue");
    $("#id_new_password").addClass("bkg-light-green");
    RMPApplication.debug("end CSS_changes");
}

// ==================================================
//   According to user's choice, make somme actions
// ==================================================
function prepare_user_action()
{
    RMPApplication.debug("begin prepare_user_action");
    c_debug(dbug.pres, "** BEGIN prepare_user_action **");

    selected_user.email = RMPApplication.get("existing_account");
    var account_selected = (!isEmpty(selected_user.email));
    c_debug(dbug.pres, "=> prepare_user_action: account_selected = ", account_selected);

    if (account_selected == true) {
        get_user_basic_info();
    } else {
        reset_info_user();
    }
    id_user.setVisible(account_selected);
    id_new_password.setVisible(account_selected);

    RMPApplication.debug("end prepare_user_action");
}

// ============================================
//   reset user's Metadata information part
// ============================================
function reset_info_user() 
{
    RMPApplication.debug("begin reset_info_user");
    c_debug(dbug.pres, "** BEGIN reset_info_user **");
    RMPApplication.set("my_user", {});
    RMPApplication.set("existing_account", "");
    selected_user = {};
    RMPApplication.debug("end reset_info_user");
}

// ================================================
//   get user's Basic information
// ================================================
function get_user_basic_info() 
{
    RMPApplication.debug("begin get_user_basic_info");
    var options = {};
    var pattern = {};
    pattern.login = RMPApplication.get("existing_account");
    c_debug(dbug.user_info, "=> get_user_basic_info: pattern = ", pattern);

    id_get_user_basic_info_as_admin_api.trigger (pattern, options , get_user_basic_info_ok, get_user_basic_info_ko); 
    RMPApplication.debug("end get_user_basic_info");
}

function get_user_basic_info_ok(result)
{
    RMPApplication.debug("begin get_user_basic_info_ok: result =  ", result);
    c_debug(dbug.user_info, "** BEGIN get_user_basic_info_ok ** : result = ", result);

    // define "selected_user" variable properties
    selected_user = {};

    // if (result.user_info.indexOf(extended) > -1) {
    if (((Object.keys(result.user_info)).indexOf("extended")) > -1) {

        for (key in user_properties) {
            if (!(root_lvl.indexOf(key) > -1)) {
                selected_user[key] = ((!(isEmpty(eval(user_properties[key]))))) ? eval(user_properties[key]) : "";
                // c_debug(dbug.user_info, "=> get_user_basic_info_ok: key = " + key + " - " + user_properties[key] + " = " + eval(user_properties[key]));
            } else {
                selected_user[key] = eval(user_properties[key]);
                // c_debug(dbug.user_info, "=> get_user_basic_info_ok: (NOT IN) key = " + key + " - " + user_properties[key] + " = " + eval(user_properties[key]));
            }        
        }
        c_debug(dbug.user_info, "=> get_user_basic_info_ok: selected_user = ", selected_user);
        set_user_info(selected_user);
    }

    RMPApplication.debug("end get_user_basic_info_ok");
}

function get_user_basic_info_ko(error)
{
    RMPApplication.debug("** BEGIN get_user_basic_info_ko ** : error = " + JSON.stringify(error));
    c_debug(dbug.user_info, "=> get_user_metadata_info_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("get_user_basic_info_ko_msg", "Impossible de récupérer les informations de l'utilisateur !"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug("end get_user_basic_info_ko");
}

// ============================================
//   set user's Metadata information on screen
// ============================================
function set_user_info(user_object) 
{
    RMPApplication.debug("begin set_user_info");
    c_debug(dbug.user_info, "** BEGIN set_user_info ** : user_object = ", user_object);

    for (key in user_properties) {
        var val_field = user_object[key];
        if (type_choice_list.indexOf(key) > -1) {           // according to the type of input, we use different methods
            var id_field = "id_my_user.id_" + key;
            if (key == "user_country") {
                val_field = capitalize(user_object[key]);
            }
            eval(id_field).setSelectedValue(val_field);
            c_debug(dbug.user_info, "=> set_user_info: id_field (LIST) = ", id_field + " | selected_value = " + val_field);

        } else {
            var field = "my_user." + key;
            if (upper_var.indexOf(key) > -1) {
                val_field = val_field.toUpperCase();
            }
            RMPApplication.set(field, val_field);
            c_debug(dbug.user_info, "=> set_user_info: field = ", field + " | value = " + val_field);
        }
        old_values[key] = val_field;
    }

    RMPApplication.debug("end set_user_info");
}

// ============================================
//   Modify the user's password
// ============================================
function modify_password_user()
{
    RMPApplication.debug("begin modify_password_user");
    c_debug(dbug.user_info, "** BEGIN modify_password_user **");

    //  Verify if both password fiels are equals
    var pwd_equal = (RMPApplication.get("enter_pwd") == RMPApplication.get("confirm_pwd")) ? true : false;
    if (pwd_equal == true) {
        selected_user.user_password = RMPApplication.get("enter_pwd");
        // Stores information needed for the process
        RMPApplication.set("sel_user", selected_user);
        c_debug(dbug.user_info, "=> modify_password_user: sel_user = ", RMPApplication.get("sel_user"));
        // Execute password reset process
        document.getElementById("id_run_reset_password_process_btn").click();
    } else {
        // shows popup warning that password are not equal
        var error_msg = ${P_quoted(i18n("modify_password_user_ko_msg", "Les mots de passe sont différents !<br>Merci de recommencer votre saisie."))};
        // notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
        notify_error(error_title_notify, error_msg);
    }

    RMPApplication.debug("end modify_password_user");
}
