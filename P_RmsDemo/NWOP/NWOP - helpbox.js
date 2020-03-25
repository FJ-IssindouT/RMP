// ====================================================================================
//    Show an helpbox, which provides information about utility of present module
// ====================================================================================
function helpbox() 
{
	RMPApplication.debug("Begin helpbox");
    c_debug(dbug.box, "=> Begin helpbox");
    
    var title = ${P_quoted(i18n("helpbox_NewWorkOrder_title", "Aide sur le module"))};
    var content1 = ${P_quoted(i18n("helpbox_NewWorkOrder_content1", "Bienvenue dans le module <bi-14>CRÉATION D'UNE DEMANDE</bi-14>."))};
    var content2 = ${P_quoted(i18n("helpbox_NewWorkOrder_content2", "Vous pouvez reporter ici tout incident relatif à un matériel ou un logiciel identifié."))};
    var content3 = ${P_quoted(i18n("helpbox_NewWorkOrder_content3", "En premier lieu, validez le lieu impacté."))};
    var content4 = ${P_quoted(i18n("helpbox_NewWorkOrder_content4", "Identifiez ensuite le matériel concerné via une sélection d'images."))};
    var content5 = ${P_quoted(i18n("helpbox_NewWorkOrder_content5", "Enfin, détaillez votre problème avant de soumettre votre ticket."))};
    var content6 = ${P_quoted(i18n("helpbox_NewWorkOrder_content6", "Un n° de d'incident vous est retourné pour le suivi."))};
    dialog_success(title, content1 + "<br><br>" + content2 + "<br><br>" + content3 + "<br>" + content4 + "<br>" + content5 + "<br><br>" + content6);
    
    RMPApplication.debug("end helpbox");
}
