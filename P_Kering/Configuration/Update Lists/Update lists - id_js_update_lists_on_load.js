RMPApplication.debug ("id_js_ci_file_on_load.js started");

// ==========================================
// Initialization PART (generic variable)
// according to the context
// ==========================================

var itemName = "Update lists";      // what kind of item ?
var collectionid_var3 = "col_lists";
var res3 = false;


// ==============================
// clean custom widget (CW) area
// variable: my_item
// ==============================
function clean_list()
{
	// clean widget area before any add-action
	id_section_list.setVisible(true);
	id_section_list.open();
	RMPApplication.set("my_list", "{}");
	RMPApplication.set("action", "add");
}

// *****************************
// Add new item
// *****************************
function add_list()
{
    RMPApplication.debug ("begin add_list");
    var my_object = eval('(' + RMPApplication.get("my_list") + ')');
    c_debug(debug.update_list, "=> add_list: my_object = ", my_object);
	if (!list_already_exists(my_object.list)) {
		my_object.id_list = uniqueId();
		eval(collectionid_var3).saveCallback(my_object, add_list_ok, add_list_ko);
	} else {
		var error_msg3 = ${P_quoted(i18n("add_file_msg3", "This update list already exists!"))};
        notify_error(error_title_notify, error_msg3 + ' ' + error_thanks_notify);
        RMPApplication.debug (itemName.toUpperCase() + " already exists!");
	}
}

function add_list_ok(result)
{
	RMPApplication.debug("begin add_list_ok");
    c_debug(debug.update_list, "=> add_list_ok: result = ", result);
    var success_msg = ${P_quoted(i18n("add_list_ok_msg", "New list added!"))};
    notify_success(success_title_notify, success_msg);
	clean_list();
    id_report_lists.refresh();
    RMPApplication.debug("end add_list_ok");
}

function add_list_ko(error)
{
    //Error while adding item in the collection
    RMPApplication.debug("begin add_list_ko");
    c_debug(debug.update_list, "=> add_list_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("add_list_ko_msg", "Save do not success!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug("end add_list_ko");
}

// *****************************
// Update existing item
// *****************************
function update_list()
{
	RMPApplication.debug ("begin update_list");
    var my_pattern = {};
    my_pattern.id_list = RMPApplication.get("my_list.list");
    var my_object = eval('(' + RMPApplication.get("my_list") + ')');
    eval(collectionid_var3).updateCallback(my_pattern, my_object, update_list_ok, update_list_ko);
    RMPApplication.debug ("end update_list");
}

function update_list_ok(result)
{
	RMPApplication.debug ("begin update_list_ok");
    c_debug(debug.update_list, "=> update_list_ok: result = ", result);
    var success_msg = ${P_quoted(i18n("update_list_ok_msg", "Information saved with success!"))};
    notify_success(success_title_notify, success_msg);
    clean_list();
    id_report_lists.refresh();
    RMPApplication.debug ("end update_list_ok");
}

function update_list_ko(error)
{
	//Error while updating item in the collection
	RMPApplication.debug ("begin update_list_ko");
    c_debug(debug.update_list, "=> update_list_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("update_list_ko_msg", "Update do not success!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug ("end update_list_ko");
}

// *****************************
// Load item in collection
// *****************************
function load_list(id_list)
{
	RMPApplication.debug ("begin load_list");
    c_debug(debug.update_list, "=> load_list: id_list = ", id_list); 
    var my_pattern = {};
	my_pattern.id_list = id_list;
    RMPApplication.debug ("my_pattern.id_list = " + my_pattern.id_list);    
    eval(collectionid_var3).listCallback(my_pattern, {}, load_list_ok, load_list_ko);
    RMPApplication.debug ("end load_list");
}

function load_list_ok(result)
{
	RMPApplication.debug ("begin load_list_ok");
    c_debug(debug.update_list, "=> load_list_ok: result = ", result);
    var success_msg = ${P_quoted(i18n("load_list_ok_msg", "Information were correctly loaded!"))};
    notify_success(success_title_notify, success_msg);
    id_section_list.setVisible(true);
	id_section_list.open();
    RMPApplication.set("my_list", result[0]);
    RMPApplication.set("my_list.list", result[0].id_list);
    RMPApplication.set("action", "update");
    RMPApplication.debug ("end load_list_ok");
}

function load_list_ko(error)
{
	RMPApplication.debug ("begin load_list_ko");
    c_debug(debug.update_list, "=> load_list_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("load_list_ko_msg", "Informations were not retrieved!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    id_report_lists.refresh();
    RMPApplication.debug ("end load_list_ko");
}


// *****************************
// Delete item in collection
// *****************************
function delete_list(id_list)
{
    RMPApplication.debug ("begin delete_list");
    c_debug(debug.update_list, "=> id_list: id_list = ", id_list);
    var my_pattern = {};
    my_pattern.id_list = id_list;
    RMPApplication.debug ("my_pattern.id_list = " + my_pattern.id_list);  
    eval(collectionid_var3).removeCallback(my_pattern, delete_list_ok, delete_list_ko);
    RMPApplication.debug ("end delete_list");
}

function delete_list_ok(result)
{
	RMPApplication.debug ("begin delete_list_ok");
    c_debug(debug.update_list, "=> delete_list_ok: result = ", result);
    var success_msg = ${P_quoted(i18n("delete_list_ok_msg", "List deleted!"))};
    notify_success(success_title_notify, success_msg);
    id_report_lists.refresh();
    //empty custom widget
	RMPApplication.set("my_list", "{}");
    RMPApplication.set("action", "add");
    RMPApplication.debug ("end delete_list_ok");
}

function delete_list_ko(error)
{
	//Error while deleting item from the collection
	RMPApplication.debug ("begin delete_list_ko");
    c_debug(debug.update_list, "=> delete_list_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("delete_list_ko_msg", "List deletion do not succcess!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug ("end delete_list_ko");
}

// *********************************************
// Test if item already exists in collection
// *********************************************
function list_already_exists(id_list)
{
    RMPApplication.debug ("begin function list_already_exists");
    c_debug(debug.update_list, "=> list_already_exists: id_list = ", id_list);
    if (isEmpty(id_list)) {
        return false;
    } else {
        var my_pattern = {};
        my_pattern.id_list = id_list;
        var options = {};
        options.asynchronous = false;
        res3 = false;
        eval(collectionid_var3).listCallback(my_pattern, options, exists_list_ok, exists_list_ko);
        RMPApplication.debug ("end function list_already_exists");
        return res3;
    }
}

function exists_list_ok(result)
{
    RMPApplication.debug ("begin exists_list_ok");
    c_debug(debug.update_list, "=> exists_list_ok: result = ", result);
	if (result[0]) {
		res3 = true;
	} else {
		res3 = false;
    }
    c_debug(debug.update_list, "=> exists_list_ok: res3 = ", res3);
    RMPApplication.debug ("end exists_list_ok");
}

function exists_list_ko(error)
{
    RMPApplication.debug ("begin exists_list_ko");
    c_debug(debug.update_list, "=> exists_list_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("exists_list_ko_msg", "Update list's existence could not be checked!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug ("end exists_list_ko");
}

