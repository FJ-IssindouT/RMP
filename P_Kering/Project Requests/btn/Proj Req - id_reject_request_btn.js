// id_reject_request_btn

prepare_string_variables_array();
var myVar = setTimeout(function(){}, 1000);

id_rejection_comment_section.setVisible(true);
var id = "id_rejection_comment_section";
var dialog_title = "${i18n('rejection_title', 'Reject')}";
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