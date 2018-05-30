<#assign PM = has_right(user,321308)>
<#assign PPM = has_right(user,337120)>
<#assign PPM_observer = has_right(user,319624)>
<#assign project_requestor = has_right(user,319519)>
<#assign kering_lead = has_right(user,331479)>
<#assign fujitsu_pm = has_right(user,330936)>
<#assign rights = {}>

<#if PM = "true">
	<#assign rights = P_json_put(rights, "PM", "yes", true)>
<#else>
	<#assign rights = P_json_put(rights, "PM", "no", true)>
</#if>
<#if PPM = "true">
	<#assign rights = P_json_put(rights, "PPM", "yes", true)>
<#else>
	<#assign rights = P_json_put(rights, "PPM", "no", true)>
</#if>
<#if PPM_observer = "true">
	<#assign rights = P_json_put(rights, "PPM_observer", "yes", true)>
<#else>
	<#assign rights = P_json_put(rights, "PPM_observer", "no", true)>
</#if>
<#if project_requestor = "true">
	<#assign rights = P_json_put(rights, "project_requestor", "yes", true)>
<#else>
	<#assign rights = P_json_put(rights, "project_requestor", "no", true)>
</#if>
<#if kering_lead = "true">
	<#assign rights = P_json_put(rights, "kering_lead", "yes", true)>
<#else>
	<#assign rights = P_json_put(rights, "kering_lead", "no", true)>
</#if>
<#if fujitsu_pm = "true">
	<#assign rights = P_json_put(rights, "fujitsu_pm", "yes", true)>
<#else>
	<#assign rights = P_json_put(rights, "fujitsu_pm", "no", true)>
</#if>

${rights}