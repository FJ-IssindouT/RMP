// id_continue_btn

prepare_string_variables_array();
var myVar = setTimeout(function(){}, 1000);

var liste = "Valeur incorrecte ou manquante pour les champs suivants : " + "\n" + "\n";

if (RMPApplication.get("project_manager_name") == null) {
    liste += "- Kering Project Lead" + "\n";
}

if (liste != "Valeur incorrecte ou manquante pour les champs suivants : " + "\n" + "\n") {
    alert(liste);
} else {
    true;
} 