RMPApplication.debug ("Application started");

// ==========================================
// Initialization PART (generic variable)
// according to the context
// ==========================================

// ==========================================
// INFORMATION
// "itemid" => "Item ID" widget variable
// ==========================================

var debug = {
    "item" : true,
    "problem" : true
};


var itemName = "Problem";      // what kind of item ?
var collectionid = "col_problemes_kellydeli";
var var_tree_col = null;     // temporary problem collection object in memory
var products_list = null;    // List of product items
var selected_product = {};
var selected_problem = {};
var previous_level = {};
var next_level = {};

/* var var_list = 
{   
    "affiliates" : "affiliates",
    "class": "class",
    "family" : "family",
    "category" : "category",
    "short_cat" : "short_cat",
    "brand" : "brand",
    "model": "model",
    "sn_category": "sn_category",
    "sn_u_product_type": "sn_u_product_type",
    "problem_type": "problem_type",
    "media_name" : "media_name",
    "media_id" : "media_id",
    "media_url" : "media_url",
    "file_name" : "file_name",
    "product_img" : "product_img"    
}; */

var product_properties = 
{
    "product_name": "product_name",
    "product_abbreviate": "product_abbreviate",
    "product_image": "product_image"
};

var success_title_notify = ${P_quoted(i18n("success_title_notify", "Succès"))};
var error_title_notify = ${P_quoted(i18n("error_title_notify", "Erreur"))};
var error_thanks_notify = ${P_quoted(i18n("error_thanks_notify", "Merci de signaler cette erreur !"))};


// Execute first instruction
load_tree();


// =====================================================
// clean custom widget (CW) area before any add-action
// variable: my_item
// =====================================================
function clean_item() {
    RMPApplication.debug ("begin Item cleaned");
    // RMPApplication.set("my_item", "{}");
    RMPApplication.set("action", "add");        // to show "Créer" button
    c_debug(debug.item, "=> begin clean_item : action = ", "add");
    // RMPApplication.set("product_img", null);
    // id_product_img.refresh();
    id_my_item.id_product_selection.setVisible(true);
    id_my_item.id_product_grid.setVisible(true);
    id_my_item.id_product.setVisible(true);
    show_problem_part(false)
    id_details_item.open();
    RMPApplication.debug("end " + itemName + " Widget Area cleaned");
}

// =====================================================
//  Show problem (question) definition part
// =====================================================
function show_problem_part(bool) {
    RMPApplication.debug ("begin show_problem_part");
    // RMPApplication.set("my_item", "{}");
    // RMPApplication.set("action", "add");        // to show "Créer" button
    c_debug(debug.item, "=> begin show_problem_part: bool = ", bool);
    id_my_item.id_question_start_grid.setVisible(bool);
    id_my_item.id_section_yes.setVisible(bool);
    id_my_item.id_section_no.setVisible(bool);
    if (bool) {
        id_details_item.open();
    } else {
        id_details_item.close();
    }  
    // RMPApplication.set("product_img", null);
    // id_product_img.refresh();
}


// ======================
// add_product
// ======================
function add_product() 
{
    RMPApplication.debug ("begin add_product");
    // var product_properties = {
    //     "product_name": "product_name",
    //     "product_abbreviate": "product_abbreviate",
    //     "product_image": "product_image"
    // };
    var pattern_prop = ["product_name", "product_abbreviate"];
    var my_pattern = {};
    var my_object = { "class": "product" };
    for (key in product_properties)  {
        var temp_id = "id_my_item." + "id_" + key;
        var temp_var = "my_item." + key;
        var temp_type = eval(temp_id).getType();
        if (temp_type == "RMP_FileUpload") {
            my_object[key] = JSON.parse(RMPApplication.get(temp_var));
        } else {
            my_object[key] = RMPApplication.get(temp_var);
            for (i=0; i<pattern_prop.length; i++) {
                if (key == pattern_prop[i]) {
                    my_pattern[key] = RMPApplication.get(temp_var);
                }
            }
        }
    }
    c_debug(debug.item, "=> add_product: my_object = ", my_object);
    c_debug(debug.item, "=> add_product: my_pattern = ", my_pattern);

    if ( isEmpty(my_object.product_name) && isEmpty(my_object.product_abbreviate) && !(my_object.product_image && my_object.product_image.length) ) {
        var error_msg = ${P_quoted(i18n("add_product_msg", "L'un des champs obligatoires n'a pas été renseigné !"))};
        notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
        return;
    }
    
    if(!item_already_exists(my_pattern)) {
        // my_object.itemid = RMPApplication.uuid();
        c_debug(debug.item, "=> add_product: my_object", my_object);
        eval(collectionid).saveCallback(my_object, add_ok, add_ko);
        RMPApplication.debug ("New" + itemName.toUpperCase() + " added");
    } else {
        c_debug(debug.item, "=> add_product: product already exists");
        var error_msg = ${P_quoted(i18n("add_product_msg", "Produit déjà existant, mettre à jour via le tableau dessous !"))};
        notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    }
    RMPApplication.debug ("end add_item");
}

