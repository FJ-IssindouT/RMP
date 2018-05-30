// id_js_definir_var_image
// => Var. listened: Upload

/* 
var dispositif = "Centrale d'interphonie  - Numéro du dispositif :mok ";
var id = JSON.parse(RMPApplication.get("vision_d_ensemble_signaletique_entree_d_ilot_et_poteau_d_auvent"))[0].id;
var name = JSON.parse(RMPApplication.get("vision_d_ensemble_signaletique_entree_d_ilot_et_poteau_d_auvent"))[0].name;
var url = "https://live.runmyprocess.com/pub/112501412000161590/upload/" + id + "/" + name + "?method=GET";

var c = "{" + '"dispositif"' + ":" + '"' + dispositif + '"' + "," + '"url"' + ":" + '"' + url + '"' + "}";
RMPApplication.set("image", c); 
*/

var id = JSON.parse(RMPApplication.get("vision_d_ensemble_signaletique_entree_d_ilot_et_poteau_d_auvent"))[0].id;
var name = JSON.parse(RMPApplication.get("vision_d_ensemble_signaletique_entree_d_ilot_et_poteau_d_auvent"))[0].name;
var url = "https://live.runmyprocess.com/pub/112501412000161590/upload/" + id + "/" + name + "?method=GET";
RMPApplication.set("image", id);