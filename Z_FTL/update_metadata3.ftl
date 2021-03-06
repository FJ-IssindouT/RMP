<#assign update_array = []>
<#assign new_user_array = []>

<#if create_users_with_email?size gt 0>
<#list create_users_with_email as x>
	<#assign email = "">
	<#if x.user_login?? && x.user_login != "">
		<#assign email = x.user_login>
	</#if>
	
	<#assign mdt_save = {}>
	<#assign mdt = {}>
	<#assign update = "no">
	
	<#assign mdt = P_json_put(mdt, "firstname", x.firstname, "true")>
	<#assign mdt = P_json_put(mdt, "lastname", x.lastname, "true")>
	<#assign mdt = P_json_put(mdt, "matricule", x.matricule, "true")>
	<#assign mdt = P_json_put(mdt, "Date_anciennete",(get_time(x.Date_anciennete,"yyyyMMdd")?number * 1000))>
	<#assign mdt = P_json_put(mdt, "Manager", x.Manager, "true")>
	<#assign mdt = P_json_put(mdt, "Fonction", x.Fonction, "true")>
	<#assign mdt = P_json_put(mdt, "Direction", x.Direction, "true")>
	<#assign mdt = P_json_put(mdt, "Services", x.Services, "true")>
	<#assign mdt = P_json_put(mdt, "language", "fr", "true")>
	<#assign mdt = P_json_put(mdt, "email_manager", x.email_manager, "true")>
	
	<#assign update = "yes">
	
	<#assign foo = save_user_metadata(email, mdt)>
	<#assign new_user_array= new_user_array + [foo]>
	
</#list>
</#if>

<#if update_users?size gt 0>
	<#list update_users as x>
		<#assign email = "">
		<#if x.user_login?? && x.user_login != "">
			<#assign email = x.user_login>
		</#if>
		
		<#assign mdt_save = get_user_metadata(email)>
		<#assign mdt = mdt_save>
		<#assign update = "no">
		
		<#assign mdt = P_json_remove(mdt, "firstname")>
		<#assign mdt = P_json_put(mdt, "firstname", x.firstname, true)>
		<#assign mdt = P_json_remove(mdt, "lastname")>
		<#assign mdt = P_json_put(mdt, "lastname", x.lastname, true)>
		<#assign mdt = P_json_remove(mdt, "matricule")>
		<#assign mdt = P_json_put(mdt, "matricule", x.matricule, true)>
		<#assign mdt = P_json_remove(mdt, "Date_anciennete")>
		<#assign mdt = P_json_put(mdt, "Date_anciennete",(get_time(x.Date_anciennete,"yyyyMMdd")?number * 1000))>
		<#assign mdt = P_json_remove(mdt, "Manager")>
		<#assign mdt = P_json_put(mdt, "Manager", x.Manager, true)>
		<#assign mdt = P_json_remove(mdt, "Fonction")>
		<#assign mdt = P_json_put(mdt, "Fonction", x.Fonction, true)>
		<#assign mdt = P_json_remove(mdt, "Direction")>
		<#assign mdt = P_json_put(mdt, "Direction", x.Direction, true)>
		<#assign mdt = P_json_remove(mdt, "Services")>
		<#assign mdt = P_json_put(mdt, "Services", x.Services, true)>
		<#assign mdt = P_json_remove(mdt, "language")>
		<#assign mdt = P_json_put(mdt, "language", "fr", true)>
		<#assign mdt = P_json_remove(mdt, "email_manager")>
		<#assign mdt = P_json_put(mdt, "email_manager", x.email_manager, "true")>
		
		<#assign foo = save_user_metadata(email, mdt)>
		<#assign update_array = update_array + [foo]>
		
	</#list>
</#if>
	
<#assign hub = {}>
<#assign hub = P_json_put(hub, "update", update_array)>
<#assign hub = P_json_put(hub, "new_user", new_user_array)>
${hub}