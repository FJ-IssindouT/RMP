<#--  Si profil "REGION", nul besoin de mettre à jour la liste des kiosks  -->
<#if (user_metadata.profil == "REGION")>
	<#assign list_kiosk = "">

<#--  only one kiosk to add  -->
<#else>
    <#--  On récupère la liste des kiosks actuellement gérés, où l'on a déjà retiré les doublons (éventuels)  -->
    <#assign c_mkl = clean_mdt_kiosk_list>
    
    <#if (mdt_main_kiosk != user_location)>
    
        <#--  acces_enseignes [metadata] vide  -->
        <#if c_mkl == "">
            <#assign list_kiosk = mdt_main_kiosk + "," + user_location>
            <#--  ${"bloc 15"}  -->
        
        <#--  code_magasin déjà dans acces_enseignes ?   -->
        <#elseif c_mkl?contains(mdt_main_kiosk)>

            <#assign list_kiosk = c_mkl>
            <#--  user_location [fichier] déjà dans acces_enseignes ?   -->
            <#if c_mkl?contains(user_location)>
                <#--  no change to list_kiosk  -->
                <#--  ${"bloc 2"}  -->
            <#else>
                <#assign list_kiosk = list_kiosk + "," + user_location> 
                <#--  ${"bloc 3"}  -->
            </#if>
        
        <#--  code_magasin MANQUE dans acces_enseignes ?   -->
        <#else> 
            <#assign list_kiosk = mdt_main_kiosk + "," + c_mkl>

            <#--  user_location [fichier] déjà dans acces_enseignes ?   -->
            <#if c_mkl?contains(user_location)>
                <#--  no change to list_kiosk  -->
                <#--  ${"bloc 4"}  -->
            <#else>
                <#assign list_kiosk = list_kiosk + "," + user_location> 
                <#--  ${"bloc 5"}  -->
            </#if>
        </#if>

    <#-- mdt_main_kiosk == user_location -->
    <#else> 
        <#assign list_kiosk = c_mkl>
    </#if>
</#if>
${list_kiosk}    