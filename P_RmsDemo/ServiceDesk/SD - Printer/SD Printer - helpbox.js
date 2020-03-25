// ====================================================================================
//    Show an helpbox, which provides information about utility of present module
// ====================================================================================
function helpbox() 
{
	RMPApplication.debug("Begin helpbox");
    c_debug(dbug.box, "=> Begin helpbox");
    
    var title = ${P_quoted(i18n("helpbox_PrinterIssue_title", "Aide sur le module"))};
    var content1 = ${P_quoted(i18n("helpbox_PrinterIssue_content1", "Bienvenue sur le module d' <bi-14>AUTO-DÉPANNAGE</bi-14> pour un problème Imprimante."))};
    var content2 = ${P_quoted(i18n("helpbox_PrinterIssue_content2", "A travers un parcours de questions/réponses, des solutions simples à votre problème vous seront proposées."))};
    var content3 = ${P_quoted(i18n("helpbox_PrinterIssue_content3", "Il arrive que vous puissiez vous-même solutionner le problème grâce à notre module d'auto-dépannage."))};
    var content4 = ${P_quoted(i18n("helpbox_PrinterIssue_content4", "Dans le cas contraire, vous pourrez toujours ouvrir un ticket pour remonter l'incident que vous rencontrez."))};
    var content5 = ${P_quoted(i18n("helpbox_PrinterIssue_content5", "Vous avez également l'option de joindre une photo illustrant votre problème."))};
    dialog_success(title, content1 + "<br><br>" + content2 + "<br>" + content3 + "<br>" + content4 + "<br><br>" + content5);
    
    RMPApplication.debug("end helpbox");
}
