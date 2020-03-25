// ========================
//   Visu Stock: MAIN
// ========================
RMPApplication.debug("Stock : Application started");

// ========================
// Variables declaration
// ========================

// if "true", logs will be showed on the browser console
var dbug = {
  "init" : false,
  "box" : false
};

var stock_data = null;
// Identify special DIV on HTML page
var id_last_update = $("#id_last_update");
var id_phys_stock_title = $("#id_physical_stock_title");
var id_move_report_title = $("#id_move_report_title");
var error_title_notify = ${P_quoted(i18n("error_title_notify", "Erreur"))};
var error_thanks_notify = ${P_quoted(i18n("error_thanks_notify", "Merci de signaler cette erreur !"))};
var btn_ok = ${P_quoted(i18n("btn_ok", "OK"))};

mainExec();

// ========================
// Execute main process
// ========================
function mainExec()
{
  RMPApplication.debug("begin mainExec");

  var contexte = id_context.getValue();
  c_debug(dbug.init, "=> begin mainExec: contexte = ", contexte);
  // contexte == "web" for desktop screen; otherwise (for tablet & mobile) warehouse Module is not available as actual data report's presentation is poor with Google tables

  if (contexte == "web") {       // desktop

    id_stock_section.setVisible(true);
    $("#id_spinner_stock").show();
    var option = {};
    var pattern = {};
    id_get_stock_data_api.trigger (pattern, option , load_data_ok, load_data_ko);
  
  } else {                       // tablet or mobile

    id_stock_section.setVisible(false);
    var title = ${P_quoted(i18n("error_mainExec_title", "Avertissement"))};
    var content = ${P_quoted(i18n("error_mainExec_msg", "La consultation des stocks n'est pas disponible sous tablette et mobile !"))};
    dialog_warning(title, content, btn_ok);
  }

  RMPApplication.debug("end mainExec");
}

// ============================================
// load data from CSV files
// ============================================
function load_data_ok(result) 
{
  RMPApplication.debug("begin load_data_ok : result = " + JSON.stringify(result));
  c_debug(dbug.init, "=> load_data_ok: result = ", result);
  stock_data = result;
  $("#id_spinner_stock").hide();
  
  // last update is setted with date of previous day
  var yesterday = moment().subtract(1, 'days').format("DD/MM/YYYY 19:00");
  // id_last_update.append('Statut au ' + result.last_update);
  id_last_update.append('Statut au ' + yesterday);
  id_last_update.show();

  loadLibrary();        // prepare data before showing on the screen
  RMPApplication.debug("end load_data_ok");
}

function load_data_ko(error) 
{
  RMPApplication.debug("load_data_ko : " + JSON.stringify(error));
  c_debug(dbug.init, "=> load_data_ko: error = ", error);
  var error_msg = ${P_quoted(i18n("load_data_ko_msg", "Récupération impossible des données CSV !"))};
  notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
  id_last_update.hide();
  $("#id_spinner_stock").hide();
  RMPApplication.debug("end load_data_ko");
}

// ============================================
// load Google Table Library
// ============================================
function loadLibrary() 
{
  RMPApplication.debug("begin loadLibrary");
  c_debug(dbug.init, "=> loadLibrary");

  // load Google Table Library
  google.charts.load('current', {'packages':['table']});
  google.charts.setOnLoadCallback(prepareTable);
  RMPApplication.debug("end loadLibrary");
}

// ============================================
// prepare data before drawing the table
// ============================================
function prepareTable() 
{
  RMPApplication.debug("begin prepareTable");
  c_debug(dbug.init, "=> prepareTable");
  // var virtual_stock_data = null;

  // Options giver before drawing the table "Physical Stock"
  var physical_stock_data = stock_data.file_1_data;
  var options_1 = {};
  options_1.title_text = "Stock Physique";
  options_1.str_col = [ 0, 1, 2 ];
  options_1.num_col = [ 3, 4, 5, 6, 7, 8, 9, 10 ];
  options_1.bool_col = [ 11 ];
  options_1.id_div = 'id_physical_stock';
  options_1.show_num = false;
  options_1.width_tab = '100%';
  options_1.height_tab = '100%';
  // Define table's title
  id_phys_stock_title.append(options_1.title_text);
  id_phys_stock_title.addClass('curr-period');
  id_phys_stock_title.show();
  drawTable(physical_stock_data, options_1);

  // Options giver before drawing the table "Move Report"
  var move_report_data = stock_data.file_2_data;
  var options_2 = {};
  options_2.title_text = "Reporting Mouvement";
  options_2.str_col = null;
  options_2.num_col = [ 3 ];
  options_2.bool_col = [];
  options_2.id_div = 'id_move_report';
  options_2.show_num = false;
  options_2.width_tab = '100%';
  options_2.height_tab = '100%';
  // Define table's title
  id_move_report_title.append(options_2.title_text);
  id_move_report_title.addClass('curr-period');  
  id_move_report_title.show();
  drawTable(move_report_data, options_2);

  RMPApplication.debug("end prepareTable");
}

// ============================================
// Draw Physical Stock table
// ============================================
function drawTable(d_obj, opt)
{
  RMPApplication.debug("begin drawTable");
  c_debug(dbug.init, "=> drawTable: d_obj = ", d_obj, "\n opt = ", opt);

  $("#id_spinner_stock").show();
  var data = new google.visualization.DataTable();

  var array_data = [];
  for (i=0; i<d_obj.length; i++) {

    if (i==0) {   // add table header line with specific types
      for (j=0; j<d_obj[i].length; j++) {
        if (opt.num_col.indexOf(i) > -1) {          // data belong to number type
          data.addColumn('number', d_obj[i][j]);
        } else if (opt.bool_col.indexOf(i) > -1) {  // data belong to number type
          data.addColumn('boolean', d_obj[i][j]);
        } else {
          data.addColumn('string', d_obj[i][j]);      // otherwise, data belong to string type
        }
      }

    } else {    // entries in the table

      var data_row = [];
      for (j=0; j<d_obj[i].length; j++) {
        data_row[j] = d_obj[i][j];
      }
      c_debug(dbug.init, "=> drawTable: data_row = ", data_row);
      array_data.push(data_row);
    }
  }
  c_debug(dbug.init, "=> drawTable: array_data = ", array_data);
  data.addRows(array_data);

  var cssClassNames = {
    'oddTableRow': 'bkg-light-blue',
    'hoverTableRow': 'bkg-light-yellow'
  };

  // Load table options
  var table_options = {
    showRowNumber: opt.show_num, 
    width: opt.width_tab, 
    height: opt.height_tab,
    cssClassNames: cssClassNames,
    allowHtml: true
  };
  var table = new google.visualization.Table(document.getElementById(opt.id_div));
  //  Draw the report table
  table.draw(data, table_options);
  $("#id_spinner_stock").hide();

  RMPApplication.debug("end drawTable");
}