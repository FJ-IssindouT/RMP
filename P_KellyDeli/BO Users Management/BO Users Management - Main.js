RMPApplication.debug ("Application started");

// ==========================================
// Initialization PART (generic variable)
// according to the context
// ==========================================

// if "true", logs will be showed on the browser console
var dbug = {
    "init": true,
    "pres": true,
    "user_info": true,
    "update": true,
    "report": true
};

var itemName = "User";      // what kind of item ?
// var collectionid = "col_users_kellydeli";
var kiosk_users_lane = "402267";
var region_users_lane = "402314";

var user_properties = 
{
    // "company" : "company",               // is fixed - only one value (one company)
    // "affiliate" : "affiliate",           // is fixed - only one value (one affiliate)
    "user_name" : "result.user_info.name",
    "user_email" : "result.user",
    "user_language" : "result.user_info.i18n",
    "user_phone" : "result.user_info.extended.phone",
    "user_country" : "result.user_info.extended.pays",
    "user_timezone" : "result.user_info.extended.timezone",
    "user_rights" : "result.user_info.extended.profil",
    "user_region" : "result.user_info.extended.region",
    "user_location" : "result.user_info.extended.code_magasin",
    "user_kiosks_list" : "result.user_info.extended.acces_enseignes"
};

var root_lvl = ["user_name", "user_email", "user_language"];
var type_choice_list = ["user_language", "user_country", "user_timezone"];
var not_copied_field_list = ["user_name", "user_email", "user_phone"];
var upper_var = ["user_country", "user_region", "user_location", "user_kiosks_list"];

var login = {};
var selected_user = {};
var selected_action;
var old_values = {};
var values_changed = {};
var add_user_action = ${P_quoted(i18n("add_user_action", "Ajouter un utilisateur"))};
var delete_user_action = ${P_quoted(i18n("delete_user_action", "Supprimer un utilisateur"))};
var replace_user_action = ${P_quoted(i18n("replace_user_action", "Remplacer un utilisateur"))};
var update_user_action = ${P_quoted(i18n("update_user_action", "Mettre à jour un profil"))};
var actions = {
     "add_user_action": add_user_action,
     "delete_user_action": delete_user_action,
     "replace_user_action": replace_user_action,
     "update_user_action": update_user_action
};

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
    c_debug(dbug.init, "=> begin init");

    CSS_changes();
    fill_actions_box();
    prepare_user_action();

    RMPApplication.debug("end init");
}

// ===============================
//   Apply some specific CSS
// ===============================
function CSS_changes()
{
    RMPApplication.debug("begin CSS_changes");
    c_debug(dbug.init, "=> begin CSS_changes");
    id_user.setVisible(false);
    id_new_user.setVisible(false);
    $("#id_user").addClass("bkg-light-blue");
    $("#id_new_user").addClass("bkg-light-green");

    RMPApplication.debug("end CSS_changes");
}

// ===========================================
// Fill possible user's actions to do/request
// ===========================================
function fill_actions_box()
{
    RMPApplication.debug ("begin fill_actions_box");
    c_debug(dbug.init, "=> begin fill_actions_box");

    var vb_actions = new Array();
    for (key in actions)  {
        vb_actions.push({"label": " ● " + actions[key], "value": key});
    }
    c_debug(dbug.init, "    fill_actions_box : vb_actions = ", vb_actions);
        
    var a = new RMP_List();
    a.fromArray(vb_actions);
    RMPApplication.setList("vb_actions", a);

    RMPApplication.debug ("end fill_actions_box");
}

