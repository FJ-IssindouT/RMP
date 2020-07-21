// =============================
// id_js_reports_alarme script
// =============================

var indice_reports_alarme = 0;

// Fonction pour ajouter des photos de caméras
function add_reports_alarme()
{
    indice_reports_alarme++;	
    
    // Création Section pour les Reports alarme
    var conf_section = {
        "id": "id_section_reports_alarme" + indice_reports_alarme,
        "js-type": "RMP_Section",
        "label": "SGVhZGVyIHRleHQ=",
        "open": "false",
        "on-open": "Y29uc29sZS5sb2coInNlY3Rpb24gb3BlbmVkIik7",
        "on-close": "Y29uc29sZS5sb2coInNlY3Rpb24gY2xvc2VkIik7"
    };
    id_section = new RMP_Section(conf_section);
    id_section.setLabel("Reports alarme");
    id_section_reports_alarme.insertAbove(id_section); 


    // Création Widget spécial pour saisie donnée pour un Report alarme
    var conf_input = {
        "id": "id_input_reports_alarme" + indice_reports_alarme,
        "label": {"text": "Numéro du dispositif : "},
        "variable":[{
            "name": "variable_input_reports_alarme" + indice_reports_alarme,
            "value": ""
        }],
        "js-type": "RMP_TextInput"
    };
    id_input = new RMP_TextInput(conf_input);
    id_section.insertInside(id_input);


    // Widget pour chargement de photo type "Plan large"
    var conf_large = {
        "id": "id_upload_large_reports_alarme" + indice_reports_alarme,
        "label": {"text": "Plan large"},
        "variable": [{
            "name": "variable_large_reports_alarme" + indice_reports_alarme,
            "value":""
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


// Fonction pour supprimer des photos déjà insérées de reports alarme
function supprimer_reports_alarme()
{
    var widgetList = RMPWidgets.getAllWidgets();

    for  (i=0; i<widgetList.length; i++) {
        if(widgetList[i].getName() == "id_input_reports_alarme" + indice_reports_alarme) {
            widgetList[i].remove();
        }
        if(widgetList[i].getName() == "id_section_reports_alarme" + indice_reports_alarme) {
            widgetList[i].remove();
        }
        if(widgetList[i].getName() == "id_upload_large_reports_alarme" + indice_reports_alarme) {
            widgetList[i].remove();
            indice_reports_alarme--;
        }
    }
}
