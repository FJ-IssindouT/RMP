// ====================================================================================
//    Show an helpbox, which provides information about utility of present module
// ====================================================================================
function helpbox() 
{
	RMPApplication.debug("Begin helpbox");
    c_debug(dbug.box, "=> Begin helpbox");
    
    var title = ${P_quoted(i18n("helpbox_MyTasks_title", "Aide sur le module"))};
    var content1 = ${P_quoted(i18n("helpbox_MyTasks_content1", "Bienvuenue sur le module <bi-14>MES TÂCHES</bi-14>."))};
    var content2 = ${P_quoted(i18n("helpbox_MyTasks_content2", "Vous y trouverez toutes les tâches qui vous concernent."))};
    var content3 = ${P_quoted(i18n("helpbox_MyTasks_content3", "Ces tâches sont réparties en fonction des actions attendues ou selon le module concerné."))};
    var content4 = ${P_quoted(i18n("helpbox_MyTasks_content4", "Les résultats sont donnés sous forme de tableau, que vous pouvez filtrer, exporter ou imprimer."))};
    var content5 = ${P_quoted(i18n("helpbox_MyTasks_content5", "Vous pouvez consulter les détails d'une demande ou agir dessus dans le cadre d'un workflow, en cliquant simplement dessus."))};
    dialog_success(title, content1 + "<br><br>" + content2 + "<br>" + content3 + "<br>" + content4 + "<br><br>" + content5);
    
    RMPApplication.debug("end helpbox");
}
