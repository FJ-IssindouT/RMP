{"$and":[{"details.country":"FR"},{"details.country":{"$nin":["UK"]}}]}

inject_objects(list_objects(query_pattern, "locations_vivarte"))

{"$group":{"_id":{"State":"$state"},"Total":{"$sum":"$nb_of_cars"}}}

<#assign my_pipeline1>
{"$match":{ "column_name":{"$regex" : "^${machingVariable}" , "$options" : "i" } }}
</#assign>
<#assign my_pipeline1 = my_pipeline1?eval>
<#assign res=aggregate_collection("collection_name",my_pipeline1)>
${res}