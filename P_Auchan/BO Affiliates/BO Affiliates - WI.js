RMPApplication.debug ("Application started");

// ==========================================
// Initialization PART (generic variable)
// according to the context
// ==========================================

// ==========================================
// INFORMATION
// "itemid" => "Affiliate ID" widget variable
// ==========================================

var itemName = "Contrat";      // what kind of item ?
var collectionid = "col_enseignes_auchan";

var var_list = 
{
    "affiliate" : "affiliate",
    "abbreviation" : "abbreviation",
    "company" : "company",
    "affiliate_img" : "affiliate_img"
};

// The following fields will be transformed in uppercase
var upper_fields = ["affiliate", "abbreviation", "company"];

var success_title_notify = ${P_quoted(i18n("success_title_notify", "Succès"))};
var error_title_notify = ${P_quoted(i18n("error_title_notify", "Erreur"))};
var error_thanks_notify = ${P_quoted(i18n("error_thanks_notify", "Merci de signaler cette erreur!"))};


// ==============================
// clean custom widget (CW) area
// variable: my_item
// ==============================
function clean_item()
{
    // clean widget area before any add-action
    RMPApplication.debug ("begin Item cleaned");
    // console.log("clean_item);
    var img_product_data = eval('(' + RMPApplication.get("my_item.affiliate_img") + ')');
    if (!isEmpty(img_product_data) && img_product_data.length != 0) {
        id_my_item.id_affiliate_img.selectFileId(img_product_data[0].id);
        id_my_item.id_affiliate_img.deleteSelected();
    }
    id_my_item.id_files_preview.setHtml("");
    id_my_item.id_files_preview.setVisible(false);
    id_details_item.setVisible(true);
    id_details_item.open();
    RMPApplication.set("my_item", "{}");
    RMPApplication.set("action", "add");
    RMPApplication.debug("end " + itemName + " Widget Area cleaned");
}

// ======================
// add_item
// ======================
function add_ok(result)
{
    RMPApplication.debug("begin add_ok");
    // console.log("add_ok: result", result);
    var success_msg = ${P_quoted(i18n("add_ok_msg", "Nouveau contrat ajouté!"))};
    notify_success(success_title_notify, success_msg);
    clean_item();
    id_report.refresh();
    RMPApplication.debug("end add_ok");    
}

function add_ko(error)
{
    //Error while adding item in the collection
    RMPApplication.debug("begin add_ko");
    // console.log("update_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("add_ko_msg", "Sauvegarde impossible du contrat!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug("end add_ko");
}

function add_item()
{
    RMPApplication.debug ("begin add_item");
    // console.log("add_item: itemid = ", itemid);
    var my_object = eval('(' + RMPApplication.get("my_item") + ')');
    // console.log('my_object: ', my_object);

    for (key in var_list)  {
        if ( (var_list[key] !== "" || RMPApplication.validate() == false ) && RMPApplication.get("my_item." + key) == undefined ) {

        var error_msg1 = ${P_quoted(i18n("add_item_msg1", "doit être défini(e)!"))};
        notify_error(error_title_notify, key + "(" + var_list[key] + ")" + error_msg1);
        RMPApplication.debug (key + " must be set!");
        return;
        } 
        if (!isEmpty(upper_fields)) {
            if (upper_fields.indexOf(key) > -1) {
                RMPApplication.set("my_item." + key, my_object[key].toUpperCase());
            }
        }
    }
    my_object = eval('(' + RMPApplication.get("my_item") + ')');
    // console.log('my_object: ', my_object);

    if(!item_already_exists(my_object)) {
        my_object.itemid = RMPApplication.uuid();
        if (my_object.affiliate_img.length == 0) {
            my_object.affiliate_img = null;
        }
        // console.log('add_item: my_object', my_object);
        eval(collectionid).saveCallback(my_object, add_ok, add_ko);
        RMPApplication.debug (my_object);
        RMPApplication.debug ("New" + itemName.toUpperCase() + " added");

        // id_affiliate_img = my_object.affiliate_img.id;
        // var input = {};
        // var option ={};
        // // Update image url with real path on server
        // JSON.parse(RMPApplication.get("my_object.affiliate_img"))[f].url

    } else {
        var error_msg2 = ${P_quoted(i18n("add_item_msg2", "Le contrat existe déjà!"))};
        notify_error(error_title_notify, error_msg2 + ' ' + error_thanks_notify);
        RMPApplication.debug (itemName.toUpperCase() + " already exists!");
    }
    RMPApplication.debug ("end add_item");
}

