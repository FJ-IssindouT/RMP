// ====================================================================================
//    Show an helpbox, which provides information about utility of present module
// ====================================================================================
function helpbox() 
{
	RMPApplication.debug("Begin helpbox");
    c_debug(dbug.box, "=> Begin helpbox");
    
    var title = ${P_quoted(i18n("helpbox_WorkOrderReport_title", "Aide sur le module"))};
    var content1 = ${P_quoted(i18n("helpbox_WorkOrderReport_content1", "Bienvenue dans le module du <bi-14>SUIVI DES DEMANDES</bi-14>."))};
    var content2 = ${P_quoted(i18n("helpbox_WorkOrderReport_content2", "Vous pouvez y trouver le détail des demandes du périmètre sélectionné."))};
    var content3 = ${P_quoted(i18n("helpbox_WorkOrderReport_content3", "3 recherches prédéfinies sont disponibles pour le périmètre géographique concerné (Enseigne / Pays)."))};
    var content4 = ${P_quoted(i18n("helpbox_WorkOrderReport_content4", "Vous pouvez également affiner votre recherche en utilisant les autres filtres mis à votre disposition."))};
    var content5 = ${P_quoted(i18n("helpbox_WorkOrderReport_content5", "A partir de la fenêtre de résultats, la sélection d'un ticket vous dresse une liste détaillée de ses informations, en particulier les interventions liées."))};
    dialog_success(title, content1 + "<br><br>" + content2 + "<br><br>" + content3 + "<br><br>" + content4 + "<br><br>" + content5);
    
    RMPApplication.debug("end helpbox");
}
