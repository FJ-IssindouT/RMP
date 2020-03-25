// ====================================================================================
//    Show an helpbox, which provides information about utility of present module
// ====================================================================================
function helpbox() 
{
	RMPApplication.debug("Begin helpbox");
	c_debug(dbug.box, "=> Begin helpbox");

	var title = ${P_quoted(i18n("helpbox_ServiceDesk_title", "Aide sur le module"))};
	var content1 = ${P_quoted(i18n("helpbox_ServiceDesk_content1", "Bienvenue sur le module d' <bi-14>AUTO-DÉPANNAGE</bi-14>."))};
	var content2 = ${P_quoted(i18n("helpbox_ServiceDesk_content2", "Avant l'ouverture d'un incident, nous vous proposons de répondre à quelques questions, qui peuvent mener à vous suggérer des solutions simples à mettre en oeuvre."))};
	var content3 = ${P_quoted(i18n("helpbox_ServiceDesk_content3", "Si toutefois aucune solution n'est trouvée, alors vous aurez la possibilité d'ajouter une description lors la création d'un ticket associé à votre incident."))};
	var content4 = ${P_quoted(i18n("helpbox_ServiceDesk_content4", "Pour illustration, nous vous proposons quelques exemples d'auto-dépannage sur des équipements de base."))};    
	dialog_success(title, content1 + "<br><br>" + content2 + "<br><br>" + content3 + "<br><br>" + content4);

	RMPApplication.debug("end helpbox");
}
