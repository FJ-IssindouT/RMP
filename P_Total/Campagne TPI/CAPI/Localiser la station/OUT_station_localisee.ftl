<#assign station_localisee = {}>
<#assign longitude1 = {}>
<#assign longitude1 = P_json_put(longitude1, "$lt",lon_max,true)>
<#assign longitude2 = {}>
<#assign longitude2 = P_json_put(longitude2, "$gte",lon_min,true)>
<#assign latitude1 = {}>
<#assign latitude1 = P_json_put(latitude1, "$lt",lat_max,true)>
<#assign latitude2 = {}>
<#assign latitude2 = P_json_put(latitude2, "$gte",lat_min,true)>
<#assign pipeline = {}>
<#assign pipeline>{"$match": {"$and": [{"longitude":${longitude1}}, {"longitude":${longitude2}}, {"latitude":${latitude1}}, {"latitude":${latitude2}}] }}
</#assign>
<#assign station = aggregate_collection("Stations", pipeline?eval)>
<#if station?size == 0>	
	${station_localisee}
<#else>
	<#assign station_localisee = station[0]>
</#if>

${station_localisee}