<#-- TEST Role script -->
<#assign compagnie ="">
<#assign grp_ens = "">
<#assign enseigne = "">
<#assign pays = "">
<#assign division = "">
<#assign region = "">
<#assign code_magasin = "">

<#if get_user_metadata().compagnie??>
	<#assign compagnie = get_user_metadata().compagnie>
</#if>
<#if get_user_metadata().grp_ens??>
	<#assign grp_ens = get_user_metadata().grp_ens>
</#if>
<#if get_user_metadata().enseigne??>
	<#assign enseigne = get_user_metadata().enseigne>
</#if>
<#if get_user_metadata().pays??>
	<#assign pays = get_user_metadata().pays>
</#if>
<#if get_user_metadata().division??>
	<#assign division = get_user_metadata().division>
</#if>
<#if get_user_metadata().region??>
	<#assign region = get_user_metadata().region>
</#if>
<#if get_user_metadata().code_magasin??>
	<#assign code_magasin = get_user_metadata().code_magasin>
</#if>
${((region == pays || division == pays) && (pays != "") )}

${(P_user.ext.region == get_user_metadata().pays || get_user_metadata().division == get_user_metadata().pays) && get_user_metadata().pays != "" }

${ P_user.extended.division ==  P_user.extended.pays || P_user.extended.region ==  P_user.extended.pays }

${P_user.ext.division == P_user.ext.pays}

${ (P_user.ext.region?? && P_user.ext.region != "") }


${ ((P_user.extended.division??)?c ("", P_user.extended.division)) ==  P_user.extended.pays }


	compagnie: ${compagnie}
	<#-- grp_ens: ${grp_ens} -->
	<#-- enseigne: ${enseigne} -->
	pays: ${pays}
	division: ${division}
	region: ${region}
	<#-- code_magasin: ${code_magasin} -->


	${division} egale ${compagnie}
<#else>
	${"NOT EGAL"}
</#if>



<@script env="javascript">
	if (division == compagnie) {
		print('EQUAL')
	} else {
		print('NOT EQUAL')
	}

    //We are able to concatenate the new variable with the one passed from the process (name)
    var a = "Rafal " + name;
 
    //We return concatenated value
    print(a);
 
    //If we want to create a variable which will be available further down in the process
    setVariable("user_fullname",a); 
</@script>


${ (get_user_metadata().pays?? && get_user_metadata().division?? && get_user_metadata().division == get_user_metadata().pays ) 
 || (get_user_metadata().pays?? && get_user_metadata().region?? && get_user_metadata().region == get_user_metadata().pays ) }

${ (get_user_metadata().pays?? && get_user_metadata().division?? && get_user_metadata().division == get_user_metadata().pays ) 
 || (get_user_metadata().pays?? && get_user_metadata().region?? && get_user_metadata().region == get_user_metadata().pays ) }

<#-- Lane (384643) / IT Managers  -->
<#-- CONDITION:  (login.region == login.company) || (login.division == login.company)  -->

<#-- Lane (384642) / Affiliate Managers  -->
<#-- CONDITION:  (login.region == login.affiliate) || (login.division == login.affiliate)  -->

<#-- Lane (396042) / Country Managers   -->
<#-- CONDITION:  (login.region == login.country) || (login.division == login.country)  -->

<#-- Lane (384675) / Region/Division Managers   -->
<#-- CONDITION:  (login.region == login.country) || (login.division == login.country)  -->

<#-- Lane (391720) / SDMO Fujitsu  -->
<#-- CONDITION:  !isEmpty(login.division) && (login.division != "NOT DEFINED")  -->
<#-- CONDITION:  !isEmpty(login.region) && (login.region != "NOT DEFINED")  -->

<#-- Lane (392101) / Local Users   -->
<#-- CONDITION:  (!isEmpty(login.grp_affiliates)) && (login.grp_affiliates != "NOT DEFINED")  -->

<#-- Lane (384644) / VIVARTE Users   -->
<#-- CONDITION:  company?upper_case == "VIVARTE")  -->


${get_user_metadata().region == compagnie}

<@script env="javascript">
    //We are able to concatenate the new variable with the one passed from the process (name)
    var a = "Rafal " + name;
 
    //We return concatenated value
    print(a);
 
    //If we want to create a variable which will be available further down in the process
    setVariable("user_fullname",a); 
</@script>

