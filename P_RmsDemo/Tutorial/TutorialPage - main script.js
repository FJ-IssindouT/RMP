// ========================
//   Tutorial Module : MAIN
// ========================
RMPApplication.debug("Main : Application started");

// ========================
// Variables declaration
// ========================

// if "true", logs will be showed on the browser console
var dbug = {
    "init" : false,
    "box" : false,
    "tuto" : false,
    "category" : false,
    "product" : false,
    "type" : false
};

var login = null;
var var_tuto_col = null;							// temporary tutorials collection object in memory
var tuto_target = null;								// valid tutorials according preselection during execution
var col_tutoriels = "col_tutoriels_bluegate";		// tutorials collection (to be changed according to the customer)

var error_title_notify = ${P_quoted(i18n("error_title_notify", "Erreur"))};
var error_thanks_notify = ${P_quoted(i18n("error_thanks_notify", "Merci de signaler cette erreur !"))};
var btn_ok = ${P_quoted(i18n("btn_ok", "OK"))};

load_tutorial();

// ==========================
//  Reset the web interface
// ==========================
function resetWI()
{
	id_new_tuto.setVisible(false);
	$("#id_categoryRow").html('');
	$("#id_productRow").html('');
	$("#id_typeRow").html('');
	$("#id_videoRow").html('');
	$("#id_categoryRow").hide();
	$("#id_productRow").hide();	
	$("#id_typeRow").hide();
	$("#id_videoRow").hide();
	$("#id_selectedCategory").removeAttr("value");
	$("#id_selectedProduct").removeAttr("value");
	$("#id_selectedType").removeAttr("value");
	load_category();
}

// ==========================
// Load tutorial collection
// ==========================
function load_tutorial()
{
	RMPApplication.debug ("begin load_tutorial"); 
	c_debug(dbug.tuto, "=> load_tutorial");
    var my_pattern = {};
    var option = {};
    eval(col_tutoriels).listCallback(my_pattern, option, load_tutorial_ok, load_tutorial_ko);
    RMPApplication.debug ("end load_tutorial"); 
}

function load_tutorial_ok(result) 
{
    RMPApplication.debug ("begin load_tutorial_ok");
    c_debug(dbug.tuto, "=> load_tutorial_ok: result = ", result);
	var_tuto_col = result;
	tuto_target = result;
	load_category();
    RMPApplication.debug ("end load_tutorial_ok");    
}

function load_tutorial_ko(error) 
{
    RMPApplication.debug ("begin load_tutorial_ko : " + JSON.stringify(error));
    c_debug(dbug.tuto, "=> load_tutorial_ok: error = ", error);
    var error_msg = ${P_quoted(i18n("load_tutorial_ko_msg", "Chargement impossible de la collection Tutoriels !"))};
    notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug ("end load_tutorial_ko");    
}

// ========================================================
//  Category selection and reduce tutorials target object
// ========================================================
function load_category()
{
	RMPApplication.debug ("begin load_category");
	c_debug(dbug.category, "=> load_category");
	if ( (var_tuto_col.length == 0) || isEmpty(var_tuto_col) ) {
    	var  title = ${P_quoted(i18n("error_load_category_title", "Tutoriel"))};
        var  content = ${P_quoted(i18n("error_load_category_msg", "Désolé, la collection Tutoriels est VIDE !"))};
        dialog_error(title, content, btn_ok);
		return;
	}

	var item_cat_menu = "";
	for (i=0; i<var_tuto_col.length; i++) {
		if (var_tuto_col[i].class == "category") {

	    		item_cat_menu += '<div id="id_itemCatMenu_' + i + '" class="col-lg-2 col-md-3 col-sm-4 col-xs-6 col-centered">'
					+ '<a class="text-center" onclick="load_product(\'' + var_tuto_col[i].category +'\');">'
					+ '<i class="homeImage">'
					+ '<img class="homeIcon" src="' + var_tuto_col[i].media_url + '?P_mode={P_mode}" /><br>'
					+ '<div class="homeThumbnail">'
					+ '<span class="homeTitle">' + var_tuto_col[i].category + '</span>'
					+ '</div></i></a></div>';
		}
	}
	c_debug(dbug.tutorial, "=> load_category: item_cat_menu = ", item_cat_menu);
	$("#id_categoryRow").append(item_cat_menu);			// show the first level "category" of the tutorials tree
	$("#id_categoryRow").show();						// hide other levels
	$("#id_productRow").hide();
	$("#id_typeRow").hide();
	$("#id_videoRow").hide();
	id_new_tuto.setVisible(false);
	RMPApplication.debug ("end load_category");
}

// ========================================================
//  Product selection and reduce tutorials target object
// ========================================================
function load_product(cat) 
{
	RMPApplication.debug ("begin load_product");	
	c_debug(dbug.product, "=> load_product: cat = ", cat);
	$("#id_selectedCategory").attr("value", cat);
    var option = {};
    var my_pattern = {};
    my_pattern.category = cat;
    eval(col_tutoriels).listCallback(my_pattern, option, load_product_ok, load_product_ko);
    RMPApplication.debug ("end load_product");
}

