// id_js_set_full_name
//  Listen variables = site_name,country,site_code,company

var code_site = "[[RMP_this.variable.site_code]]";
var nom_site = "[[RMP_this.variable.site_name]]";
var pays = "[[RMP_this.variable.country]]";
var compagnie = "[[RMP_this.variable.company]]";
var nom_complet = "";
if (isEmpty(code_site)) {
    nom_complet = compagnie;
} else {
    nom_complet = code_site;
}
nom_complet = nom_site + ' (' + nom_complet + ') | ' + pays;
RMP_this.id_full_name.setValue(nom_complet);