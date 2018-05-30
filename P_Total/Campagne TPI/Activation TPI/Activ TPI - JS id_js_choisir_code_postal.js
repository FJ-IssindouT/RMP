// id_js_choisir_code_postal
// => Var. listened: code_postal_search

var code_postal = RMPApplication.get("code_postal_search");
stations_list_cp();

function stations_list_cp()
{
    c_debug(debug.station, "=> BEGIN - stations_list_cp");
    var cp_defini = (code_postal == null || code_postal == "") ? false : true;
    if (cp_defini) {
        RMPApplication.set("code_implant_search", "");
        RMPApplication.set("code_implant_bis", "");
        var options = {};
        var my_pattern = {};
        my_pattern.code_postal = code_postal;
        col_stations_total.listCallback(my_pattern, options, stations_list_cp_ok, stations_list_cp_ko);
    }
	c_debug(debug.station, "=> END - stations_list_cp");
}

function stations_list_cp_ok(result) 
{
    c_debug(debug.station, "=> BEGIN - stations_list_cp_ok: result  = ", result);
    RMPApplication.set("code_postal_bis", code_postal);
    c_debug(debug.station, "=> END - stations_list_cp_ok");
}
		
function stations_list_cp_ko(error) 
{
    c_debug(debug.station, "=> BEGIN stations_list_cp_ko: error = ", error);
    // alert("ERREUR: Les informations de la station ne peuvent être remplies!");
    c_debug(debug.station, "=> END stations_list_cp_ko");
}
