// id_set_product_list
// listen: 

function set_product_ok(result)
{
    var vb_product = new Array();
    vb_product.push({"label": "Create new...", "value": "new"});

    var products_array = products_list.sort(sortArrayByKey({key: 'product_name', string: true}, false) );
    $.each(products_array, function() {
        var key_i = this.product_name;
        var value_i = this.product_abbreviate.toUpperCase();
        // var value_i = "&#10143; " + this.product_abbreviate.toUpperCase();
        vb_product.push({"label": key_i, "value": value_i});
    });
    c_debug(debug.item, "=> set_product_ok: vb_product = ", vb_product);

    // id_spinner.setVisible(false);
    var a = new RMP_List();
    a.fromArray(vb_product);
    RMPApplication.setList("my_item.vb_product", a);
}

function set_product_ko(error) {
    RMPApplication.debug("=> begin set_product_ko: error = " + JSON.stringify(error));
	c_debug(debug.product, "=> set_product_ko: error = ", error);
	// id_spinner.setVisible(false);
	var error_msg = ${P_quoted(i18n("set_product_ko_msg", "Error while setting products list!"))};
	// notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
	RMPApplication.debug("end set_product_ko");
}