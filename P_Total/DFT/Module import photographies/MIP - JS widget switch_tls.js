// ========================
// id_js_tls_switch script
// ========================

var indice_switch_tls = 0;
var nb_sw_tls_max = 3;            // Nombre maximum de switchs tls autorisés

// Fonction pour ajouter des photos de switchs
function add_switch_tls()
{
    if (indice_switch_tls < nb_sw_tls_max) {
        
        indice_switch_tls++;	
        
        // Création Section pour les switchs
        var conf_section = {
            "id": "id_section_switch_tls" + indice_switch_tls,
            "js-type": "RMP_Section",
            "label": "SGVhZGVyIHRleHQ=",
            "open": "false",
            "on-open": "Y29uc29sZS5sb2coInNlY3Rpb24gb3BlbmVkIik7",
            "on-close": "Y29uc29sZS5sb2coInNlY3Rpb24gY2xvc2VkIik7"
        };
        id_section = new RMP_Section(conf_section);
        id_section.setLabel("Switch TLS dans la baie");
        id_section_switch_tls.insertAbove(id_section); 

        // Création Widget spécial pour saisie donnée pour un switch
        var conf_input = {
            "id": "id_input_switch_tls" + indice_switch_tls,
            "label": {"text": "Numéro du dispositif : "},
            "variable": [{
                "name": "variable_input_switch_tls" + indice_switch_tls,
                "value": ""
            }],
            "js-type": "RMP_TextInput"
        };
        id_input = new RMP_TextInput(conf_input);
        id_section.insertInside(id_input);

        // Widget pour chargement de photo type "Plan large"
        var conf_large = {
            "id": "id_upload_large_switch_tls" + indice_switch_tls,
            "label": {"text": "Plan large"},
            "variable": [{
                "name": "variable_large_switch_tls" + indice_switch_tls,
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
}       // End function add_switch_tls()


// Fonction pour supprimer des photos déjà insérées de switchs
function supprimer_switch_tls()
{
    var widgetList = RMPWidgets.getAllWidgets();

    for (i=0 ; i<widgetList.length; i++) {
        if (widgetList[i].getName() == "id_input_switch_tls"+indice_switch_tls) {
            widgetList[i].remove();
        }
        if (widgetList[i].getName() == "id_section_switch_tls"+indice_switch_tls) {
            widgetList[i].remove();
        }
        if (widgetList[i].getName() == "id_upload_large_switch_tls"+indice_switch_tls) {
            widgetList[i].remove();
            indice_switch_tls--;
        }
    }
}
