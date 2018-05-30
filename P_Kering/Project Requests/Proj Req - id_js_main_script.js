// id_js_main_script

// ========================
// Variables declaration
// ========================

// if "true", logs will be showed on the browser console
var debug = {
    "hidden": false,
    "init": false,
    "replace_str": false
};

// String Variables list where double-quote char must be replaced by single-quote
var string_variables_array = [
    "request_title",
    "project_description",
    "comments_tmp_e",
    "documentation_to_deliver",
    "server_installation",
    "networking_configuration",
    "comment_full_management_and_monitoring",
    "comment_basic_monitoring_and_back_up",
    "backup_configuration_failover_solution",
    "affected_components",
    "impacts_and_risks",
    "benefits",
    "costsand_effort",
    "affected_components_with_version_number",
    "assessor_identification_and_recommendations",
    "impacts",
    "assessor_identification_and_recommendations_Impacts",
    "risk",
    "assessor_identification_and_recommendations_Risk",
    "back_out_instructions",
    "assessor_identification_and_recommendations_BackoutInstructions",
    "ExpectedBenefitstangibleintangible",
    "assessor_identification_and_recommendations_ExpectedBenefitstangibleintangible",
    "recommendations_from_the_maintenance_team_leader_and_the_business_system_manager",
    "suggested_implementation_priority",
    "recommended_observation_period_for_implemented_change",
    "implementation_priority",
    "conditions_or_justification",
    "observations_and_comments",
    "urgent_project_implementation_approval",
    "more_info_comment",
    "rejection_comment"
];

// replace double-quote character by single-quote before generating PDF report
function clean_quote(str)
{
    // return str.replace(/"/g, "&quot;");
    return str.replace(/"/g, "'");
}

// replace double-quote character by single-quote before generating PDF report
function clean_backslash(str)
{
    // return str.replace(/"/g, "&quot;");
    return str.replace(/\\/g, "/");
}

function prepare_string_variables_array()
{
    for (i=0; i<string_variables_array.length; i++){

        var str_value = RMPApplication.get(string_variables_array[i]);
        if (!isEmpty(str_value)) {
            str_value = clean_quote(clean_backslash(str_value));
            RMPApplication.set(eval("\"" + string_variables_array[i] + "\""), str_value);
            c_debug(debug.replace_str, "String var [" + string_variables_array[i] + "]  has been modified!" )
        }
    }
}
