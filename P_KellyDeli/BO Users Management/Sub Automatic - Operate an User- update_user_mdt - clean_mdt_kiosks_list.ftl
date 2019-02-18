<#--  Dans le cas où serait founrnie une liste de kiosks à rajouter, colonne "user_kiosks_list" présente dans CSV  -->
<#assign list_kiosk = "" + mdt_acces_enseignes >
<#if user_kiosks_list != "">
    <#assign list_kiosk = list_kiosk + user_kiosks_list >
</#if>
<#if list_kiosk != "">
    <#--  ON traite les kiosks existants pour retirer les doublons  -->
    <#assign array_kiosk_target = []>
    <#--  Transpose liste de kiosks en tableau de kiosks  -->
    <#assign array_kiosk_origin = list_kiosk?split(",")>
    <#list array_kiosk_origin as kiosk>
        <#if array_kiosk_target?size == 0>
            <#assign array_kiosk_target = array_kiosk_target + [kiosk]>  
        <#else>
            <#assign already_exists = array_kiosk_target?seq_contains(kiosk)?string("yes", "no")>
            <#if already_exists == "no" >
                <#assign array_kiosk_target = array_kiosk_target + [kiosk]>  
            </#if> 
        </#if>
    </#list>   
    <#--  ${array_kiosk_target}  -->
    <#assign new_list_kiosk = "">
    <#list array_kiosk_target as kiosk>
        <#if new_list_kiosk == "">
            <#assign new_list_kiosk = kiosk>
        <#else>
            <#assign new_list_kiosk = new_list_kiosk + ',' + kiosk>
        </#if>
    </#list>
    <#assign list_kiosk = new_list_kiosk>
</#if>
${list_kiosk}