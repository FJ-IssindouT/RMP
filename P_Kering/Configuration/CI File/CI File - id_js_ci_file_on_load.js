RMPApplication.debug ("id_js_ci_file_on_load.js started");

// ==========================================
// Initialization PART (generic variable)
// according to the context
// ==========================================

var itemName = "CI File template";      // what kind of item ?
var collectionid_var1 = "col_hours";
var res1 = false;

// ==============================
// clean custom widget (CW) area
// variable: my_item
// ==============================
function clean_file()
{
    // clean widget area before any add-action
	id_details_item.setVisible(true);
	id_details_item.open();
	RMPApplication.set("my_item", "{}");
	RMPApplication.set("action", "add");
}

// *****************************
// Add new item
// *****************************
function add_file()
{
    RMPApplication.debug ("begin add_file");
    var my_object = eval('(' + RMPApplication.get("my_item") + ')');
    c_debug(debug.ci_file, "=> add_file: my_object = ", my_object);
    if (!url_already_exists(my_object)) {
        eval(collectionid_var1).saveCallback(my_object, add_file_ok, add_file_ko);
    } else {
        var error_msg1 = ${P_quoted(i18n("add_file_msg1", "This template already exists!"))};
        notify_error(error_title_notify, error_msg1 + ' ' + error_thanks_notify);
        RMPApplication.debug (itemName.toUpperCase() + " already exists!");
    }
    RMPApplication.debug ("end add_file");
}

function add_file_ok(result)
{
    RMPApplication.debug("begin add_file_ok");
    c_debug(debug.ci_file, "=> add_file_ok: result = ", result);
    var success_msg = ${P_quoted(i18n("add_file_ok_msg", "New file added!"))};
    notify_success(success_title_notify, success_msg);
	clean_file();
    id_report_hours.refresh();
    RMPApplication.debug("end add_file_ok");
}

function add_file_ko(error)
{
    //Error while adding item in the collection
    RMPApplication.debug("begin add_file_ko");
    c_debug(debug.ci_file, "=> add_file_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("add_file_ko_msg", "Save do not success!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug("end add_file_ko");
}

// *****************************
// Update existing item
// *****************************
function update_file()
{
    RMPApplication.debug ("begin update_file");
    var my_pattern = {};
    my_pattern.file_id = RMPApplication.get("my_item.file_id");
    var my_object = eval('(' + RMPApplication.get("my_item") + ')');
    eval(collectionid_var1).updateCallback(my_pattern, my_object, update_file_ok, update_file_ko);
    RMPApplication.debug ("end update_file");
}

function update_file_ok(result)
{
    RMPApplication.debug ("begin update_file_ok");
    c_debug(debug.ci_file, "=> update_file_ok: result = ", result);
    var success_msg = ${P_quoted(i18n("update_file_ok_msg", "Information saved with success!"))};
    notify_success(success_title_notify, success_msg);
    clean_file();
    id_report_hours.refresh();
    RMPApplication.debug ("end update_file_ok");
}

function update_file_ko(error)
{
	//Error while updating item in the collection
	RMPApplication.debug ("begin update_file_ko");
    c_debug(debug.ci_file, "=> update_file_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("update_file_ko_msg", "Update do not success!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug ("end update_file_ko");
}

// *****************************
// Load item in collection
// *****************************
function load_file(file_id)
{
    RMPApplication.debug ("begin load_file");
    c_debug(debug.ci_file, "=> load_file: file_id = ", file_id); 
    var my_pattern = {};
    my_pattern.file_id = file_id;
    c_debug(debug.ci_file, "=> load_file: my_pattern.file_id = " + my_pattern.file_id);    
    eval(collectionid_var1).listCallback(my_pattern, {}, load_file_ok, load_file_ko);
    RMPApplication.debug ("end load_file");
}

function load_file_ok(result)
{
	RMPApplication.debug ("begin load_file_ok");
    c_debug(debug.ci_file, "=> load_file_ok: result = ", result);
    var success_msg = ${P_quoted(i18n("load_file_ok_msg", "Information were correctly loaded!"))};
    notify_success(success_title_notify, success_msg);
    id_details_item.setVisible(true);
    id_details_item.open();
    RMPApplication.set("my_item", {});
	RMPApplication.set("my_item", result[0]);
    RMPApplication.set("action", "update");
    RMPApplication.debug ("end load_file_ok");
}

function load_file_ko(error)
{
	RMPApplication.debug ("begin load_file_ko");
    c_debug(debug.ci_file, "=> load_file_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("load_file_ko_msg", "Informations were not retrieved!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    id_report_hours.refresh();
    RMPApplication.debug ("end load_file_ko");
}

// *****************************
// Delete item in collection
// *****************************
function delete_file(file_id)
{
    RMPApplication.debug ("begin delete_file");
    c_debug(debug.ci_file, "=> delete_file: file_id = ", file_id);
    var my_pattern = {};
    my_pattern.file_id = file_id;
    RMPApplication.debug ("my_pattern.file_id = " + my_pattern.file_id);  
    eval(collectionid_var1).removeCallback(my_pattern, delete_file_ok, delete_file_ko);
    RMPApplication.debug ("end delete_file");
}

function delete_file_ok(result)
{
	RMPApplication.debug ("begin delete_file_ok");
    c_debug(debug.ci_file, "=> delete_file_ok: result = ", result);
    var success_msg = ${P_quoted(i18n("delete_file_ok_msg", "CI File template deleted!"))};
    notify_success(success_title_notify, success_msg);
    id_report_hours.refresh();
    //empty custom widget
	RMPApplication.set("my_item", "{}");
    RMPApplication.set("action", "add");
    RMPApplication.debug ("end delete_file_ok");
}

function delete_file_ko(error)
{
	//Error while deleting item from the collection
	RMPApplication.debug ("begin delete_file_ko");
    c_debug(debug.ci_file, "=> delete_file_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("delete_file_ko_msg", "CI File template deletion do not succcess!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug ("end delete_file_ko");
}

// *********************************************
// Test if item already exists in collection
// *********************************************
function url_already_exists(obj)
{
    RMPApplication.debug ("begin function url_already_exists");
    c_debug(debug.ci_file, "=> url_already_exists: obj = ", obj);
    var my_pattern = {};
    my_pattern.file_id = obj.file_id;
    var options = {};
    options.asynchronous = false;
    res1 = false;
    eval(collectionid_var1).listCallback(my_pattern, options, exists_file_ok, exists_file_ko);
    RMPApplication.debug ("end function url_already_exists");
    return res1;
}

function exists_file_ok(result)
{
    RMPApplication.debug ("begin exists_file_ok");
    c_debug(debug.ci_file, "=> exists_file_ok: result = ", result);
	if (result[0]) {
		res1 = true;
	} else {
		res1 = false;
    }
    c_debug(debug.ci_file, "=> exists_file_ok: res1 = ", res1);
    RMPApplication.debug ("end exists_file_ok");
}

function exists_file_ko(error)
{
    RMPApplication.debug ("begin exists_file_ko");
    c_debug(debug.ci_file, "=> exists_file_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("exists_file_ko_msg", "CI File template's existence could not be checked!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug ("end exists_file_ko");
}

