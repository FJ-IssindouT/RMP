var new_adr = id_new_adresse.getValue();
var adr = id_adresse.getValue();
var cp = id_code_postal.getValue();
var ville = id_ville.getValue();
var code_mag = id_code_magasin.getValue();
var mag = id_magasin.getValue();
var ens = id_enseigne_m.getSelectedValue();

// test if provided info are enough for a new location creation
var compl_adr = (isEmpty(adr) || isEmpty(cp) || isEmpty(ville)) ? false : true;
// test if provided info are enough to know what location is impacted
var compl_mag = (isEmpty(code_mag) || isEmpty(mag) || isEmpty(ens)) ? false : true;

if ( (new_adr == "" || new_adr == null) && (RMPApplication.get("material_todo") == "move") ) {
	var title = ${P_quoted(i18n("error_siteValidation_title", "Erreur"))};
	var content = ${P_quoted(i18n("error_siteValidation_msg", "Le champ Adresse de destination ne peut être vide dans le cas d'un déménagement de site ou déplacement de caisse!"))};
	var btn_ok = ${P_quoted(i18n("error_siteValidation_btn_ok", "OK"))};
	dialog_error(title, content, btn_ok);

} else if ( (RMPApplication.get("request_type") == "new_open") && ((compl_adr == false) || (compl_mag == false)) ) {
	var title2 = ${P_quoted(i18n("error_adrValidation_title", "Erreur"))};
	var content2 = ${P_quoted(i18n("error_adrValidation_msg", "Un champ nécessaire n'a pas été complété: Code Magasin, Libellé, Enseigne ou bloc adresse lors d'une création de site!"))};
	var btn_ok2 = ${P_quoted(i18n("error_adrValidation_btn_ok", "OK"))};
	dialog_error(title2, content2, btn_ok2);

} else {
	id_location_info.close();
	id_imac_request.setVisible(true);
	id_imac_request.open();
	id_save_draft.setVisible(true);
	id_transfer_to_sdmo.setVisible(true);
}
