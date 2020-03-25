// ====================================================================================
//    Show an helpbox, which provides information about utility of present module
// ====================================================================================
function helpbox() 
{
	RMPApplication.debug("Begin helpbox");
	c_debug(dbug.box, "=> Begin helpbox");

	var title = ${P_quoted(i18n("helpbox_VideoAssistance_title", "Aide sur le module"))};
	var content1 = ${P_quoted(i18n("helpbox_VideoAssistance_content1", "Bienvenue sur le module de <bi-14>DEMANDE D'ASSISTANCE VIDÉO</bi-14>."))};
	var content2 = ${P_quoted(i18n("helpbox_VideoAssistance_content2", "Vous pouvez formuler une requête d'assistance vidéo à distance."))};
	var content3 = ${P_quoted(i18n("helpbox_VideoAssistance_content3", "Après sélection du ticket concerné, veuillez remplir les informations qui permettront de vous contacter, ainsi que les motifs de votre demande d'assistance."))};
	var content4 = ${P_quoted(i18n("helpbox_VideoAssistance_content4", "Un technicien vous recontactera pour la session d'assistance vidéo."))};
	var content5= ${P_quoted(i18n("helpbox_VideoAssistance_content5", "<u>Remarque</u> :  le technicien consulte les demandes d'assistance vidéo sous le module [<b>Mes tâches / Assistance Video</b>]."))};
	dialog_success(title, content1 + "<br><br>" + content2 + "<br>" + content3 + "<br><br>" + content4 + "<br>" + content5);

	RMPApplication.debug("end helpbox");
}