// ======================
// udpate_item
// ======================
function update_ok(result)
{
    RMPApplication.debug ("begin update_ok");
    // console.log("update_ok: result", result);
    var success_msg = ${P_quoted(i18n("update_ok_msg", "Informations correctement mises à jour!"))};
    notify_success(success_title_notify, success_msg);
    clean_item();
    id_report.refresh();
    RMPApplication.debug ("end update_ok");
}

function update_ko(error)
{
    //Error while updating item in the collection
    RMPApplication.debug ("begin update_ko");
    // console.log("update_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("update_ko_msg", "Mise à jour impossible du contrat!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug ("end update_ko");
}

function update_item(itemid)
{
    RMPApplication.debug ("begin update_item");
    // console.log("update_item: itemid = ", itemid);
    var my_pattern = {};
    my_pattern.itemid = RMPApplication.get("my_item.itemid");
    var my_object = eval('(' + RMPApplication.get("my_item") + ')');
    if (my_object.affiliate_img.length == 0) {
        my_object.affiliate_img = null;
    }
    for (key in var_list)  {
        if (!isEmpty(upper_fields)) {
            if (upper_fields.indexOf(key) > -1) {
                RMPApplication.set("my_item." + key, my_object[key].toUpperCase());
            }
        }
    }
    var my_object = eval('(' + RMPApplication.get("my_item") + ')');

    eval(collectionid).updateCallback(my_pattern, my_object, update_ok, update_ko);
    RMPApplication.debug ("end update_item");
}

// ======================
// load_item
// ======================
function load_ok(result)
{
    RMPApplication.debug ("begin load_ok");
    // console.log("load_ok: result", result);
    var success_msg = ${P_quoted(i18n("load_ok_msg", "Informations du contrat chargées!"))};
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
    // console.log("load_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("load_ko_msg", "Récupération impossible du contrat!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    id_report.refresh();
    RMPApplication.debug ("end load_ko");
}

function load_item(itemid)
{
    RMPApplication.debug ("begin load_item");
    // console.log("load_item: itemid = ", itemid);
    var my_pattern = {};
    my_pattern.itemid = itemid;
    RMPApplication.debug ("my_pattern." + itemid + " = " + my_pattern.itemid);
    eval(collectionid).listCallback(my_pattern, {}, load_ok, load_ko);
    RMPApplication.debug ("end load_item");
}

// ======================
// delete_item
// ======================
function delete_ok(result)
{
    RMPApplication.debug ("begin delete_ok");
    // console.log("delete_ok: result", result);
    var success_msg = ${P_quoted(i18n("delete_ok_msg", "Contrat supprimé!"))};
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
    // console.log("delete_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("delete_ko_msg", "Suppression impossible du contrat!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug ("end delete_ko");
}

function delete_item(itemid)
{
    RMPApplication.debug ("begin delete_item");
    // console.log("delete_item: itemid = ", itemid);
    var my_pattern = {};
    my_pattern.itemid = itemid;
    RMPApplication.debug ("my_pattern." + itemid + " = " + my_pattern.itemid);
    eval(collectionid).removeCallback(my_pattern, delete_ok, delete_ko);
    RMPApplication.debug ("end delete_item");
}

// ======================
// Other functions
// ======================
function item_already_exists(my_object) 
{
    RMPApplication.debug ("begin function item_already_exists");
    // console.log("item_already_exists: my_object = ", my_object);
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
    // console.log("exists_ok: result", result);
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
    // console.log("exists_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("exists_ko_msg", "L'existence du contrat ne peut être vérifiée!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug ("end exists_ko");
}