// ======================
// add_item
// ======================
function add_item() {
    RMPApplication.debug ("begin add_item","blue");
    var my_object = JSON.parse(RMPApplication.get("my_item"));
    RMPApplication.set("my_object.product_img", "");

    if ( isEmpty(my_object.family) && isEmpty(my_object.category) && isEmpty(my_object.brand) ) {
        alertify.error("Error: at least, family or category or brand must be set !");
        RMPApplication.debug ("Error: at least, family or category or brand must be set !");
        return;
    }
    
    if(!item_already_exists(my_object)) {
        my_object.itemid = RMPApplication.uuid();
        c_debug(debug.item, "=> add_item: my_object", my_object);
        eval(collectionid).saveCallback(my_object, add_ok, add_ko);
        RMPApplication.debug (my_object);
        RMPApplication.debug ("New" + itemName.toUpperCase() + " added");
    } else {
        alertify.error("Error: " + itemName.toUpperCase() + " already exists !")
        RMPApplication.debug (itemName.toUpperCase() + " already exists!");
    }
    RMPApplication.debug ("end add_item");
}

function add_ok(result) {
    RMPApplication.debug("begin add_ok");
    c_debug(debug.item, "=> add_ok: result", result);
    var success_msg = ${P_quoted(i18n("add_ok_msg", "Nouvelle fiche ajoutée !"))};
    notify_success(success_title_notify, success_msg);
    // clean_item();
    // id_report.refresh();
    RMPApplication.debug("end add_ok");    
}

