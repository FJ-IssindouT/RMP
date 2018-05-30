// id_js_on_load

var myVar;
myVar = setTimeout(check_localisation, 5000);

function check_localisation() 
{
    if (RMPApplication.get("code_implant") == null) {
		// alert("La station n'a pas été localisée, veuillez la sélectionner manuellement, soit par code implant, soit par code postal");
	}
	id_localisation_spinner.setVisible(false);
	id_localisation_en_cours.setVisible(false);
	id_geolocaliser_station.setVisible(false);
	id_details_station.setVisible(true);
}