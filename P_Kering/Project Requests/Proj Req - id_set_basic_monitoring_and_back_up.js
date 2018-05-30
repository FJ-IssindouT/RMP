// id_set_basic_monitoring_and_back_up

if (RMPApplication.get("full_management_and_monitoring_option") == "yes")	{
	id_basic_monitoring_and_back_up_option.setSelectedValue("no");
} else if (RMPApplication.get("full_management_and_monitoring_option") == "no") {
	id_basic_monitoring_and_back_up_option.setSelectedValue("yes");
}
