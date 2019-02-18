// ========================
//   Dashboard: MAIN
// ========================
RMPApplication.debug("BO - Users Management : Application started");

// ========================
// Variables declaration
// ========================

// if "true", logs will be showed on the browser console
var dbug = {
    "init" : false,
    "export" : false
};

var login = {};                 // retrieve metadata user

var error_title_notify = ${P_quoted(i18n("error_title_notify", "Error"))};
var info_title_notify = ${P_quoted(i18n("info_title_notify", "Information"))};
var error_thanks_notify = ${P_quoted(i18n("error_thanks_notify", "Thanks to report this error!"))};
var btn_ok = ${P_quoted(i18n("btn_ok", "OK"))};


// ======================================================================
//  Create a list of Kelly Deli users and send by email to requestor
// ======================================================================
function export_users_list()
{
    RMPApplication.debug ("begin export_users_list");
    c_debug(dbug.export, "=> export_users_list");
    var my_pattern = {};
    var options = {}
    id_kd_export_users_list_api.trigger(my_pattern, options, export_users_list_ok, export_users_list_ko);
    RMPApplication.debug ("end export_users_list");
}

function export_users_list_ok(result)
{
    RMPApplication.debug ("begin export_users_list_ok");
    c_debug(dbug.export, "=> export_users_list_ok: result", result);
    var success_msg = ${P_quoted(i18n("export_users_list_okmsg", "Start export process with success! It could take several minutes before you receive the export list by email."))};
    notify_success(info_title_notify, success_msg);
    RMPApplication.debug ("end export_users_list_ok");
}

function export_users_list_ko(error)
{
    RMPApplication.debug ("begin export_users_list_ko");
    c_debug(dbug.export, "=> export_users_list_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("export_users_list_ko_msg", "Export process can not be started!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug ("end export_users_list_ko");
}