function load_product_ok(result) 
{
	RMPApplication.debug ("begin load_product_ok");
	c_debug(dbug.product, "=> load_product_ok: result = ", result);
	var selectedCat = $("#id_selectedCategory").val();
	var tuto_target =  result;
	var item_prod_menu = "";
	var prod_list = [];
	var reduce_prod_list = [];

	for (i=0; i<tuto_target.length; i++) {
		if ( (tuto_target[i].class == "tutorial") && (tuto_target[i].category == selectedCat) ) {
			prod_list.push(tuto_target[i].product);
		}
		reduce_prod_list = reduce_array(prod_list);		// resume products available for selected category
	}
	c_debug(dbug.product, "=> load_product_ok: reduce_prod_list = ", reduce_prod_list);

	if (reduce_prod_list.length == 0) {
		var  title = ${P_quoted(i18n("error_load_product_ok_title", "Tutoriel"))};
        var  content = ${P_quoted(i18n("error_load_product_ok_msg", "Aucun tutoriel n'est disponible pour cette branche :"))};
        dialog_error(title, content + "<br><strong>" + selectedCat + "</strong>", btn_ok);
		resetWI();
		return;

	} else {
		for (i=0; i<var_tuto_col.length; i++) {
			if (var_tuto_col[i].class == "product") {
				for (j=0; j<reduce_prod_list.length; j++) {
					if (reduce_prod_list[j] == var_tuto_col[i].product) {
						item_prod_menu += '<div id="id_itemProdMenu_' + i + '" class="col-lg-2 col-md-3 col-sm-4 col-xs-6 col-centered">'
							+ '<a class="text-center" onclick="load_type(\'' + var_tuto_col[i].product +'\');">'
							+ '<i class="homeImage">'
							+ '<img class="homeIcon" src="' + var_tuto_col[i].media_url + '?P_mode={P_mode}" /><br>'
							+ '<div class="homeThumbnail">'
							+ '<span class="homeTitle">' + var_tuto_col[i].product + '</span>'
							+ '</div></i></a></div>';
					} 
				}
			}
		}
	}
	c_debug(dbug.product, "=> load_product_ok: item_prod_menu = ", item_prod_menu);
	$("#id_productRow").append(item_prod_menu);		// prepare products to be proposed
	$("#id_productRow").show();						// show the second level "product" for selected category
	$("#id_categoryRow").hide();					// hide other levels
	$("#id_typeRow").hide();	
	$("#id_videoRow").hide();
	id_new_tuto.setVisible(true);
	RMPApplication.debug ("end load_product_ok");
}

function load_product_ko(error) 
{
    RMPApplication.debug ("begin load_product_ok : " + JSON.stringify(error));
    c_debug(dbug.product, "=> load_product_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("load_product_ko_msg", "Chargement impossible du produit !"))};
	notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify); 
    RMPApplication.debug ("end load_product_ko");    
}

// ========================================================
//  Type selection and reduce tutorials target object
// ========================================================
function load_type(prod) 
{
	RMPApplication.debug ("begin load_type");
	c_debug(dbug.type, "=> load_type: prod = ", prod);
	$("#id_selectedProduct").attr("value", prod);
    var option = {};
    var my_pattern = {};
    my_pattern.category = $("#id_selectedCategory").val();
    my_pattern.product = prod;
    eval(col_tutoriels).listCallback(my_pattern, option, load_type_ok, load_type_ko);
    RMPApplication.debug ("end load_type");
}

function load_type_ok(result) 
{
	RMPApplication.debug ("begin load_type_ok");
	c_debug(dbug.type, "=> load_type_ok: result = ", result);
	var selectedCat = $("#id_selectedCategory").val();
	var selectedProd = $("#id_selectedProduct").val();
	var tuto_target =  result;
	var item_type_menu = "";
	var type_list = [];
	var reduce_type_list = [];

	for (i=0; i<tuto_target.length; i++) {
		if ( (tuto_target[i].class == "tutorial") && (tuto_target[i].category == selectedCat) && (tuto_target[i].product == selectedProd) ) {
			type_list.push(tuto_target[i].type);
		}
		reduce_type_list = reduce_array(type_list);		// resume types available for selected product & category
	}
	c_debug(dbug.type, "=> load_type: reduce_type_list = ", reduce_type_list);

	if (reduce_type_list.length == 0) {
        var  title = ${P_quoted(i18n("error_load_type_ok_title", "Tutoriel"))};
        var  content = ${P_quoted(i18n("error_load_type_ok_msg", "Aucun tutoriel n'est disponible pour cette branche :"))};
        dialog_error(title, content + "<br><strong>" + selectedCat + ' - ' + selectedProd + "</strong>", btn_ok);
		resetWI();
		return;

	} else {
		for (i=0; i<var_tuto_col.length; i++) {
			if (var_tuto_col[i].class == "type") {
				for (j=0; j<reduce_type_list.length; j++) {
					if (reduce_type_list[j] == var_tuto_col[i].type) {
						item_type_menu += '<div id="id_itemTypeMenu_' + i + '" class="col-lg-2 col-md-3 col-sm-4 col-xs-6 col-centered">'
							+ '<a class="text-center" onclick="select_tuto(\'' + var_tuto_col[i].type +'\');">'
							+ '<i class="homeImage">'
							+ '<img class="homeIcon" src="' + var_tuto_col[i].media_url + '?P_mode={P_mode}" /><br>'
							+ '<div class="homeThumbnail">'
							+ '<span class="homeTitle">' + var_tuto_col[i].type + '</span>'
							+ '</div></i></a></div>';
					}
				}
			}
		}
	}
	c_debug(dbug.type, "=> load_type: item_type_menu = ", item_type_menu);
	$("#id_typeRow").append(item_type_menu);			// prepare types to be proposed
	$("#id_typeRow").show();							// show the third level "product" for selected category & product
	$("#id_categoryRow").hide();						// hide other levels
	$("#id_productRow").hide();	
	$("#id_videoRow").hide();
	id_new_tuto.setVisible(true);
	RMPApplication.debug ("end load_type_ok");	
}

