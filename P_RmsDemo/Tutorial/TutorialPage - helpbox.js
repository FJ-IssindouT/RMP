// ====================================================================================
//    Show an helpbox, which provides information about utility of present module
// ====================================================================================
function helpbox() 
{
	RMPApplication.debug("Begin helpbox");
    c_debug(dbug.box, "=> Begin helpbox");
    
    var title = ${P_quoted(i18n("helpbox_Tutorial_title", "Aide sur le module"))};
    var content1 = ${P_quoted(i18n("helpbox_Tutorial_content1", "Bienvenue sur le module <bi-14>TUTORIELS</bi-14>."))};
    var content2 = ${P_quoted(i18n("helpbox_Tutorial_content2", "Vous pouvez ou consulter de la documentation ou visionner des vidéos mis à disposition dans notre bibliothèque."))};
    dialog_success(title, content1 + "<br><br>" + content2 );
    
    RMPApplication.debug("end helpbox");
}
