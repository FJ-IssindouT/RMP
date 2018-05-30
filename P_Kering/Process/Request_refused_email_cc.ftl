<#assign mode = "${P_mode}">
<#if mode = "TEST">
    <#assign notification_step = "notif_test_mode">
<#else>
    <#assign notification_step = "notif_request_refused">
</#if>

<#assign my_pattern>
    {"notification_step": "${notification_step}"}
</#assign>
<#assign destinataires_cc = "">
<#list list_objects(my_pattern, "notifications") as x>
    <#if mode == "LIVE">
	    <#assign dest_cc = x.live_email_cc>
    <#elseif mode == "ACCEPTANCE">
	    <#assign dest_cc = "">
    <#elseif mode == "TEST">
        <#assign dest_cc = "">
    </#if>
    <#if dest_cc != "">
        <#assign dest_cc_list = dest_cc?split(',')>
        <#assign email = "">
        <#list dest_cc_list as item>
            <#assign result = "">
            <#if item[0] == "$">
                <#assign result = item[1..]?eval>
            <#else>
                <#assign result = item>
            </#if>
            <#if email == "">
                <#assign email = result>
            <#else>
                <#assign email = email + "," + result>
            </#if>
        </#list>
        <#assign destinataires_cc = email>
    </#if>
</#list>

<#assign destinataires = "${destinataires_cc}">
${destinataires}