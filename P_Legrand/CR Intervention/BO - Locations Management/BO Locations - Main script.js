RMPApplication.debug ("Application started");

// ==========================================
// Initialization PART (generic variable)
// according to the context
// ==========================================

// if "true", logs will be showed on the browser console
var dbug = {
    "item": false
};

var itemName = "Location";      // what kind of item ?
var collectionid = "col_legrand_locations";

var var_list = 
{
    "site_name" : "site_name",
    "full_name" : "full_name",
    "site_code" : "site_code",
    "company" : "company",
    "address" : "address",
    "country" : "country",
    "phone_number" : "phone_number",
    "site_contact" : "site_contact"
};

var upper_var = ["site_name", "company", "site_code", "country"];
var capitalize_var = [];

var selected_item = "rmpoption0_1"; // Retrieve the id of the tab to assign it a color / background color

var success_title_notify = ${P_quoted(i18n("success_title_notify", "Success"))};
var error_title_notify = ${P_quoted(i18n("error_title_notify", "Error"))};
var error_thanks_notify = ${P_quoted(i18n("error_thanks_notify", "Thanks for sharing this error!"))};

// execute main program
init();


// ===============================
//   Initialization part
// ===============================
function init() 
{
    RMPApplication.debug("begin init");
    clean_item();
    id_details_item.setVisible(false);
    RMPApplication.debug("end init");
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
    id_details_item.setVisible(true);
    id_details_item.open();
    for (key in var_list) {
        var key_str = "my_item." + key;
        RMPApplication.set(key_str, "");
    }
    RMPApplication.set("action", "add");
    RMPApplication.debug("end " + itemName + " Widget Area cleaned");
}

function clean_hidden_values()
{
    // clean widget area before any add-action
    c_debug(dbug.item, "=> begin clean_hidden_values");
    RMPApplication.set("loaded_site_name", "");
    RMPApplication.set("loaded_country", "");
    RMPApplication.set("loaded_site_code", "");
    RMPApplication.set("loaded_company", "");
}

// ======================
// add_item
// ======================
function add_item()
{
    RMPApplication.debug ("begin add_item");
    // clean_item();
    var my_pattern = {};
    // my_pattern.site_name = {
    //     "$regex": RMPApplication.get("my_item.site_name"),
    //     "$options": "i"
    // };
    my_pattern.site_name = new RegExp("^" + RMPApplication.get("my_item.site_name") + "$", "i");
    my_pattern.country = new RegExp("^" + RMPApplication.get("my_item.country") + "$", "i");
    if (isEmpty( RMPApplication.get("my_item.site_code"))) {
        my_pattern.site_code = "";
    } else {
        my_pattern.site_code = new RegExp("^" + RMPApplication.get("my_item.site_code") + "$", "i");
    }
    if (isEmpty( RMPApplication.get("my_item.company"))) {
        my_pattern.company = "";
    } else {
        my_pattern.company = new RegExp("^" + RMPApplication.get("my_item.company") + "$", "i");
    }
    c_debug(dbug.item, "=> add_item: my_pattern = ", my_pattern);

    var my_object = eval('(' + RMPApplication.get("my_item") + ')');

    // Check if mandatory fields are set
    for (key in var_list)  {
        if ( RMPApplication.validate() == false ) {
            var error_msg1 = ${P_quoted(i18n("add_item_msg1", "All mandatory fields must be set!"))};
            notify_error(error_title_notify, error_msg1);
            RMPApplication.debug ("All mandatory fields must be set!");
            return;
        }
    }

    // Convert concerned fields in uppercase
    for (key in var_list)  {
        for (i=0; i<upper_var.length; i++) {
            if ((key == upper_var[i]) && (key in my_object)) {
                my_object[key] = my_object[key].toUpperCase();
                c_debug(dbug.item, "=> add_item: ToUpperCase  => key = ", key);
            }
        }
    }    
    
    // Check if a similar location exists based on multiple-key
    if (!item_already_exists(my_object, my_pattern)) {

        c_debug(dbug.item, "=> add_item: my_object", my_object);
        eval(collectionid).saveCallback(my_object, add_ok, add_ko);
        RMPApplication.debug (my_object);
        RMPApplication.debug ("New" + itemName.toUpperCase() + " added");
    } else {
        var error_msg2 = ${P_quoted(i18n("add_item_msg2", "The site already exists! It can not be created twice!"))};
        notify_error(error_title_notify, error_msg2);
        RMPApplication.debug (itemName.toUpperCase() + " already exists!");
    }
    RMPApplication.debug ("end add_item");
}

