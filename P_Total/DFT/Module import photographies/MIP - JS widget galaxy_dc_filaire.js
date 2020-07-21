// ====================================
// id_js_galaxy_dc_filaire script
// ====================================

var indice_galaxy_dc_filaire = 0;
var nb_gxy_dc_fil_max = 10;            // Nombre maximum de DC filaire autorisés

// Fonction pour ajouter des DC filaire
function add_galaxy_dc_filaire()
{
    if (indice_galaxy_dc_filaire < nb_gxy_dc_fil_max) {
        
        indice_galaxy_dc_filaire++;	
        
        // Création Section pour les DC filaire
        var conf_section = {
            "id": "id_section_galaxy_dc_filaire" + indice_galaxy_dc_filaire,
            "js-type": "RMP_Section",
            "label": "SGVhZGVyIHRleHQ=",
            "open": "false",
            "on-open": "Y29uc29sZS5sb2coInNlY3Rpb24gb3BlbmVkIik7",
            "on-close": "Y29uc29sZS5sb2coInNlY3Rpb24gY2xvc2VkIik7"
        };
        id_section = new RMP_Section(conf_section);
        id_section.setLabel("DC filaire");
        id_section_galaxy_dc_filaire.insertAbove(id_section); 

        // Création Widget spécial pour saisie donnée pour une DC filaire
        var conf_input = {
            "id": "id_input_galaxy_dc_filaire" + indice_galaxy_dc_filaire,
            "label": {"text": "Numéro du dispositif : "},
            "variable": [{
                "name": "variable_input_galaxy_dc_filaire" + indice_galaxy_dc_filaire,
                "value": ""
            }],
            "js-type": "RMP_TextInput"
        };
        id_input = new RMP_TextInput(conf_input);
        id_section.insertInside(id_input);

        // Widget pour chargement de photo type "Plan large"
        var conf_large = {
            "id": "id_upload_large_galaxy_dc_filaire" + indice_galaxy_dc_filaire,
            "label": {"text": "Plan large"},
            "variable": [{
                "name": "variable_large_galaxy_dc_filaire" + indice_galaxy_dc_filaire,
                "value": ""
            }],
            "js-type": "RMP_FileUpload",
            "tooltip": "My tooltip",
            "action": "file_upload",
            "submit": "Submit",
            "file-exts": [
                {"ext":"png"},
                {"ext":"gif"},
                {"ext":"jpeg"},
                {"ext":"bmp"},
                {"ext":"jpg"}
            ],
            "url": "live/2/entity/0f8406f0-3cb7-11e4-804d-f0bf97e1b068/upload?appli=[[appli_id]]&context=[[context]]&P_mode=TEST&P_version="
        };
        id_upload_large = new RMP_FileUpload(conf_large);
        id_input.insertBelow(id_upload_large);
    }
}


// Fonction pour supprimer des photos déjà insérées de DC filaire
function supprimer_galaxy_dc_filaire()
{
    var widgetList = RMPWidgets.getAllWidgets();

    for (i=0 ; i<widgetList.length; i++) {
        if (widgetList[i].getName() == "id_input_galaxy_dc_filaire" + indice_galaxy_dc_filaire) {
            widgetList[i].remove();
        }
        if (widgetList[i].getName() == "id_section_galaxy_dc_filaire" + indice_galaxy_dc_filaire) {
            widgetList[i].remove();
        }
        if (widgetList[i].getName() == "id_upload_large_galaxy_dc_filaire" + indice_galaxy_dc_filaire) {
            widgetList[i].remove();
            indice_galaxy_dc_filaire--;
        }
    }
}
