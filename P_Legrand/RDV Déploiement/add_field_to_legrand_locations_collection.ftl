<#assign collection = "legrand_locations" >
<#assign query = {} >
<#assign variable>
	{"active_site" : "yes"}
</#assign>
<#assign multi = "true" >
<#assign update_col = update_field( query, variable, collection, multi) >
${update_col}