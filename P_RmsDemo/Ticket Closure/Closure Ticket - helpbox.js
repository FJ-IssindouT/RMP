// ====================================================================================
//    Show an helpbox, which provides information about utility of present module
// ====================================================================================
function helpbox() 
{
	RMPApplication.debug("Begin helpbox");
    c_debug(dbug.box, "=> Begin helpbox");
    
    var title = ${P_quoted(i18n("helpbox_TicketClosure_title", "Aide sur le module"))};
    var content1 = ${P_quoted(i18n("helpbox_TicketClosure_content1", "Bienvenue sur le module de <bi-14>FERMETURE DE TICKET</bi-14>."))};
    var content2 = ${P_quoted(i18n("helpbox_TicketClosure_content2", "Cette interface a été pensée afin d'offrir la possibilité aux partenaires/fournisseurs de clore les interventions qui les concernent, sans pour autant avoir un accès direct à l'ITSM."))};
    var content3 = ${P_quoted(i18n("helpbox_TicketClosure_content3", "Selon le périmètre concerné (géographique, compagnie/enseigne, type de matériel...), les interventions concernées sont proposées à la sélection."))};
    var content4 = ${P_quoted(i18n("helpbox_TicketClosure_content4", "Pour clôturer une intervention, vous devez saisir des informations obligatoires."))};
    var content5 = ${P_quoted(i18n("helpbox_TicketClosure_content5", "La fermeture de l'intervention entraîne alors une mise à jour de la demande parente."))};
    dialog_success(title, content1 + "<br><br>" + content2 + "<br><br>" + content3 + "<br><br>" + content4 + "<br>" + content5);
    
    RMPApplication.debug("end helpbox");
}
