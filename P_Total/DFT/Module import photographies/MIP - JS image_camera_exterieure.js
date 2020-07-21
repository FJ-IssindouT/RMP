// ==========================
// id_js_img_cam_ext script
// ==========================

//Camera exterieure
function camera_exterieure()
{
    var variables = JSON.parse(RMPApplication.getAllApplicationVariables());
    var a = [];
    var b = [];
    var c = []; 
    var d = [];
    var e = "[";

    for (i=0; i<variables.length; i++) {
        if (variables[i].includes("variable_input_camera_exterieure")) {
            a.push(variables[i]);
        }
        if (variables[i].includes("variable_large_camera_exterieure")) {
            b.push(variables[i]);
        }
        if (variables[i].includes("variable_jour_camera_exterieure")) {
            c.push(variables[i]);
        }
        if (variables[i].includes("variable_nuit_camera_exterieure")) {
            d.push(variables[i]);
        }
    }

    var j = 1;
    for (i=0; i<b.length && i<a.length && i<c.length && i<d.length; i++) {
        var dispositif = "Caméra extérieure  - Numéro du dispositif : " + RMPApplication.get(a[i]);
        var id = JSON.parse(RMPApplication.get(b[i]))[0].id;
        var name = JSON.parse(RMPApplication.get(b[i]))[0].name;

        var id_jour = JSON.parse(RMPApplication.get(c[i]))[0].id;
        var name_jour = JSON.parse(RMPApplication.get(c[i]))[0].name;

        var id_nuit = JSON.parse(RMPApplication.get(d[i]))[0].id;
        var name_nuit = JSON.parse(RMPApplication.get(d[i]))[0].name;

        var url = "https://live.runmyprocess.com/pub/112501470993352978/upload/" + id + "/" + name + "?method=GET";
        var url_jour = "https://live.runmyprocess.com/pub/112501470993352978/upload/" + id_jour + "/" + name_jour + "?method=GET";
        var url_nuit = "https://live.runmyprocess.com/pub/112501470993352978/upload/" + id_nuit + "/" + name_nuit + "?method=GET";

        e = e + "{" + '"dispositif"' + ":" + '"' + dispositif + '"' + "," + '"url"' + ":" + '"' + url + '"' + "," + '"url_jour"' + ":" + '"' + url_jour + '"' + "," +  '"url_nuit"' + ":" + '"' + url_nuit + '"' + "}" + ",";

        j++;
    }

    e = e.substring(0, e.length-1);
    e = e + "]";
    if (e=="]") {
        e = '""';
        RMPApplication.set("images_camera_exterieure", e);
    }
    else {
        RMPApplication.set("images_camera_exterieure", e);
    }
}