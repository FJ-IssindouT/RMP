function createRequest()
{
	RMPApplication.debug("begin createRequest");
    // console.log("=> begin createRequest");

    // var selected_location = RMPApplication.get("selected_location");
    // var selected_affiliate = MPApplication.get("selected_affiliate");
    var caller, logical_name, location, separator;
    var num_pos = "01";		// Cashdesk n° => we sinplify RMSDEMO case
	
	switch (selected_location.affiliate) {

        case 'societeXX':      // EXAMPLE
            caller = "hotline@societexx.com";
            location = $.trim(selected_location.location_name);
            // logical_name format => MAG00BxxxCAI01
            logical_name = "MAG00" + selected_location.location_code + RMPApplication.get("variables.short_cat") + num_pos;
            break;

		default:
            separator = "-";
            location = $.trim(selected_location.location) + separator + $.trim(selected_location.location_code);
			// caller = login.user;
            caller = "Resp " + location;
            logical_name = "MAG" + selected_location.location_code + RMPApplication.get("variables.short_cat") + num_pos;
	}

	var requestType = "intervention";
	var work_order_type = requestType;
	var contract = selected_affiliate.company + "\\" + selected_affiliate.abbreviation;    // SNOW contract name
    var customer_site = location; 
    var contact_type = "RunMyStore";
    var qualification_group = "";
    var customer_reference = ""; 
    var contact = login.user;
    var description = RMPApplication.get("description");;
    var short_description = description.substring(0,99);
    var state = "1";    // draft
    var expected_start = "";
    var priority = "2";
    var contact_detail = (isEmpty(selected_location.email)) ? "" : selected_location.email;
    contact_detail += (isEmpty(selected_location.phone)) ? "" :  "\n" +selected_location.phone;

	// define insertion query before sending to Service Now
	var options = {};
    var work_order = {};
	work_order.sn_caller = caller
	work_order.sn_contract = contract;
	work_order.sn_contact_type = contact_type;
	work_order.sn_correlation_id = customer_reference;
	work_order.sn_description = description;
	work_order.sn_location = location;
	work_order.sn_state = state;
	work_order.sn_qualification_group = qualification_group;
	work_order.sn_short_description = short_description;
	work_order.sn_priority = priority;
	work_order.sn_category = RMPApplication.get("variables.category") + " " + selected_affiliate.affiliate;;
	work_order.sn_u_contact_details = contact_detail;
	work_order.sn_u_customer_site = customer_site;
	work_order.sn_u_work_order_type = work_order_type;
	work_order.sn_u_problem_type = RMPApplication.get("variables.problem_type");
	work_order.sn_u_product_type = RMPApplication.get("variables.product_type");
	work_order.sn_expected_start = expected_start;
	work_order.sn_cmdb_ci = logical_name;
	work_order.location_code = selected_location.location_code;
	var my_array = eval(RMPApplication.get("attachment"));
	if (my_array.length !=0) {
		var medias = [];
		for (var i = 0; i < my_array.length; i++) {
			medias.push(my_array[i].id);
		}
		work_order.media = medias;
	}
	
	console.log("=> createRequest: work_order = ", work_order);
	id_insert_work_order_api.trigger (work_order, options, insert_ok, insert_ko);
	
	RMPApplication.debug("end createRequest");
}

function insert_ok(result) 
{
	RMPApplication.debug("begin insert_ok : " + JSON.stringify(result));
	// console.log("=> insert_ok: result = ", result);

	wm_order = result;
	var title = ${P_quoted(i18n("insert_ok_title", "Information Suivi Demande"))};
    var content1 = ${P_quoted(i18n("insert_ok_msg1", "Demande créée sous la référence"))};
    var content2 = ${P_quoted(i18n("insert_ok_msg2", "Vous allez être contacté dans les plus brefs délais!"))};
    RMPApplication.showErrorBox(title, content1 + ": \n" + wm_order.insertResponse.number + "\n" + content2);

    var options = {};
	var input = {};
	var my_array = eval(RMPApplication.get("attachment"));
	if (my_array.length !=0) {
		var entries = [];
		for (var i = 0; i < my_array.length; i++) {
			var entry_json = {};
			entry_json.url = my_array[i].url;
			entry_json.name= my_array[i].name;
			entry_json.wo_number = wm_order.insertResponse.number
			entries.push(entry_json);
		}
		input.media = entries;
	} else {
		input.media = [];
	}

	id_save_media_in_collection_api.trigger (input, options, save_media_ok, save_media_ko);
	// update the process => next step
	$("#id_ouvrir_ticket").click();
	RMPApplication.debug("end insert_ok");
}

function insert_ko(error) 
{
    RMPApplication.debug("begin insert_ko : error = " + JSON.stringify(error));
    // console.log("=> insert_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("insert_ko_msg", "Erreur lors de la création du ticket!"))};
    alertify.error(error_msg);
	RMPApplication.debug("end insert_ko");	
}

function save_media_ok(result)
{
	RMPApplication.debug("begin save_media_ok: result =  " + JSON.stringify(result));
	// console.log("=> save_media_ok: ", result);
	RMPApplication.debug("end save_media_ok");
}

function save_media_ko(error) 
{
    RMPApplication.debug("begin save_media_ko: error = " + JSON.stringify(error));
    // console.log("=> save_media_ko: error = ", error);

    var error_msg = ${P_quoted(i18n("save_media_ko_msg", "Erreur lors de la sauvegarde des documents attachés!"))};
    alertify.error(error_msg);
    RMPApplication.debug("end save_media_ko");
}