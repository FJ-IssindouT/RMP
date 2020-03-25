// ====================================================================================
//    Show an helpbox, which provides information about utility of present module
// ====================================================================================
function helpbox() 
{
    RMPApplication.debug("Begin helpbox");
    c_debug(dbug.box, "=> Begin helpbox");

    var title = ${P_quoted(i18n("helpbox_contact_title", "Aide sur le module"))};
    var content1 = ${P_quoted(i18n("helpbox_contact_content1", "Bienvenue dans le module <bi-14>CONTACT</bi-14>."))};
    var content2 = ${P_quoted(i18n("helpbox_contact_content2", "Vous y trouverez les moyens de contacter les services d'urgence ou communs du groupe RMSDemo."))};
    var content3 = ${P_quoted(i18n("helpbox_contact_content3", "Certains liens, tels les mails et les sites, sont cliquables pour directement vous y rendre."))};
    dialog_success(title, content1 + "<br>" + "<br>" + content2 + "<br>" + "<br>" + content3);

    RMPApplication.debug("end helpbox");
}
