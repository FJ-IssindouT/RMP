RMPApplication.debug ("Application started");

// ==========================================
// Initialization PART (generic variable)
// according to the context
// ==========================================

// if "true", logs will be showed on the browser console
var dbug = {
    "init": false,
    "user_info": false,
    "report": false
};

var login = {};
var P_first = 0;

var success_title_notify = ${P_quoted(i18n("success_title_notify", "Succès"))};
var error_title_notify = ${P_quoted(i18n("error_title_notify", "Erreur"))};
var error_thanks_notify = ${P_quoted(i18n("error_thanks_notify", "Merci de signaler cette erreur !"))};

// initialize main program
init();


// ===============================
//   Initialization part
// ===============================
function init() 
{
    RMPApplication.debug("begin init");
    c_debug(dbug.init, "** BEGIN init **");

    get_blocked_users();

    RMPApplication.debug("end init");
}

// ======================================
//   Get RMP Users with "BLOCKED" status 
// ======================================
function get_blocked_users()
{
    RMPApplication.debug("begin get_blocked_users");
    c_debug(dbug.report, "** BEGIN get_blocked_users **");
    // the input object is used by the composite API to retrieve, paginate, filter and sort data by calling a third party connector
    var input = {};
    input.pageSize = 20;            // Pagination: 20 results by page
    input.first = P_first;          // Internal parameter
    // sortedColumns looks like [{"order":"name", "orderby":"desc"},...]
    input.sortedColumns = id_blocked_users_report.getSortedColumns();
    // currentFilters looks like [{"filter":"name", "value":"hakim", "operator":"CONTAINS"},...]
    input.currentFilters = id_blocked_users_report.getFilters();

    // Shows spinner image when loading report
    id_blocked_users_report.setLoading(true);
    // Call CAPI to retrieve BLOCKED users
    c_debug(dbug.report, "=> get_blocked_users_ok: input = ", input);
    id_get_blocked_users_api.trigger(input, {}, get_blocked_users_ok, get_blocked_users_ko);
    RMPApplication.debug("end get_blocked_users");
}

// =================================================================
//   Success callback function after get_blocked_users CAPI call 
// =================================================================
function get_blocked_users_ok(result) {
    RMPApplication.debug("** BEGIN get_blocked_users_ok ** : result = " + result);
    c_debug(dbug.report, "=> get_blocked_users_ok: result = ", result);
    var reportData = result.users;
    c_debug(dbug.report, "=> get_blocked_users_ok: reportData = ", reportData);
    var reportOptions = {
        // count of the available data items (mandatory)
        // if the count of data items is not known you should use RMP_Report.DYNAMIC_COUNT here
        count: reportData.length,
        // pagination index (mandatory)
        first: P_first,
        // A text that may be displayed in the report pager if data items' count is not known (optional)
        pagerCount: "TOTAL"
    };
    c_debug(dbug.report, "=> get_blocked_users_ok: reportOptions = ", reportOptions);
    // result.data is a JSON array that should have the same structure configured in step (2)
    id_blocked_users_report.setData(reportData, reportOptions);
    // Hide spinner image when data are completely reported
    id_blocked_users_report.setLoading(false);
}

// =================================================================
//   Failure callback function after get_blocked_users CAPI call 
// =================================================================
function get_blocked_users_ko(error) {
    RMPApplication.debug("** BEGIN get_blocked_users_ko ** : error = " + JSON.stringify(error));
    c_debug(dbug.report, "=> get_blocked_users_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("get_blocked_users_ko_msg", "Impossible de récupérer les utilisateurs au statut BLOCKED !"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    // Hide spinner image when error is shown on screen
    id_blocked_users_report.setLoading(false);
    RMPApplication.debug("end get_blocked_users_ko");
}

// =================================================
//   Unlock selected user's account in the report
// =================================================
function unlock_user(user_email, user_id)
{
    RMPApplication.debug("begin unlock_user");
    var options = {};
    var pattern = {};
    pattern.user_email = user_email;
    pattern.user_id = user_id;
    c_debug(dbug.user_info, "** BEGIN unlock_user ** : pattern = ", pattern);
    id_unlock_user_account_api.trigger(pattern, options , unlock_user_ok, unlock_user_ko); 
    RMPApplication.debug("end unlock_user");
}

function unlock_user_ok(result)
{
    RMPApplication.debug("begin unlock_user_ok: result =  ", result);
    c_debug(dbug.user_info, "** BEGIN unlock_user_ok ** : result = ", result);
    var success_msg = ${P_quoted(i18n("unlock_user_ok_msg", "Compte utilisateur correctement débloqué !"))};
    notify_success(success_title_notify, success_msg);
    // Refresh the report as one of the listed account was just unlocked !
    id_blocked_users_report.refresh();
    RMPApplication.debug("end unlock_user_ok");
}

function unlock_user_ko(error)
{
    RMPApplication.debug("** BEGIN unlock_user_ko ** : error = " + JSON.stringify(error));
    c_debug(dbug.user_info, "=> unlock_user_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("unlock_user_ko_msg", "Impossible de débloquer le compte utilisateur concerné !"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug("end unlock_user_ko");
}
