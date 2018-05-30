// id_js_choisir_code_implant
// => Var. listened: code_implant_search

code_implant_set();

function code_implant_set()
{
    c_debug(debug.station, "=> BEGIN - code_implant_set");
    var code_implant = RMPApplication.get("code_implant_search");
    var cimplant_defini = (code_implant == null || code_implant == "") ? false : true;
    if (cimplant_defini) {
        RMPApplication.set("code_postal_search", "");
        RMPApplication.set("code_postal_bis", "");
        RMPApplication.set("code_implant_bis", code_implant);
    }
	c_debug(debug.station, "=> END - code_implant_set");
}