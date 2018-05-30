// id_js_set_nom_societe

var input = {};
var options = {};
id_get_user_company_api.trigger(input, options, get_user_company_ok, get_user_company_ko);

function get_user_company_ok(P_computed)
{
    RMPApplication.set("nom_de_la_societe", P_computed.company);
}
  
function get_user_company_ko(P_error)
{
    alert(JSON.stringify(P_error));
}
