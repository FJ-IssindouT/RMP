// Program: JS id_js_main_script.js

RMPApplication.debug ("Application started");

// ========================
// Variables declaration
// ========================

// if "true", logs will be showed on the browser console
var debug = {
	"hidden": false,
    "init": false,
    "geolocalisation": false,
    "station": false,
    "prepare_data": false
};

// List of all domains
var domaines = {
    "ilot_et_auvent": {
        "long_name": "Vision d'ensemble signalétique Entrée d'îlot et Poteau d'auvent",
        "nb_images": "",
        "img_array": []
    },
    "face_appareil_modifie": {
        "long_name": "Vue de chaque Face Appareil Distributeur Modifié (AD complet + TPI + EPEC)",
        "nb_images": "",
        "img_array": []
    },
    "depass_et_arrets_urgence": {
        "long_name": "Vue des bonbonnes Depass installées et des Arrêts d'urgence créés",
        "nb_images": "",
        "img_array": []
    },
    "noyau_interieur_tete_calculateur": {
        "long_name": "Vue du Noyau à l'intérieur de la Tête Calculateur de chaque AD modifié",
        "nb_images": "",
        "img_array": []
    },
    "palette_filmee": {
        "long_name": "Vue de la Palette filmée des matériels déposés",
        "nb_images": "",
        "img_array": []
    },
    "switch_caisse": {
        "long_name": "Vue du Switch en caisse",
        "nb_images": "",
        "img_array": []
    },
    "arrivees_reseau_baie": {
        "long_name": "Vue des Arrivées Réseau créées au niveau de la Baie LAN WAN",
        "nb_images": "",
        "img_array": []
    },
    "modifications_tgbt": {
        "long_name": "Vue des modifications réalisées au TGBT",
        "nb_images": "",
        "img_array": []
    },
    "photos_autres": {
        "long_name": "Autres Photos intéressantes",
        "nb_images": "",
        "img_array": []
    },
    "mise_service_face_tpi": {
        "long_name": "Vue de la fiche de Mise en service de chaque Face TPI",
        "nb_images": "",
        "img_array": []
    },
    "fiche_mouvement_materiel": {
        "long_name": "Fiche de Mouvement Matériel (matériels TPI/face)",
        "nb_images": "",
        "img_array": []
    },
    "bon_livraison_tpi_kits": {
        "long_name": "Vue du Bon de livraison des TPI et des kits associés",
        "nb_images": "",
        "img_array": []
    },
    "fiche_mise_service_tpi": {
        "long_name": "Vue de la fiche de Mise en service TPI installé, signée par le gérant",
        "nb_images": "",
        "img_array": []
    }
};

var other_var = {};         // save temporary variables
var var_data_pdf = {};      // data collected ready to be imported in final PDF report
var images_list;
var update_done, abort, response_done, execute_process = null;
var form_state;

// var collectionid = "col_controle_automate_societes";

var success_title_notify = ${P_quoted(i18n("success_title_notify", "Succès"))};
var error_title_notify = ${P_quoted(i18n("error_title_notify", "Erreur"))};
var btn_ok = ${P_quoted(i18n("btn_ok", "OK"))};
var error_thanks_notify = ${P_quoted(i18n("error_thanks_notify", "Merci de signaler cette erreur!"))};



// execute main program
init();


// ===============================
//   Initialization part
// ===============================
function init() 
{
    RMPApplication.debug("begin init");
    c_debug(debug.init, "=> init");

    set_email_resp_inter();
    set_destinataires_pdf();

    form_state = RMPApplication.get("form_state");

    if (form_state == "Initial") {
        register_actual_date();
        
    } else if  (form_state == "Clos") {        
    } else {        // Statut à l'état "En cours"
    }

    RMPApplication.debug("end init");
}

// set Email Resp. Intervenant
function set_email_resp_inter()
{
    RMPApplication.debug ("begin set_email_resp_inter");
    var my_pattern = {};
    var nom_societe = RMPApplication.get("nom_societe");
    my_pattern.nom_societe = nom_societe;
    c_debug(debug.init, "=> set_email_resp_inter: nom_societe = ", nom_societe);
    col_societes_inter_tpi.listCallback(my_pattern, {}, set_email_resp_inter_ok, set_email_resp_inter_ko);
    RMPApplication.debug ("end set_email_resp_inter");
}

function set_email_resp_inter_ok(result) 
{
    RMPApplication.debug ("begin set_email_resp_inter_ok");
    c_debug(debug.init, "=> set_email_resp_inter_ok: result = ", result);
    RMPApplication.set("email_resp_intervenant", result[0].email_resp_inter);
    RMPApplication.debug ("end set_email_resp_inter_ok");
}

function set_email_resp_inter_ko(error) 
{
    RMPApplication.debug ("begin set_email_resp_inter_ko");
    alert("Pas d'email correspondant au compte connecté: " + JSON.stringify(error));
    RMPApplication.debug ("end set_email_resp_inter_ko");
}

// set Destinataires rapport PDF
function set_destinataires_pdf()
{
    RMPApplication.debug ("begin set_destinataires_pdf");
    var my_pattern = {};
    var options = {};
    col_destinataires_pdf_tpi.listCallback(my_pattern, options, set_destinataires_pdf_ok, set_destinataires_pdf_ko);
    RMPApplication.debug ("end set_destinataires_pdf");
}

