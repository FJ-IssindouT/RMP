// ========================
//   SD - Ecran : MAIN
// ========================
RMPApplication.debug("SD - Ecran : Application started");


// ========================
// Variables declaration
// ========================

// if "true", logs will be showed on the browser console
var debug = {
	"init" : false,
	"insert" : false,
	"picture" : false
};

// other global variables
var error_title_notify = ${P_quoted(i18n("error_title_notify", "Erreur"))};
var close_title_notify = ${P_quoted(i18n("close_title_notify", "Information"))};
var error_thanks_notify = ${P_quoted(i18n("error_thanks_notify", "Merci de signaler cette erreur !"))};
var close_msg_notify = ${P_quoted(i18n("close_msg_notify", "Merci d'avoir utilisé RunMyStore !"))};
var btn_ok = ${P_quoted(i18n("btn_ok", "OK"))};


// =============================================================
// Create Work Order insertion request to Service Now
// =============================================================
function createRequest()
{
	RMPApplication.debug("begin createRequest");
	$("#id_spinner_insert").show();
	RMPApplication.set("sn_caller", "Resp "+ RMPApplication.get("location_name"));
	var contract = "KD\\KELLYDELI" 
	var customer_site = RMPApplication.get("location_name");
	var requestType = "intervention";
	var work_order_type = requestType;
    var contact_type = "RunMyStore";
    var qualification_group = "";
    var customer_reference = ""; 
    var contact = "";
    var description = RMPApplication.get("description");;
    var short_description = description.substring(0,99);
    var state = "1";    // draft
    var expected_start = "";
    var priority = "3";		// 3 - Moderate
	var contact_detail = "";
	var photo_consult = ${P_quoted(i18n("photo_consult_txt", "Connectez-vous à RMS pour consulter les photos jointes lors de l'ouverture de l'incident"))};

	// define insertion query before sending to Service Now
    var work_order = {};
	work_order.sn_caller = RMPApplication.get("sn_caller");
	work_order.sn_contract = contract;
	work_order.sn_contact_type = contact_type;
	work_order.sn_correlation_id = customer_reference;
	work_order.sn_location = RMPApplication.get("location_name");
	work_order.sn_u_customer_site = customer_site;
	work_order.sn_state = state;
	work_order.sn_qualification_group = qualification_group;
	work_order.sn_short_description = short_description;
	work_order.sn_priority = priority;	
	work_order.sn_u_contact_details = contact_detail;
	work_order.sn_u_work_order_type = work_order_type;
	work_order.sn_category = RMPApplication.get("category");
	work_order.sn_u_problem_type = RMPApplication.get("problem_type");
	work_order.sn_u_product_type = RMPApplication.get("product_type");
	work_order.sn_expected_start = expected_start;
	work_order.sn_cmdb_ci = RMPApplication.get("ci") + "_" + RMPApplication.get("kiosk_reference");
	work_order.location_code = RMPApplication.get("location_code");

	var my_array = eval(RMPApplication.get("take_a_photo"));
	if (my_array.length !=0) {
		var pictures = [];
		for (var i = 0; i < my_array.length; i++) {
			pictures.push(my_array[i].id);
		}
		work_order.picture = pictures;
		description += "\n => " + photo_consult;
	}
	work_order.sn_description = description;
	c_debug(debug.insert, "=> createRequest: work_order = ", work_order);
	c_debug(debug.insert, "=> createRequest: sn_caller = ", RMPApplication.get("sn_caller"));	
	var options = {};
	id_insert_work_order_api.trigger (work_order, options, insert_ok, insert_ko);

	RMPApplication.debug("end createRequest");	
}

function insert_ok(result) 
{
	RMPApplication.debug("begin insert_ok : " + JSON.stringify(result));
	c_debug(debug.insert, "=> insert_ok: result = ", JSON.stringify(result));

	wm_order = result;
	var input = {};
	var my_array = eval(RMPApplication.get("take_a_photo"));
	if (my_array.length !=0) {
		var entries = [];
		for (var i = 0; i < my_array.length; i++) {
			var entry_json = {};
			entry_json.url = my_array[i].url;
			entry_json.name= my_array[i].name;
			entry_json.wo_number = wm_order.insertResponse.number
			entries.push(entry_json);
		}
			input.picture = entries;
		}
	
	else {
		input.picture = [];
	}

	var options = {};
	c_debug(debug.insert, "=> insert_ok: input = ", input);
	id_save_picture_in_collection.trigger (input, options, save_picture_ok, save_picture_ko);

	var title = ${P_quoted(i18n("id_title_1", "Information Suivi Demande"))};
    var content1 = ${P_quoted(i18n("id_msg_1", "Demande créée sous la référence"))};
    var content2 = ${P_quoted(i18n("id_msg_2", "Vous allez être contacté dans les plus brefs délais."))};
	notify_then_close_process(title, content1 + ": <br><strong>" + wm_order.insertResponse.number + "</strong><br>" + content2, btn_ok);
	
	RMPApplication.debug("end insert_ok");
}

