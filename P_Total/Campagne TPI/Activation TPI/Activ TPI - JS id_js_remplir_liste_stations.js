// id_js_remplir_liste_stations
// => Var. listened: code_postal_bis, code_implant_bis

var code_postal_bis = RMPApplication.get("code_postal_bis");
var code_implant_bis = RMPApplication.get("code_implant_bis");
fill_stations_list();

function fill_stations_list()
{
	c_debug(debug.station, "=> BEGIN - fill_stations_list");
	var options = {};
	var my_pattern = {};
	var cp_defini = (code_postal_bis == null || code_postal_bis == "") ? false : true;
	var cimplant_defini = (code_implant_bis == null || code_implant_bis == "") ? false : true;
	id_hr_inf.setVisible(cp_defini);
	id_station_search.setVisible(cp_defini);
	if (cp_defini) {		// Plusieurs stations possibles pour ce code postal
		my_pattern.code_postal = code_postal_bis;
	} else if (cimplant_defini) {			// 1 seule station concernée
		my_pattern.code_implant = code_implant_bis;
	}
	// Récupération des stations répondant aux critères donnés
	c_debug(debug.station, "=> fill_stations_list: my_pattern = ", my_pattern);
	col_stations_total.listCallback(my_pattern, options, fill_stations_list_ok, fill_stations_list_ko);
	c_debug(debug.station, "=> END - fill_stations_list");
}

function fill_stations_list_ok(result) 
{
	c_debug(debug.station, "=> BEGIN - fill_stations_list_ok: result  = ", result);
	var vb_nom_station = new Array();
	if (result.length < 1) {
		// alert("Aucune station trouvée avec ce code implant ou code postal!");
	} else {
		for (i=0; i<result.length; i++) {
			vb_nom_station.push({"label": result[i].nom_station, "value": result[i].nom_station});
		}
		var a = new RMP_List();
		a.fromArray(vb_nom_station);
		RMPApplication.setList("vb_nom_station", a);
	}
	c_debug(debug.station, "=> fill_stations_list_ok: vb_nom_station = ", vb_nom_station);		
	c_debug(debug.station, "=> END - fill_stations_list_ok");
}

function fill_stations_list_ko(error) 
{
	c_debug(debug.station, "=> BEGIN fill_stations_list_ko: error = ", error);
    alert("=> fill_stations_list_ko: error = " + JSON.stringify(error));
    c_debug(debug.station, "=> END fill_stations_list_ko");
}
