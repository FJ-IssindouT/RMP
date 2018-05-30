// id_js_main_script

// ========================
// Variables declaration
// ========================

// if "true", logs will be showed on the browser console
var debug = {
	"hidden": false,
    "init": false,
    "ci_file": false,
    "timer": false,
    "update_list": false,
    "email_notif": false
};

var success_title_notify = ${P_quoted(i18n("success_title_notify", "Success"))};
var error_title_notify = ${P_quoted(i18n("error_title_notify", "Error"))};
var error_thanks_notify = ${P_quoted(i18n("error_thanks_notify", "Thanks to report this issue!"))};

// ==============================
//generates a unique ID
// ==============================
function uniqueId()
{
	var idstr = String.fromCharCode(Math.floor((Math.random() * 25) + 65));
	do {
		// between numbers and characters (48 is 0 and 90 is Z (42-48 = 90)
		var ascicode = Math.floor((Math.random() * 42) + 48);
		if (ascicode < 58 || ascicode > 64) {
			// exclude all chars between : (58) and @ (64)
			idstr += String.fromCharCode(ascicode);
		}
	} while (idstr.length < 32);
	return (idstr);
}