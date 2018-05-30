function load_user(user)
{
	var input = {"user": user};
	var options = {};
	id_get_user_rights.trigger(input, options, ok, ko);

	var id = "id_user_rights";
	//id_user_rights is the ID of the element that we want to deploy in the window
	var windowComp = $('[id="' + id + '"]').dialog({ 
                                            autoOpen: false, 
                                            modal: true, 
                                            stack: false,  
                                            width: 450,
                                            title: 'User Rights'
                                            });
	id_user_rights.setVisible(true);
	$(windowComp).dialog('open');
}
	
function ok(P_computed)
{
		RMPApplication.set("user", P_computed.user)
		RMPApplication.set("PM", P_computed.rights.PM)
		RMPApplication.set("PPM", P_computed.rights.PPM)
		RMPApplication.set("PPM_observer", P_computed.rights.PPM_observer)
		RMPApplication.set("project_requestor", P_computed.rights.project_requestor)
		RMPApplication.set("kering_lead", P_computed.rights.kering_lead)
		RMPApplication.set("fujitsu_pm", P_computed.rights.fujitsu_pm)
}

function ko(P_error)
{
    alert(JSON.stringify(P_error));
}

function save_user_information()
{
	var input = {"user": RMPApplication.get("user"),
			"PM": RMPApplication.get("PM"),
			"PPM": RMPApplication.get("PPM"),
			"PPM_observer": RMPApplication.get("PPM_observer"),
			"project_requestor": RMPApplication.get("project_requestor"),
			"kering_lead": RMPApplication.get("kering_lead"),
			"fujitsu_pm": RMPApplication.get("fujitsu_pm")
			};
	var options = {};
	id_save_user_s_rights.trigger(input, options, save_ok, save_ko);
}
	
function save_ok(P_computed)
{
	alert("The rights have been saved!");
	var id = "id_user_rights";
	//id_user_rights is the ID of the element that we want to deploy in the window
	var windowComp = $('[id="' + id + '"]').dialog({ 
                                            autoOpen: false, 
                                            modal: true, 
                                            stack: false,  
                                            width: 450,
                                            title: 'User Rights'
                                            });
	id_user_rights.setVisible(true);
	$(windowComp).dialog('close');
	id_report.refresh();
}

function save_ko(P_error)
{
	alert("An error occured, please contact the administrator!");
}


