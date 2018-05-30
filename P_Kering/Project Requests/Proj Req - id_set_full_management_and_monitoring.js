// id_set_full_management_and_monitoring

if (RMPApplication.get("basic_monitoring_and_back_up_option") == "yes")	{
	id_full_management_and_monitoring_option.setSelectedValue("no");
} else if(RMPApplication.get("basic_monitoring_and_back_up_option") == "no") {
	id_full_management_and_monitoring_option.setSelectedValue("yes");
}
