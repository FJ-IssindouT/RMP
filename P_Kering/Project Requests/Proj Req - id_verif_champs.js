// id_verif_champs

var error_msg = "Incorrect or missing value(s) for the following field(s) : " + "\n" + "\n";
var liste = "";

if (RMPApplication.get("request_title") == null) {
	liste += "- Project name" + "\n";
}
if (RMPApplication.get("phone") == null) {
	liste += "- Phone" + "\n";
}

if (RMPApplication.get("position") == null) {
	liste += "- Position" + "\n";
}

if (RMPApplication.get("location") == null) {
	liste += "- Location" + "\n";
}

if (RMPApplication.get("organizational_unit") == null) {
	liste += "- Organizational unit" + "\n";
}
if (RMPApplication.get("expected_delivery_date") == null) {
	liste += "- Expected delivery date" + "\n";
}

if (RMPApplication.get("expected_go_live_date") == null) {
	liste += "- Expected go live date" + "\n";
}

if (RMPApplication.get("project_description") == null) {
	liste += "- Project description" + "\n";
}

if (RMPApplication.get("full_management_and_monitoring") == "no") {
	id_comment_full_management_and_monitoring.setText("n/a"); 
	console.log("4- full_management_and_monitoring = no");
}

if (RMPApplication.get("basic_monitoring_and_back_up") == "no") {
	id_comment_basic_monitoring_and_back_up.setText("n/a");
	console.log("5- basic_monitoring_and_back_up = no");
}

if (RMPApplication.get("full_management_and_monitoring") == null) {
	liste += "- Description Full management and monitoring" + "\n";
}

if (RMPApplication.get("basic_monitoring_and_back_up") == null) {
	liste += "- Description Basic monitoring and back_up" + "\n";
}

if (liste != error_msg) {
	alert(liste);
} else {
	true;
} 
