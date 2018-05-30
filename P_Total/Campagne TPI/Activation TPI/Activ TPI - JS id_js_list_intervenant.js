// id_js_list_intervenant
// => Var. listened: nom_de_la_societe

var my_pattern = {};
my_pattern.nom_societe = "[[nom_de_la_societe]]";
col_items.listCallback(my_pattern, {}, list_intervenant_ok, list_intervenant_ko);

function list_intervenant_ok(result) 
{
    var vb_intervenant = new Array();
    for (i=0; i<result.length; i++) {
        vb_intervenant.push({"label": result[i].intervenant, "value": result[i].intervenant});
    }

    var a = new RMP_List();
    a.fromArray(vb_intervenant);
    RMPApplication.setList("vb_intervenant", a);
}

function list_intervenant_ko(error) 
{
    alert("list_intervenant_ko: " + JSON.stringify(error));
}
