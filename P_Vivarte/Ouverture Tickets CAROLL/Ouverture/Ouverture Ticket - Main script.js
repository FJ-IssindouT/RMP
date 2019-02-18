// ========================
//   id_js_def_probleme_type
// ========================
RMPApplication.debug("Closure Ticket : Application started");

// ========================
// Variables declaration
// ========================
var input = {};
var options = {};

id_get_location_codes.trigger(input, options, ok, ko);

function ok(result)
{
    //alert(JSON.stringify(result));
    var vb_location = new Array();
    for (i=0; i<result.location.length; i++) {
        if (result.location[i].location_code != null && result.location[i].location_code != "") {
            vb_location.push({
                "label": result.location[i].location_code + "-" + result.location[i].city , 
                "value": result.location[i].location_code
            });
        }
    }
    var a = new RMP_List();
    a.fromArray(vb_location);
    RMPApplication.setList("vb_location", a);
}

function ko(error)
{
    alert(JSON.stringify(error));
}

