// ========================
//   Tutoriels : MAIN
// ========================
RMPApplication.debug("Tutoriels : Application started");

function activate_printer() 
{
    RMPApplication.debug("begin activate_printer ");
    id_link.setVisible(true);
    id_retour.setVisible(true);
    id_titre.setVisible(false);
    RMPApplication.debug("end activate_printer ");
}

function retour() 
{
    RMPApplication.debug("begin retour");
    id_link.setVisible(false);
	id_retour.setVisible(false);
    id_titre.setVisible(true);
    RMPApplication.debug("end retour ");
}