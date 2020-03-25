// ====================================================================================
//    Show an helpbox, which provides information about utility of present module
// ====================================================================================
function helpbox() 
{
	RMPApplication.debug("Begin helpbox");
    c_debug(dbug.box, "=> Begin helpbox");
    
    var title = ${P_quoted(i18n("helpbox_AccountManagement_title", "Aide sur le module"))};
    var content1 = ${P_quoted(i18n("helpbox_AccountManagement_content1", "Bienvuenue sur le module de <bi-14>GESTION DU BACKOFFICE</bi-14>."))};
    var content2 = ${P_quoted(i18n("helpbox_AccountManagement_content2", "Cet espace est réservé aux seules personnes habilitées à gérer les collections de données."))};
    var content3 = ${P_quoted(i18n("helpbox_AccountManagement_content3", "Vous pouvez ainsi créer, modifier et supprimer des enregistrements dans les collections RMP."))};
    dialog_success(title, content1 + "<br><br>" + content2 + "<br><br>" + content3);
    
    RMPApplication.debug("end helpbox");
}
