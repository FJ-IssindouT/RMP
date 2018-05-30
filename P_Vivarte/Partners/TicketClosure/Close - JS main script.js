// ========================
//   id_main_script
// ========================
RMPApplication.debug("Closure Ticket : Application started");

// ========================
// Variables declaration
// ========================

// if "true", logs will be showed on the browser console
var debug = {
	"user_info": false,
	"dates_check": false,
	"work_order": false,
	"intervention": false
};

var error_title_notify = ${P_quoted(i18n("error_title_notify", "Error"))};
var info_title_notify = ${P_quoted(i18n("info_title_notify", "Information"))};
var error_thanks_notify = ${P_quoted(i18n("error_thanks_notify", "Thanks to report this error!"))};
var btn_ok = ${P_quoted(i18n("btn_ok", "OK"))};


function datesCheck() 
{
	RMPApplication.debug("begin datesCheck");
	c_debug(debug.dates_check, "=> begin datesCheck");

	// retrieve dates from WI
	var update_date = RMPApplication.get("date");					// locale date & time string
	var start_date = id_work_start.getValue() * 1000;				// locale timestamp value in milliseconds
	var end_date = id_work_end.getValue() * 1000;
	var work_start_l = RMPApplication.get("work_start_l");			// locale date & time string
	var work_end_l = RMPApplication.get("work_end_l");
	var now_date = Date.now();									// current timestamp value in milliseconds

	// check if start_date < end_date
	if (start_date > end_date) {
		c_debug(debug.dates_check, "=> datesCheck: start_date > end_date AND return FALSE");
		var error_msg = ${P_quoted(i18n("start_date_msg", "The date of intervention end can't be lower than the date of intervention start!"))};
		dialog_error(error_title_notify, error_msg, btn_ok);
		return false;
	}

	// check if end_date < current date&time
	if (end_date > now_date) {
		c_debug(debug.dates_check, "=> datesCheck: end_date > now_date AND return FALSE");
		var error_msg = ${P_quoted(i18n("end_date_msg", "The date of intervention end can't be higher than the current date & time!"))};
		dialog_error(error_title_notify, error_msg, btn_ok);
		return false;
	}

	// dates should be converted in UTC format before updating the ticket
	var utc_update_date = moment(update_date, "DD/MM/YYYY HH:mm:ss").utc().format("DD/MM/YYYY HH:mm:ss");
    var start_date_utc  = moment(work_start_l, "DD/MM/YYYY HH:mm:ss").utc().format("DD/MM/YYYY HH:mm:ss");
    var end_date_utc  = moment(work_end_l, "DD/MM/YYYY HH:mm:ss").utc().format("DD/MM/YYYY HH:mm:ss");

	// we save UTC dates for ulterior use
	id_utc_date.setValue(utc_update_date);
	c_debug(debug.dates_check, "=> datesCheck: utc_update_date = ", utc_update_date);
	id_utc_work_start.setValue(start_date_utc);
	c_debug(debug.dates_check, "=> datesCheck: start_date_utc = ", start_date_utc);
	id_utc_work_end.setValue(end_date_utc);
	c_debug(debug.dates_check, "=> datesCheck: end_date_utc = ", end_date_utc);

	RMPApplication.debug("end datesCheck");
	c_debug(debug.dates_check, "=> datesCheck: return TRUE");
	return true;		// needed as called by pre-launch script "Fermer le ticket" button
}