// =============================
//   New Intervention : MAIN
// =============================
RMPApplication.debug("New Intervention : Application started");

// ========================
// Variables declaration
// ========================

// if "true", logs will be showed on the browser console
var dbug = {
    "init" : false,
    "function" : false,
    "visibility" : false
};

var selected_item = "rmpoption0_1"; // Retrieve the id of the tab to assign it a color / background color inside ready.js

var int_finished = "id_intervention_finished_0";
var int_not_finished = "id_intervention_finished_1";
var label_reason = "id_reason_label";
var reason = "id_reason";
var visit_counter;

var login = {};
var module_selected;
var collectionid = "col_legrand_locations";


// Timestamp of the actual date
my_date = new Date();  
currentTime = Math.round(my_date.getTime()- 43200000);  
var demiday = currentTime/1000; // => The current Date/Time/Hour minus 12hours

// execute main program
init();


// ===============================
//   Initialization part
// ===============================
function init() 
{
    RMPApplication.debug("begin init");
    login = RMPApplication.get("login");
    c_debug(dbug.init, "=> begin init : login = ", login);

    // modules_visibility("global");
    fill_all_cw_pc();
    fill_all_cw_visit();
    set_required_current_pc();

    // initialize visit_counter if needed
    if (isEmpty(RMPApplication.get ("visit_counter"))) {
        RMPApplication.set("visit_counter", 0);
    }

	RMPApplication.debug("end init");
}

//=================================================
// Dynamically change the title of PC's information
//=================================================
function fill_all_cw_pc() 
{
    RMPApplication.debug("begin fill_all_cw_pc");
    c_debug(dbug.visibility, "=> begin fill_all_cw_pc");

    // Set the titles
    var var_newTitle = {
        "id_my_current_pc_initial" : "Current user's PC",
        "id_my_new_pc_swap" : "New PC in case of swap requested",
        "id_my_current_pc_confirm" : "Confirmation of the user's PC",
        "id_my_new_pc_confirm" : "Confirmation of the user's New PC"
    };
    // Do a loop for all the Title
    for (key in var_newTitle) {
        fill_cw_pc_title(key, var_newTitle[key]);
    } 

}

//============================================================
// Retrieve the id of the CW PC element and remplace the title
//============================================================
function fill_cw_pc_title(id_cw, title) 
{
    RMPApplication.debug("begin fill_cw_pc_title: id_cw = ", id_cw);
    c_debug(dbug.visibility, "=> begin fill_all_cw_pc: id_cw = ", id_cw);
    var pc_title_content = $("#" + id_cw + " #pc_content");
    pc_title_content.text(title);
}

//==================================================
// Dynamically change the degree of the intervention
//==================================================
function fill_all_cw_visit() 
{
    RMPApplication.debug("begin fill_all_cw_visit");
    c_debug(dbug.visibility, "=> begin fill_all_cw_visit");

    // Set the titles
    var var_newTitle_visit = {
        "id_my_intervention_1" : "Visit #1",
        "id_my_intervention_2" : "Visit #2",
        "id_my_intervention_3" : "Visit #3"
    };
    // Do a loop for all the Title
    for (key in var_newTitle_visit) {
        fill_cw_title_visit(key, var_newTitle_visit[key]);
    }

}

//========================================================
// Retrieve the id of the element and remplace the title
//========================================================
function fill_cw_title_visit(id_cw, number) 
{
    RMPApplication.debug("begin fill_cw_pc_title: id_cw = ", id_cw);
    c_debug(dbug.visibility, "=> begin fill_cw_pc_title: id_cw = ", id_cw);
    var intervention_title_content = $("#" + id_cw + " #visit_content");
    intervention_title_content.text(number);
}

// ======================================================
// Test the variable value in specified widget 
// and show or not an another widget according this value
// ======================================================
function display_reason(id_sel_field, cond_val, id_show_field)
{
    var selected_val = eval(id_sel_field).getSelectedValue();
    var display_reason = (selected_val == cond_val) ? false : true;
    eval(id_show_field).setVisible(display_reason);
    id_my_pc_check.setVisible(!display_reason);
} 

// ====================================================================================================
// Test the variable value in specified widget 
// and show or not an another widget according this value
// Ex:
        /*  obj = {
                "id": "id_of_cw (complete path)",
                "widgets_var_list" : ["sub_cw_var1", "sub_cw_var2", "sub_cw_var3, "sub_cw_var4", ...]
            }
        */
// ====================================================================================================
function set_required_option_cw(obj, bool)
{
    c_debug(dbug.function, "=> begin set_required_option_cw: obj = ", obj);
    c_debug(dbug.function, '=> set_required_option_cw: bool = ', bool);
    var obj_id = obj.id;
    c_debug(dbug.function, '=> set_required_option_cw: obj_id = ', obj_id);
    for (i=0; i <= obj.widgets_var_list.length-1; i++) {
        var id_local_widget = "id_" + obj.widgets_var_list[i];
        var id_complete_path = obj_id + "." + id_local_widget;
        eval(id_complete_path).setRequired(bool);
        c_debug(dbug.function, '=> set_required_option_cw: Required option of "' + id_complete_path + '" has been changed!');
    }
} 