function load_type_ko(error) 
{
    RMPApplication.debug ("begin load_type_ko : " + JSON.stringify(error));
    c_debug(dbug.type, "=> load_type_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("load_type_ko_msg", "Chargement impossible du type de tutoriel !"))};
	notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify); 
    RMPApplication.debug ("end load_type_ko");    
}

// ===================================================================
//  According to previous choices => tutorial video is visible or not
// ===================================================================
function select_tuto(type) 
{
	RMPApplication.debug ("begin select_tuto");
	c_debug(dbug.tuto, "=> select_tuto: type = ", type);
	$("#id_selectedType").attr("value", type);
    var option = {};
    var my_pattern = {};
    my_pattern.category = $("#id_selectedCategory").val();
    my_pattern.product = $("#id_selectedProduct").val();
    my_pattern.type = type;
    eval(col_tutoriels).listCallback(my_pattern, option, select_tuto_ok, select_tuto_ko);
	RMPApplication.debug ("end select_tuto");
}

function select_tuto_ok(result) 
{
	RMPApplication.debug ("begin select_tuto_ok");
	c_debug(dbug.tuto, "=> select_tuto_ok: result = ", result);
	var divTuto = "";
	var selectedCat = $("#id_selectedCategory").val();
	var selectedProd = $("#id_selectedProduct").val();
	var selectedType = $("#id_selectedType").val();

	// find the chosen tutorial if existing according previous selections and show it
	for (i=0; i<var_tuto_col.length; i++) {
		if (var_tuto_col[i].class == "tutorial") {
			if ( (var_tuto_col[i].category == selectedCat) && (var_tuto_col[i].product == selectedProd)	&& (var_tuto_col[i].type == selectedType) ) {

/*				divTuto += '<div class="text-center"><div class="embed-responsive embed-responsive-4by3">'
					+ '<h5 class="homeTitle"><strong>' + var_tuto_col[i].media_name + '</strong></h5>'
					+ '<video class="embed-responsive-item" controls>'
					+ '<source src="' + var_tuto_col[i].media_url + '" type="video/mp4">'
					+ '</video>'
					+ '</div></div>';*/

				divTuto += '<div class="text-center">'
					+ '<h5 class="homeTitle"><strong>' + var_tuto_col[i].media_name + '</strong></h5><br>'
					+ '<a href="'  + var_tuto_col[i].media_url + '?P_mode={P_mode}" target="_blank">'
					+ '<img class="homeIcon" src="https://live.runmyprocess.com/live/112501480325272109/upload/831cfda0-2694-11e7-aa47-0639651b3341/video_play.png" /><br>'
					+ '</a>'
					// + '<div class="embed-responsive embed-responsive-4by3">'
					// + '<iframe src="' + var_tuto_col[i].media_url + '" width="640" height="480"></iframe>'
					// + '<iframe src="' + var_tuto_col[i].media_url + '"></iframe>'
					// + '</div></div>';
					+ '</div>';
				break;
			}
		}
	}
	c_debug(dbug.tuto, "=> select_tuto_ok: divTuto = ", divTuto);
	if (isEmpty(divTuto)) {
		var  title = ${P_quoted(i18n("error_select_tuto_ok_title", "Tutoriel"))};
        var  content = ${P_quoted(i18n("error_select_tuto_ok_msg", "Il n'y a pas de video pour cet équipement :"))};
        dialog_error(title, content + "<br><strong>" + selectedType + ' - ' + selectedCat + ' - ' + selectedProd + "</strong>", btn_ok);
		resetWI();

	} else {
		$("#id_videoRow").append(divTuto);
		$("#id_categoryRow").hide();
		$("#id_productRow").hide();
		$("#id_typeRow").hide();
		$("#id_videoRow").show();
		id_new_tuto.setVisible(true);
	}
	RMPApplication.debug ("end select_tuto_ok");	
}

function select_tuto_ko(error) 
{
    RMPApplication.debug ("begin select_tuto_ko : " + JSON.stringify(error));
    c_debug(dbug.tuto, "=> load_type_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("select_tuto_ko_msg", "Chargement impossible du tutoriel !"))};
	notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify); 
    RMPApplication.debug ("end select_tuto_ko");    
}
