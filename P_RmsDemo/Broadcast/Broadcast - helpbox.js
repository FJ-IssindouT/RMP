// ====================================================================================
//    Show an helpbox, which provides information about utility of present module
// ====================================================================================
function helpbox() 
{
	RMPApplication.debug("Begin helpbox");
	c_debug(dbug.box, "=> Begin helpbox");

    var title = ${P_quoted(i18n("helpbox_GeneralInformation_title", "Aide sur le module"))};
    var content1 = ${P_quoted(i18n("helpbox_GeneralInformation_content1", "Bienvenue sur le module de <bi-14>DIFFUSION MESSAGE GLOBAL</bi-14>."))};
    var content2 = ${P_quoted(i18n("helpbox_GeneralInformation_content2", "Vous pouvez imaginer ici, pouvoir diffuser un message d'information général à une population déterminée d'utilisateurs RMA."))};
    var content3 = ${P_quoted(i18n("helpbox_GeneralInformation_content3", "Vous avez également la possibilité de préciser la criticité du message."))};
    var content4 = ${P_quoted(i18n("helpbox_GeneralInformation_content4", "Nous vous recommandons de tester vos messages en ciblant au préalable des groupes de tests."))};
    dialog_success(title, content1 + "<br><br>" + content2 + "<br><br>" + content3 + "<br>" + content4);

	RMPApplication.debug("end helpbox");
}