function add_ko(result) {
    //Error while adding item in the collection
    RMPApplication.debug("begin add_ko");
    c_debug(debug.item, "=> add_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("add_ko_msg", "Sauvegarde impossible de la fiche !"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug("end add_ko");
}

// ======================
// udpate_item
// ======================
function update_ok(result) {
    RMPApplication.debug ("begin update_ok");    
    alertify.success("Success: " + itemName.toUpperCase() + " saved"); 
    id_report.refresh();
    clean_item();
    RMPApplication.debug ("end update_ok");    
}

function update_ko(result) {
    //Error while updating item in the collection
    RMPApplication.debug ("begin update_ko");    
    alertify.error("Error while saving " + itemName.toUpperCase() + " !");
    RMPApplication.debug ("end update_ko");    
}

function update_item() {
    RMPApplication.debug ("begin update_item");
    var my_pattern = {};
    my_pattern.itemid = RMPApplication.get("my_item.itemid");
    var my_object = JSON.parse(RMPApplication.get("my_item"));
    // RMPApplication.set("my_object.product_img", "");
    c_debug(debug.item, "=> update_item: my_object = ", my_object);
    eval(collectionid).updateCallback(my_pattern, my_object, update_ok, update_ko);
    RMPApplication.debug ("end update_item");    
}

// ======================
// load_item
// ======================
function load_ok(result) {
    RMPApplication.debug ("begin load_ok");
    alertify.success("Success: " + itemName.toUpperCase() + " loaded");
    c_debug(debug.item, "=> load_ok: result = ", result);
    id_details_item.setVisible(true);
    id_details_item.open();
    // RMPApplication.set("product_img", null);
    // id_product_img.refresh();
    RMPApplication.set("my_item", result[0]);
    RMPApplication.set("action", "update");
    RMPApplication.debug ("end load_ok");    
}

function load_ko(result) {
    RMPApplication.debug ("begin load_ko");    
    alertify.error("Error while loading " + itemName.toUpperCase() + " !");
    id_report.refresh();
    RMPApplication.debug ("end load_ko");    
}

function load_item(itemid) {
    RMPApplication.debug ("begin load_item");    
    var my_pattern = {};
    my_pattern.itemid = itemid;
    RMPApplication.debug ("my_pattern." + itemid + " = " + my_pattern.itemid);    
    eval(collectionid).listCallback(my_pattern, {}, load_ok, load_ko);
    RMPApplication.debug ("end load_item"); 
}

// ======================
// delete_item
// ======================
function delete_ok(result) {
    RMPApplication.debug ("begin delete_ok");    
    alertify.success(itemName.toUpperCase() + " deleted");
    id_report.refresh();
    //empty custom widget
    RMPApplication.set("my_item", "{}");
    RMPApplication.set("action", "add");
    RMPApplication.debug ("end delete_ok");    
}

function delete_ko(result) {
    //Error while deleting item from the collection
    RMPApplication.debug ("begin delete_ko");    
    alertify.error("Error while deleting " + itemName.toUpperCase() + " !");
    RMPApplication.debug ("end delete_ko");    
}

function delete_item(itemid) {
    RMPApplication.debug ("begin delete_item");    
    var my_pattern = {};
    my_pattern.itemid = itemid;
    RMPApplication.debug ("my_pattern." + itemid + " = " + my_pattern.itemid);    
    eval(collectionid).removeCallback(my_pattern, delete_ok, delete_ko);
    RMPApplication.debug ("end delete_item");    
}

// ======================
// Other functions
// ======================
function item_already_exists(my_object) {
    RMPApplication.debug ("begin function item_already_exists");
    c_debug(debug.item, "=> item_already_exists: my_object = ", my_object);
    var my_pattern = {};
    for (key in my_object)  {
        my_pattern[key] = ( my_object[key] !== "" ) ? my_object[key] : "";
    }
    var options = {};
    options.asynchronous = false;
    res = false;
    eval(collectionid).listCallback(my_pattern, options, exists_ok, exists_ko);
    RMPApplication.debug ("end function item_already_exists");
    return res;
}

function exists_ok(result)
{
    RMPApplication.debug ("begin exists_ok");
    c_debug(debug.item, "=> exists_ok: result", result);
    if(result[0]) {
        res = true;
    } else {
        res = false;
    }
    RMPApplication.debug ("end exists_ok");
}

function exists_ko(error) 
{
    RMPApplication.debug ("begin exists_ko");
    c_debug(debug.item, "=> exists_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("exists_ko_msg", "La fiche n'a pu être trouvée !"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug ("end exists_ko");
}

// ==========================
// Load tree collection
// ==========================
function load_tree()
{
    RMPApplication.debug ("begin load_tree");
    c_debug(debug.item, "=> begin load_tree");

    // query tree collection (capi)
    var input = {};
    var options = {};
    input.input_query = {};     // we load all tree's items from collection (max 1000)
    id_get_all_collection_records_api.trigger(input, options, load_tree_ok, load_tree_ko);

    RMPApplication.debug ("end load_tree"); 
}

function load_tree_ok(result) 
{	
    RMPApplication.debug ("begin load_tree_ok: result = " + JSON.stringify(result));
    c_debug(debug.item, "=> load_tree_ok: result = ", result);

	// define global variable to store tree collection
    var_tree_col = result.records;
    products_list = result.products;
    set_product_list();
	// load_prod(var_tree_col);
    RMPApplication.debug ("end load_tree_ok"); 
}

function load_tree_ko(error) 
{
    RMPApplication.debug ("begin load_tree_ko : " + JSON.stringify(error));
    c_debug(debug.item, "=> load_tree_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("load_tree_ko_msg", "Chargement impossible de la collection Problems !"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug ("end load_tree_ko");    
}

// ==========================
// Load tree collection
// ==========================
function set_product_list()
{
    c_debug(debug.item, "=> set_product_list");
    var vb_product = new Array();
    vb_product.push({"label": "Create new...", "value": "new"});

    var products_array = products_list.sort(sortArrayByKey({key: 'product_name', string: true}, false) );
    $.each(products_array, function() {
        var key_i = this.product_name;
        var value_i = this.product_abbreviate.toUpperCase();
        // var value_i = "&#10143; " + this.product_abbreviate.toUpperCase();
        vb_product.push({"label": key_i, "value": value_i});
    });
    c_debug(debug.item, "=> set_product_list: vb_product = ", vb_product);

    // id_spinner.setVisible(false);
    var a = new RMP_List();
    a.fromArray(vb_product);
    RMPApplication.setList("my_item.vb_product", a);
}

function listen_product_list()
{
    var product = id_my_item.id_product.getSelectedValue();
    var dom_product_img = document.getElementById("id_my_item.id_product_abbreviate_panel");
    var required_fields = ["product_name", "product_abbreviate", "product_image"];
    var active_fields = ["product_name", "product_abbreviate", "product_image", "add_product_btn"];
    // var not_visible_fields = ["product_image", "add_product_btn"];
    var new_or_not = (product == "new") ? true : false;

    // clean previous image
    dom_product_img.rows[2].cells[0].innerHTML = '';        

    // set required fields
    for (i=0; i<required_fields.length; i++) {
        var temp_id = eval("\"" + "id_my_item." + "id_" + required_fields[i] + "\"");
        eval(temp_id).setRequired(new_or_not);
    }
    // set active & visible fields
    for (i=0; i<active_fields.length; i++) {
        var temp_id = eval("\"" + "id_my_item." + "id_" + active_fields[i] + "\"");
        eval(temp_id).setActive(new_or_not);
        eval(temp_id).setVisible(new_or_not);
    }

    // Set loaded product's image
    if (new_or_not == false) {

        // Selection list is undefined and wait input user
        if (product == "__##prompt##__") {
            selected_product = {};
            id_my_item.id_product_abbreviate.setValue('');
        } else {

            // keep selected product
            for (j=0; j<products_list.length; j++) {
                if (products_list[j].product_abbreviate == product) {
                    selected_product = products_list[j];
                    break;
                }
            }
            c_debug(debug.item, "=> listen_product: selected_product = ", selected_product);

            id_my_item.id_product_abbreviate.setValue(selected_product.product_abbreviate);
            // show corresponding image of loaded product
            var url_img = selected_product.product_image[0].url;
            var html_preview = '<tr><td align="center"><div style="text-align=center"><img src="' + url_img + '" width="150" height="150"></div></td></tr>';
            c_debug(debug.item, "=> listen_product: html_preview = ", html_preview);
            dom_product_img.rows[2].cells[0].innerHTML = html_preview;
            id_my_item.id_product_abbreviate.setVisible(true);

            // show question part
            show_problem_part(true);
        }
    }
}