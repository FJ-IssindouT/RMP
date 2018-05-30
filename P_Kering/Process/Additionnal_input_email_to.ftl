<#assign mode = "${P_mode}">
<#if mode = "TEST">
    <#assign notification_step = "notif_test_mode">
<#else>
    <#assign notification_step = "notif_additionnal_input">
</#if>

<#assign my_pattern>
    {"notification_step": "${notification_step}"}
</#assign>
<#assign destinataires_to = "">
<#list list_objects(my_pattern, "notifications") as x>
    <#if mode == "LIVE">
	    <#assign dest_to = x.live_email_to>
    <#elseif mode == "ACCEPTANCE">
	    <#assign dest_to = x.acceptance_email_to>
    <#elseif mode == "TEST">
        <#assign dest_to = x.test_email_to>
    </#if>
    <#if dest_to != "">
        <#assign dest_to_list = dest_to?split(',')>
        <#assign email = "">
        <#list dest_to_list as item>
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
        <#assign destinataires_to = email>
    </#if>
</#list>

<#assign destinataires = "${destinataires_to}">
${destinataires}