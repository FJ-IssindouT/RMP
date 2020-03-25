// ====================================================================================
//    Show an helpbox, which provides information about utility of present module
// ====================================================================================
function helpbox() 
{
	RMPApplication.debug("Begin helpbox");
    c_debug(dbug.box, "=> Begin helpbox");
    
    var title = ${P_quoted(i18n("helpbox_Warehouse_title", "Aide sur le module"))};
    var content1 = ${P_quoted(i18n("helpbox_Wharehouse_content1", "Bienvenue sur le module de <bi-14>VISUALISATION DES STOCKS</bi-14>."))};
    var content2 = ${P_quoted(i18n("helpbox_Warehouse_content2", "Pour illustration, voici 2 rapports de stocks."))};
    var content3 = ${P_quoted(i18n("helpbox_Warehouse_content3", "Nous voulons montrer dans ce module notre capacité à exploiter des fichiers simples de données, type CSV."))};
    var content4 = ${P_quoted(i18n("helpbox_Warehouse_content4", "Ce module pourrait par exemple afficher un récapitualtif de l'état des stocks, fourni quotidiennement à la plateforme RMP."))};
    dialog_success(title, content1 + "<br><br>" + content2 + "<br><br>" + content3 + "<br>" + content4);
    
    RMPApplication.debug("end helpbox");
}