// ==================================================
//   According to user's choice, make somme actions
// ==================================================
function prepare_user_action()
{
     RMPApplication.debug("begin prepare_user_action");
    c_debug(dbug.pres, "** BEGIN prepare_user_action **");
    
    selected_action = RMPApplication.get("user_action");
    c_debug(dbug.pres, "=> prepare_user_action: selected_action = ", selected_action);
    
    if (!(isEmpty(selected_action))) {

        if (selected_action == "add_user_action") {
            selected_user.name = "";
            reset_info_user();
            id_user.setVisible(true);
            id_new_user.setVisible(false);
            id_existing_account.setVisible(false);
            RMPApplication.set("existing_account", "");
            set_fields_active("id_my_user", true);

        } else {

            selected_user.name = RMPApplication.get("existing_account");
            var account_selected = (!isEmpty(selected_user.name));
            c_debug(dbug.pres, "=> prepare_user_action: account_selected = ", account_selected);

            switch (selected_action) {
                /* case "add_user_action" :
                    reset_info_user();
                    id_user.setVisible(true);
                    id_new_user.setVisible(false);
                    id_existing_account.setVisible(false);
                    RMPApplication.set("existing_account", "");
                    set_fields_active("id_my_user", true);
                    break; */
                
                case "delete_user_action" :
                    id_user.setVisible(account_selected);
                    id_new_user.setVisible(false);
                    set_fields_active("id_my_user", false);
                    break;
                
                case "replace_user_action" :
                    reset_info_user();
                    reset_info_new_user();
                    id_user.setVisible(account_selected);
                    id_new_user.setVisible(account_selected);
                    set_fields_active("id_my_user", false);
                    break;
                
                case "update_user_action" :  
                    reset_info_user();
                    id_user.setVisible(account_selected);
                    id_new_user.setVisible(false);
                    set_fields_active("id_my_user", true);
                    break;

                default:                        // no selection
                    reset_info_user();
                    id_user.setVisible(false);
                    id_new_user.setVisible(false);
                    id_existing_account.setVisible(false);
                    RMPApplication.set("existing_account", "");
                    break;
            }

            set_required_new_user();
            if (account_selected == true) {
                get_user_basic_info();
            }
        }

    } else {
        reset_info_user();
        id_user.setVisible(false);
        id_new_user.setVisible(false);
        id_existing_account.setVisible(false);
        RMPApplication.set("existing_account", "");
    }

    RMPApplication.debug("end prepare_user_action");
}

// ====================================================================================================
// Test the variable value in specified widget 
// and show or not an another widget according this value
// Ex:
        /*  obj = {
                "id": "id_of_cw (complete path)",
                "widgets_var_list" : ["sub_cw_var1", "sub_cw_var2", "sub_cw_var3, "sub_cw_var4", ...]
            }
        */
// ====================================================================================================
function set_required_option_cw(obj, bool)
{
    c_debug(dbug.function, "=> begin set_required_option_cw: obj = ", obj);
    c_debug(dbug.function, '=> set_required_option_cw: bool = ', bool);
    var obj_id = obj.id;
    c_debug(dbug.function, '=> set_required_option_cw: obj_id = ', obj_id);
    for (i=0; i <= obj.widgets_var_list.length-1; i++) {
        var id_local_widget = "id_" + obj.widgets_var_list[i];
        var id_complete_path = obj_id + "." + id_local_widget;
        eval(id_complete_path).setRequired(bool);
        c_debug(dbug.function, '=> set_required_option_cw: Required option of "' + id_complete_path + '" has been changed!');
    }
} 

function set_required_new_user()
{
    c_debug(dbug.function, "=> begin set_required_new_user");
    var action_selected = RMPApplication.get("user_action"); 
    var replace_user_action_selected = (action_selected == "replace_user_action") ? true : false;
    var obj_cw = {
        "id": "id_my_new_user",
        "widgets_var_list" : ["userid", "user_name", "user_email", "user_language", "user_country", "user_timezone"]
    };
    set_required_option_cw(obj_cw, replace_user_action_selected);
}

// ============================================
//   reset user's Metadata information part
// ============================================
function reset_info_user() 
{
    RMPApplication.debug("begin reset_info_user");
    c_debug(dbug.pres, "=> reset_info_user");
    RMPApplication.set("my_user", {});
    RMPApplication.debug("end reset_info_user");
}

// ============================================
//   reset new user's Metadata information part
// ============================================
function reset_info_new_user() 
{
    RMPApplication.debug("begin reset_info_new_user");
    c_debug(dbug.pres, "=> reset_info_new_user");
    RMPApplication.set("my_new_user", {});
    RMPApplication.debug("end reset_info_new_user");
}

// ============================================
//   We set as active or inactive all Widget fields
// ============================================
function set_fields_active(widget_name, bool)
{
    RMPApplication.debug("begin set_fields_active");
    c_debug(dbug.pres, "=> set_fields_active: widget_name = ", widget_name);
    c_debug(dbug.pres, "=>                  : bool = ", bool);

    var action = RMPApplication.get("user_action");
    for (key in user_properties) {
        var id_widget = widget_name + ".id_" + key;
        c_debug(dbug.pres, "=>                  : id_widget = ", id_widget);
        if (key != "user_email") {
            eval(id_widget).setEnabled(bool);
        } else if (action == "update_user_action") {
            eval(id_widget).setEnabled(false);
        } else {
            eval(id_widget).setEnabled(bool);
        }
    }

    RMPApplication.debug("end set_fields_active");
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
    c_debug(dbug.user_info, "=> get_user_basic_info_ok: result = ", result);

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
    RMPApplication.debug("=> begin get_user_basic_info_ko: error = " + JSON.stringify(error));
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
    c_debug(dbug.user_info, "=> set_user_info: user_object = ", user_object);

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
            RMPApplication.set(field, val_field);
            c_debug(dbug.user_info, "=> set_user_info: field = ", field + " | value = " + val_field);
        }
        old_values[key] = val_field;
    }

    c_debug(dbug.user_info, "=> set_user_info: selected_action = ", selected_action);
    if (selected_action == "replace_user_action") {
        c_debug(dbug.user_info, "=> set_user_info: Appel à copy_user_info avec user_object = ", user_object);
        copy_user_info(user_object);
    }

    RMPApplication.debug("end set_user_info");
}

