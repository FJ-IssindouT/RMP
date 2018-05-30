RMPApplication.debug ("Application started");

// ========================
// Variables declaration
// ========================

// if "true", logs will be showed on the browser console
var debug = {
	"hidden": false,
    "init" : false,
    "prepare_data": false,
    "load_cie" : false,
    "ctrl_init" : false,
    "ano" : false,
    "test" : false,
    "test_simple": false,
    "arret_urg" : false,
    "depass": false,
    "coup_elec": false,
    "bascule_jn": false,
    "activ_eclair": false,
    "ctrl_fin": false,
    "val_debug": false
};

// keep all major information related to main widgets
var cw_infos = {
    "ctrl_init": {
        "short": "cinit",
        "name": "Contrôles initiaux",
        "id": "id_ctrl_initiaux",
        "type": "chk",
        "type_cw": "ano"
    },
    "arret_urg": {
        "short": "au",
        "name": "Arrêts d'urgence",
        "id": "id_arrets_urgence",
        "type": "chk",
        "type_cw": "ctrl_a"
    },
    "depass": {
        "short": "depass",
        "name": "DEPASS",
        "id": "id_depass",
        "type": "chk",
        "type_cw": "ctrl_a"
    },
    "coup_elec": {
        "short": "celec",
        "name": "Coupure électrique",
        "id": "id_coup_electrique",
        "type": "chk",
        "type_cw": "ctrl_a"
    },
    "bascule_jn": {
        "short": "bjn",
        "name": "Bascule JOUR/NUIT",
        "id": "id_bascule_jn",
        "type": "ta",
        "type_cw": "ctrl_s"
    },
    "activ_eclair": {
        "short": "aecl",
        "name": "Activation éclairage",
        "id": "id_activ_eclairage",
        "type": "ta",
        "type_cw": "ctrl_s"
    },
    "ctrl_fin": {
        "short": "cfin",
        "name": "Contrôles finaux",
        "id": "id_ctrl_finaux",
        "type": "ta",
        "type_cw": "ctrl_s"
    }
};

var id_sections = {
    "identification": {"id": "id_identification", "surveillance": "sans", "opened": true},
    "selection_implant": {"id": "id_selection_implant", "surveillance": "sans", "opened": true},
    "ctrl_initiaux": {"id": "id_ctrl_initiaux", "surveillance": "sans", "opened": false},
    "arrets_urgence": {"id": "id_arrets_urgence", "surveillance": "sans", "opened": false},
    "id_depassid_depass": {"id": "id_depass", "surveillance": "sans", "opened": false},
    "coup_electrique": {"id": "id_coup_electrique", "surveillance": "sans", "opened": false},
    "bascule_jn": {"id": "id_bascule_jn", "surveillance": "avec", "opened": false},
    "activ_eclairage": {"id": "id_activ_eclairage", "surveillance": "avec", "opened": false},
    "ctrl_finaux": {"id": "id_ctrl_finaux", "surveillance": "sans", "opened": false}
};

var other_var = {};         // save temporary variables
    other_var.envoyer_vers_do = "non";
    other_var.statut_global = "OK";
var var_data_pdf = {};      // data collected ready to be imported in final PDF report
var images_list = [];
var update_done, abort, response_done, execute_process = null;
var form_state;

var collectionid = "col_controle_automate_societes";

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

    form_state = RMPApplication.get("form_state");
    load_cie_list();

    if (form_state == "Initial") {
        register_actual_date();
        set_date_file_path(RMPApplication.get("date_realisation") * 1000);
    } else if  (form_state == "Clos") {        

        var surveillance = RMPApplication.get("site_tpi_24h_24");
        // show all sections
        for (key in id_sections) {

            if (eval(id_sections[key].opened)) {
                eval(id_sections[key].id).setVisible(true);
                eval(id_sections[key].id).open();
            } else {
                eval(id_sections[key].id).close();
            }
            if ((surveillance == "avec") || ((surveillance == "sans") && (id_sections[key].surveillance == "sans"))) {
                eval(id_sections[key].id).setVisible(true);
            } else {    // surveillance == "avec" && id_sections[key].surveillance == "sans"
                eval(id_sections[key].id).setVisible(false);
            }
        }
    } else {        // Statut à l'état "En cours"
    }

    RMPApplication.debug("end init");
}

// ===============================
//   Fill companies list box
// ===============================
function load_cie_list()
{
    RMPApplication.debug ("begin load_cie_list");
    c_debug(debug.load_cie, "=> load_cie_list");
    var my_pattern = {};
	var options = {};
    c_debug(debug.load, "=> load_cie_list: my_pattern = ", my_pattern);
    eval(collectionid).listCallback(my_pattern, options, load_cie_list_ok, load_cie_list_ko);
    RMPApplication.debug ("end load_cie_list");
}

