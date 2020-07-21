// =============================
// id_js_detecteur_lasco script
// =============================

var indice_detecteur_lasco = 0;

// Fonction pour ajouter des photos de détecteurs Lasco
function add_detecteur_lasco()
{
    indice_detecteur_lasco++;	
    
    // Création Section pour les Détecteurs Lasco
    var conf_section = {
        "id": "id_section_detecteur_lasco" + indice_detecteur_lasco,
        "js-type": "RMP_Section",
        "label": "SGVhZGVyIHRleHQ=",
        "open": "false",
        "on-open": "Y29uc29sZS5sb2coInNlY3Rpb24gb3BlbmVkIik7",
        "on-close": "Y29uc29sZS5sb2coInNlY3Rpb24gY2xvc2VkIik7"
    };
    id_section = new RMP_Section(conf_section);
    id_section.setLabel("Détecteur Lasco");
    id_section_detecteur_lasco.insertAbove(id_section); 


    // Création Widget spécial pour saisie donnée pour une détecteur Lasco
    var conf_input = {
        "id": "id_input_detecteur_lasco" + indice_detecteur_lasco,
        "label": {"text": "Numéro du dispositif : "},
        "variable": [{
            "name": "variable_input_detecteur_lasco" + indice_detecteur_lasco,
            "value": ""
        }],
        "js-type": "RMP_TextInput"
    };
    id_input = new RMP_TextInput(conf_input);
    id_section.insertInside(id_input);


    // Widget pour chargement de photo type "Plan large"
    var conf_large = {
        "id": "id_upload_large_detecteur_lasco" + indice_detecteur_lasco,
        "label": {"text": "Plan large"},
        "variable": [{
            "name": "variable_large_detecteur_lasco" + indice_detecteur_lasco,
            "value": ""
        }],
        "js-type": "RMP_FileUpload",
        "tooltip": "My tooltip",
        "action": "file_upload",
        "submit": "Submit",
        "file-exts": [
            {"ext": "png"},
            {"ext": "gif"},
            {"ext": "jpeg"},
            {"ext": "bmp"},
            {"ext": "jpg"}
        ],
        "url": "live/2/entity/0f8406f0-3cb7-11e4-804d-f0bf97e1b068/upload?appli=[[appli_id]]&context=[[context]]&P_mode=TEST&P_version="
    };
    id_upload_large = new RMP_FileUpload(conf_large);
    id_input.insertBelow(id_upload_large);

}


// Fonction pour supprimer des photos de détecteurs Lasco
function supprimer_detecteur_lasco()
{
    var widgetList = RMPWidgets.getAllWidgets();

    for (i=0; i<widgetList.length; i++) {
        if (widgetList[i].getName() == "id_input_detecteur_lasco" + indice_detecteur_lasco) {
            widgetList[i].remove();
        }
        if (widgetList[i].getName() == "id_section_detecteur_lasco" + indice_detecteur_lasco) {
            widgetList[i].remove();
        }
        if (widgetList[i].getName() == "id_upload_large_detecteur_lasco" + indice_detecteur_lasco) {
            widgetList[i].remove();
            indice_detecteur_lasco--;
        }
    }
}
