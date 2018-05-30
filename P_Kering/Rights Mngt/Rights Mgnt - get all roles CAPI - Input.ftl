<#if currentFilters?size != 0>
	<#list currentFilters as x>
			<#assign tmp = get_lane_users(114774,323152)>
			<#assign users= []>
			<#assign data = []>
			<#list tmp as y >
				<#if y.login?contains(x.value)>
					<#assign users = users +  [y.login]>
				</#if>
			</#list>
	</#list>
<#else>
		<#assign tmp = get_lane_users(114774,323152)>
		<#assign users= []>
		<#assign data = []>
		<#list tmp as x >
			<#assign users = users +  [x.login]>
		</#list>
</#if>

<#list users as x >
	<#assign PM = has_right(x,321308)>
    <#assign PPM = has_right(x,337120)>
	<#assign PPM_observer = has_right(x,319624)>
	<#assign project_requestor = has_right(x,319519)>
	<#assign kering_lead = has_right(x,331479)>
	<#assign fujitsu_pm = has_right(x,330936)>
	<#assign rights = {}>
	<#assign rights = P_json_put(rights,"user", x, true)>
	<#if PM = "true">
		<#assign rights = P_json_put(rights, "PM", "x", true)>
	<#else>
		<#assign rights = P_json_put(rights, "PM", "", true)>
	</#if>
	<#if PPM = "true">
		<#assign rights = P_json_put(rights, "PPM", "x", true)>
	<#else>
		<#assign rights = P_json_put(rights, "PPM", "", true)>
	</#if>
    <#if PPM_observer = "true">
		<#assign rights = P_json_put(rights, "PPM_observer", "x", true)>
	<#else>
		<#assign rights = P_json_put(rights, "PPM_observer", "", true)>
	</#if>
	<#if project_requestor = "true">
		<#assign rights = P_json_put(rights, "project_requestor", "x", true)>
	<#else>
		<#assign rights = P_json_put(rights, "project_requestor", "", true)>
	</#if>
	<#if kering_lead = "true">
		<#assign rights = P_json_put(rights, "kering_lead", "x", true)>
	<#else>
		<#assign rights = P_json_put(rights, "kering_lead", "", true)>
	</#if>
	<#if fujitsu_pm = "true">
		<#assign rights = P_json_put(rights, "fujitsu_pm", "x", true)>
	<#else>
		<#assign rights = P_json_put(rights, "fujitsu_pm", "", true)>
	</#if>
	<#assign data = data + [rights]>
</#list>

${data}