function load_cie_list_ok(result) 
{
	RMPApplication.debug ("begin load_cie_list_ok");
    c_debug(debug.load_cie, "=> load_cie_list_ok: result = ", result);
	var vb_cie_arr = new Array();
	for(i=0; i<result.length; i++) {
		vb_cie_arr.push({"label": result[i].societe, "value": result[i].societe.toLowerCase()});
	}

	var vb_cie_list = new RMP_List();
	vb_cie_list.fromArray(vb_cie_arr);
	RMPApplication.setList("vb_cie_list", vb_cie_list);
	RMPApplication.debug ("end load_cie_list_ok");
}

function load_cie_list_ko(error)
{
	RMPApplication.debug ("begin load_cie_list_ko");
    c_debug(debug.load_cie, "=> load_cie_list_ko: error = ", error);
	var error_msg = ${P_quoted(i18n("load_cie_list_ko_msg", "Génération impossible de la liste des sociétés intervenantes!"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug ("end load_cie_list_ko");
}

// return a part of PDF file path, composed by intervention date
function set_date_file_path(timestamp_in_millisec)
{
    RMPApplication.debug ("begin date_file_path");
    c_debug(debug.prepare_data, "=> date_file_path: timestamp_in_millisec = ", timestamp_in_millisec);

    var today = new Date(timestamp_in_millisec);
    var dd = today.getDate();
    var mm = today.getMonth() + 1;  //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    var date_file_path_str = yyyy + "-" + mm  + "-" + dd;
    c_debug(debug.prepare_data, "=> date_file_path: date_file_path_str = ", date_file_path_str);
    RMPApplication.set("date_file_path", date_file_path_str);
    other_var.date_file_path = RMPApplication.get("date_file_path");
    RMPApplication.debug ("end date_file_path");
}

// register actual date & time
function register_actual_date()
{
    RMPApplication.debug ("begin register_actual_date");
    var my_date = new Date();  
    var currentTime = Math.round(my_date.getTime()/1000);  
    c_debug(debug.prepare_data, "=> register_actual_date: currentTime = ", currentTime);
    RMPApplication.setVariable("date_realisation", currentTime);
    other_var.date_realisation = RMPApplication.get("date_realisation");
    RMPApplication.debug ("end register_actual_date");
}

// check if mandatory are filled, save some datas and show next section to complete
function start_intervention()
{
    RMPApplication.debug ("begin start_intervention");

    // list of mandatory varaiables
    var mandatory_var = [
        "donneur_ordre",
        "email_donneur_ordre",
        "societe_inter",
        "technicien_intervenant",
        "email_resp_intervenant",
        "code_implant"
    ];
    var completed = true;

    // test if all mandatory fields are completed
    for (i=0; i<mandatory_var.length; i++) {
        c_debug(debug.ctrl_init,"=> valid start: mantarory_var = ", RMPApplication.get(mandatory_var[i]));
        if (isEmpty(RMPApplication.get(mandatory_var[i]))) {
            completed = false;
            break;
        }
    }

    if (completed) {

        // State of request is now "in progress/En cours"
        RMPApplication.set("form_state", "En cours");

        // hide identification and selection implant sections
        id_start_ctrl_valid_btn.setVisible(false);
        id_identification.close();
        id_selection_implant.close();

        // show next section
        id_ctrl_initiaux.setActive(true);
        id_ctrl_initiaux.setVisible(true);
        id_ctrl_initiaux.open();
        return true;                // Saving form to avoid any lost datas

    } else {

        var content = ${P_quoted(i18n("form_valid_ko_msg", "Tous les champs obligatoires(*) n'ont pas été complétés!"))};
        dialog_error(error_title_notify, content + "\n", btn_ok);
        return false;               // Not saving the form     
    }

    RMPApplication.debug ("end start_intervention");
}

// save datas from identification section
function get_ident()
{
    var ident = {
        "donneur_ordre": RMPApplication.get("donneur_ordre"),
        "email_donneur_ordre": RMPApplication.get("email_donneur_ordre"),
        "maitre_oeuvre": RMPApplication.get("maitre_oeuvre"),
        "societe_inter": RMPApplication.get("societe_inter"),
        "technicien_intervenant": RMPApplication.get("technicien_intervenant"),
        "email_resp_intervenant": RMPApplication.get("email_resp_intervenant"),
        "date_realisation": RMPApplication.get("date_realisation"),
        "date_realisation_str": RMPApplication.get("date_realisation_str")
    }
    // stocke ident dans le widget var_ident
    RMPApplication.set("var_ident", JSON.stringify(ident));
}

// save datas from selection_implant section
function get_station()
{
    // save_address();
    var station = {
        "code_implant": RMPApplication.get("code_implant"),
        "site_tpi_24h_24": RMPApplication.get("site_tpi_24h_24"),
        "nom_station": RMPApplication.get("nom_station"),
        "cp_station": RMPApplication.get("cp_station"),
        "ville_station": RMPApplication.get("ville_station"),
        "adresse_station": RMPApplication.get("cp_station") + " - " + RMPApplication.get("ville_station"),
        "tel_station": RMPApplication.get("tel_station")
    }
    // stocke ident dans le widget var_ident
    RMPApplication.set("var_station", JSON.stringify(station));
}


// generate complete address thants to different station fields
/*function save_address()
{
    RMPApplication.debug ("begin save_address");
    var cp_st = RMPApplication.get("cp_station");
    var city_st = RMPApplication.get("ville_station");

    var adresse_complete = cp_st + " - " + city_st;
    c_debug(debug.prepare_data, "=> save_address: adresse_complete = ", adresse_complete);
    RMPApplication.set("adresse_complete", adresse_complete);

    RMPApplication.debug ("end save_address");
}*/

// convert period (in milliseconds) to string (format HH:mm)
function timestamp_to_time(t_stamp_ms)
{
    RMPApplication.debug ("begin timestamp_to_time");
    c_debug(debug.prepare_data, "=> timestamp_to_time: timestamp_in_ms = ", t_stamp_ms);
    var n_time = moment(t_stamp_ms).format("HH:mm");
    return n_time;
    RMPApplication.debug ("end timestamp_to_time");
}

// extract time from string date(format HH:mm)
function extract_time(date_str)
{
    RMPApplication.debug ("begin extract_time");
    c_debug(debug.prepare_data, "=> extract_time: date_str = ", date_str);
    var time_str = date_str.substr(11,5);
    return time_str;
    RMPApplication.debug ("end extract_time");
}

// convert period (in milliseconds) to string (format HH:mm)
function timestamp_to_delay(t_stamp_ms)
{
    RMPApplication.debug ("begin timestamp_to_delay");
    c_debug(debug.prepare_data, "=> timestamp_to_delay: timestamp_in_ms = ", t_stamp_ms);

    if (t_stamp_ms == 0) {
        return "00:00";
    } else {

        var seconds = (t_stamp_ms / 1000).toFixed(0);
        var minutes = Math.floor(seconds / 60);
        var hours = "";
        if (minutes > 59) {
            hours = Math.floor(minutes / 60);
            minutes = minutes - (hours * 60);
            hours = (hours == 0) ? "" : pad(hours) + "h";
        }
        minutes = (minutes == 0) ? "00" : pad(minutes);
        seconds = Math.floor(seconds % 60);
        seconds = (seconds == 0) ? "" : pad(seconds);
        
        return hours + minutes + ":" + seconds;
    }

    RMPApplication.debug ("end timestamp_to_delay");
}

function pad(num) 
{
    return ("0" + num).slice(-2);
}

// calculate delay between two dates given in timestamp (format milliseconds)
function get_delay(t_end, t_start)
{
    RMPApplication.debug ("begin get_delay");
    c_debug(debug.prepare_data, "=> get_delay: Heure de fin (" + t_end + "ms) = ", moment(t_end).format("HH:mm"));
    c_debug(debug.prepare_data, "_____________ Heure de début (" + t_start + "ms) = ", moment(t_start).format("HH:mm"));
    var delay = t_end - t_start;
    c_debug(debug.prepare_data, "_____________ Délai (" + delay +"ms) = ", moment(delay).format("mm:ss"));
    return delay;
    RMPApplication.debug ("end get_delay");
}


// set inactive previous section's fields and active the next section (if exists)
// Object format & content (example)
/***********************************************
    var object_cw = {
        "widget_title": "DEPASS",
        "widget_name": "depass",
        "widget_obj": depass,
        "previous_widget": "id_depass";,
        "next_widget": "id_coup_electrique",
        "val_debug": debug.depass
    }
***********************************************/
function set_inactive(obj_cw)
{
    RMPApplication.debug ("begin set_inactive");
    // Set inactive all fields to prevent futur changes by technician
    eval(obj_cw.previous_widget).close(true);
    for (key in obj_cw.widget_obj) {
        c_debug(debug.val_debug, "====================================");
        c_debug(debug.val_debug, "=> " + obj_cw.widget_title + ": Set inactive [" + key + "]");
        var key2 = obj_cw.widget_name;
        var main_type = (isEmpty(cw_infos[key2].type)) ? "" : "_" + cw_infos[key2].type;
        eval("id_" + key + main_type).setActive(false);
    }

    // set inactive all fields contained in AU sub-widgets to prevent futur changes by technician
    for (key in obj_cw.widget_obj) {
        if (!(isEmpty(obj_cw.widget_obj[key].parent_var))) {
            var set_ina = "\"" + obj_cw.widget_obj[key].parent_var + ".set_inactive\"";
            c_debug(debug.val_debug, "=> " + obj_cw.widget_title + ": set_ina = ", set_ina);
            // Tag value to execute process to set inactive all sub-fields
            RMPApplication.set(eval(set_ina), true);
        }
    }

    // set inactive all fields contained in Anomalie sub-widget
    // As requested by our customer, we let the technician to upload pictures later
    /*for (key in obj_cw.widget_obj) {
        if (!(isEmpty(obj_cw.widget_obj[key].parent_var))) {        
            var set_ina_ano = "\"" + obj_cw.widget_obj[key].parent_var + ".test_ano.set_inactive\"";
            RMPApplication.set(eval(set_ina_ano), true);
        }
    }*/

    // set not-visible all important fields/button from previous section
    // eval(obj_cw.previous_widget + "_valid_btn").setVisible(false);
    // eval(obj_cw.previous_widget).setActive(false);

    // Show next section (if exists) and all related fields to be filled
    if (!(isEmpty(obj_cw.next_widget))) {
        eval(obj_cw.next_widget).setVisible(true);
        eval(obj_cw.next_widget).setActive(true);
        eval(obj_cw.next_widget).open(true);
    }

    RMPApplication.debug ("end set_inactive");
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
                        // $("#id_lance_process_btn").click();
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
    // alert("Génération du rapport en cours, puis envoi vers votre responsable");

    // To execute before launching main closure process
    get_ident();
    get_station();

    var save_img = true;
    prepare_data_cinit(save_img);       // generate var_cinit variable
    prepare_data_au(save_img);          // generate var_au variable
    prepare_data_depass(save_img);      // generate var_depass variable
    prepare_data_celec(save_img);       // generate var_celec variable
    prepare_data_bjn(save_img);         // generate var_bjn variable
    prepare_data_aecl(save_img);        // generate var_aecl variable
    prepare_data_cfin(save_img);        // generate var_cfin variable

    get_statut_global();        // KO/OK global status
    get_delays();               // delays of PPJ and Fermeture Commerciale periods

    setTimeout (consolide_data, 2000);

    RMPApplication.debug ("end prepare_data");
}

function get_statut_global()
{
    RMPApplication.debug ("begin get_statut_global");
    // "KO" if an "anomalie" is reported without any repair on site
    other_var.statut_global = RMPApplication.get("statut_global");
    RMPApplication.debug ("end get_statut_global");
}

function get_delays()
{
    RMPApplication.debug ("begin get_delays");
    // Delai entre création et fin PPJ
    var delai_ppj = get_delay(ctrl_fin.cfin_cloture_ppj.end_time, ctrl_init.cinit_ppj.start_time);
    var delai_ppj_str = timestamp_to_delay(delai_ppj);
    RMPApplication.set("delai_ppj", delai_ppj_str);
    other_var.delai_ppj_str = RMPApplication.get("delai_ppj");
    
    // Delai entre fermeture et réouverture commerciale
    var indispo_commerciale = get_delay(ctrl_fin.cfin_reouv_com.end_time, ctrl_init.cinit_ferm_com.start_time);
    var indispo_commerciale_str = timestamp_to_delay(indispo_commerciale);
    RMPApplication.set("indispo_commerciale", indispo_commerciale_str);
    other_var.indispo_commerciale_str = RMPApplication.get("indispo_commerciale");

    RMPApplication.debug ("end get_delays");
}

function consolide_data()
{
    RMPApplication.debug ("begin consolide_data");
    RMPApplication.set("other_var", other_var);
    var_data_pdf.ctrl_init = JSON.parse(RMPApplication.get("var_cinit"));
    var_data_pdf.arret_urg = JSON.parse(RMPApplication.get("var_au"));
    var_data_pdf.depass = JSON.parse(RMPApplication.get("var_depass"));
    var_data_pdf.coup_elec = JSON.parse(RMPApplication.get("var_celec"));
    var_data_pdf.bascule_jn = JSON.parse(RMPApplication.get("var_bjn"));
    var_data_pdf.activ_eclair = JSON.parse(RMPApplication.get("var_aecl"));
    var_data_pdf.ctrl_fin = JSON.parse(RMPApplication.get("var_cfin"));
    var_data_pdf.other_var = JSON.parse(RMPApplication.get("other_var"));
    RMPApplication.set("var_data_pdf", JSON.stringify(var_data_pdf));
    RMPApplication.set("images_list", JSON.stringify(images_list));
    c_debug(debug.prepare_data, "====================================");
    c_debug(debug.prepare_data, "=> prepare_data: VAR GLOBALE var_data_pdf = ", var_data_pdf);
    
    // State of request is now "Closed/Clos"
    RMPApplication.set("form_state", "Clos");
    update_done = true;
    RMPApplication.debug ("end consolide_data");
}