// Attente de 2s le temps que se charge la liste des langues
setTimeout(function() { 
    set_questions(); 
}, 1000);

function set_questions() {

    // Chargement de la Custom Liste des langues implémentées pour le projet KD
    var language_list = JSON.parse(id_active_languages_cl.getList()).list;
    console.log(language_list);
    // Référence du Widget model
    var id_model_widget = "id_actual_question";

    // On crée un Widget de type Input Text pour chacune des langues afin de permettre la traduction
    for (var i=language_list.length-1; i>=0 ; i--) {
        var lang = language_list[i].value.toLowerCase();
        var lab_lang = language_list[i].label;
        var conf = {
            "id": "id_actual_question_" + lang,
            "label": { 
                "text" : "Question posée [ " + lab_lang + "] ",
                "width": "200"
            },
            "variable": [{
                "name" : "actual_question_" + lang, 
                "value" : "To be translated..."
            }],
            "js-type": "RMP_TextInput",
            "lines": "3",
            "columns": "50"
        };
        var id_input = new RMP_TextInput(conf);
        console.log(id_input);
        eval(id_model_widget).insertBelow(id_input);
    }

    // Récupérer en jQuery la valeur saisie dans la zone d'input
    // $('#id_actual_question_fr').val();

}