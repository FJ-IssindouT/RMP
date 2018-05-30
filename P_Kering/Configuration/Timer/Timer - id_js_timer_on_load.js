RMPApplication.debug ("id_js_timer_on_load.js started");

// ==========================================
// Initialization PART (generic variable)
// according to the context
// ==========================================
var itemName = "Timer";      // what kind of item ?
var collectionid_var2 = "col_timers";
var res2 = false;

// ==============================
// clean custom widget (CW) area
// variable: my_item
// ==============================
function clean_timer()
{
	// clean widget area before any add-action
	id_section_timer.setVisible(true);
	id_section_timer.open();
	RMPApplication.set("my_timer", "{}");
	RMPApplication.set("action", "add");
}

// *****************************
// Add new item
// *****************************
function add_timer()
{
	RMPApplication.debug ("begin add_timer");
	var jtimer = parseInt(RMPApplication.get("my_timer.timer"));
    var m = jtimer * 1440;
    var timer_str = m.toString();
	id_my_timer.id_mtimer.setText(timer_str);

	var my_object = eval('(' + RMPApplication.get("my_timer") + ')');
	c_debug(debug.timer, "=> add_timer: my_object = ", my_object);
	if (!timer_already_exists(my_object.step, my_object.timer)) {
		my_object.id_timer = uniqueId();
		eval(collectionid_var2).saveCallback(my_object, add_timer_ok, add_timer_ko);
	} else {
		var error_msg2 = ${P_quoted(i18n("add_file_msg2", "This timer already exists!"))};
        notify_error(error_title_notify, error_msg2 + ' ' + error_thanks_notify);
        RMPApplication.debug (itemName.toUpperCase() + " already exists!");
	}
}

function add_timer_ok(result)
{
	RMPApplication.debug("begin add_timer_ok");
    c_debug(debug.timer, "=> add_timer_ok: result = ", result);
    var success_msg = ${P_quoted(i18n("add_timer_ok_msg", "New timer added!"))};
    notify_success(success_title_notify, success_msg);
	clean_timer();
    id_report_timers.refresh();
    RMPApplication.debug("end add_timer_ok");
}

function add_timer_ko(error)
{
    //Error while adding item in the collection
    RMPApplication.debug("begin add_timer_ko");
    c_debug(debug.timer, "=> add_timer_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("add_timer_ko_msg", "Save do not success!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug("end add_timer_ko");
}

// *****************************
// Update existing item
// *****************************
function update_timer()
{
	RMPApplication.debug ("begin update_timer");
    var my_pattern = {};
    my_pattern.id_timer = RMPApplication.get("my_timer.id_timer");
    var my_object = eval('(' + RMPApplication.get("my_timer") + ')');
    eval(collectionid_var2).updateCallback(my_pattern, my_object, update_timer_ok, update_timer_ko);
    RMPApplication.debug ("end update_timer");
}

function update_timer_ok(result)
{
	RMPApplication.debug ("begin update_timer_ok");
    c_debug(debug.timer, "=> update_timer_ok: result = ", result);
    var success_msg = ${P_quoted(i18n("update_timer_ok_msg", "Information saved with success!"))};
    notify_success(success_title_notify, success_msg);
    clean_timer();
    id_report_timers.refresh();
    RMPApplication.debug ("end update_timer_ok");
}

function update_timer_ko(error)
{
	//Error while updating item in the collection
	RMPApplication.debug ("begin update_timer_ko");
    c_debug(debug.timer, "=> update_timer_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("update_timer_ko_msg", "Update do not success!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug ("end update_timer_ko");
}

// *****************************
// Load item in collection
// *****************************
function load_timer(id_timer)
{
	RMPApplication.debug ("begin load_timer");
    c_debug(debug.timer, "=> load_timer: id_timer = ", id_timer); 
    var my_pattern = {};
	my_pattern.id_timer = id_timer;
    RMPApplication.debug ("my_pattern.id_timer = " + my_pattern.id_timer);    
    eval(collectionid_var2).listCallback(my_pattern, {}, load_timer_ok, load_timer_ko);
    RMPApplication.debug ("end load_timer");
}

function load_timer_ok(result)
{
	RMPApplication.debug ("begin load_timer_ok");
    c_debug(debug.timer, "=> load_timer_ok: result = ", result);
    var success_msg = ${P_quoted(i18n("load_timer_ok_msg", "Information were correctly loaded!"))};
    notify_success(success_title_notify, success_msg);
    id_section_timer.setVisible(true);
	id_section_timer.open();
	RMPApplication.set("my_timer", result[0]);
    RMPApplication.set("action", "update");
    RMPApplication.debug ("end load_timer_ok");
}

function load_timer_ko(error)
{
	RMPApplication.debug ("begin load_timer_ko");
    c_debug(debug.timer, "=> load_timer_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("load_timer_ko_msg", "Informations were not retrieved!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    id_report_timers.refresh();
    RMPApplication.debug ("end load_timer_ko");
}

// *****************************
// Delete item in collection
// *****************************
function delete_timer(id_timer)
{
	RMPApplication.debug ("begin delete_timer");
    c_debug(debug.timer, "=> delete_timer: id_timer = ", id_timer);
    var my_pattern = {};
    my_pattern.id_timer = id_timer;
    RMPApplication.debug ("my_pattern.id_timer = " + my_pattern.id_timer);  
    eval(collectionid_var2).removeCallback(my_pattern, delete_timer_ok, delete_timer_ko);
    RMPApplication.debug ("end delete_timer");
}

function delete_timer_ok(result)
{
	RMPApplication.debug ("begin delete_timer_ok");
    c_debug(debug.timer, "=> delete_timer_ok: result = ", result);
    var success_msg = ${P_quoted(i18n("delete_timer_ok_msg", "Timer deleted!"))};
    notify_success(success_title_notify, success_msg);
    id_report_timers.refresh();
    //empty custom widget
	RMPApplication.set("my_timer", "{}");
    RMPApplication.set("action", "add");
    RMPApplication.debug ("end delete_timer_ok");
}

function delete_timer_ko(error)
{
	//Error while deleting item from the collection
	RMPApplication.debug ("begin delete_timer_ko");
    c_debug(debug.timer, "=> delete_timer_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("delete_timer_ko_msg", "Timer deletion do not succcess!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug ("end delete_timer_ko");
}

// *********************************************
// Test if item already exists in collection
// *********************************************
function timer_already_exists(step, timer) 
{
	RMPApplication.debug ("begin function timer_already_exists");
    c_debug(debug.timer, "=> timer_already_exists: step = " + step  + " | timer = " + timer);
	var my_pattern = {};
	my_pattern.step = step;
	my_pattern.timer = timer;
	var options = {};
	options.asynchronous = false;
	res2 = false;
	eval(collectionid_var2).listCallback(my_pattern, options, exists_timer_ok, exists_timer_ko);
	RMPApplication.debug ("end function timer_already_exists");
	return res2;
}

function exists_timer_ok(result)
{
	RMPApplication.debug ("begin exists_timer_ok");
    c_debug(debug.timer, "=> exists_timer_ok: result = ", result);
	if (result[0]) {
		res2 = true;
	} else {
		res2 = false;
	}
	c_debug(debug.timer, "=> exists_timer_ok: res2 = ", res2);
    RMPApplication.debug ("end exists_timer_ok");
}

function exists_timer_ko(error) 
{
	RMPApplication.debug ("begin exists_timer_ko");
    c_debug(debug.timer, "=> exists_timer_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("exists_timer_ko_msg", "Timer's existence could not be checked!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug ("end exists_timer_ko");
}