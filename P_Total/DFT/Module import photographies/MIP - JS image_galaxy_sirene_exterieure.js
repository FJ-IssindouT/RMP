// ========================================
// id_js_img_galaxy_sirene_exterieure script
// ========================================

// Sirène extérieure
function galaxy_sirene_exterieure()
{
    var variables = JSON.parse(RMPApplication.getAllApplicationVariables());
    var a = [];
    var b = []; 
    var c = "[";

    for (i=0; i<variables.length; i++) {
        if (variables[i].includes("variable_input_galaxy_sirene_exterieure")) {
            a.push(variables[i]);
        }
        if (variables[i].includes("variable_large_galaxy_sirene_exterieure")) {
            b.push(variables[i]);
        }
    }

    var j=1;
    for (i=0; i<b.length && i<a.length; i++) {
        var dispositif = "Sirène extérieure - Numéro du dispositif : " + RMPApplication.get(a[i]);
        var id = JSON.parse(RMPApplication.get(b[i]))[0].id;
        var name = JSON.parse(RMPApplication.get(b[i]))[0].name;
        var url = "https://live.runmyprocess.com/pub/112501470993352978/upload/" + id + "/" + name + "?method=GET";

        c = c + "{" + '"dispositif"' + ":" + '"' + dispositif + '"' + "," + '"url"' + ":" + '"' + url + '"' + "}" + ",";
        j++;
    }

    c = c.substring(0, c.length-1);
    c = c + "]";
    if (c=="]") {
        c = '""';
    }
    RMPApplication.set("images_galaxy_sirene_exterieure", c);

}