function set_required_current_pc()
{
    c_debug(dbug.function, "=> begin set_required_current_pc");
    var obj_cw = {
        "id": "id_my_current_pc_initial",
        "widgets_var_list" : ["windows_version", "pc_name", "pc_model", "serial_number"]
    };
    set_required_option_cw(obj_cw, true);
}


function set_required_swap_pc()
{
    c_debug(dbug.function, "=> begin set_required_swap_pc");
    var instal_type_val = RMPApplication.get("installation_type");
    var swap_pc_requested = (instal_type_val == "computer_swap") ? true : false;
    var obj_cw = {
        "id": "id_my_new_pc_swap",
        "widgets_var_list" : ["windows_version", "pc_name", "pc_model", "serial_number"]
    };
    set_required_option_cw(obj_cw, swap_pc_requested);
}

function set_required_visits()
{
    c_debug(dbug.function, "=> begin set_required_visits");
    // id_intervention_grid.setVisible(true);				// debug
    for (i=1; i<(visit_counter+1); i++) {
	    var id_cw_current_visit = "id_my_intervention_" + i.toString();
	    var obj_cw = {
	        "id": id_cw_current_visit,
	        "widgets_var_list" : ["arrival_time", "end_time", "intervention_finished"]
	    };
	    set_required_option_cw(obj_cw, true);
	    // eval(id_cw_current_visit).setVisible(true);		// debug
	}
}

// Warning message if fields are empties
function alert_field_empty() {
    var title = "Warning";
    var content = "Required field(s) not completed !";
    dialog_warning(title, content); 
}

// Warning message if 
function alert_date_selected() {
    var title = "Warning";
    var content = "Please check your date picked.";
    dialog_warning(title, content); 
}

// Stop the process 
function cancel_KO(){
}

// prepare data from GDC to Country Desk
function prepare_data_for_country_desk()
{
    c_debug(dbug.function, "=> begin prepare_data_for_country_desk");
    visit_counter = 0;      // initialize # of visit
    RMPApplication.set("visit_counter", visit_counter);

    // Check the required values
    for (i=0; i <=13 ;i++) {
        var required_label = document.getElementsByClassName("LabelVariable required")[i].id;
        var clean_id = required_label.substr(0, required_label.length-6);
        var clean_id_value = eval(clean_id).getValue();
        var type_info = id_type.getSelectedValue();
        var priority_info = id_priority.getSelectedValue();
        var intervention_info = id_installation_type.getSelectedValue();
        var windows_info = id_my_current_pc_initial.id_windows_version.getSelectedValue();

        c_debug(dbug.function, "=> load_data_for_engineer_screen: required fields = ", clean_id_value);
    }   
        // continue the process and transfer to the engineer
        
        if ((clean_id_value == null) || (clean_id_value == "") || (type_info == null) || (priority_info == "__##prompt##__") || (intervention_info == null) || (windows_info == null)) {
            alert_field_empty();
        }
        else {
            document.getElementById("id_process_to_cd_btn").click();
        };
}

// fill or not the last visit's reason of cancellation
function load_data_for_country_desk_screen()
{
    c_debug(dbug.function, "=> begin load_data_for_country_desk_screen");

    visit_counter = parseInt(RMPApplication.get("visit_counter"));
	// set the current PC field inactive for the country desk 
		id_my_current_pc_initial.id_windows_version.setActive(false);
    	id_my_current_pc_initial.id_pc_name.setActive(false);
    	id_my_current_pc_initial.id_pc_model.setActive(false);
    	id_my_current_pc_initial.id_serial_number.setActive(false);
        id_my_current_pc_initial.id_software_installed.setActive(false);
        id_my_new_pc_swap.id_windows_version.setActive(false);
    	id_my_new_pc_swap.id_pc_name.setActive(false);
    	id_my_new_pc_swap.id_pc_model.setActive(false);
    	id_my_new_pc_swap.id_serial_number.setActive(false);
        id_my_new_pc_swap.id_software_installed.setActive(false);
    // set the widget my_new_pc_confirm not visible for the country desk 
        id_my_new_pc_confirm.setVisible(false);
 

    // set Required some fileds of #CW-Visit
    // set_required_visits();
    
    // following #visit
    if (visit_counter > 0) {
    	c_debug(dbug.function, "=> load_data_for_country_desk_screen: visit_counter = ", visit_counter);
        // Reset ETA if new intervention should be planned
        RMPApplication.set('my_issue_intervention.info_eta', null);

        // let the Country Desk define a new "readable" comment intended to the customer
        id_my_issue_intervention.id_last_cancellation_reason.setVisible(true);
        id_my_issue_intervention.id_last_cancellation_reason.setActive(false);
        id_my_issue_intervention.id_cancellation_attention.setVisible(true);
        id_my_issue_intervention.id_new_cancellation_reason.setVisible(true);

		
		// set "delivery_done" variable before to continue process
		var id_intervention_num_previous = "id_my_intervention_" + RMPApplication.get("visit_counter") + ".id_reason";
		var last_cancellation_str = eval(id_intervention_num_previous).getValue();
		RMPApplication.set("my_issue_intervention.last_cancellation_reason", last_cancellation_str);
        RMPApplication.set("my_issue_intervention.new_cancellation_reason", last_cancellation_str);
        c_debug(dbug.function, "=> load_data_for_country_desk_screen: last_cancellation_str = ", last_cancellation_str);
    }

}

