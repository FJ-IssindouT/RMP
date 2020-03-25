// =================================
//   Import Export Users: MAIN
// =================================
RMPApplication.debug("BO - Import Export Users : Application started");

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
/* function export_users_list()
{
    RMPApplication.debug ("begin export_users_list");
    c_debug(dbug.export, "=> export_users_list");
    $("#id_spinner_export").show();
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
    $("#id_spinner_export").hide();
    RMPApplication.debug ("end export_users_list_ok");
}

function export_users_list_ko(error)
{
    RMPApplication.debug ("begin export_users_list_ko");
    c_debug(dbug.export, "=> export_users_list_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("export_users_list_ko_msg", "Export process can not be started!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    $("#id_spinner_export").hide();
    RMPApplication.debug ("end export_users_list_ko");
} */

function trigger_users_export()
{
    RMPApplication.debug ("begin export_users_list_started");
    c_debug(dbug.export, "=> export_users_list_started");
    RMPApplication.set("start_users_export", "YES");
    RMPApplication.debug ("end export_users_list_started");
}

function export_users_list_started()
{
    RMPApplication.debug ("begin export_users_list_started");
    c_debug(dbug.export, "=> export_users_list_started");
    $("#id_spinner_export").show();
    var success_msg = ${P_quoted(i18n("export_users_list_started_msg", "Users export processes was launched. In case of success, it could take several minutes before you receive the export list by email."))};
    var export_users_list_started_dialog_info_btn = "OK";
    dialog_info(info_title_notify, success_msg, export_users_list_started_dialog_info_btn);
    RMPApplication.debug ("end export_users_list_started");
}

function export_users_list_completed()
{
    RMPApplication.debug ("begin export_users_list_completed");
    c_debug(dbug.export, "=> export_users_list_completed");
    var success_msg = ${P_quoted(i18n("export_users_list_completed_msg", "Users export was processed with success! You will receive an email with an CSV file of user accounts list."))};
    notify_success(info_title_notify, success_msg);
    $("#id_spinner_export").hide();
    RMPApplication.debug ("end export_users_list_completed");
}

function export_users_list_aborted()
{
    RMPApplication.debug ("begin export_users_list_aborted");
    c_debug(dbug.export, "=> export_users_list_aborted");
    var error_msg = ${P_quoted(i18n("export_users_list_aborted_msg", "Users export process has been aborted due to an encountered error!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    $("#id_spinner_export").hide();
    RMPApplication.debug ("end export_users_list_aborted");
}
