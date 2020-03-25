// ======================================================================================================
// Retrieve values from country, affiliate & location to define request pattern to location collection
// ====================================================================================================
function getFilteredLocations()
{
	RMPApplication.debug("begin getFilteredLocations");
	var wos_array;
	var division_value = login.division ; 
	var region_value = login.region ;
	var location_code_value = login.location_code;
	var country_value = $("#id_countryFilter").val();
	var affiliate_value = $("#id_affiliateFilter").val();

	//  Test if global company view
	if(view ==="COMPANY" && country_value === "tous" && affiliate_value ==="tous") {
		// if global company view => no needs to indicate loçation in Service Now query
		var input = {};
		input.query = createSNQuery();
		//call api to Service Now to collect only Work Orders with active SLA
		id_get_wos_sla_api.trigger(input, {}, get_wos_sla_ok, get_wos_sla_ko);

	} else {

		// according to the location filter, we define a pattern to query RMP locations collection to obtain full informations about selected locations
		var input  = {};

		c_debug(dbug.site, "=> getFilteredLocations: switch | view = ", view);
		switch (view) {
			case "COMPANY" :
				if (country_value !== "tous") {
					input.country = country_value;	
				}
				if(affiliate_value !=="tous") {
				input.affiliate = affiliate_value;
				}
				break;

			case "COUNTRY" :
				input.country = country_value;
				if (affiliate_value !== "tous") {
					input.affiliate = affiliate_value;
				}
				break;

			case "DIVISION" :
				input.country = country_value;
				input.affiliate = affiliate_value;
				input.division = division_value;
				break;

			case "REGION" :
				input.country = country_value;
				input.affiliate = affiliate_value;
				input.region = region_value;
				break;

			case "LOCAL" :
				input.country = country_value;
				input.affiliate = affiliate_value;
				input.location_code = location_code_value;
		}
		
		//call api to location collection
		id_get_filtered_locations_api.trigger(input, {}, get_locations_ok, get_locations_ko);
	}
	RMPApplication.debug("end getFilteredLocations");
}

function get_locations_ok(result)
{
	RMPApplication.debug("begin get_locations_ok : result = " + JSON.stringify(result));
	var result_array = result.res ;
	c_debug(dbug.site, "=> get_locations_ok : var_location_list = ", var_location_list);
	

	// Define an array with composed locations name
	var location_names_array = [];
	for (var i = 0 ; i < result_array.length ; i++){
		location_name = result_array[i].location.trim() + "-" + result_array[i].location_code.trim() ;
		location_names_array.push(location_name);
	}

	// Service Now api call to collect informations needed for KPI statistics
	var selected_tab = RMPApplication.get("selected_tab");
	
	switch (selected_tab) {
		case "chart" :
			break;
		case "kpi" :
			break;
		case "map" :
			var input = {};
			input.query = createSNQuery(location_names_array);
			console.log("get_locations_ok: input = ", input);
			id_get_wos_sla_api.trigger(input, {}, get_wos_sla_ok, get_wos_sla_ko);
			break;
		default:
			break;
	};
	RMPApplication.debug("end get_locations_ok");
}

function get_locations_ko(error)
{
    RMPApplication.debug("begin get_locations_ko : error = " + JSON.stringify(error));
    // console.log("begin get_locations_ko : error = ", error);
    var error_msg = "Could not fetch datas , please try again";
    alertify.error(error_msg);
    RMPApplication.debug("end get_locations_ko");
}

function get_wos_sla_ok(result)
{
	RMPApplication.debug("begin get_wos_sla_ok : result = " + JSON.stringify(result));
	// console.log("get_wos_sla_ok: result = ", result);
	wos_array = result.result ;
	dispatchWorkOrder();
	RMPApplication.debug("end get_wos_sla_ok");
}

function get_wos_sla_ko(error)
{
	RMPApplication.debug("begin get_wos_sla_ko : error = " + JSON.stringify(error));
	// console.log("begin get_wos_sla_ko : error = ", error);
	var error_msg = "Could not fetch datas , please try again"
	alertify.error(error_msg);
	RMPApplication.debug("end get_wos_sla_ko");
}

/********************************
	fonctions transverses
*********************************/
function createSNQuery(location_names_array)
{
	RMPApplication.debug("begin createSNQuery : location_names_array = " + JSON.stringify(location_names_array));
	var sn_query = "";

	// Company definition
	sn_query += "wo_companyLIKE" + login.company;

	// only work orders with active SLA
	sn_query += "^tasksla_active=true";

	// limit results on the selected geographical region 
	if ( (location_names_array !== undefined) && (location_names_array.length !== 0) ) {

		sn_query +="^loc_nameIN";
		var locations_csv_string = "";
		for(var i = 0 ; i < location_names_array.length ; i++){
						
			if (locations_csv_string.length > 0 ) {
				locations_csv_string += "," + location_names_array[i];
			} else {
				locations_csv_string += location_names_array[i];
			}
		}
		sn_query += locations_csv_string ; 
	}
	return sn_query;
	RMPApplication.debug("end createSNQuery");
}