// ============================================
//   set user's Metadata information on screen
// ============================================
function copy_user_info(user_object) 
{
    RMPApplication.debug("begin copy_user_info");
    c_debug(dbug.user_info, "=> copy_user_info: user_object = ", user_object);

    for (key in user_properties) {
        if (!(not_copied_field_list.indexOf(key) > -1)) {
            var val_field = user_object[key];
            if (type_choice_list.indexOf(key) > -1) {
                var id_user_field = "id_my_user.id_" + key;
                var id_new_user_field = "id_my_new_user.id_" + key;
                if (key == "user_country") {
                    val_field = capitalize(user_object[key]);
                }
                eval(id_new_user_field).setSelectedValue(val_field);
                c_debug(dbug.user_info, "=> copy_user_info: id_new_user_field (LIST)= ", id_new_user_field + " | selected_value = " + val_field);

            } else {
                var new_user_field = "my_new_user." + key;
                RMPApplication.set(new_user_field, val_field);
                c_debug(dbug.user_info, "=> copy_user_info: new_user_field = ", new_user_field + " | value = " + val_field);
            }
        }
    }

    RMPApplication.debug("end copy_user_info");
}

// ================================================
//  DELETE ALL LINES BELOW THIS BLOCK
//   get connected user's Metadata information
// ================================================
function set_user_metadata_info() 
{
    RMPApplication.debug("begin set_user_metadata_info");
    c_debug(dbug.user_info, "=> set_user_metadata_info"); 

    for (key in user_properties) {
        if (key != "user_name") {
            selected_user[key] = (key in selected_user.extended) ? eval(user_properties[key]) : "";
            c_debug(dbug.user_info, "=> get_user_basic_info_ok: key = " + key + " - " + user_properties[key] + " = " + eval(user_properties[key]));
        }
    }
    c_debug(dbug.user_info, "=> get_user_basic_info_ok: selected_user = ", selected_user);
    /*var options = {};
    var pattern = {};
    pattern.login = RMPApplication.get("existing_account");
    c_debug(dbug.user_info, "=> get_user_metadata_info: pattern = ", pattern);
    id_get_user_metadata_info_as_admin_api.trigger (pattern, options , get_user_metadata_info_ok, get_user_metadata_info_ko); */
    RMPApplication.debug("end get_user_metadata_info");
}

function get_user_metadata_info_ok(result)
{
    RMPApplication.debug("begin get_user_metadata_info_ok: result =  ", result);
    c_debug(dbug.user_info, "=> get_user_metadata_info_ok: result = ", result);

    /*for (key in result.user_info) {
        // selected_user[key] = eval(user_properties[key]);
        selected_user[key] = result.user_info[key]
    }*/

    // define "login" variable properties
    /*login.user = result.user;
    login.email = (!isEmpty(result.user)) ? result.user.trim() : '';
    login.phone = (!isEmpty(result.phone)) ? result.phone.trim() : '';
    login.timezone = result.timezone;
    login.profil = result.profil;
    login.company = (!isEmpty(result.compagnie)) ? result.compagnie.trim().toUpperCase() : '';
    login.grp_affiliates = (!isEmpty(result.grp_ens)) ? result.grp_ens.trim().toUpperCase() : '';
    login.affiliates_access = (!isEmpty(result.acces_enseignes)) ? result.acces_enseignes.trim().toUpperCase() : '';  
    login.affiliate = (!isEmpty(result.enseigne)) ? result.enseigne.trim().toUpperCase() : '';
    login.country = (!isEmpty(result.pays)) ? result.pays.trim().toUpperCase() : '';
    login.location_code = (!isEmpty(result.code_magasin)) ? result.code_magasin.trim().toUpperCase() : '';
    login.division = (!isEmpty(result.division)) ? result.division.trim().toUpperCase() : '';
    login.region = (!isEmpty(result.region)) ? result.region.trim().toUpperCase() : '';
    login.is_super_user = (!isEmpty(result.is_super_user)) ? result.is_super_user.toUpperCase() : '';*/
    c_debug(dbug.user_info, "=> get_user_metadata_info_ok: selected_user = ", selected_user);

    RMPApplication.debug("end get_user_metadata_info_ok");
}

