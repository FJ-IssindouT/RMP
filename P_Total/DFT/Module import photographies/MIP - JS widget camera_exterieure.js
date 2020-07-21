// =====================
// id_js_cam_ext script
// =====================

var indice_camera_exterieure = 0;
var nb_cam_ext_max = 20;        // Nombre maximum de caméras extérieures autorisées

// Fonction pour ajouter des photos de caméras
function add_camera_exterieure()
{
    if (indice_camera_exterieure < nb_cam_ext_max) {
        
        indice_camera_exterieure++;	
        
        // Création Section pour les Caméras Extérieures
        var conf_section = {
            "id": "id_section_camera_exterieure" + indice_camera_exterieure,
            "js-type": "RMP_Section",
            "label": "SGVhZGVyIHRleHQ=",
            "open": "false",
            "on-open": "Y29uc29sZS5sb2coInNlY3Rpb24gb3BlbmVkIik7",
            "on-close": "Y29uc29sZS5sb2coInNlY3Rpb24gY2xvc2VkIik7"
        };
        id_section = new RMP_Section(conf_section);
        id_section.setLabel("Caméra exterieure");
        id_section_camera_exterieure.insertAbove(id_section); 

        // Création Widget spécial pour saisie donnée pour une caméra extérieure
        var conf_input = {
            "id": "id_input_camera_exterieure" + indice_camera_exterieure,
            "label": {"text": "Numéro du dispositif : "},
            "variable": [{
                "name": "variable_input_camera_exterieure" + indice_camera_exterieure,
                "value": ""
            }],
            "js-type": "RMP_TextInput"
        };
        id_input = new RMP_TextInput(conf_input);
        id_section.insertInside(id_input);

        // Widget pour chargement de photo type "Plan large"
        var conf_large = {
            "id": "id_upload_large_camera_exterieure" + indice_camera_exterieure,
            "label": {"text": "Plan large"},
            "variable": [{
                "name": "variable_large_camera_exterieure" + indice_camera_exterieure,
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
                {"ext": "jpg"}],
            "url": "live/2/entity/0f8406f0-3cb7-11e4-804d-f0bf97e1b068/upload?appli=[[appli_id]]&context=[[context]]&P_mode=TEST&P_version="
        };
        id_upload_large = new RMP_FileUpload(conf_large);
        id_input.insertBelow(id_upload_large);

        // Widget pour chargement de photo type "Vue jour"
        var conf_jour = {
            "id": "id_upload_jour_camera_exterieure" + indice_camera_exterieure,
            "label": {"text": "Vue jour"},
            "variable": [{
                "name": "variable_jour_camera_exterieure" + indice_camera_exterieure,
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
        id_upload_jour = new RMP_FileUpload(conf_jour);
        id_upload_large.insertBelow(id_upload_jour);

        // Widget pour chargement de photo type "Vue nuit"
        var conf_nuit = {
            "id": "id_upload_nuit_camera_exterieure" + indice_camera_exterieure,
            "label": {"text": "Vue nuit"},
            "variable": [{
                "name": "variable_nuit_camera_exterieure" + indice_camera_exterieure,
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
        id_upload_nuit = new RMP_FileUpload(conf_nuit);
        id_upload_large.insertBelow(id_upload_nuit);

    }
}   // End function add_camera_exterieure()


// Fonction pour supprimer des photos déjà insérées de caméras
function supprimer_camera_exterieure() 
{
    var widgetList = RMPWidgets.getAllWidgets();

    for (i=0 ; i < widgetList.length ; i++) {
        if (widgetList[i].getName() == "id_input_camera_exterieure" + indice_camera_exterieure) {
            widgetList[i].remove();
        }
        if (widgetList[i].getName() == "id_section_camera_exterieure" + indice_camera_exterieure) {
            widgetList[i].remove();
        }
        if (widgetList[i].getName() == "id_upload_jour_camera_exterieure" + indice_camera_exterieure) {
            widgetList[i].remove();
        }
        if (widgetList[i].getName() == "id_upload_nuit_camera_exterieure" + indice_camera_exterieure) {
            widgetList[i].remove();
        }
        if (widgetList[i].getName() == "id_upload_large_camera_exterieure" + indice_camera_exterieure) {
            widgetList[i].remove();
            indice_camera_exterieure--;
        }
    }
}
