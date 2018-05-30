// id_send_ack_btn

prepare_string_variables_array();
var myVar = setTimeout(function(){}, 1000);

if (RMPApplication.get("documentation_to_deliver_option") == "no") {
	id_documentation_to_deliver.setText("n/a");
	console.log("1 - documentation_to_deliver_option");
}
if (RMPApplication.get("server_installation_option") == "no") {
	id_server_installation.setText("n/a");
	console.log("2 - server_installation_option");
}
if (RMPApplication.get("networking_configuration_option") == "no") {
	id_networking_configuration.setText("n/a");
	console.log("3 - networking_configuration_option");
}
if (RMPApplication.get("full_management_and_monitoring_option") == "no") {
	id_comment_full_management_and_monitoring.setText("n/a");
	console.log("4 - full_management_and_monitoring_option");
}
if (RMPApplication.get("basic_monitoring_and_back_up_option") == "no") {
	id_comment_basic_monitoring_and_back_up.setText("n/a");
	console.log("5 - basic_monitoring_and_back_up_option");
}
if (RMPApplication.get("backup_configuration_failover_solution_button") == "no") {
	id_backup_configuration_failover_solution.setText("n/a");
	console.log("6 - backup_configuration_failover_solution_button");
}
if (RMPApplication.get("affected_components") == null || RMPApplication.get("affected_components") == "null") {
	id_affected_components.setText("n/a");
	console.log("7 - affected_components");
}
if (RMPApplication.get("impacts_and_risks") == null || RMPApplication.get("impacts_and_risks") == "null") {
	id_impacts_and_risks.setText("n/a");
	console.log("8 - impacts_and_risks");
}
if (RMPApplication.get("benefits") == null || RMPApplication.get("benefits") == "null") {
	id_benefits.setText("n/a");
	console.log("9 - benefits");
}

var error_msg = "Incorrect or missing value(s) for the following field(s) : " + "\n" + "\n";
var liste = error_msg;

if (RMPApplication.get("date_meeting_string") == null) {
liste += "- Assessment meeting date" + "\n";
}

if (RMPApplication.get("hour") == null) {
liste += "- Assessment meeting hour" + "\n";
}

if (liste != error_msg) {
	alert(liste);
} else {
	true;
} 
