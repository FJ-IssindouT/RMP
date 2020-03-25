// ====================================================================================
//    Show an helpbox, which provides information about utility of present module
// ====================================================================================
function helpbox() 
{
	RMPApplication.debug("Begin helpbox");
    c_debug(dbug.box, "=> Begin helpbox");
    
    var title = ${P_quoted(i18n("helpbox_Notation_title", "Aide sur le module"))};
    var content1 = ${P_quoted(i18n("helpbox_Notation_content1", "Bienvuenue sur le module <bi-14>ÉVALUATION D'INTERVENTION</bi-14>."))};
    var content2 = ${P_quoted(i18n("helpbox_Notation_content2", "Afin d'améliorer la qualité de service, les interventions peuvent être évaluées par les utilisateurs finaux."))};
    var content3 = ${P_quoted(i18n("helpbox_Notation_content3", "Ainsi, un commentaire et une notation de 1 à 5 peuvent être données par l'utilisateur."))};
    var content4 = ${P_quoted(i18n("helpbox_Notation_content4", "En cas d'insatisfaction, l'avis de l'utilisateur peut être rendu obligatoire et être transféré à un service particulier pour traitement ultérieur."))};
    dialog_success(title, content1 + "<br><br>" + content2 + "<br><br>" + content3 + "<br>" + content4);
    
    RMPApplication.debug("end helpbox");
}
