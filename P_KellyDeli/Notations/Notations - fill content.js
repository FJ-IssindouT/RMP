// ======================================
//  fill content.js
// ======================================




// retrieve data from "KD - Evaluation" process
function fillContent()
{
    RMPApplication.debug("begin fillContent");
    c_debug(debug.content, "=> fillContent: content_value = "  + JSON.stringify(content_value));
    // var content_value = JSON.parse(RMPApplication.get("my_json"));
    $("#id_number_detail").val (content_value.FUJITSU_NUMBER);
    $("#id_contract_detail").val (content_value.company);
    $("#id_affiliate_detail").val (content_value.affiliate + "/" + content_value.LOCATION_CODE);
    $("#id_opened_detail").val (content_value.OPENED_DATE);
    // translate priority and status coming from SNOW into the user language
    var priority = translateExp(col_lang_opt.code_language, getVarPrioriyValue(content_value.PRIORITY));
    c_debug(debug.content, "=> fillContent: priority = ", priority);
    $("#id_priority_detail").val (priority);
    var status = translateExp(col_lang_opt.code_language, getVarStatusValue(content_value.STATUS));
    c_debug(debug.content, "=> fillContent: status = ", status);
    $("#id_state_detail").val (status);

    $("#id_closed_detail").val (content_value.CLOSURE_DATE);
    $("#id_short_description_detail").val (content_value.SHORT_DESCRIPTION);
    $("#id_description_detail").val (content_value.DESCRIPTION);
    RMPApplication.debug("end fillContent");
}

function fillSatisfaction()
{
    RMPApplication.debug("begin fillSatisfaction");
    c_debug(debug.content, "=> fillSatisfaction");
    // not yet evaluated & ticket status: solved or closed
    $("#id_rowSatisfaction").addClass("bkg-light-blue");
    $("#id_rowSatisfaction").show();
    $("#id_rating").show();
    $("#id_divHeartRating").show();
    $("#id_divComment").show();
    $("#id_comment").val ("");
    $("#id_comment").prop('readonly', false);
    // $("#id_divSendEval").show();
    RMPApplication.debug("end fillSatisfaction");
}

function setNotationValue(note)
{
    RMPApplication.debug("begin setNotationValue");
    c_debug(debug.content, "=> setNotationValue");
    RMPApplication.set("notation", note);
    RMPApplication.debug("end setNotationValue");
}

function check_eval(note, comments)
{
    RMPApplication.debug("begin check_eval");
    if ((parseInt(note) >= 1) && (parseInt(note) <= 3)) {
        // comment is mandatory for note <= 3
        c_debug(debug.content, "=> check_eval: note <= 3");
        if (isEmpty(comments)) {
            var title_dialog_empty = ${P_quoted(i18n("title_dialog_empty", "Commentaire obligatoire"))};
            var content_dialog_empty = ${P_quoted(i18n("content_dialog_empty", "Toute note inférieure à 3 doit être accompagnée d'un commentaire !"))};
            dialog_error(title_dialog_empty, content_dialog_empty, btn_ok);
            return false;
        } else {
            return true;
        }
    } else {
        return true;
    }
}