function set_destinataires_pdf_ok(result) 
{
    RMPApplication.debug ("begin set_destinataires_pdf_ok");
    // c_debug(debug.init, "=> set_destinataires_pdf_ok: result = ", result);
    var destinataires_pdf = "";
    for (var i=0; i<result.length; i++) {
        if (i==0) {
            destinataires_pdf += result[i].email;
        } else {
            destinataires_pdf += "," + result[i].email;
        }
    }
    c_debug(debug.init, "=> set_destinataires_pdf_ok: destinataires_pdf = ", destinataires_pdf);
    RMPApplication.set("destinataires_pdf", destinataires_pdf);
    RMPApplication.debug ("end set_destinataires_pdf_ok");
}

function set_destinataires_pdf_ko(error) 
{
    RMPApplication.debug ("begin set_destinataires_pdf_ko");
    alert("Aucun mail recensé comme destinataires des rapports PDF: " + JSON.stringify(error));
    RMPApplication.debug ("end set_destinataires_pdf_ko");
}

// register actual date & time
function register_actual_date()
{
    RMPApplication.debug ("begin register_actual_date");
    var my_date = new Date();  
    var currentTime = Math.round(my_date.getTime()/1000);  
    c_debug(debug.prepare_data, "=> register_actual_date: currentTime = ", currentTime);
    RMPApplication.setVariable("date_intervention", currentTime);
    // other_var.date_intervention = RMPApplication.get("date_intervention");
    RMPApplication.debug ("end register_actual_date");
}

function final_confirm()
{
    RMPApplication.debug ("begin final_confirm");
    c_debug(debug.prepare_data, "=> final_confirm");
    response_done = false;
    abort = false;
    update_done = false;
    modal_confirm("Êtes-vous certain de ne plus vouloir faire de modifications et de générer un rapport qui sera envoyé à votre responsable ?", "Oui", continue_process, "Non", standby);


    var check = function() {
        if (response_done == true) {
            if (abort == true) {
                // execute_process = false;
                c_debug(debug.prepare_data, "branche abandon");
                // return false;
            } else {
                c_debug(debug.prepare_data, "branche continue vers PDF");
                id_spinner.setVisible(true);
                prepare_data();

                var check2 = function() {
                    if (update_done == true) {
                        // execute_process = true;      // needed as called by pre-launch script "Envoyer la demande" button
                        c_debug(debug.prepare_data, "lancement process à venir");
                        document.getElementById("id_lance_process_btn").click();
                        id_spinner.setVisible(false);
                    } else {
                        c_debug(debug.prepare_data, "data en cours de préparation");
                        setTimeout(check2, 500); // check again in a 1/2 second
                    }
                }

                check2();
                // return true;        // needed as called by pre-launch script "Envoyer la demande" button
            }
        }
        else {
            c_debug(debug.prepare_data, "en attente réponse utilisateur");
            setTimeout(check, 500); // check again in a 1/2 second
        }
    }

    check();

    RMPApplication.debug ("end final_confirm");
}

function continue_process()
{
    RMPApplication.debug ("begin continue_process");
    abort = false;
    response_done = true;
    RMPApplication.debug ("end continue_process");
}

function standby()
{
    RMPApplication.debug ("begin standby");
    abort = true;
    response_done = true;
    RMPApplication.debug ("end standby");
}

function prepare_data()
{
    RMPApplication.debug ("begin prepare_data");
    c_debug(debug.prepare_data, "=> begin prepare_data");

    images_list = [];

    // Deal with all inserted images
    for (key in domaines) {
        
        c_debug(debug.prepare_data, "=> prepare_data: domaines[" + key + "]");
        var comments_var = "commentaires_" + key;
        var comments_id = "id_" + comments_var;
        var photos_cw_var = "photos_" + key;
        var photos_cw_id = "id_" + photos_cw_var;

        var comments_val =  eval(comments_id).getValue();
        // c_debug(debug.prepare_data, "=> prepare_data: comments_val = ", comments_val);
        var photo_cw_val =  JSON.parse(eval(photos_cw_id).getValue());
        // c_debug(debug.prepare_data, "=> prepare_data: OBJ photo_cw_val = ", photo_cw_val);
        var photo_cw_count = eval(photos_cw_id).getUploadedCount();
        // c_debug(debug.prepare_data, "=> prepare_data: photo_cw_count = ", photo_cw_count);

        domaines[key].comments = comments_val;
        domaines[key].nb_images = photo_cw_count;
        domaines[key].img_array = photo_cw_val;

        for (var i=0; i<photo_cw_count; i++) {
            // save all images which need a PUBLIC visibility
            images_list.push(photo_cw_val[i].id);
        }

    }      // FIN loop: for (key in domaines)

    c_debug(debug.prepare_data, "=> prepare_data: domaines = ", domaines);

    // Save all images into one variable
    RMPApplication.set("images_list", JSON.stringify(images_list));
    c_debug(debug.prepare_data, "=> prepare_data: images_list = ", images_list);
    
    // collect datas which will be used during the PDF generation
    RMPApplication.set("var_data_pdf", JSON.stringify(domaines));
    c_debug(debug.prepare_data, "====================================");
    c_debug(debug.prepare_data, "=> prepare_data: VAR GLOBALE var_data_pdf = ", RMPApplication.get("var_data_pdf"));

    // State of request is now "Closed/Clos"
    RMPApplication.set("form_state", "Clos");
    update_done = true;        // should be equal to "true" to launch the process

    RMPApplication.debug ("end prepare_data");
}