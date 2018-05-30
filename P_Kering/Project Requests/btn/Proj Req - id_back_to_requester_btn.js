// id_back_to_requester_btn

prepare_string_variables_array();
var myVar = setTimeout(function(){}, 1000);

id_more_info_comment_section.setVisible(true);
var id = "id_more_info_comment_section";
var dialog_title = "${i18n('back_to_requestor_title', 'Send Back To Requester')}";
$('[id="' + id + '"]').dialog({
    title: dialog_title,
    autoOpen: false,
    height: 250,
    width: "auto",
    modal: true,
    resizable: false
});
$('[id="' + id + '"] .header').css('display', 'none');
$('[id="' + id + '"]').dialog("open");