// id_js_geolocaliser_station
// => Var. listened: localiser

// Teste si le mode OFFLINE de RMP est activé
if (RMP_RunMyApp.isInOfflineMode()) { 
	id_geolocaliser_station.setVisible(false);
} else {
	localiser_station();
}

function localiser_station()
{
	c_debug(debug.geolocalisation, "=> BEGIN - localiser_station");

	var pi = parseFloat(3.141592653);
	var distance_tolerance_km = 0.3;
	var latitude = parseFloat(RMPApplication.get("localiser.coordinates.latitude"));
	var latitude_rad = (parseFloat(latitude) * pi) / 180;
	var longitude = parseFloat(RMPApplication.get("localiser.coordinates.longitude"));
	c_debug(debug.geolocalisation, "=> Géolocalisation: Latitude  = ", latitude);
	c_debug(debug.geolocalisation, "------------------- Longitude = ", longitude);

	var latitude_lower_bound = latitude - parseFloat(distance_tolerance_km/111);
	var latitude_upper_bound = latitude + parseFloat(distance_tolerance_km/111);

	var longitude_lower_bound = longitude - Math.abs(parseFloat(distance_tolerance_km/(Math.cos(latitude_rad)*111)));
	var longitude_upper_bound = longitude + Math.abs(parseFloat(distance_tolerance_km/(Math.cos(latitude_rad)*111)));

	// Coordonnées de test pour une station Total à Asnières
	/* var input = {
		"latitude_lower_bound": "48.91", 
		"latitude_upper_bound": "48.92", 
		"longitude_lower_bound": "2.31", 
		"longitude_upper_bound": "2.32"
	}; */

	var input = {
		"latitude_lower_bound": latitude_lower_bound, 
		"latitude_upper_bound": latitude_upper_bound, 
		"longitude_lower_bound": longitude_lower_bound, 
		"longitude_upper_bound": longitude_upper_bound
	};

	c_debug(debug.geolocalisation, "=> Géolocalisation: input  = ", input);
	var options = {};

	// lance la CAPI pour déterminer la localisation de la station
	id_localiser_station.trigger(input, options, localiser_station_ok, localiser_station_ko);
	c_debug(debug.geolocalisation, "=> END - localiser_station");
}

function localiser_station_ok(result)
{
	c_debug(debug.geolocalisation, "=> BEGIN - localiser_station_ok: result  = ", result);
    if ((Object.keys(result.station_localisee).length == 0) || (result.station_localisee == "")) {

		// pas de correspondance trouvée via le module de Géolocalisation

    } else { 
		c_debug(debug.geolocalisation, "=> localiser_station_ok: Affectation Valeurs Informations Stations");
		id_hr_inf.setVisible(false);
		id_station_search.setVisible(false);
		RMPApplication.set("code_implant_search", result.code_implant);
		RMPApplication.set("code_implant_bis", result.code_implant);
	}
	c_debug(debug.geolocalisation, "=> END - localiser_station_ok");
}

function localiser_station_ko(P_error)
{
	c_debug(debug.geolocalisation, "=> BEGIN localiser_station_ko: Error = ", error);
    // alert("Le module de géolocalisation est indisponible." + <br/> + "Veuillez entrer directement le code implant ou le nom de la station.");
    c_debug(debug.geolocalisation, "=> END localiser_station_ko");
}
