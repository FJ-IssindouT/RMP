RMPApplication.debug ("Application started");

// ==========================================
// Initialization PART (generic variable)
// according to the context
// ==========================================

// if "true", logs will be showed on the browser console
var debug = {
    "item": false
};

var itemName = "Location";      // what kind of item ?
var collectionid = "col_locations_kellydeli";

var var_list = 
{
    "company" : "company",
    "affiliate" : "affiliate",
    "country" : "country",
    "region" : "region",
    "division" : "division",
    "location_code" : "location_code",
    "RM" : "RM",
    "location" : "location",
    "location_name" : "location_name",
    "kiosk_reference" : "kiosk_reference",
    "email" : "email",
    "phone" : "phone",
    "address1" : "address1",
    "postal_code" : "postal_code",
    "city" : "city",
    "latitude_coord" : "latitude_coord",
    "longitude_coord" : "longitude_coord"
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
    id_details_item.setVisible(true);
    id_details_item.open();
    RMPApplication.set("my_item", "{}");
    RMPApplication.set("action", "add");
    RMPApplication.debug("end " + itemName + " Widget Area cleaned");
}

// ======================
// add_item
// ======================
function add_item()
{
    RMPApplication.debug ("begin add_item");
    c_debug(debug.item, "=> begin add_item");
    var my_object = eval('(' + RMPApplication.get("my_item") + ')');

    for (key in var_list)  {
        if ( RMPApplication.validate() == false ) {
            var error_msg1 = ${P_quoted(i18n("add_item_msg1", "Tous les champs doivent être remplis !"))};
            notify_error(error_title_notify, error_msg1);
            RMPApplication.debug ("all fields must be set!");
            return;
        }
    }
    
    if (!item_already_exists(my_object)) {

        c_debug(debug.item, "=> add_item: my_object = ", my_object);
        eval(collectionid).saveCallback(my_object, add_ok, add_ko);
        RMPApplication.debug (my_object);
        RMPApplication.debug ("New" + itemName.toUpperCase() + " added");
    } else {
        var error_msg2 = ${P_quoted(i18n("add_item_msg2", "Le site existe déjà !"))};
        notify_error(error_title_notify, error_msg2 + ' ' + error_thanks_notify);
        RMPApplication.debug (itemName.toUpperCase() + " already exists!");
    }
    RMPApplication.debug ("end add_item");
}

function add_ok(result)
{
    RMPApplication.debug("begin add_ok");
    c_debug(debug.item, "=> add_ok: result", result);
    var success_msg = ${P_quoted(i18n("add_ok_msg", "Nouveau site ajouté !"))};
    notify_success(success_title_notify, success_msg);
    clean_item();
    id_report.refresh();
    RMPApplication.debug("end add_ok");
}

function add_ko(error)
{
    //Error while adding item in the collection
    RMPApplication.debug("begin add_ko");
    c_debug(debug.item, "=> update_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("add_ko_msg", "Sauvegarde impossible du site !"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug("end add_ko");
}

// ======================
// udpate_item
// ======================
function update_item(locationcode)
{
    RMPApplication.debug ("begin update_item");
    c_debug(debug.item, "=> update_item: locationcode = ", locationcode);
    var my_pattern = {};
    my_pattern.kiosk_reference = RMPApplication.get("my_item.kiosk_reference");
    var my_object = eval('(' + RMPApplication.get("my_item") + ')');
    eval(collectionid).updateCallback(my_pattern, my_object, update_ok, update_ko);
    RMPApplication.debug ("end update_item");
}

function update_ok(result)
{
    RMPApplication.debug ("begin update_ok");
    c_debug(debug.item, "=> update_ok: result", result);
    var success_msg = ${P_quoted(i18n("update_ok_msg", "Informations correctement mises à jour !"))};
    notify_success(success_title_notify, success_msg);
    clean_item();
    id_report.refresh();
    RMPApplication.debug ("end update_ok");
}

function update_ko(error)
{
    //Error while updating item in the collection
    RMPApplication.debug ("begin update_ko");
    c_debug(debug.item, "=> update_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("update_ko_msg", "Mise à jour impossible du site !"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug ("end update_ko");
}

// ======================
// load_item
// ======================
function load_item(locationcode)
{
    RMPApplication.debug ("begin load_item");
    c_debug(debug.item, "=> load_item: locationcode = ", locationcode);
    var my_pattern = {};
    my_pattern.location_code = locationcode;
    RMPApplication.debug ("my_pattern.locationcode = " + my_pattern.location_code);    
    eval(collectionid).listCallback(my_pattern, {}, load_ok, load_ko);
    RMPApplication.debug ("end load_item");
}

function load_ok(result)
{
    RMPApplication.debug ("begin load_ok");
    c_debug(debug.item, "=> load_ok: result", result);
    var success_msg = ${P_quoted(i18n("load_ok_msg", "Informations du site chargées !"))};
    notify_success(success_title_notify, success_msg);
    id_details_item.setVisible(true);
    id_details_item.open();
    RMPApplication.set("my_item", result[0]);
    RMPApplication.set("action", "update");
    RMPApplication.debug ("end load_ok");
}

function load_ko(error)
{
    RMPApplication.debug ("begin load_ko");
    c_debug(debug.item, "=> load_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("load_ko_msg", "Récupération impossible du site !"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    id_report.refresh();
    RMPApplication.debug ("end load_ko");
}

// ======================
// delete_item
// ======================
function delete_item(locationcode)
{
    RMPApplication.debug ("begin delete_item");
    c_debug(debug.item, "=> delete_item: locationcode = ", locationcode);
    var my_pattern = {};
    my_pattern.location_code = locationcode;
    RMPApplication.debug ("my_pattern.locationcode = " + my_pattern.location_code);  
    eval(collectionid).removeCallback(my_pattern, delete_ok, delete_ko);
    RMPApplication.debug ("end delete_item");
}

function delete_ok(result)
{
    RMPApplication.debug ("begin delete_ok");
    c_debug(debug.item, "=> delete_ok: result", result);
    var success_msg = ${P_quoted(i18n("delete_ok_msg", "Site supprimé !"))};
    notify_success(success_title_notify, success_msg);
    id_report.refresh();
    //empty custom widget
    RMPApplication.set("my_item", "{}");
    RMPApplication.set("action", "add");
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
function item_already_exists(my_object) 
{
    RMPApplication.debug ("begin function item_already_exists");
    c_debug(debug.item, "=> item_already_exists: my_object = ", my_object);
    var my_pattern = {};
    for (key in my_object)  {
        my_pattern[key] = ( my_object[key] !== "" ) ? my_object[key] : "";
    }
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
    var error_msg = ${P_quoted(i18n("exists_ko_msg", "L'existence du site ne peut être vérifiée !"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug ("end exists_ko");
}