function add_ok(result)
{
    RMPApplication.debug("begin add_ok");
    c_debug(dbug.item, "=> add_ok: result = ", result);
    var success_msg = ${P_quoted(i18n("add_ok_msg", "New site added!"))};
    notify_success(success_title_notify, success_msg);
    clean_item();
    id_report.refresh();
    RMPApplication.debug("end add_ok");
}

function add_ko(error)
{
    //Error while adding item in the collection
    RMPApplication.debug("begin add_ko");
    c_debug(dbug.item, "=> update_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("add_ko_msg", "Unable to save the site!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug("end add_ko");
}

// ======================
// udpate_item
// ======================
function update_item()
{
    RMPApplication.debug ("begin update_item");
    var my_old_pattern = {};
    my_old_pattern.site_name = RMPApplication.get("loaded_site_name");
    my_old_pattern.country = RMPApplication.get("loaded_country");
    my_old_pattern.site_code = RMPApplication.get("loaded_site_code");
    my_old_pattern.company = RMPApplication.get("loaded_company");
    c_debug(dbug.item, "=> update_item: my_old_pattern = ", my_old_pattern);
    var my_new_pattern = {};
    // my_new_pattern.site_name = { "$regex": RMPApplication.get("my_item.site_name"), "$options": "i" };
    my_new_pattern.site_name = new RegExp("^" + RMPApplication.get("my_item.site_name") + "$", "i");
    my_new_pattern.country = new RegExp("^" + RMPApplication.get("my_item.country") + "$", "i");
    my_new_pattern.site_code = new RegExp("^" + RMPApplication.get("my_item.site_code") + "$", "i");
    my_new_pattern.company = new RegExp("^" + RMPApplication.get("my_item.company") + "$", "i");
    c_debug(dbug.item, "=> update_item: my_new_pattern = ", my_new_pattern);

    var my_object = eval('(' + RMPApplication.get("my_item") + ')');

    if (!item_already_exists(my_object, my_new_pattern)) {

        // Convert concerned fields in uppercase
        for (key in var_list)  {
            for (i=0; i<upper_var.length; i++) {
                if ((key == upper_var[i]) && (key in my_object)) {
                    my_object[key] = my_object[key].toUpperCase();
                    c_debug(dbug.item, "=> update_item: ToUpperCase  => key = ", key);
                }
            }
        } 
        c_debug(dbug.item, "=> update_item: my_object", my_object);
        eval(collectionid).updateCallback(my_old_pattern, my_object, update_ok, update_ko); 
        RMPApplication.debug ( itemName.toUpperCase() + " updated");

    } else {

        var site_name_pattern_equal = (my_old_pattern.site_name == my_new_pattern.site_name.$regex) ? true : false;
        c_debug(dbug.item, "=> update_item: site_name_pattern_equal", site_name_pattern_equal);
        var country_pattern_equal = (my_old_pattern.country == my_new_pattern.country.$regex) ? true : false;
        c_debug(dbug.item, "=> update_item: country_pattern_equal", country_pattern_equal);
        var site_code_pattern_equal = (my_old_pattern.site_code == my_new_pattern.site_code.$regex) ? true : false;
        c_debug(dbug.item, "=> update_item: site_code_pattern_equal", site_code_pattern_equal);
        var company_pattern_equal = (my_old_pattern.company == my_new_pattern.company.$regex) ? true : false;
        c_debug(dbug.item, "=> update_item: company_pattern_equal", company_pattern_equal);
        
        // We can't update a location, especially the mutiple-key fields, if it conducts to an another location with same new multile-key
        if (site_name_pattern_equal && country_pattern_equal && site_code_pattern_equal && company_pattern_equal) {
            c_debug(dbug.item, "=> update_item: my_object", my_object);
            eval(collectionid).updateCallback(my_old_pattern, my_object, update_ok, update_ko); 
            RMPApplication.debug ( itemName.toUpperCase() + " updated");

        } else {
            var error_msg2 = ${P_quoted(i18n("add_item_msg2", "A site already exists with same (site_name & country & site_code & company) values. The update is aborted!"))};
            notify_error(error_title_notify, error_msg2);
            RMPApplication.debug (itemName.toUpperCase() + " already exists!");
        }
    }
    RMPApplication.debug ("end update_item"); 
}

function update_ok(result)
{
    RMPApplication.debug ("begin update_ok");
    c_debug(dbug.item, "=> update_ok: result = ", result);
    var success_msg = ${P_quoted(i18n("update_ok_msg", "Information correctly updated!"))};
    notify_success(success_title_notify, success_msg);
    clean_item();
    id_report.refresh();
    RMPApplication.debug ("end update_ok");
}

function update_ko(error)
{
    //Error while updating item in the collection
    RMPApplication.debug ("begin update_ko");
    c_debug(dbug.item, "=> update_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("update_ko_msg", "Unable to update the site!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug ("end update_ko");
}

// ======================
// load_item
// ======================
function load_item(sitename, country, sitecode, company)
{
    RMPApplication.debug ("begin load_item");
    clean_hidden_values();
    clean_item();
    var my_pattern = {};
    my_pattern.site_name = sitename;
    my_pattern.country = country;
    my_pattern.company = (isEmpty(company)) ? "" : company;
    my_pattern.site_code = (isEmpty(sitecode)) ? "" : sitecode;
    c_debug(dbug.item, "=> load_item: my_pattern = ", my_pattern);
    eval(collectionid).listCallback(my_pattern, {}, load_ok, load_ko);
    RMPApplication.debug ("end load_item");
}

function load_ok(result)
{
    RMPApplication.debug ("begin load_ok");
    c_debug(dbug.item, "=> load_ok: result = ", result);
    var success_msg = ${P_quoted(i18n("load_ok_msg", "Site information loaded!"))};
    notify_success(success_title_notify, success_msg);
    id_details_item.setVisible(true);
    id_details_item.open();
    RMPApplication.set("action", "update");
    if (result.length > 0) {
        RMPApplication.set("my_item", result[0]);
        // Keep hidden "site_name", "country", "site_code", "company" values before any new change
        RMPApplication.set("loaded_site_name", result[0].site_name);
        RMPApplication.set("loaded_country", result[0].country);
        RMPApplication.set("loaded_site_code", result[0].site_code);
        RMPApplication.set("loaded_company", result[0].company);
    }
    RMPApplication.debug ("end load_ok");
}

function load_ko(error)
{
    //Error while loading item from the collection
    RMPApplication.debug ("begin load_ko");
    c_debug(dbug.item, "=> load_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("load_ko_msg", "Unable to retrieve site's information!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    id_report.refresh();
    RMPApplication.debug ("end load_ko");
}

// ======================
// delete_item
// ======================
function delete_item(sitename, country, sitecode, company)
{
    RMPApplication.debug ("begin delete_item");
    var my_pattern = {};
    my_pattern.site_name = sitename;
    my_pattern.country = country;
    my_pattern.site_code = (isEmpty(sitecode)) ? "" : sitecode;
    my_pattern.company = (isEmpty(company)) ? "" : company;
    c_debug(dbug.item, "=> delete_item: my_pattern = ", my_pattern);
    eval(collectionid).removeCallback(my_pattern, delete_ok, delete_ko);
    RMPApplication.debug ("end delete_item");
}

function delete_ok(result)
{
    RMPApplication.debug ("begin delete_ok");
    c_debug(dbug.item, "=> delete_ok: result = ", result);
    var success_msg = ${P_quoted(i18n("delete_ok_msg", "Site deleted!"))};
    notify_success(success_title_notify, success_msg);
    id_report.refresh();
    RMPApplication.set("my_item", "{}");
    clean_item();
    RMPApplication.set("action", "add");
    RMPApplication.debug ("end delete_ok");
}

function delete_ko(error)
{
    //Error while deleting item from the collection
    RMPApplication.debug ("begin delete_ko");
    c_debug(dbug.item, "=> delete_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("delete_ko_msg", "Unable to delete site!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug ("end delete_ko");
}

// ======================
// Other functions
// ======================
function item_already_exists(my_object, my_pattern) 
{
    RMPApplication.debug ("begin function item_already_exists");
    c_debug(dbug.item, "=> item_already_exists: my_object = ", my_object);
    c_debug(dbug.item, "=> item_already_exists: my_pattern = ", my_pattern);
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
    c_debug(dbug.item, "=> exists_ok: result = ", result);
    if(result[0]) {
        res = true;
    } else {
        res = false;
    }
    c_debug(dbug.item, "=> exists_ok: res = ", res);
    RMPApplication.debug ("end exists_ok");
}

function exists_ko(error) 
{
    RMPApplication.debug ("begin exists_ko");
    c_debug(dbug.item, "=> exists_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("exists_ko_msg", "Check site existence can't be done!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug ("end exists_ko");
}
