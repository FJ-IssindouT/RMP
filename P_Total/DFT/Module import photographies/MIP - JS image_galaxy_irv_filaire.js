// =============================
// id_js_img_galaxy_irv_filaire script
// =============================

// IRV filaire
function galaxy_irv_filaire()
{
    var variables = JSON.parse(RMPApplication.getAllApplicationVariables());
    var a = [];
    var b = [];
    var c = []; 
    var d = "[";

    for (i=0; i<variables.length; i++) {
        if (variables[i].includes("variable_input_galaxy_irv_filaire")) {
            a.push(variables[i]);
        }
        if (variables[i].includes("variable_large_galaxy_irv_filaire")) {
            b.push(variables[i]);
        }
        if (variables[i].includes("variable_vu_galaxy_irv_filaire")) {
            c.push(variables[i]);
        }
    }

    var j = 1;
    for (i=0; i<a.length && i<b.length && i<c.length; i++) {
        var dispositif = "IRV filaire - Numéro du dispositif : " + RMPApplication.get(a[i]);
        var id = JSON.parse(RMPApplication.get(b[i]))[0].id;
        var name = JSON.parse(RMPApplication.get(b[i]))[0].name;

        var id_vu_galaxy_irv_filaire = JSON.parse(RMPApplication.get(c[i]))[0].id;
        var name_vu_galaxy_irv_filaire = JSON.parse(RMPApplication.get(c[i]))[0].name;

        var url = "https://live.runmyprocess.com/pub/112501470993352978/upload/" + id + "/" + name + "?method=GET";
        var url_vu_galaxy_irv_filaire = "https://live.runmyprocess.com/pub/112501470993352978/upload/" + id_vu_galaxy_irv_filaire + "/" + name_vu_galaxy_irv_filaire + "?method=GET";

        d = d + "{" + '"dispositif"' + ":" + '"' + dispositif + '"' + "," + '"url"' + ":" + '"' + url + '"' + "," + '"url_vu_galaxy_irv_filaire"' + ":" + '"' + url_vu_galaxy_irv_filaire + '"' + "}" + ",";

        j++;
    }

    d = d.substring(0, d.length-1);
    d = d + "]";
    if (d=="]") {
        d = '""';
    }
    RMPApplication.set("images_galaxy_irv_filaire", d);

}