function get_user_metadata_info_ko(error)
{
    RMPApplication.debug("=> begin get_user_metadata_info_ko: error = " + JSON.stringify(error));
    c_debug(dbug.user_info, "=> get_user_metadata_info_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("get_user_metadata_info_ok_msg", "Impossible de récupérer les informations de l'utilisateur !"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug("end get_user_metadata_info_ko");
}
// ============================================
//  DELETE ALL LINES ABOVE THIS LINE
// ============================================

// ============================================
//   Modify the user's password
// ============================================
function modify_password_user()
{
    RMPApplication.debug("begin modify_password_user");
    c_debug(dbug.user_info, "=> modify_password_user");

    var id_dialog_box = "id_password";
    var dialog_title = ${P_quoted(i18n("dialog_title_msg", "Réinitialiser un mot de passe"))};
    var windowComp = $('[id="' + id_dialog_box + '"]').dialog({
        autoOpen: false,
        resizable: false,
        height: "auto",
        modal: true,
        stack: false,
        width: 400,
        title: dialog_title,
        buttons: {
            "Annuler": function() {
              $(this).dialog("close");
            },
            "Confirmer": function() {
              $(this).dialog("close");
            }
        }
    });
    eval(id_dialog_box).setVisible(true);
    $(windowComp).dialog('open');

    c_debug(dbug.user_info, "=> modify_password_user: selected_user = ", selected_user);


    RMPApplication.debug("end modify_password_user");
}

function modify_password_new_user()
{
    RMPApplication.debug("begin modify_password_new_user");
    c_debug(dbug.user_info, "=> modify_password_new_user");


    c_debug(dbug.user_info, "=> modify_password_new_user: selected_user = ", selected_user);


    RMPApplication.debug("end modify_password_new_user");
}

// ============================
//  udpate user's information
// ============================
function update_user()
{
    RMPApplication.debug ("begin update_user");
    c_debug(dbug.update, "=> update_user");
    var my_pattern = {};
    var user = retrieve_info_user(JSON.parse(RMPApplication.get("my_user")));
    switch (selected_action) {
        case "add_user_action" :
            user.action = "ADD";
            break;
        
        case "delete_user_action" :
            user.action = "DEL";
            break;
        
        case "update_user_action" : 
            user.action = "UPD";
            break;
    }
    RMPApplication.set("user", user);
    c_debug(dbug.update, "=> update_user: user = ", user);

    document.getElementById("id_run_update_user_process_btn").click();
    
    // my_pattern.email = user.email;
    // c_debug(dbug.update, "=> update_user: my_pattern = ", my_pattern);
    // id_update_an_user_api.trigger (my_pattern, user, update_user_ok, update_user_ko); 
    // eval(collectionid).updateCallback(my_pattern, my_user, update_user_ok, update_user_ko);
    RMPApplication.debug ("end update_user");
}

// ==============================
//  Set initial user's password
// ==============================
function set_password()
{
    RMPApplication.debug ("begin set_password");
    c_debug(dbug.user_info, "=> set_password");
    if action == ADD {
        else if ( user_rights == "KIOSK" && !(isEmpty(user_location)) ) {
            password => remove_chars(user_location.toLowerCase(), "-");
        } else if (user_rights == "REGION" && !(isEmpty(user_region)) ) {

        }
    }

    function remove_chars(str, chars) {
        return str.replace(new RegExp(`[${chars}]`, 'g'), '');
    }

}

function retrieve_info_user(my_user)
{
    RMPApplication.debug ("begin retrieve_info_user");
    c_debug(dbug.user_info, "=> retrieve_info_user: my_user = ", my_user);
    var info_user = {};
    for (key in user_properties) {
        // c_debug(dbug.user_info, "=> retrieve_info_user: key = ", key);
        if (key in upper_var) {
            info_user[key] = my_user[key].toUpperCase();
            c_debug(dbug.user_info, "=> retrieve_info_user: ToUpperCase  => key = ", key);
        } else {
            info_user[key] = my_user[key];
        }
        if (info_user[key] != old_values[key]) {
            values_changed[key] = {};
            values_changed[key].old = old_values[key];
            values_changed[key].new = info_user[key];
        }
    }
    RMPApplication.set("values_changed", values_changed);       // Saved new changed user's values
    c_debug(dbug.user_info, "=> retrieve_info_user: values_changed = ", values_changed);
    RMPApplication.debug ("end retrieve_info_user");
    return info_user;
}

function update_user_ok(result)
{
    RMPApplication.debug ("begin update_user_ok");
    c_debug(dbug.update, "=> update_user_ok: result = ", result);
    var success_msg = ${P_quoted(i18n("update_user_ok_msg", "Informations correctement mises à jour !"))};
    notify_success(success_title_notify, success_msg);
    RMPApplication.debug ("end update_user_ok");
}

function update_user_ko(error)
{
    RMPApplication.debug ("begin update_ko");
    c_debug(dbug.update, "=> update_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("update_user_ko_msg", "Mise à jour impossible de l'utilisateur !"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug ("end update_user_ko");
}

// ==============================
// clean custom widget (CW) area
// variable: my_item
// ==============================
function clean_item()
{
    // clean widget area before any add-action
    RMPApplication.debug ("begin " + itemName + " Widget Area cleaned");
    c_debug(dbug.item, "=> begin clean_item");
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
    c_debug(dbug.item, "=> add_item: code_language = ", code_language);
    var my_object = {};
    for (key in var_list)  {
        my_object[key] = RMPApplication.get(key);
    }
    
    if (!item_already_exists(code_language)) {

        c_debug(dbug.item, "=> add_item: my_object", my_object);
        eval(collectionid).saveCallback(my_object, add_ok, add_ko);
        RMPApplication.debug ("New" + itemName.toUpperCase() + " added");
    } else {
        c_debug(dbug.item, "=> update_item: my_object", my_object);
        update_item(my_object);
        RMPApplication.debug (itemName.toUpperCase() + " will be updated!");
    }
    RMPApplication.debug ("end add_item");
}

function add_ok(result)
{
    RMPApplication.debug("begin add_ok");
    c_debug(dbug.item, "=> add_ok: result", result);
    var success_msg = ${P_quoted(i18n("add_ok_msg", "Nouvelle langue ajoutée !"))};
    notify_success(success_title_notify, success_msg);
    RMPApplication.debug("end add_ok");
}

function add_ko(error)
{
    //Error while adding item in the collection
    RMPApplication.debug("begin add_ko");
    c_debug(dbug.item, "=> update_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("add_ko_msg", "Sauvegarde impossible de langue !"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug("end add_ko");
}

// ======================
// load_item
// ======================
function load_item(code_language)
{
    RMPApplication.debug ("begin load_item");
    c_debug(dbug.item, "=> load_item: code_language = ", code_language);
    var my_pattern = {};
    my_pattern.code_language = code_language;
    RMPApplication.debug ("my_pattern.code_language = " + my_pattern.code_language);    
    eval(collectionid).listCallback(my_pattern, {}, load_ok, load_ko);
    RMPApplication.debug ("end load_item");
}

function load_ok(result)
{
    RMPApplication.debug ("begin load_ok");
    c_debug(dbug.item, "=> load_ok: result", result);
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
    c_debug(dbug.item, "=> load_ko: error = ", error);
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
    c_debug(dbug.item, "=> delete_item: code_language = ", code_language);
    var my_pattern = {};
    my_pattern.code_language = code_language;
    RMPApplication.debug ("my_pattern.code_language = " + my_pattern.code_language);  
    eval(collectionid).removeCallback(my_pattern, delete_ok, delete_ko);
    RMPApplication.debug ("end delete_item");
}

function delete_ok(result)
{
    RMPApplication.debug ("begin delete_ok");
    c_debug(dbug.item, "=> delete_ok: result", result);
    var success_msg = ${P_quoted(i18n("delete_ok_msg", "Langue supprimée !"))};
    notify_success(success_title_notify, success_msg);
    // clean_item();
    RMPApplication.debug ("end delete_ok");
}

function delete_ko(error)
{
    //Error while deleting item from the collection
    RMPApplication.debug ("begin delete_ko");
    c_debug(dbug.item, "=> delete_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("delete_ko_msg", "Suppression impossible de la langue !"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug ("end delete_ko");
}

// ======================
// Other functions
// ======================
function item_already_exists(code_language) 
{
    RMPApplication.debug ("begin function item_already_exists");
    c_debug(dbug.item, "=> item_already_exists: code_language = ", code_language);
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
    c_debug(dbug.item, "=> exists_ok: result", result);
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
    c_debug(dbug.item, "=> exists_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("exists_ko_msg", "La langue n'a pu être trouvée !"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug ("end exists_ko");
}
