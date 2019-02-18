// =======================================
//   id_js_def_courte_description
//  liste variable(s): categorie_materiel
// =======================================

var input = {"categorie_materiel": RMPApplication.get("categorie_materiel")};
var options = {};

id_get_probleme_types.trigger(input, options, ok, ko);

function ok(result)
{		
    var vb_pb = new Array();
    for (i=0; i<result.res.length; i++) {
        if (result.res[i].SC_PROBLEMTYPE != null && result.res[i].SC_PROBLEMTYPE != "") {
            vb_pb.push({
                "label": result.res[i].SC_PROBLEMTYPE,
                "value": result.res[i].SC_PROBLEMTYPE
            });
        }
    }
    var a = new RMP_List();
    a.fromArray(vb_pb);
    RMPApplication.setList("vb_pb", a);
}

function ko(error)
{
    alert(JSON.stringify(error));
}
