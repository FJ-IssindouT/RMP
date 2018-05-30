var id = "id_user_rights";
//id_user_rights is the ID of the element that we want to deploy in the window
var windowComp = $('[id="' + id + '"]').dialog({ 
                                        autoOpen: false, 
                                        modal: true, 
                                        stack: false,  
                                        width: 450,
                                        title: 'User Rights'
                                        });
id_user_rights.setVisible(true);
$(windowComp).dialog('close');