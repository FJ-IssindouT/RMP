// id_js_on_load

var collectionid = "col_notifications";
var notifications = {
	"notif_new_request": {},
	"notif_more_info": {},
	"notif_additionnal_input": {},
	"notif_request_refused": {},
	"notif_fts": {},
	"notif_project_ack": {},
	"notif_mou_reviewer": {},
	"notif_new_mou": {},
	"notif_ais_creator": {},
	"notif_ais_reviewer": {},
	"notif_new_ais_proposal": {},
	"notif_final": {}
};
var success_title_notify = ${P_quoted(i18n("success_title_notify", "Success"))};
var error_title_notify = ${P_quoted(i18n("error_title_notify", "Error"))};
var error_thanks_notify = ${P_quoted(i18n("error_thanks_notify", "Thanks to report this issue!"))};

set_email_notifications();


// Récupère toutes les informations liées au notification email existantes dans le workflow existant
function set_email_notifications()
{
    RMPApplication.debug ("begin set_email_notifications");
    var my_pattern = {};
    var options = {};
    eval(collectionid).listCallback(my_pattern, options, set_email_notifications_ok, set_email_notifications_ko);
    RMPApplication.debug ("end set_email_notifications");
}

function set_email_notifications_ok(result) 
{
    RMPApplication.debug ("begin set_email_notifications_ok");
    c_debug(debug.email_notif, "=> set_email_notifications_ok: result = ", result);

	// for (key in notifications) {
	for (var i=0; i<result.length; i++) {
		var my_notif_var = "my_" + result[i].notification_step;
		RMPApplication.set(eval("\"" + my_notif_var + "." + "live_email_to" + "\""), result[i].live_email_to);
		RMPApplication.set(eval("\"" + my_notif_var + "." + "live_email_cc" + "\""), result[i].live_email_cc);
		RMPApplication.set(eval("\"" + my_notif_var + "." + "acceptance_email_to" + "\""), result[i].acceptance_email_to);
	}
    RMPApplication.debug ("end set_email_notifications_ok");
}

function set_email_notifications_ko(error) 
{
    RMPApplication.debug ("begin set_email_notifications_ko");
    alert("ERROR: no entries in Noficiations collection: " + JSON.stringify(error));
    RMPApplication.debug ("end set_email_notifications_ko");
}

function save_changes()
{
	RMPApplication.debug ("begin save_changes");
    for (key in notifications) {
		var my_notif_var = "my_" + key;
		// var my_pattern = {};
		// my_pattern.notification_step = key;
		// c_debug(debug.email_notif, "=> save_changes: my_pattern = ", my_pattern);
		var my_object = {};
		my_object.notification_step = key;
		my_object.live_email_to = RMPApplication.get(eval("\"" + my_notif_var + "." + "live_email_to" + "\""));
		my_object.live_email_cc = RMPApplication.get(eval("\"" + my_notif_var + "." + "live_email_cc" + "\""));
		my_object.acceptance_email_to = RMPApplication.get(eval("\"" + my_notif_var + "." + "acceptance_email_to" + "\""));
		c_debug(debug.email_notif, "=> save_changes: my_object = ", my_object);
		// eval(collectionid).updateCallback(my_pattern, my_object, save_changes_ok, save_changes_ko);
		eval(collectionid).saveCallback(my_object, save_changes_ok, save_changes_ko);
	}
    RMPApplication.debug ("end save_changes");
}

function save_changes_ok(result)
{
    RMPApplication.debug ("begin save_changes_ok");
    var success_msg = ${P_quoted(i18n("save_changes_ok_msg", "Email notifications are updated with success!"))};
    // notify_success(success_title_notify, success_msg);
    RMPApplication.debug ("end save_changes_ok");
}

function save_changes_ko(error)
{
    RMPApplication.debug ("begin save_changes_ko");
    var error_msg = ${P_quoted(i18n("save_changes_ko_msg", "No changes are applied!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug ("end save_changes_ko");
}