// test if 2 strings are equal
function string_compare(st1, st2)
{
    var string_eq = (st1 === st2) ? true : false;
    return string_eq;
}

// prepare data from Country Desk to Engineer
function prepare_data_for_engineer()
{

    c_debug(dbug.function, "=> begin prepare_data_for_engineer: visit_counter = ", visit_counter);

    function confirm_OK()
    {
        // continue the process and transfer to the engineer
        document.getElementById("id_process_to_engineer_btn").click();
    }

    function modal_cancellation_reason() 
    {
        var question = "You keep the same reason of cancellation. Do you confirm and continue?"
        modal_confirm(question, "YES", confirm_OK, "NO", cancel_KO);
    }

    // get the date picked and transform it into an integer
    var date_eta = RMPApplication.get("my_issue_intervention.info_eta");
    var date_eta_parse = parseInt(date_eta);
    var last_cancellation_str = RMPApplication.get("my_issue_intervention.last_cancellation_reason");
    var new_cancellation_str = RMPApplication.get("my_issue_intervention.new_cancellation_reason");
    var cancellation_eq = string_compare(last_cancellation_str, new_cancellation_str);
                
    // Check the required values
    for (i=0; i <=9 ;i++) {
        var required_label = document.getElementsByClassName("LabelVariable required")[i].id;
        var clean_id = required_label.substr(0, required_label.length-6);
        var clean_id_value = eval(clean_id).getValue();
        c_debug(dbug.function, "=> check the required value = ", clean_id_value);
    }   

    if ((clean_id_value == null) || (clean_id_value == "")){
        alert_field_empty();
    } else if (date_eta_parse < demiday) {
        alert_date_selected();
    } else if ((visit_counter > 0 ) && (cancellation_eq)) {
        modal_cancellation_reason();          
    } else {
        confirm_OK(); 
    }            
}



