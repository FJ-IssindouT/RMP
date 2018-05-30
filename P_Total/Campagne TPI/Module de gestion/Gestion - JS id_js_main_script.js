function clean_item_destinataire() {
    
    id_destinataire_info.setVisible(true);
    id_destinataire_info.open();
    RMPApplication.set("my_item_destinataire", "{}");
}

function clean_item_societe_inter() {
    
    id_societe_inter_info.setVisible(true);
    id_societe_inter_info.open();
    RMPApplication.set("my_item_societe_inter", "{}");
}

// ====================
// add_destinataire
// ====================
function add_destinataire()
{
    var my_object = eval('(' + RMPApplication.get("my_item_destinataire") + ')');
    col_destinataires_pdf_tpi.saveCallback(my_object, add_destinataire_ok, add_destinataire_ko);
}

function add_destinataire_ok(result) 
{
    id_html_msg_destinataire.setHtml("<font color='green'><i>Destinataire ajouté avec succès<i></font>");
    clean_item_destinataire();
    id_report_destinataire.refresh();
}

function add_destinataire_ko(error) 
{
    //Error while adding item in the collection
    id_html_msg_destinataire.setHtml("<font color='red'><i>Une erreur s'est produite<i></font>");
}

// ====================
// delete_destinataire
// ====================
function delete_destinataire(email) 
{
    var my_pattern = {};
    my_pattern.email = email;
    var my_object = eval('(' + RMPApplication.get("my_item_destinataire") + ')');
    col_destinataires_pdf_tpi.removeCallback(my_pattern, delete_destinataire_ok, delete_destinataire_ko);
}

function delete_destinataire_ok(result)
{
    id_html_msg_destinataire.setHtml("<font color='green'><i>Destinataire supprimé avec succès<i></font>");
    id_report_destinataire.refresh();
    //empty custom widget
    RMPApplication.set("my_item_destinataire", "{}");
}

function delete_destinataire_ko(error)
{
    //Error while deleting item from the collection
    id_html_msg_destinataire.setHtml("<font color='red'><i>Erreur lors de la suppression<i></font>");
}

// ====================
// add_societe_inter
// ====================
function add_societe_inter()
{
    var my_object = eval('(' + RMPApplication.get("my_item_societe_inter") + ')');
    col_societes_inter_tpi.saveCallback(my_object, add_societe_inter_ok, add_societe_inter_ko);
}

function add_societe_inter_ok(result) 
{
    id_html_msg_societe_inter.setHtml("<font color='green'><i>Société ajoutée avec succès<i></font>");
    clean_item_societe_inter();
    id_report_societe_inter.refresh();
}

function add_societe_inter_ko(error) 
{
    //Error while adding item in the collection
    id_html_msg_societe_inter.setHtml("<font color='red'><i>Une erreur s'est produite<i></font>");
}

// ====================
// delete_societe_inter
// ====================
function delete_societe_inter(email) 
{
    var my_pattern = {};
    my_pattern.email_resp_inter = email;
    var my_object = eval('(' + RMPApplication.get("my_item_societe_inter") + ')');
    col_societes_inter_tpi.removeCallback(my_pattern, delete_societe_inter_ok, delete_societe_inter_ko);
}

function delete_societe_inter_ok(result)
{
    id_html_msg_societe_inter.setHtml("<font color='green'><i>Société supprimée avec succès<i></font>");
    id_report_societe_inter.refresh();
    //empty custom widget
    RMPApplication.set("my_item_societe_inter", "{}");
}

function delete_societe_inter_ko(error)
{
    //Error while deleting item from the collection
    id_html_msg_societe_inter.setHtml("<font color='red'><i>Erreur lors de la suppression<i></font>");
}
