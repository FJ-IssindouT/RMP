// ====================================================================================
//    Show an helpbox, which provides information about utility of present module
// ====================================================================================
function helpbox() 
{
    RMPApplication.debug("Begin helpbox");
    c_debug(dbug.update, "=> Begin helpbox");

    var title = ${P_quoted(i18n("helpbox_IMACrequest_title", "Aide sur le module"))};
    var content1 = ${P_quoted(i18n("helpbox_IMACrequest_content1", "Bienvenue dans le module de <bi-14>DEMANDE IMAC</bi-14> (Install-Move-Add-Change)."))};
    var content2 = ${P_quoted(i18n("helpbox_IMACrequest_content2", "Ce module vous permet d'effectuer des demandes, hors ouverture d'incident."))};
    var content3 = ${P_quoted(i18n("helpbox_IMACrequest_content3", "Sont traitées en particulier les demandes d'intervention globale sur magasin et les opérations sur caisse, sinon cela concerne une demande hors catalogue."))};
    var content4 = ${P_quoted(i18n("helpbox_IMACrequest_content4", "Après la sélection du site concerné, vous détaillerez la demande en question en listant les matériels concernés."))};
    var content5 = ${P_quoted(i18n("helpbox_IMACrequest_content5", "Pour rappel, une demande n'est valide que si vous fournissez une date précise d'intervention, ou à minima la semaine d'intervention."))};
    var content6 = ${P_quoted(i18n("helpbox_IMACrequest_content6", "Votre responsable de compte opérationnel réceptionnera et traitera alors votre demande."))};
    var content7 = ${P_quoted(i18n("helpbox_IMACrequest_content7", "Pour suivre vos demandes, vistez le module [<b>Mes tâches / Suivi IMAC</b>]."))};
    dialog_success(title, content1 + "<br><br>" + content2 + "<br>" + content3 + "<br><br>" + content4 + "<br>" + content5 + "<br><br>" + content6 + "<br><br>" + content7);

    RMPApplication.debug("end helpbox");
}
