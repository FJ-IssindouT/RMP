// ====================================================================================
//    Show an helpbox, which provides information about utility of present module
// ====================================================================================
function helpbox() 
{
	RMPApplication.debug("Begin helpbox");
    c_debug(dbug.box, "=> Begin helpbox");
    
    var title = ${P_quoted(i18n("helpbox_Dashboard_title", "Aide sur le module"))};
    var content1 = ${P_quoted(i18n("helpbox_Dashboard_content1", "Bienvenue dans le module des <bi-14>TABLEAUX DE BORD</bi-14>."))};
    var content2 = ${P_quoted(i18n("helpbox_Dashboard_content2", "Selon votre profil, vous aurez droit ou non de filtrer le périmètre concerné (Enseigne / Pays)."))};
    var content3 = ${P_quoted(i18n("helpbox_Dashboard_content3", "L'onglet [<b>Graphes</b>] vous donne 3 statistiques liées à la gestion des tickets sur la période donnée."))};
    var content4 = ${P_quoted(i18n("helpbox_Dashboard_content4", "L'onglet [<b>KPI</b>] montre un exemple d'autres statistiques liées à votre périmètre (données figées sur la version de démonstration)."))};
    var content5 = ${P_quoted(i18n("helpbox_Dashboard_content5", "L'onglet [<b>Cartographie</b>] vous expose en temps réel l'ensemble des incidents pour lesquels une intervention est encore en cours."))};
    var content6 = ${P_quoted(i18n("helpbox_Dashboard_content6", "La couleur du marqueur sur la carte traduit le niveau du statut."))};
    var content7 = ${P_quoted(i18n("helpbox_Dashboard_content7", "Notez que certains périmètres peuvent ne pas avoir de données liées, dûes à aucune ouverture de tickets durant cette période."))};        
    dialog_success(title, content1 + "<br><br>" + content2 + "<br><br>" + content3 + "<br><br>" + content4 + "<br><br>" + content5 + "<br>" + content6 + "<br><br>" + content7);
    
    RMPApplication.debug("end helpbox");
}
