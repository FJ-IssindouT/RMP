// id_js_listen_image
// listen: product_image

var img_array = JSON.parse(RMPApplication.get("my_item.product_image"));
var img_exists = (img_array.length > 0) ? true : false;
// id_my_item.id_images_preview.setVisible(img_exists);
if (img_exists) {
    var url_img = img_array[0].url;
    var html_preview = '<tr><td align="center"><div style="text-align=center"><img src="' + url_img + '" width="150" height="150"></div></td></tr>';
    var dom_product_img = document.getElementById("id_my_item.id_product_abbreviate_panel");
    dom_product_img.rows[2].cells[0].innerHTML = html_preview;
}
