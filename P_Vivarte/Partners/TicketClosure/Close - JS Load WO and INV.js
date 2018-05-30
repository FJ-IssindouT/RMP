// id_load_wo_and_inv
// listen: country

var sn_query = "^company.parentLIKEVIVARTE";
sn_query += "^stateIN10,11,13,15,16,18";        // State => Diagnosed, Awaiting Approval, Approved, Awaiting Diagnostis, Assigned, Work In Progress
var input = {"wm_order_query": sn_query};
var options = {};
id_get_wo_list.trigger(input, options, wo_ok, wo_ko);

function wo_ok(result)
{
    if (typeof(result.wm_order_list.getRecordsResult) == 'undefined') {
        c_debug(debug.work_order, "=> wo_ok: No Work Order found!");
        var info_msg = ${P_quoted(i18n("wo_ok_no_wo_msg", "No Work Order found!"))};
        notify_info(info_title_notify, info_msg);
        
    } else {
        
        var work_order = "";
        if (typeof(result.wm_order_list.getRecordsResult[0]) == 'undefined') {       // Only 1 Work Order
            work_order = result.wm_order_list.getRecordsResult.number;

        } else {                    // At least 2 Work Orders
            for (i=0; i<result.wm_order_list.getRecordsResult.length; i++) {
                work_order = work_order + "," + result.wm_order_list.getRecordsResult[i].number;
            }
        }
        var sn_query = "parent.numberIN" + work_order;
        sn_query += "^stateIN16,17,18";
        var input = {"wm_task_query": sn_query};
        var options = {};
        c_debug(debug.work_order, "=> wo_ok: result.wm_order_list = ", result.wm_order_list);
        id_get_work_order_tasks_list.trigger(input, options, inv_ok, inv_ko);
    }
}

function wo_ko(error)
{
    RMPApplication.debug("=> begin wo_ko: error = " + JSON.stringify(error));
	c_debug(debug.work_order, "=> wo_ko: error = ", error);
	id_spinner.setVisible(false);
	var error_msg = ${P_quoted(i18n("wo_ko_msg", "Error while retrieving list of work orders!"))};
	notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
	RMPApplication.debug("end wo_ko");
}


function inv_ok(result)
{
    if (typeof(result.wm_task_list.getRecordsResult) == 'undefined') {
        c_debug(debug.intervention, "=> inv_ok: No intervention found!");
        id_spinner.setVisible(false);
		var info_msg = ${P_quoted(i18n("inv_ok_no_inv_msg", "No intervention found!"))};
		notify_info(info_title_notify, info_msg);
    
    } else {

        var vb_wo = new Array();
        if (typeof(result.wm_task_list.getRecordsResult[0]) == 'undefined') {    // Only 1 intervention
        
            if (result.wm_task_list.getRecordsResult.dispatch_group == RMPApplication.get("dispatch_group") || result.wm_task_list.getRecordsResult.assignment_group == RMPApplication.get("dispatch_group")) {
                c_debug(debug.intervention, "=> inv_ok: result.wm_task_list = ", result.wm_task_list);
                vb_wo.push({"label": result.wm_task_list.getRecordsResult.number + " [" + result.wm_task_list.getRecordsResult.u_work_order + "] " + " - " + result.wm_task_list.getRecordsResult.location,"value": result.wm_task_list.getRecordsResult.sys_id});
            }

        } else {             // At least 2 interventions
            c_debug(debug.intervention, "=> inv_ok: result.wm_task_list = ", result.wm_task_list);
            for (i=0; i<result.wm_task_list.getRecordsResult.length; i++) {
                if (result.wm_task_list.getRecordsResult[i].dispatch_group == RMPApplication.get("dispatch_group") || result.wm_task_list.getRecordsResult[i].assignment_group == RMPApplication.get("dispatch_group")) {
                    vb_wo.push({"label": result.wm_task_list.getRecordsResult[i].number + " [" + result.wm_task_list.getRecordsResult[i].u_work_order + "] " + " - " + result.wm_task_list.getRecordsResult[i].location, "value": result.wm_task_list.getRecordsResult[i].sys_id});
                }
            }
        }
        id_spinner.setVisible(false);
        var a = new RMP_List();
        a.fromArray(vb_wo);
        RMPApplication.setList("vb_wo",a);
    }
}

function inv_ko(error) {
    RMPApplication.debug("=> begin inv_ko: error = " + JSON.stringify(error));
	c_debug(debug.intervention, "=> inv_ko: error = ", error);
	id_spinner.setVisible(false);
	var error_msg = ${P_quoted(i18n("inv_ko_msg", "Error while retrieving list of interventions!"))};
	notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
	RMPApplication.debug("end inv_ko");
}