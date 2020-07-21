// ==================================
// id_validate_btn Pre-launch script
// ==================================

var variables = JSON.parse(RMPApplication.getAllApplicationVariables());
var b = [];
var c = [];
var trouve = true;

for (i=0; i<variables.length; i++) {
    if (variables[i].includes("variable_input")) {
        b.push(variables[i]);
    }
}
for (i=0; i<b.length; i++) {
    if (RMPApplication.get(b[i]) === "") {
        console.log(b[i]);
        trouve = false;
    }
}
if (trouve === false) {
	alert("Attention ! Un ou plusieurs équipements ont été ajouté(s) et comporte des champs vides. \n\nVous pouvez compléter les informations manquantes ou supprimer l'équipement préalablement ajouté.");
}

// récupération des images uploadées
centrale_alarme();
clavier_centrale_alarme();
antenne_externe();
detecteur_irp_double();
detecteur_irp_simple();
detecteur_mouvement();
detecteur_ouverture();
detecteur_choc();
detecteur_lasco();
bouton_huf();
medaillon_alerte();
pedale_caisse();
sirene_interieure();
sirene_exterieure();
sabot();
reports_alarme();
galaxy_centrale_alarme();
galaxy_clavier();
galaxy_sirene_interieure();
galaxy_sirene_exterieure();
galaxy_rio();
galaxy_rf();
galaxy_irv_filaire();
galaxy_irdt_filaire();
galaxy_dc_filaire();
galaxy_do_filaire();
camera_interieure();
camera_exterieure();
moniteur_video_bureau();
moniteur_video_caisse();
uc_tls();
nas();
switch_tls();
boitier_plexo();
injecteur_rackable();
injecteur_unitaire();
adhesif();
numero_serie();
detecteur_fumee();
controleur();
digicode();
interphone();
hp();
amplificateur();
centrale_interphonie();

var a = RMPApplication.get("adresse");
var b = RMPApplication.get("departement");
var c = RMPApplication.get("ville");
var d = a + ", " + b + " " + c;
RMPApplication.set("adresse_station", d);


//Script permettant de changer l'accès à une image (Privé -> Public)
var variables = JSON.parse(RMPApplication.getAllApplicationVariables());
var b = [];
var c = [];
for (i=0; i<variables.length; i++) {
    if (variables[i].includes("variable_rapproche") || variables[i].includes("variable_large") || variables[i].includes("variable_jour") || variables[i].includes("variable_nuit") || variables[i].includes("variable_vu")) {
        b.push(variables[i]);
    }
}
for (i=0; i<b.length; i++) {
    for (f=0; f<JSON.parse(RMPApplication.get(b[i])).length; f++) {
        c.push(JSON.parse(RMPApplication.get(b[i]))[f].id);
    }
}
RMPApplication.set("array_all_file", c);


// Date travaux PDF
var now = new Date(RMPApplication.get("date_realisation_num") * 1000);
var annee   = now.getFullYear();
var mois    = now.getMonth()+1;
var jour    = now.getDate();
var heure   = now.getHours();
var minute  = now.getMinutes();
var seconde = now.getSeconds();
if (mois < 10) {
    mois = "0" + mois;
}
if (jour < 10) {
    jour = "0" + jour;
}
RMPApplication.set("date_creation_pdf_int", "_" + annee + "" + mois + "" + jour + "_");

//Date collection
my_date = new Date();  
currentTime = Math.round(my_date.getTime() / 1000);  
RMPApplication.setVariable("date_num", currentTime);

true;