// prepare engineer data screen
function load_data_for_engineer_screen()
{
    c_debug(dbug.function, "=> begin load_data_for_engineer_screen");
    visit_counter = parseInt(RMPApplication.get("visit_counter"));
    c_debug(dbug.function, "=> load_data_for_engineer_screen: visit_counter = ", visit_counter);


    var date_modified;

    // Modify the name of the PDF 
    function date_transform(){
      var arrival_date_test = RMPApplication.get("my_intervention_" + visit_counter + ".arrival_time_str").substr(0,10);
      date_modified = arrival_date_test.replace(/\//g, '-');
    }
    
    RMPApplication.set("date_last_transform", date_modified);

    // let the Country Desk define a new "readable" comment intended to the customer
    id_my_issue_intervention.id_last_cancellation_reason.setVisible(false);
    id_my_issue_intervention.id_cancellation_attention.setVisible(false);
    id_my_issue_intervention.id_new_cancellation_reason.setVisible(false);

	// set the current pc field inactive
    id_my_current_pc_initial.id_windows_version.setActive(false);
    id_my_current_pc_initial.id_pc_name.setActive(false);
    id_my_current_pc_initial.id_pc_model.setActive(false);
    id_my_current_pc_initial.id_serial_number.setActive(false);
    id_my_current_pc_initial.id_software_installed.setActive(false);
    id_my_new_pc_swap.id_windows_version.setActive(false);
    id_my_new_pc_swap.id_pc_name.setActive(false);
    id_my_new_pc_swap.id_pc_model.setActive(false);
    id_my_new_pc_swap.id_serial_number.setActive(false);
    id_my_new_pc_swap.id_software_installed.setActive(false);

    // set Required some fileds of #CW-Visit
    set_required_visits();
}

function prepare_data_for_closure()
{

    function confirm_OK()
    {
        // continue the process and transfer to the engineer
        prepare_data();
        document.getElementById("id_process_visit_btn").click();
    }

    // Modal message if the Initial current PC informations == Confirm current PC information
    function modal_pc_same_info() {
        var question = "You decide to keep the same user's info PC. Do you confirm ?"
        modal_confirm(question, "OK", confirm_OK, "No", cancel_KO);
    }


    c_debug(dbug.function, "=> begin prepare_data_for_closure");
    visit_counter = parseInt(RMPApplication.get("visit_counter"));

    // get the arrival time picked and transform it into an integer
    var access_date_arrival = "id_my_intervention_" + RMPApplication.get("visit_counter")  + ".id_arrival_time";
    var date_eta_arrival = eval(access_date_arrival).getValue();
    var date_eta_parse_arrival = parseInt(date_eta_arrival);

    // get the end time picked and transform it into an integer
    var access_date_end = "id_my_intervention_" + RMPApplication.get("visit_counter")  + ".id_end_time";
    var date_eta_end = eval(access_date_end).getValue();
    var date_eta_parse_end = parseInt(date_eta_end);

    // set "delivery_done" variable before to continue process
    var id_intervention_num_finished = "id_my_intervention_" + RMPApplication.get("visit_counter") + ".id_intervention_finished";
    var current_intervention_finished = eval(id_intervention_num_finished).getSelectedValue();
    c_debug(dbug.function, "=> prepare_data_for_closure: current_intervention_finished = ", current_intervention_finished);
    RMPApplication.set("delivery_done", current_intervention_finished);
    c_debug(dbug.function, "=> prepare_data_for_closure: delivery_done = ", current_intervention_finished);

    // Modal appears if current pc = current pc confirm 
    var obj_initial = {};
    var obj_final = {};

    var cw_widget_initial = "my_current_pc_initial";
    var cw_widget_final = "my_current_pc_confirm";
    var cw_equals = true;

    var keys = {
        "windows_version" : "windows_version",
        "pc_name" : "pc_name",
        "pc_model" : "pc_model",
        "serial_number" : "serial_number",
        "software_installed" : "software_installed"
    };

    // intervention is not finished value 
    // var intervention_value = id_my_intervention_1.id_intervention_finished.getSelectedValue();
    // var intervention_reason = id_my_intervention_1.id_reason.getValue();

    var intervention_num_value = "id_my_intervention_" + RMPApplication.get("visit_counter") + ".id_intervention_finished";
    var intervention_value = eval(intervention_num_value).getSelectedValue();
    var intervention_num_reason = "id_my_intervention_" + RMPApplication.get("visit_counter") + ".id_reason";
    var intervention_reason = eval(intervention_num_reason).getValue();


    for (key in keys) {
        c_debug(dbug.function, "=========================");
        c_debug(dbug.function, "=> prepare_data_for_closure: KEY = ", key);
        
        var prop_initial = cw_widget_initial + "." + key;
        obj_initial[key] = (isEmpty(RMPApplication.get(prop_initial))) ? "" : RMPApplication.get(prop_initial);
        c_debug(dbug.function, "=> prepare_data_for_closure: obj_initial = ", obj_initial);

        var prop_final = cw_widget_final + "." + key;
        obj_final[key] = (isEmpty(RMPApplication.get(prop_final))) ? "" : RMPApplication.get(prop_final);
        c_debug(dbug.function, "=> prepare_data_for_closure: obj_final = ", obj_final);

        if (obj_initial[key] != obj_final[key]) {
            cw_equals = false;
            break;
        }
    }
    c_debug(dbug.function, "=> **** prepare_data_for_closure: obj_initial = ", obj_initial);
    c_debug(dbug.function, "=> prepare_data_for_closure: obj_final = ", obj_final);
    c_debug(dbug.function, "=> prepare_data_for_closure: cw_equals = ", cw_equals);


    // Check the required values
    for (i=10; i <=13 ;i++) {
        var required_label = document.getElementsByClassName("LabelVariable required")[i].id;
        console.log(required_label)
        var clean_id = required_label.substr(0, required_label.length-6);
        console.log(clean_id)
        var clean_id_value = eval(clean_id).getValue();
        c_debug(dbug.function, "=> check the required value = ", clean_id_value);
    }   

   // Make the alert appears if a required value is missing or if the date's rules are not respected or if the PC info are equals
    if ( (clean_id_value == null) || (clean_id_value == "") || (intervention_value == null) || (( intervention_value == "no") && (intervention_reason == null || intervention_reason == "")) ) {
        alert_field_empty();
        // c_debug(dbug.function, "=> check the required value = ", intervention_value, intervention_reason);
    } else if ( (date_eta_parse_arrival <= demiday) || (date_eta_parse_end <= demiday) || (date_eta_parse_end <= date_eta_parse_arrival) ){
        alert_date_selected();
    } else if (cw_equals == true) {           
        modal_pc_same_info();                    
    } else {
        confirm_OK();
    }
    
};


function load_data_closure(){
    // set the current PC field inactive for the country desk
    id_my_pc_check.setVisible(true); 
}

// When the GDC close an intervention 
function close_request()
{
    c_debug(dbug.function, "=> begin close_request");
    document.getElementById("id_process_to_closed").click();
}


function testswitch(){
    if ($("#id_visit_done_btn").is(":visible")) {
        // Engineer => GDC for closure
        console.log("Engineer => GDC for closure");
        $("#id_title1").css("color","#33CA33");
        $("#id_label1").css("color","white");
        $("#id_circle1").css({"border-color":"#33CA33","background-color":"#33CA33"});
        $("#id_bar1").css("background-color","#33CA33");
        $("#id_title2").css("color","#33CA33");
        $("#id_label2").css("color","white");
        $("#id_circle2").css({"border-color":"#33CA33","background-color":"#33CA33"});
        $("#id_bar2").css("background-color","#33CA33");
        $("#id_title3").css({"color": "#69f94c", "font-weight":"bold"});
        $("#id_label3").css({"color": "#69f94c", "font-weight":"bold"});
        $("#id_circle3").css({"border-color":"#69f94c", "background-color":"#d1ffd1"});
    } else if ($("#id_request_to_engineer_btn").is(":visible")) {
        // Country to Engineer
        console.log("Country to Engineer");
        $("#id_title1").css("color","#33CA33");
        $("#id_label1").css("color","white");
        $("#id_circle1").css({"border-color":"#33CA33","background-color":"#33CA33"});
        $("#id_bar1").css("background-color","#33CA33");
        $("#id_title2").css({"color": "#69f94c", "font-weight":"bold"});
        $("#id_label2").css({"color": "#69f94c", "font-weight":"bold"});
        $("#id_circle2").css({"border-color":"#69f94c", "background-color":"#d1ffd1"});
    } else if ($("#id_transfer_to_country_btn").is(":visible"))  {
        // GDC to CD
        console.log("GDC to CD");
      $("#id_title1").css({"color": "#69f94c", "font-weight":"bold"});
      $("#id_label1").css({"color": "#69f94c", "font-weight":"bold"});
      $("#id_circle1").css({"border-color":"#69f94c", "background-color":"#d1ffd1"});
    } else if ((id_close_request_btn.isActive() == true) || (($("#id_close_request_btn").prop("disabled")))&& ($("#id_close_request_btn").is(":hidden"))) {
        // To be closed
        console.log("To be closed");
        $("#id_title1").css("color","#33CA33");
        $("#id_label1").css("color","white");
        $("#id_circle1").css({"border-color":"#33CA33","background-color":"#33CA33"});
        $("#id_bar1").css("background-color","#33CA33");
        $("#id_title2").css("color","#33CA33");
        $("#id_label2").css("color","white");
        $("#id_circle2").css({"border-color":"#33CA33","background-color":"#33CA33"});
        $("#id_bar2").css("background-color","#33CA33");
        $("#id_bar3").css("background-color","#33CA33");
        $("#id_title3").css("color","#33CA33");
        $("#id_label3").css("color","white");
        $("#id_circle3").css({"border-color":"#33CA33","background-color":"#33CA33"});
        $("#id_bar4").css("background-color","#33CA33");
        $("#id_title4").css("color","#69f94c");
        $("#id_label4").css("color","#69f94c");
        $("#id_circle4").css({"border-color":"#69f94c","background-color":"#d1ffd1"});
        } else if (($("#id_close_request_btn").prop("disabled")) && ($("#id_close_request_btn").is(":visible"))){
        // Closed
        console.log("Closed");
        $("#id_title1").css("color","#33CA33");
        $("#id_label1").css("color","white");
        $("#id_circle1").css({"border-color":"#33CA33","background-color":"#33CA33"});
        $("#id_bar1").css("background-color","#33CA33");
        $("#id_title2").css("color","#33CA33");
        $("#id_label2").css("color","white");
        $("#id_circle2").css({"border-color":"#33CA33","background-color":"#33CA33"});
        $("#id_bar2").css("background-color","#33CA33");
        $("#id_bar3").css("background-color","#33CA33");
        $("#id_title3").css("color","#33CA33");
        $("#id_label3").css("color","white");
        $("#id_circle3").css({"border-color":"#33CA33","background-color":"#33CA33"});
        $("#id_bar4").css("background-color","#33CA33");
        $("#id_title4").css("color","#33CA33");
        $("#id_label4").css("color","white");
        $("#id_circle4").css({"border-color":"#33CA33","background-color":"#33CA33"});
    }  else {
        console.log("Pas de traitement");
    }
}

// save datas from basic info fields
var var_data_pdf = {};      // data collected ready to be imported in final PDF report


function get_basic_info()
{
    var basic_info = {
        "type": RMPApplication.get("type"),
        "legrand_ref": RMPApplication.get("legrand_ref"),
        "location_info": RMPApplication.get("location_filter"),
        "priority": id_priority.getSelectedLabel()
    };
    // stocke ident dans le widget var_ident
    RMPApplication.set("var_basic_info", JSON.stringify(basic_info));
}


// save datas from location CW
function get_location_info()
{
    var location_info = {
        "site_name": RMPApplication.get("my_location.site_name"),
        "site_code": RMPApplication.get("my_location.site_code"),
        "address": RMPApplication.get("my_location.address"),
        // "town": RMPApplication.get("my_location.town"),
        // "postal_code": RMPApplication.get("my_location.postal_code"),
        "country": RMPApplication.get("my_location.country"),
        "site_contact": RMPApplication.get("my_location.site_contact"),
        "name_country": RMPApplication.get("my_location.name_country")
    };
    // stocke ident dans le widget var_ident
    RMPApplication.set("var_location_info", JSON.stringify(location_info));
}

// save datas from user CW
function get_user_info()
{
    var user_info = {
        "name": RMPApplication.get("my_user.name"),
        "fix_mobile_number": RMPApplication.get("my_user.fix_mobile_number"),
        "user_email_unknown": RMPApplication.get("my_user.user_email_unknown"),
        "contact_email": RMPApplication.get("my_user.contact_email")
    };
    // stocke ident dans le widget var_ident
    RMPApplication.set("var_user_info", JSON.stringify(user_info));
}

// save datas from installation_type fields
function get_installation_type_info()
{
    var installation_type_info = {
        "installation_type": id_installation_type.getSelectedLabel(),
        "reason_issue": RMPApplication.get("reason_issue"),
        "old_pc_status": id_old_pc_status.getSelectedLabel(),
        "reason": RMPApplication.get("reason")
    }; 
    // stocke ident dans le widget var_ident
    RMPApplication.set("var_installation_type_info", JSON.stringify(installation_type_info));
}


// save datas from pc_initial_info CW
function get_pc_initial_info()
{
    var pc_initial_info = {
        "windows_version": id_my_current_pc_initial.id_windows_version.getSelectedValue(),
        "pc_name": RMPApplication.get("my_current_pc_initial.pc_name"),
        "pc_model": RMPApplication.get("my_current_pc_initial.pc_model"),
        "serial_number": RMPApplication.get("my_current_pc_initial.serial_number"),
        "software_installed": RMPApplication.get("my_current_pc_initial.software_installed")
    };
    // stocke ident dans le widget var_ident
    RMPApplication.set("var_pc_initial_info", JSON.stringify(pc_initial_info));
}

// save datas from my_new_pc_swap CW
function get_pc_swap_info()
{
    var pc_swap_info = {
        "windows_version": id_my_new_pc_swap.id_windows_version.getSelectedValue(),
        "pc_name": RMPApplication.get("my_new_pc_swap.pc_name"),
        "pc_model": RMPApplication.get("my_new_pc_swap.pc_model"),
        "serial_number": RMPApplication.get("my_new_pc_swap.serial_number"),
        "software_installed": RMPApplication.get("my_new_pc_swap.software_installed")
    };
    // stocke ident dans le widget var_ident
    RMPApplication.set("var_pc_swap_info", JSON.stringify(pc_swap_info));
}

// save datas from my_current_pc_confirm CW
function get_pc_confirm_info()
{
    var pc_confirm_info = {
        "windows_version": id_my_current_pc_confirm.id_windows_version.getSelectedValue(),
        "pc_name": RMPApplication.get("my_current_pc_confirm.pc_name"),
        "pc_model": RMPApplication.get("my_current_pc_confirm.pc_model"),
        "serial_number": RMPApplication.get("my_current_pc_confirm.serial_number"),
        "software_installed": RMPApplication.get("my_current_pc_confirm.software_installed")
    };
    // stocke ident dans le widget var_ident
    RMPApplication.set("var_pc_confirm_info", JSON.stringify(pc_confirm_info));
}

// save datas from my_new_pc_confirm CW
function get_new_pc_confirm_info()
{
    var new_pc_confirm_info = {
        "windows_version": id_my_new_pc_confirm.id_windows_version.getSelectedValue(),
        "pc_name": RMPApplication.get("my_new_pc_confirm.pc_name"),
        "pc_model": RMPApplication.get("my_new_pc_confirm.pc_model"),
        "serial_number": RMPApplication.get("my_new_pc_confirm.serial_number"),
        "software_installed": RMPApplication.get("my_new_pc_confirm.software_installed")
    };
    // stocke ident dans le widget var_ident
    RMPApplication.set("var_new_pc_confirm_info", JSON.stringify(new_pc_confirm_info));
}


// save datas from gdc_details CW
function get_gdc_details_info()
{
    var gdc_details_info = {
        "issue_description": RMPApplication.get("my_gdc_details.issue_description"),
        "action_to_be_done": RMPApplication.get("my_gdc_details.action_to_be_done")
    };
    // stocke ident dans le widget var_ident
    RMPApplication.set("var_gdc_details_info", JSON.stringify(gdc_details_info));
}

// save datas from my_issue_intervention CW
function get_issue_intervention_info()
{
    var issue_intervention_info = {
        "fujitsu_ref": RMPApplication.get("my_issue_intervention.fujitsu_ref"),
        "oss_ref": RMPApplication.get("my_issue_intervention.oss_ref"),
        "info_eta_str": RMPApplication.get("my_issue_intervention.info_eta_str"),
        "last_cancellation_reason": RMPApplication.get("my_issue_intervention.last_cancellation_reason"),
        "new_cancellation_reason": RMPApplication.get("my_issue_intervention.new_cancellation_reason"),
        "info_for_this_engineer": RMPApplication.get("my_issue_intervention.info_for_this_engineer")
    };
    // stocke ident dans le widget var_ident
    RMPApplication.set("var_issue_intervention_info", JSON.stringify(issue_intervention_info));
}

// save datas from intervention1_info CW
// function get_intervention1_info()
// {
//     var intervention1_info = {
//         "arrival_date": (RMPApplication.get("my_intervention_1.arrival_time_str").substr(0,10)),
//         "arrival_time": (RMPApplication.get("my_intervention_1.arrival_time_str").substr(11)),
//         "end_time": (RMPApplication.get("my_intervention_1.end_time_str").substr(11)),
//         "actions_done": RMPApplication.get("my_intervention_1.actions_done"),
//         "intervention_finished": id_my_intervention_1.id_intervention_finished.getSelectedLabel(),
//         "reason": RMPApplication.get("my_intervention_1.reason")
//     };
//     // stocke ident dans le widget var_ident
//     RMPApplication.set("var_intervention1_info", JSON.stringify(intervention1_info));
// }

// // save datas from intervention2 CW
// function get_intervention2_info()
// {
//     var intervention2_info = {
//         "arrival_time_str": RMPApplication.get("my_intervention_2.arrival_time_str"),
//         "end_time": RMPApplication.get("my_intervention_2.end_time"),
//         "actions_done": RMPApplication.get("my_intervention_2.actions_done"),
//         "intervention_finished": id_my_intervention_2.id_intervention_finished.getSelectedLabel(),
//         "reason": RMPApplication.get("my_intervention_2.reason")
//     };
//     // stocke ident dans le widget var_ident
//     RMPApplication.set("var_intervention2_info", JSON.stringify(intervention2_info));
// }

// // save datas from intervention3 CW
// function get_intervention3_info()
// {
//     var intervention3_info = {
//         "arrival_time_str": RMPApplication.get("my_intervention_3.arrival_time_str"),
//         "end_time": RMPApplication.get("my_intervention_3.end_time"),
//         "actions_done": RMPApplication.get("my_intervention_3.actions_done"),
//         "intervention_finished": id_my_intervention_3.id_intervention_finished.getSelectedLabel(),
//         "reason": RMPApplication.get("my_intervention_3.reason")
//     };
//     // stocke ident dans le widget var_ident
//     RMPApplication.set("var_intervention3_info", JSON.stringify(intervention3_info));
// }


function get_last_intervention_info()
{
    var last_intervention_info = {
        "arrival_date": (RMPApplication.get("my_intervention_" + visit_counter + ".arrival_time_str").substr(0,10)),
        "arrival_time": (RMPApplication.get("my_intervention_" + visit_counter + ".arrival_time_str").substr(11)),
        "end_time": (RMPApplication.get("my_intervention_" + visit_counter + ".end_time_str").substr(11)),
        "actions_done": RMPApplication.get("my_intervention_" + visit_counter + ".actions_done")
        // "intervention_finished": ("my_intervention_" + visit_counter + "id_intervention_finished").getSelectedLabel(),
        // "reason": RMPApplication.get("my_intervention_" + visit_counter + ".reason")
    };
    // stocke ident dans le widget var_ident
    RMPApplication.set("var_last_intervention_info", JSON.stringify(last_intervention_info));
}



// save datas from my_pc_check CW
function get_pc_check_info()
{
    var pc_check_info = {
        "my_document": (RMPApplication.get("my_pc_check.my_document") == '["done"]') ? "true" : "",
        "desktop": (RMPApplication.get("my_pc_check.desktop") == '["done"]') ? "true" : "",
        "favorite_internet": (RMPApplication.get("my_pc_check.favorite_internet") == '["done"]') ? "true" : "",
        "favorite_google_chrome": (RMPApplication.get("my_pc_check.favorite_google_chrome") == '["done"]') ? "true" : "",
        "lotus_notes_back_up": (RMPApplication.get("my_pc_check.lotus_notes_back_up") == '["done"]') ? "true" : "",
        "office_template": (RMPApplication.get("my_pc_check.office_template") == '["done"]') ? "true" : "",
        "other_local_data": (RMPApplication.get("my_pc_check.other_local_data") == '["done"]') ? "true" : "",
        "bios_password": (RMPApplication.get("my_pc_check.bios_password") == '["done"]') ? "true" : "",
        "software_installation": (RMPApplication.get("my_pc_check.software_installation") == '["done"]') ? "true" : "",
        "office_version": (RMPApplication.get("my_pc_check.office_version") == '["done"]') ? "true" : "",
        "domain_integration": (RMPApplication.get("my_pc_check.domain_integration") == '["done"]') ? "true" : "",
        "software_detail": (RMPApplication.get("my_pc_check.software_detail") == '["done"]') ? "true" : "",
        "software_configuration": (RMPApplication.get("my_pc_check.software_configuration") == '["done"]') ? "true" : "",
        "one_drive_data": (RMPApplication.get("my_pc_check.one_drive_data") == '["done"]') ? "true" : "",
        "skype": (RMPApplication.get("my_pc_check.skype") == '["done"]') ? "true" : "",
        "lotus_notes_configuration": (RMPApplication.get("my_pc_check.lotus_notes_configuration") == '["done"]') ? "true" : "",
        "printers_installation": (RMPApplication.get("my_pc_check.printers_installation") == '["done"]') ? "true" : "",
        "login_user_profil": (RMPApplication.get("my_pc_check.login_user_profil") == '["done"]') ? "true" : "",
        "wifi_connection": (RMPApplication.get("my_pc_check.wifi_connection") == '["done"]') ? "true" : "",
        "dialeg_intranet_access": (RMPApplication.get("my_pc_check.dialeg_intranet_access") == '["done"]') ? "true" : "",
        "office365_access": (RMPApplication.get("my_pc_check.office365_access") == '["done"]') ? "true" : "",
        "arp_login": (RMPApplication.get("my_pc_check.arp_login") == '["done"]') ? "true" : "",
        "skype_working": (RMPApplication.get("my_pc_check.skype_working") == '["done"]') ? "true" : "",
        "lotus_notes_test": (RMPApplication.get("my_pc_check.lotus_notes_test") == '["done"]') ? "true" : "",
        "printing_test": (RMPApplication.get("my_pc_check.printing_test") == '["done"]') ? "true" : "",
        "show_software_center": (RMPApplication.get("my_pc_check.show_software_center") == '["done"]') ? "true" : "",
        "password_changed": (RMPApplication.get("my_pc_check.password_changed") == '["done"]') ? "true" : ""
    };
    // stocke ident dans le widget var_ident
    RMPApplication.set("var_pc_check_info", JSON.stringify(pc_check_info));
}


function prepare_data()
{
    get_basic_info();
    get_location_info();
    get_user_info();
    get_installation_type_info();
    get_pc_initial_info();
    get_pc_swap_info();
    get_pc_confirm_info();
    get_new_pc_confirm_info();
    get_gdc_details_info();
    get_issue_intervention_info();
    get_last_intervention_info();
    get_pc_check_info();

    setTimeout (consolide_data, 1000);

}

function consolide_data()
{
    var_data_pdf.my_var_main = 
    {
    "basic_info": JSON.parse(RMPApplication.get("var_basic_info")),
    "location_info": JSON.parse(RMPApplication.get("var_location_info")),
    "user_info": JSON.parse(RMPApplication.get("var_user_info")),
    "installation_type_info": JSON.parse(RMPApplication.get("var_installation_type_info")),
    "pc_initial_info": JSON.parse(RMPApplication.get("var_pc_initial_info")),
    "pc_swap_info": JSON.parse(RMPApplication.get("var_pc_swap_info")),
    "pc_confirm_info": JSON.parse(RMPApplication.get("var_pc_confirm_info")),
    "new_pc_confirm_info": JSON.parse(RMPApplication.get("var_new_pc_confirm_info")),
    "gdc_details_info": JSON.parse(RMPApplication.get("var_gdc_details_info")),
    "issue_intervention_info": JSON.parse(RMPApplication.get("var_issue_intervention_info")),
    "last_intervention_info": JSON.parse(RMPApplication.get("var_last_intervention_info")),
    "pc_check_info": JSON.parse(RMPApplication.get("var_pc_check_info"))
    };


    RMPApplication.set("var_data_pdf_front", JSON.stringify(var_data_pdf));
}


function display_anchor(){
	var visit_counter = parseInt(RMPApplication.get("visit_counter"));

	if ($("#id_close_request_btn").is(":visible")) {
	    // closure or closed screen
	    console.log("closure ou closed screen");
	    ($("#btn_closure_global").show());
	    ($("#btn_closure_issue").show());
	    ($("#btn_closure_intervention").show());
	    ($("#btn_intervention_global").show());
	    ($("#btn_intervention_issue").show());
	    ($("#btn_intervention_closure").show());
	    ($("#btn_issue_global").show());
	    ($("#btn_issue_intervention").show());
	    ($("#btn_issue_closure").show());
	    ($("#btn_global_issue").show());
	    ($("#btn_global_intervention").show());
	    ($("#btn_global_closure").show())
	} else if (visit_counter >= 1)  {
	    // Engineer screen
	    console.log("Engineer screen");
	    ($("#btn_intervention_global").show());
	    ($("#btn_intervention_issue").show());
	    ($("#btn_issue_global").show());
	    ($("#btn_issue_intervention").show());
	    ($("#btn_global_issue").show());
	    ($("#btn_global_intervention").show());
	    ($("#btn_intervention_closure").hide());
	    ($("#btn_issue_closure").hide());
	    ($("#btn_global_closure").hide());
	} else if ((visit_counter == 0 )&& ($("#id_my_issue_intervention").is(":visible"))) {
	    // Country Desk screen
	    console.log("Country Desk screen");
	    ($("#btn_issue_global").show());
	    ($("#btn_global_issue").show());
	    ($("#btn_issue_closure").hide());
        ($("#btn_issue_intervention").hide());
        ($("#btn_global_closure").hide());
        ($("#btn_global_intervention").hide());
    } else {
        console.log('prout')
    } 
}

