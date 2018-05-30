// ========================
//   id_main_script
// ========================
RMPApplication.debug("Update Ticket : Application started");

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
	var update_date = RMPApplication.get("date");			// locale date & time string

	// dates should be converted in UTC format before updating the ticket
    var utc_update_date = moment(update_date, "DD/MM/YYYY HH:mm:ss").utc().format("DD/MM/YYYY HH:mm:ss");

    // we save UTC dates for ulterior use
	id_utc_date.setValue(utc_update_date);
	c_debug(debug.dates_check, "=> datesCheck: utc_update_date = ", utc_update_date);


	RMPApplication.debug("end datesCheck");
	c_debug(debug.dates_check, "=> datesCheck: return TRUE");
	// return true;		// needed as called by pre-launch script "Assign to me" button
}