function insert_ko(error) 
{
    RMPApplication.debug("begin insert_ko : error = " + JSON.stringify(error));
	c_debug(debug.insert, "=> insert_ko: error = ", error);
	var title = ${P_quoted(i18n("id_title_insert_ko_1", "Information Suivi Demande"))};
    var content1 = ${P_quoted(i18n("id_msg_insert_ko_1", "Le processus de création du ticket a été anormalement long OU n'a pas abouti !"))};
	var content2 = ${P_quoted(i18n("id_msg_insert_ko_2", "-> Veuillez vérifier dans 'Suivi des demandes' si le ticket a cependant bien été créé."))};
	var content3 = ${P_quoted(i18n("id_msg_insert_ko_3", "Dans le cas contraire, renouvelez une création de ticket."))};
	alert_then_close_process(title, content1 + "<br><strong>" + wm_order.insertResponse + "</strong><br>" + content2 + "<br>" + content3, btn_ok);
	// alert_then_close_process(title, content1 + "<br><strong>" + wm_order.insertResponse.number + "</strong><br>" + content2 + "<br>" + content3, btn_ok);
	// $("#id_spinner_insert").hide();
    // var error_msg = ${P_quoted(i18n("insert_ko_msg", "Création impossible du ticket !"))};
    // notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug("end insert_ko");			
}

function save_picture_ok (result)
{
	RMPApplication.debug("begin save_picture_ok : result = " + JSON.stringify(result));
	c_debug(debug.picture, "=> save_picture_ok: result = ", result);
    RMPApplication.debug("end save_picture_ok");
}

function save_picture_ko (error) 
{
    RMPApplication.debug("begin save_picture_ko : error = " + JSON.stringify(error));
	c_debug(debug.picture, "=> save_picture_ko: error = ", error);
	var title = ${P_quoted(i18n("id_title_save_picture_ko_1", "Information Suivi Demande"))};
    var content1 = ${P_quoted(i18n("id_msg_save_picture_ko_1", "Le document n'a pu être sauvegardé !"))};
	var content2 = ${P_quoted(i18n("id_msg_save_picture_ko_2", "-> Veuillez vérifier dans 'Suivi des demandes' si le ticket a cependant bien été créé."))};
	var content3 = ${P_quoted(i18n("id_msg_save_picture_ko_3", "Dans le cas contraire, renouvelez une création de ticket."))};
	alert_then_close_process(title, content1 + "<br><strong>" + wm_order.insertResponse + "</strong><br>" + content2 + "<br>" + content3, btn_ok);
	// $("#id_spinner_insert").hide();
    // var error_msg = ${P_quoted(i18n("save_picture_ko_msg", "Sauvegarde impossible du document !"))};
    // notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug("end save_picture_ko");
}

// =====================================================================================
//   Show a notification then redirect to an another page when dialog box is validated
// =====================================================================================
function notify_then_close_process(title, content, labelBtn)
{
    $("#id_spinner_insert").hide();
    ssi_modal.dialog({
        title: title,
        content: content, 
        okBtn:
            {
                className:'btn btn-success btn-responsive',
                label: labelBtn
            }
    },
    function() {
    	// update the process => next step
		document.getElementById("id_close_process").click();
    });
}

// =====================================================================================
//   Show an alert then redirect to an another page when dialog box is validated
// =====================================================================================
function alert_then_close_process(title, content, labelBtn)
{
    $("#id_spinner_insert").hide();
    ssi_modal.dialog({
        title: title,
        content: content, 
        okBtn:
            {
                className:'btn btn-danger btn-responsive',
                label: labelBtn
            }
    },
    function() {
    	// update the process => next step
		document.getElementById("id_close_process").click();
    });
}