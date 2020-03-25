// =======================================
//   Broadcast Message: id_main_script
// =======================================
RMPApplication.debug("Broadcast Message : Application started");

// ========================
// Variables declaration
// ========================

// if "true", logs will be showed on the browser console
var dbug = {
    "datas": false,
    "box": false
};

// if we want to prefix the kind of message with a company name
var company = "";

// Content of variables need to be translated before reused
var label_type_warning = ${P_quoted(i18n("label_type_warning", "AVERTISSEMENT"))};
var label_type_info = ${P_quoted(i18n("label_type_info", "Information"))};
var label_type_critical = ${P_quoted(i18n("label_type_critical", "Message CRITIQUE"))};

var lbl_type_list = [
    {
        "type": "warning",
        "title": label_type_warning,
        "label": "id_type_warning_lbl"
    }, {
        "type": "info",
        "title": label_type_info,
        "label": "id_type_info_lbl"
    }, {
        "type": "critical",
        "title": label_type_critical,
        "label": "id_type_critical_lbl"
    }
];

var lbl_recipient_list = [
    {
        "type": "everybody",
        "lane": "[405227]",
        "label": "lbl_recipients_everybody"
    }, {
        "type": "all_stores",
        "lane": "[405229,405110]",
        "label": "lbl_recipients_all_stores"
    }, {
        "type": "support_only",
        "lane": "[405161]",
        "label": "lbl_recipients_support_only"
    }, {
        "type": "test_grp_only",
        "lane": "[441463]",
        "label": "lbl_recipients_test_grp_only"
    }, {
        "type": "my_self_only",
        "lane": "my_self",
        "label": "lbl_recipients_my_self_only"
    }
];

var error_title_notify = ${P_quoted(i18n("error_title_notify", "Erreur"))};
var info_title_notify = ${P_quoted(i18n("info_title_notify", "Information"))};
var error_thanks_notify = ${P_quoted(i18n("error_thanks_notify", "Merci de signaler cette erreur !"))};
var btn_ok = ${P_quoted(i18n("btn_ok", "OK"))};

// collect_data();

// =================================================================
// Collect datas from Web Interface before executing the process
// =================================================================
function collect_data()
{
    RMPApplication.debug("begin collect_data");
    c_debug(dbug.datas, "=> collect_data");
    var msg_var = {};
    var msg_type = "";
    var msg_recipients = "";

    // What type of message
    for (i=0; i<lbl_type_list.length; i++) {
        // var test_active = $("#" + eval(lbl_type_list[i].label)).hasClass("active");
        var id_lbl = "#" + lbl_type_list[i].label;
        var test_btn_active = $(id_lbl).hasClass("active");
        c_debug(dbug.datas, "=> collect_data: i=" + i + " | test_active = " + test_btn_active);
        if (test_btn_active) {
            msg_var.type = lbl_type_list[i].type;
            msg_type += ( (company == "") ? "" : company.toUpperCase() + ": " );
            msg_type += lbl_type_list[i].type.toUpperCase() + "\n";
            c_debug(dbug.datas, "=> collect_data: msg_type = ", msg_type);
            break;
        }
    }


    // Will the message broadcast to which recipients
    for (i=0; i<lbl_recipient_list.length; i++) {
        var id_lbl = "#" + lbl_recipient_list[i].label;
        var test_dest_active =  $(id_lbl).hasClass("active");
        if (test_dest_active) {
            msg_var.recipients = lbl_recipient_list[i].lane;
            c_debug(dbug.datas, "=> collect_data: msg_var = ", msg_var);
        }
    }

    // msg_var.content = msg_type + RMPApplication.get("content");
    var suggestion = $("#id_content").val();
    msg_var.content = msg_type + suggestion;
    RMPApplication.set("msg_var", msg_var);
    c_debug(dbug.datas, "=> collect_data: msg_var = ", msg_var);
    
    RMPApplication.debug("end collect_data");
}
