// id_submit_request_btn

prepare_string_variables_array();
var myVar = setTimeout(function(){}, 1000);

var error_msg = "Incorrect or missing value(s) for the following field(s) : " + "\n" + "\n";
var liste = error_msg;

if (RMPApplication.get("fts_project_manager") == null || RMPApplication.get("project_complexity_pre_qualification") == null) {
    liste += "- Fujitsu Project Manager" + "\n";
    liste += "- Project Complexity - Pre qualification" + "\n";
}

if (liste != error_msg) {
    alert(liste);
} else {
    true;
} 
