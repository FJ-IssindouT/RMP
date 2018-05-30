// id_js_autocomplete
// => Var. listened: code_implant

var code_implant = RMPApplication.get("code_implant");
var my_pattern = {};
my_pattern.code_implant = code_implant;
col_stations.listCallback(my_pattern, {} , list_ok, list_ko);

function list_ok(result) 
{
	RMPApplication.set("code_implant_bis", result[0].code_implant);
    RMPApplication.set("nom_station", result[0].nom_station);
	RMPApplication.set("ville", result[0].ville);
    RMPApplication.set("departement", result[0].departement);
	RMPApplication.set("coordonnees_phone", result[0].tel);
	RMPApplication.set("nom_station_bis", result[0].nom_station);
	// RMPApplication.set("e_mail", result[0].email);
}

function list_ko(error) 
{
    alert("ko=" + JSON.stringify(error));
}