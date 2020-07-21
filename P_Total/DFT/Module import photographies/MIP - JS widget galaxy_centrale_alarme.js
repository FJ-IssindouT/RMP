// ====================================
// id_js_galaxy_centrale_alarme script
// ====================================

var indice_galaxy_centrale_alarme = 0;
var nb_gxy_cent_alm_max = 2;            // Nombre maximum de centrales d'alarme autorisées

// Fonction pour ajouter des centrales d'alarme
function add_galaxy_centrale_alarme()
{
    if (indice_galaxy_centrale_alarme < nb_gxy_cent_alm_max) {
        
        indice_galaxy_centrale_alarme++;	
        
        // Création Section pour les Centrales d'alarme
        var conf_section = {
            "id": "id_section_galaxy_centrale_alarme" + indice_galaxy_centrale_alarme,
            "js-type": "RMP_Section",
            "label": "SGVhZGVyIHRleHQ=",
            "open": "false",
            "on-open": "Y29uc29sZS5sb2coInNlY3Rpb24gb3BlbmVkIik7",
            "on-close": "Y29uc29sZS5sb2coInNlY3Rpb24gY2xvc2VkIik7"
        };
        id_section = new RMP_Section(conf_section);
        id_section.setLabel("Centrale d'alarme");
        id_section_galaxy_centrale_alarme.insertAbove(id_section); 

        // Création Widget spécial pour saisie donnée pour une centrale d'alarme
        var conf_input = {
            "id": "id_input_galaxy_centrale_alarme" + indice_galaxy_centrale_alarme,
            "label": {"text": "Numéro du dispositif : "},
            "variable": [{
                "name": "variable_input_galaxy_centrale_alarme" + indice_galaxy_centrale_alarme,
                "value": ""
            }],
            "js-type": "RMP_TextInput"
        };
        id_input = new RMP_TextInput(conf_input);
        id_section.insertInside(id_input);

        // Widget pour chargement de photo type "Plan large"
        var conf_large = {
            "id": "id_upload_large_galaxy_centrale_alarme" + indice_galaxy_centrale_alarme,
            "label": {"text": "Plan large"},
            "variable": [{
                "name": "variable_large_galaxy_centrale_alarme" + indice_galaxy_centrale_alarme,
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


// Fonction pour supprimer des photos déjà insérées de centrales d'alarme
function supprimer_galaxy_centrale_alarme()
{
    var widgetList = RMPWidgets.getAllWidgets();

    for (i=0 ; i<widgetList.length; i++) {
        if (widgetList[i].getName() == "id_input_galaxy_centrale_alarme" + indice_galaxy_centrale_alarme) {
            widgetList[i].remove();
        }
        if (widgetList[i].getName() == "id_section_galaxy_centrale_alarme" + indice_galaxy_centrale_alarme) {
            widgetList[i].remove();
        }
        if (widgetList[i].getName() == "id_upload_large_galaxy_centrale_alarme" + indice_galaxy_centrale_alarme) {
            widgetList[i].remove();
            indice_galaxy_centrale_alarme--;
        }
    }
}
