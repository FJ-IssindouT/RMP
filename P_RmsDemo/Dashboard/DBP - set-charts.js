// ==========================
//   Dashboard: CHARTS part
// ==========================
RMPApplication.debug("Dashboard : CHARTS part started");

// ========================
// Variables declaration
// ========================

var ready = false;			// special variable use as flag to tell if function 
var wo_query = {};			// query to Service Now Work Order table
var wm_order_query = {};	// query to Service Now Work Order table
var data_query = {};

// Keep different periods query 
var input_current_month = {};
var input_previous_month = {};
var input_current_quarter = {};
var input_previous_quarter = {};
var input_current_exercise = {};
var input_previous_exercise = {};
// Identify special DIV for graphical charts
var id_currMonth = $("#id_current_month");
var id_prevMonth = $("#id_previous_month");
var id_currQuart = $("#id_current_quarter");
var id_prevQuart = $("#id_previous_quarter");
var id_currExercise = $("#id_current_exercise");
var id_prevExercise = $("#id_previous_exercise");
// We register the different period to be considered
var reports_list = {
    "current_month" : "current_month", 
	"previous_month" : "previous_month", 
	"current_quarter" : "current_quarter", 
	"previous_quarter" : "previous_quarter", 
	"current_exercise" : "current_exercise"
	// "previous_exercise" : "previous_exercise"
};

var error_chart_title = ${P_quoted(i18n("error_chart_title", "Information"))};
var error_chart_msg = ${P_quoted(i18n("error_chart_msg", "Aucune donnée à afficher pour cette période"))};
var chart_title_notify = ${P_quoted(i18n("chart_title_notify", "Erreur"))};
var chart_thanks_notify = ${P_quoted(i18n("chart_thanks_notify", "Merci de signaler cette erreur!"))};
var chart_btn_ok = ${P_quoted(i18n("chart_btn_ok", "OK"))};

// following collections could be used in the future
// var col_pannes = "col_kpi_panne_vite";

setLabels();	// set Labels for different periods

// setBreakdownRate();

// ==================================
// set Labels for different periods
// ==================================
function setLabels () 
{
	RMPApplication.debug("begin setLabels");
	c_debug(debug.chart, "=> setLabels"); 
	$("#id_spinner_search").show();

	// hide actual & previous period during definitions
	id_currMonth.hide();
	id_prevMonth.hide();
	id_currQuart.hide();
	id_prevQuart.hide();
	id_currExercise.hide();
	id_prevExercise.hide();

	// Definition of content labels
	var curr_month = getLongMonth(Date.now());
	var prev_month = getPrevLongMonth(Date.now());
	var curr_quarter = getCurrentQuarter();
	var prev_quarter = getPreviousQuarter();
	var curr_year = getCurrentYear();
	var prev_year = getPreviousYear(); 
	var next_year = getNextYear();
	var today = new Date();
	var num_curr_month = getNumberMonth(today);

	var month_text = ${P_quoted(i18n('month_period_text', 'Mois'))};
	var quarter_text = ${P_quoted(i18n('quarter_period_text', 'Q'))};
	var year_text = ${P_quoted(i18n('year_period_text', 'Exercice'))};

	id_currMonth.append(month_text + ': ' + curr_month);
	id_prevMonth.append(month_text + ': ' + prev_month);
	id_currQuart.append(quarter_text + curr_quarter.num + ' - ' + curr_quarter.year);
	id_prevQuart.append(quarter_text + prev_quarter.num + ' - ' + prev_quarter.year);

	if (FIRSTMONTHOFEXERCISE == "01") {
		id_currExercise.append(year_text + ': ' + curr_year);
		id_prevExercise.append(year_text + ': ' + prev_year);		
	} else {
		if (num_curr_month < FIRSTMONTHOFEXERCISE) {
			prev_year -= 1;
			curr_year -= 1;
			next_year -= 1;
		}
		id_currExercise.append(year_text + ': ' + curr_year + ' / ' + next_year);
		id_prevExercise.append(year_text + ': ' + prev_year + ' / ' + curr_year);
	}
	RMPApplication.debug("end setLabels");
}

// ===============================================
//  prepare queries to be submitted to Service Now
// ===============================================
function getFilter() 		
{
	RMPApplication.debug("begin getFilter");
	c_debug(debug.chart, "=> getFilter");
	$("#id_spinner_search").show();
	/*var current_month_query = "^wo_opened_atBETWEEN" + getFirstDayCurrentMonth() + "@" + getLastDayCurrentMonth();
	var previous_month_query = "^wo_opened_atBETWEEN" + getFirstDayPreviousMonth() + "@" + getLastDayPreviousMonth();
	var current_quarter_query = "^wo_opened_atBETWEEN" + getFirstDayCurrentQuarter() + "@" + getLastDayCurrentQuarter();
	var previous_quarter_query = "^wo_opened_atBETWEEN" + getFirstDayPreviousQuarter() + "@" + getLastDayPreviousQuarter();
	var current_exercise_query = "^wo_opened_atBETWEEN" + getFirstDayCurrentExercise(FIRSTMONTHOFEXERCISE) + "@" + getLastDayCurrentExercise(FIRSTMONTHOFEXERCISE);
	var previous_exercise_query = "^wo_opened_atBETWEEN" + getFirstDayPreviousExercise(FIRSTMONTHOFEXERCISE) + "@" + getLastDayPreviousExercise(FIRSTMONTHOFEXERCISE);
	// we retrieve datas from previous and current exercise
	var two_exercises_query = "^wo_opened_atBETWEEN" + getFirstDayPreviousExercise(FIRSTMONTHOFEXERCISE) + "@" + getLastDayCurrentMonth();	*/
	var today = new Date();
	var num_curr_month = today.getMonth() + 1;
	var num_first_moe = Number(FIRSTMONTHOFEXERCISE);
	if (((num_curr_month + 12 - num_first_moe)%12) > 3) {
		var current_exercise_query = "^wo_opened_atBETWEEN" + getFirstDayCurrentExercise(FIRSTMONTHOFEXERCISE) + "@" + getLastDayCurrentExercise(FIRSTMONTHOFEXERCISE);
	} else {
		var current_exercise_query = "^wo_opened_atBETWEEN" + getFirstDayPreviousQuarter() + "@" + getLastDayCurrentExercise(FIRSTMONTHOFEXERCISE);	
	}
	
	var sn_query_charts = "co_parentLIKE" + login.company;

	// following any change to affiliate filter, we use contractsListQuery, already defined :)
	sn_query_charts += contractsListQuery;
	sn_query_charts += locationsListQuery;

	/*current_month_query = sn_query_charts + current_month_query;
	previous_month_query = sn_query_charts + previous_month_query;
	current_quarter_query = sn_query_charts + current_quarter_query;
	previous_quarter_query = sn_query_charts + previous_quarter_query;
	current_exercise_query = sn_query_charts + current_exercise_query;
	previous_exercise_query = sn_query_charts + previous_exercise_query;
	sn_query_charts += two_exercises_query;*/
	current_exercise_query = sn_query_charts + current_exercise_query;

	wo_query = {};			// reset of previous
	/*wo_query.current_month = {"sn_query" : current_month_query};
	wo_query.previous_month = {"sn_query" : previous_month_query};
	wo_query.current_quarter = {"sn_query" : current_quarter_query};
	wo_query.previous_quarter = {"sn_query" : previous_quarter_query};
	wo_query.current_exercise = {"sn_query" : current_exercise_query};
	wo_query.previous_exercise = {"sn_query" : previous_exercise_query};*/
	wo_query.current_exercise = {"sn_query" : current_exercise_query};
	
	c_debug(debug.chart, "getFilter: wo_query = ", wo_query);
	
	// load Google Charts Library
	google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    RMPApplication.debug("end getFilter");
}

// ===============================================
//  prepare queries to be submitted to Service Now
// ===============================================
function drawChart()
{
	RMPApplication.debug("begin drawChart");
	c_debug(debug.chart, "=> drawChart");

	var options = {};
	// Following CAPI is only implemented for 6 periods (current & previous months, quarters, exercises)
	id_get_report_datas_api.trigger(wo_query, options, wo_list_ok, wo_list_ko);
	
	RMPApplication.debug("end drawChart");
}

// ===============================================================
//  Calculate et define all datas needed to draw different charts
// ===============================================================
function wo_list_ok(P_computed)
{
	RMPApplication.debug("begin wo_list_ok : ", JSON.stringify(P_computed));
	c_debug(debug.chart, "=> wo_list_ok: P_computed = ", P_computed);

	var wm_order_list = P_computed.result;
	
	for (var i=0; i<wm_order_list.length; i++) {
		var v_ol = wm_order_list[i];
		var wo_opened_at = Date.parse(v_ol.wo_opened_at);
		// Calculate if work order creation date belongs to specific periods
		var in_period = {};
		in_period.current_month = ( (Date.parse(getFirstDayCurrentMonth()) <= wo_opened_at) && (wo_opened_at <= (Date.parse(getLastDayCurrentMonth()))) ) ? true : false;
		in_period.previous_month = ( (Date.parse(getFirstDayPreviousMonth()) <= wo_opened_at) && (wo_opened_at <= (Date.parse(getLastDayPreviousMonth()))) ) ? true : false;
		in_period.current_quarter =  ( (Date.parse(getFirstDayCurrentQuarter()) <= wo_opened_at) && (wo_opened_at <= (Date.parse(getLastDayCurrentQuarter()))) ) ? true : false;
		in_period.previous_quarter = ( (Date.parse(getFirstDayPreviousQuarter()) <= wo_opened_at) && (wo_opened_at <= (Date.parse(getLastDayPreviousQuarter()))) ) ? true : false;
		in_period.current_exercise = ( (Date.parse(getFirstDayCurrentExercise(FIRSTMONTHOFEXERCISE)) <= wo_opened_at) && (wo_opened_at <= (Date.parse(getLastDayCurrentExercise(FIRSTMONTHOFEXERCISE)))) ) ? true : false;
		// in_period.previous_exercise = ( (Date.parse(getFirstDayPreviousExercise(FIRSTMONTHOFEXERCISE)) <= wo_opened_at) && (wo_opened_at <= (Date.parse(getLastDayPreviousExercise(FIRSTMONTHOFEXERCISE)))) ) ? true : false;

		wm_order_list[i].in_period = in_period;
		// c_debug(debug.chart, "=> wo_list_ok: wm_order_list[" + i + "].in_period", in_period);
	}

	var wo_period_array = [];
	for (key in reports_list) {
		wo_period_array[key] = [];
	}

	for (var i=0; i<wm_order_list.length; i++) {
		
		var v_ol = wm_order_list[i];
		for (key in reports_list) {
			if (v_ol.in_period[key]) { 
				wo_period_array[key].push(v_ol); 
			}
		}
	}
	c_debug(debug.chart, "=> wo_list_ok: wo_period_array = ", wo_period_array);

	data_query = {};			// reset previous data_query
	for (key in reports_list) {
		var array = [];
		if ( isEmpty(wo_period_array[key]) ) {
			array = null;
		} else if ( Array.isArray(wo_period_array[key]) ) {
				array = wo_period_array[key];
		} else {
				array[0] = wo_period_array[key];
		}
		c_debug(debug.chart, "=> wo_list_ok: *** KEY = ", key);
		c_debug(debug.chart, "                 array = ", array);

		var result = {};
		if (!isEmpty(array)) {
			result.nb_draf = 0;			// "Draft"
			result.nb_aw = 0;			// "Awaiting Diagnosis"
			result.nb_diag = 0;			// "Diagnosed"
			result.nb_ass = 0;			// "Assigned"
			result.nb_work = 0;			// "Work In Progress"
			result.nb_comp = 0;			// "Closed Complete"
			result.nb_inc = 0;			// "Closed Incomplete"
			result.nb_canc = 0;			// "Cancelled"
			result.nb_err = 0;			// "Error"
			result.nb_res = 0;			// "Resolved"
			result.nb_unr = 0;			// "Unresolved"
			result.nb_fcom = 0;			// "Finished - Complete" = Resolved + Closed Complete
			result.nb_finc = 0;			// "Finished - Incomplete" = Unresolved + Closed Incomplete
			result.wo_number = "";		// number of Work Order
			result.wo_state = [];
			result.wo_type = [];
			result.wo_prod = [];
			result.wo_prob = [];
				
			for (var i=0; i<array.length; i++) {
				result.wo_state[i] = array[i].wo_state;					// Get list of states
				result.wo_type[i] = array[i].wo_u_work_order_type;   	// Get list of work order types
				result.wo_prod[i] = array[i].prod_u_label;				// Get list of work order categories
				result.wo_prob[i] = array[i].prob_u_label;				// Get list of work order categories
			}
			// Group different table by type
			result.wo_type_reduced = reduce_array(result.wo_type);
			result.wo_prod_reduced = reduce_array(result.wo_prod);
			result.wo_prob_reduced = reduce_array(result.wo_prob);

			c_debug(debug.chart, "=> wo_list_ok: result.wo_state = ", result.wo_state);
			c_debug(debug.chart, "=> wo_list_ok: result.wo_type = ", result.wo_type);
			c_debug(debug.chart, "=> wo_list_ok: result.wo_type_reduced = ", result.wo_type_reduced);
			c_debug(debug.chart, "=> wo_list_ok: result.wo_prod = ", result.wo_prod);
			c_debug(debug.chart, "=> wo_list_ok: result.wo_prod_reduced = ", result.wo_prod_reduced);
			c_debug(debug.chart, "=> wo_list_ok: result.wo_prob = ", result.wo_prob);
			c_debug(debug.chart, "=> wo_list_ok: result.wo_prob_reduced = ", result.wo_prob_reduced);

			// Get number per state
			for (var i=0; i<result.wo_state.length; i++) {
				// c_debug(debug.chart, "=> wo_list_ok: result.wo_state[" + i + "] : ", result.wo_state[i]);
				switch (result.wo_state[i]) {
					case "1" :
					case "Draft":
						result.nb_draf++;
						break;
					case "15" :
					case "Awaiting Diagnosis": 
						result.nb_aw++;
						break;
					case "10" :
					case "Diagnosed": 
					case "Qualified":
						result.nb_diag++;
						break;
					case "16" :
					case "Assigné":
					case "Assigned": 
						result.nb_ass++;
						break;
					case "18" :
					case "Work In Progress": 
						result.nb_work++;
						break;
					case "20" :
					case "Resolved": 
						result.nb_res++;
						result.nb_fcom++;
						break;
					case "21" :
					case "Unresolved": 
						result.nb_unr++;
						result.nb_finc++;
						break;
					case "3" :
					case "Closed Complete": 
						result.nb_comp++;
						result.nb_fcom++;
						break;
					case "4" :
					case "Closed Incomplete": 
						result.nb_inc++;
						result.nb_finc++;
						break;
					case "7" : 
					case "Cancelled": 
						result.nb_canc++;
						break;
					case "19" :
					case "Error": 
						result.nb_err++;
						break
				}
			}
			result.wo_number = result.nb_draf + result.nb_aw + result.nb_diag + result.nb_ass 
			+ result.nb_work + result.nb_res + result.nb_unr 
			+ result.nb_comp + result.nb_inc + result.nb_canc + result.nb_err;
			// result.nb_fcomp = result.nb_comp + result.nb_res;		// "Finished - Complete" = Resolved + Closed Complete
			// result.nb_finc = result.nb_inc + result.nb_unr;		// "Finished - Incomplete" = Unresolved + Closed Incomplete
			c_debug(debug.chart, "=> wo_list_ok: result.wo_number = ", result.wo_number);

			//Get number per work order type
			result.wo_type_details = new Array (result.wo_type_reduced.length);
			result.wo_type_number = 0;
			for (var i=0; i<result.wo_type_reduced.length; i++) {
				result.wo_type_details[i] = 0;
				for (var j=0; j<result.wo_type.length; j++) {
					if (result.wo_type[j] == result.wo_type_reduced[i]) {
						result.wo_type_details[i]++;
						result.wo_type_number++;	
					}
				}
			}
			c_debug(debug.chart, "=> wo_list_ok: result.wo_type_details = ", result.wo_type_details);

			// Get number per work order product
			result.wo_prod_details = new Array (result.wo_prod_reduced.length);
			result.wo_prod_number = 0;
			for (var i=0; i<result.wo_prod_reduced.length; i++) {
				result.wo_prod_details[i] = 0;
				for(var j=0; j<result.wo_prod.length; j++) {
					if (result.wo_prod[j] == result.wo_prod_reduced[i]) {
						result.wo_prod_details[i]++;
						result.wo_prod_number++;
					}
				}
			}
			c_debug(debug.chart, "=> wo_list_ok: result.wo_prod_details = ", result.wo_prod_details);

			// Get number per work order problem
			result.wo_prob_details = new Array (result.wo_prob_reduced.length);
			result.wo_prob_number = 0;
			for (var i=0; i<result.wo_prob_reduced.length; i++) {
				result.wo_prob_details[i] = 0;
				for(var j=0; j<result.wo_prob.length; j++) {
					if (result.wo_prob[j] == result.wo_prob_reduced[i]) {
						result.wo_prob_details[i]++;
						result.wo_prob_number++;
					}
				}
			}
			c_debug(debug.chart, "=> wo_list_ok: result.wo_prob_details = ", result.wo_prob_details);
			
			c_debug(debug.chart, "=> wo_list_ok: result = ", result);
		}
		data_query[key] = result;
		data_query[key].wo_array = wo_period_array[key];
		c_debug(debug.chart, "=> wo_list_ok: data_query[" + key + "] = ", data_query[key]);
	}
	c_debug(debug.chart, "=> wo_list_ok: data_query = ", data_query);

	ready = true;			// tabs on WI can now executed the different drawing functions
	drawSelectedPeriodChart();

	RMPApplication.debug("end wo_list_ok");
}

function wo_list_ko(P_error) 
{
	RMPApplication.debug("begin wo_list_ko: P_error = ", JSON.stringify(P_error));
	c_debug(debug.chart, "=> wo_list_ko  P_error = ", P_error);
	var error_msg = ${P_quoted(i18n("wo_list_ko", "Chargement impossible des rapports!"))};
    notify_error(chart_title_notify, error_msg + ' ' + chart_thanks_notify);
    RMPApplication.debug("end wo_list_ko");
}

// ===============================================================
//  Draw all charts in different tabs
// ===============================================================
function drawSelectedPeriodChart()
{
	RMPApplication.debug("begin drawSelectedPeriodChart");
	c_debug(debug.chart, "=> drawSelectedPeriodChart");

	// input to store selected tabs
	var selected_dashboard_tab = id_selected_dashboard_tab.getValue();
	var selected_period_tab = id_selected_period_tab.getValue();
	var selected_month_tab = id_selected_month_tab.getValue();
	var selected_quarter_tab = id_selected_quarter_tab.getValue();
	var selected_exercise_tab = id_selected_exercise_tab.getValue();
	c_debug(debug.chart, "=> drawSelectedPeriodChart: selected_dashboard_tab = ", selected_dashboard_tab);
	c_debug(debug.chart, "=> drawSelectedPeriodChart: selected_period_tab = ", selected_period_tab);
	
	if (selected_dashboard_tab == "chart") {
		switch (selected_period_tab) {
			case 'month':
				if (selected_month_tab == "current") {
					drawCurrentMonthChart();
				} else {
					drawPreviousMonthChart();
				}
				break;
			case 'quarter':
				if (selected_quarter_tab == "current") {
					drawCurrentQuarterChart();
				} else {
					drawPreviousQuarterChart();
				}
				break;
			case 'exercise':
				if (selected_exercise_tab == "current") {
					drawCurrentExerciseChart();
				} else {
					drawPreviousExerciseChart();
				}
				break;
		}
	}
	$("#id_spinner_search").hide();
	RMPApplication.debug("end drawSelectedPeriodChart");
}
	
// ===============================================================
//  Draw all charts in different tabs
// ===============================================================
function drawCurrentMonthChart()
{
	RMPApplication.debug("begin drawCurrentMonthChart");
	c_debug(debug.chart, "=> drawCurrentMonthChart");
	var id_current_month_chart = $("#id_current_month_chart");
	id_currMonth.removeClass('hidden');
	id_currMonth.show();
	if (data_query.current_month.wo_array.length == 0) {				// for array
	// if (Object.keys(data_query.current_month).length == 0) {			// for object
		// id_current_month_chart.addClass('hidden');
		notify_error(error_chart_title, error_chart_msg);
	} else {
		id_current_month_chart.removeClass('hidden');
		drawBarChart(data_query.current_month, "id_current_month_chart_states");
		drawColumnChart(data_query.current_month, "id_current_month_chart_types");
		drawPieChart(data_query.current_month, "id_current_month_chart_products");
	}
	$("#id_spinner_search").hide();
	RMPApplication.debug("end drawCurrentMonthChart");
}

function drawPreviousMonthChart()
{
	RMPApplication.debug("begin drawPreviousMonthChart");
	c_debug(debug.chart, "=> drawPreviousMonthChart");
	var id_previous_month_chart = $("#id_previous_month_chart");
	id_prevMonth.show();
	if (data_query.previous_month.wo_array.length == 0) {				// for array
	// if (Object.keys(data_query.previous_month).length == 0) {		// for object
		// id_previous_month_chart.addClass('hidden');
        notify_error(error_chart_title, error_chart_msg);
	} else {
		id_previous_month_chart.removeClass('hidden');
		drawBarChart(data_query.previous_month, "id_previous_month_chart_states");
		drawColumnChart(data_query.previous_month, "id_previous_month_chart_types");
		drawPieChart(data_query.previous_month, "id_previous_month_chart_products");
	}
	$("#id_spinner_search").hide();
	RMPApplication.debug("end drawPreviousMonthChart");
}

function drawCurrentQuarterChart()
{
	RMPApplication.debug("begin drawCurrentQuarterChart");
	c_debug(debug.chart, "=> drawCurrentQuarterChart");
	var id_current_quarter_chart = $("#id_current_quarter_chart");
	id_currQuart.show();
	if (data_query.current_quarter.wo_array.length == 0) {				// for array
	// if (Object.keys(data_query.current_quarter).length == 0) {		// for object
		// id_current_quarter_chart.addClass('hidden');
        notify_error(error_chart_title, error_chart_msg);
	} else {
		id_current_quarter_chart.removeClass('hidden');
		drawBarChart(data_query.current_quarter, "id_current_quarter_chart_states");
		drawColumnChart(data_query.current_quarter, "id_current_quarter_chart_types");
		drawPieChart(data_query.current_quarter, "id_current_quarter_chart_products");
	}
	$("#id_spinner_search").hide();
	RMPApplication.debug("end drawCurrentQuarterChart");
}

function drawPreviousQuarterChart()
{
	RMPApplication.debug("begin drawPreviousQuarterChart");
	c_debug(debug.chart, "=> drawPreviousQuarterChart");
	var id_previous_quarter_chart = $("#id_previous_quarter_chart");
	id_prevQuart.show();
	if (data_query.previous_quarter.wo_array.length == 0) {				// for array
	// if (Object.keys(data_query.previous_quarter).length == 0) {		// for object
		// id_previous_quarter_chart.addClass('hidden');
        notify_error(error_chart_title, error_chart_msg);
	} else {
		id_previous_quarter_chart.removeClass('hidden');
		drawBarChart(data_query.previous_quarter, "id_previous_quarter_chart_states");
		drawColumnChart(data_query.previous_quarter, "id_previous_quarter_chart_types");
		drawPieChart(data_query.previous_quarter, "id_previous_quarter_chart_products");
	}
	$("#id_spinner_search").hide();
	RMPApplication.debug("end drawPreviousQuarterChart");
}

function drawCurrentExerciseChart()
{
	RMPApplication.debug("begin drawCurrentExerciseChart");
	c_debug(debug.chart, "=> drawCurrentExerciseChart");
	var id_current_exercise_chart = $("#id_current_exercise_chart");
	id_currExercise.show();
	if (data_query.current_exercise.wo_array.length == 0) {				// for array
	// if (Object.keys(data_query.current_exercise).length == 0) {		// for object
		// id_current_exercise_chart.addClass('hidden');
        notify_error(error_chart_title, error_chart_msg);
	} else {
		id_current_exercise_chart.removeClass('hidden');
		drawBarChart(data_query.current_exercise, "id_current_exercise_chart_states");
		drawColumnChart(data_query.current_exercise, "id_current_exercise_chart_types");
		drawPieChart(data_query.current_exercise, "id_current_exercise_chart_products");
	}
	$("#id_spinner_search").hide();
	RMPApplication.debug("end drawCurrentExerciseChart");
}

function drawPreviousExerciseChart()
{
	RMPApplication.debug("begin drawPreviousExerciseChart");
	c_debug(debug.chart, "=> drawPreviousExerciseChart");
	var id_previous_exercise_chart = $("#id_previous_exercise_chart");
	id_prevExercise.show();
	if (data_query.previous_exercise.wo_array.length == 0) {			// for array
	// if (Object.keys(data_query.previous_exercise).length == 0) {		// for object
		// id_previous_exercise_chart.addClass('hidden');
        notify_error(error_chart_title, error_chart_msg);
	} else {
		id_previous_exercise_chart.removeClass('hidden');
		drawBarChart(data_query.previous_exercise, "id_previous_exercise_chart_states");
		drawColumnChart(data_query.previous_exercise, "id_previous_exercise_chart_types");
		drawPieChart(data_query.previous_exercise, "id_previous_exercise_chart_products");
	}
	$("#id_spinner_search").hide();
	RMPApplication.debug("end drawPreviousExerciseChart");
}

// ===============================================================
//  Chart drawing functions
// ===============================================================
function drawBarChart(d_obj, id_div) 
{
	RMPApplication.debug("begin drawBarChart");
	c_debug(debug.chart, "=> drawBarChart");
	// Style Bar options
	var opac = 'opacity: 0.5';
	var greCol = 'color: #00C851;' + opac;
	var bluCol = 'color: #33b5e5;' + opac;
	var yelCol = 'color: #ffbb33;' + opac;
	var redCol = 'color: #ff4444;' + opac;

	var column_id1 = ${P_quoted(i18n("column_id1", "Statut"))};
	var column_text_id1 = ${P_quoted(i18n("column_text_id1", "Nombre"))};
	var column_id2 = ${P_quoted(i18n("column_id2", "Transmis"))};
	var column_id3 = ${P_quoted(i18n("column_id3", "En attente de diagnostic"))};
	var column_id4 = ${P_quoted(i18n("column_id4", "Diagnostiqué"))};
	var column_id5 = ${P_quoted(i18n("column_id5", "Affecté"))};
	var column_id6 = ${P_quoted(i18n("column_id6", "En cours de résolution"))};
	var column_id7 = ${P_quoted(i18n("column_id7", "Terminé - Complet"))};
	var column_id8 = ${P_quoted(i18n("column_id8", "Terminé - Incomplet"))};
	var column_id9 = ${P_quoted(i18n("column_id9", "Annulé"))};
	var column_id10 = ${P_quoted(i18n("column_id10", "Erreur"))};

	// Data & option definitions for work order per state Chart
	var wo_per_state_data = google.visualization.arrayToDataTable([
		[column_id1, column_text_id1, { role: 'annotation' }, { role: 'style' }],
		[column_id2, d_obj.nb_draf, d_obj.nb_draf, yelCol],					// 'Draft'
		[column_id3, d_obj.nb_aw, d_obj.nb_aw, yelCol],						// 'Awaiting Diagnosis'
		[column_id4, d_obj.nb_diag, d_obj.nb_diag, bluCol],					// 'Diagnosed'
		[column_id5, d_obj.nb_ass, d_obj.nb_ass, bluCol],					// 'Assigned'
		[column_id6, d_obj.nb_work, d_obj.nb_work, bluCol],					// 'Work In Progress'
		[column_id7, d_obj.nb_fcom, d_obj.nb_fcom, greCol],					// 'Finished - Complete'
		[column_id8, d_obj.nb_finc, d_obj.nb_finc, redCol],					// 'Finished - Incomplete'
		[column_id9, d_obj.nb_canc, d_obj.nb_canc, bluCol],					// 'Cancelled'
		[column_id10, d_obj.nb_err, d_obj.nb_err, redCol],					// 'Error'
		// ['Clos - Complet', d_obj.nb_comp, d_obj.nb_comp, greCol],		// 'Closed Complete'
		// ['Résolu', d_obj.nb_res, d_obj.nb_res, greCol],					// 'Resolved'
		// ['Clos - Incomplet', d_obj.nb_inc, d_obj.nb_inc, greCol],		// 'Closed Incomplete'
		// ['Non résolu', d_obj.nb_unr, d_obj.nb_unr, redCol],				// 'Unresolved'
	]);
	// ],false);		// 'false' means that the first row contains labels, not data.

	var wo_per_state_option_title = ${P_quoted(i18n("bar_title_id1", "Répartition des"))} + " (" + d_obj.wo_number + ") " + ${P_quoted(i18n("bar_title_id2", "tickets par STATUT"))};
	var wo_per_state_option_label = ${P_quoted(i18n("graph_label_id1", "Nombre"))};

	var wo_per_state_option = {
		title: wo_per_state_option_title,
		titleTextStyle: {
			fontSize: 20,
			bold: true,
			color: '#c0392b'
		},
		// backgroundColor: "#FCFEE0",
		width: '90%',
		bars: 'horizontal',
		annotations: {alwaysOutside: true },
		axes: {
			x: {
				0: {side: 'top', label: wo_per_state_option_label}
			}
		},
		hAxis: {
			textStyle: { color: 'blue', bold: true },
			format : '#'
		},
		legend: {position: 'none'}
	};

	// reset previous Chart DIV
	document.getElementById(id_div).innerHTML = '';

	// Draw Work Order per State Chart
	var wo_per_state_chart = new google.visualization.BarChart( document.getElementById(id_div) );
	wo_per_state_chart.draw(wo_per_state_data, wo_per_state_option);

	RMPApplication.debug("end drawBarChart");
}	// End function drawBarChart

function drawColumnChart(d_obj, id_div) 
{
	RMPApplication.debug("begin drawColumnChart");
	c_debug(debug.chart, "=> drawColumnChart");

	// Data & option definitions for work order per type Chart
	var wo_per_type_array = new Array(d_obj.wo_type_reduced.length);
	for (var i=0; i<d_obj.wo_type_reduced.length; i++) {
		if (i==0) {
			wo_per_type_array[i] =  new Array('Type', 'Nombre');
		} 
		wo_per_type_array[i+1] = [d_obj.wo_type_reduced[i], d_obj.wo_type_details[i]];
	}

	c_debug(debug.chart, "=> drawColumnChart: wo_per_type_array: ", wo_per_type_array);
	var wo_per_type_data = google.visualization.arrayToDataTable(wo_per_type_array);
	var wo_per_type_options_title = ${P_quoted(i18n("column_title_id1", "Répartition des"))} + " (" + d_obj.wo_type_number + ") " + ${P_quoted(i18n("column_title_id2", "tickets par TYPE"))};
	var wo_per_type_options = {
		title: wo_per_type_options_title,
		titleTextStyle: {
			fontSize: '20',
			bold: true,
			color: '#c0392b'
		},
		// backgroundColor: "#FCFEE0",
		bar: {groupWidth: "95%"},
		legend: {position: 'none'}
	};

	// reset previous Chart DIV
	document.getElementById(id_div).innerHTML = '';

	// Draw Work Order per Type Chart
	var wo_per_type_chart = new google.visualization.ColumnChart( document.getElementById(id_div) );
	wo_per_type_chart.draw (wo_per_type_data, wo_per_type_options);

	RMPApplication.debug("end drawColumnChart");
}	// End function drawColumnChart

function drawPieChart(d_obj, id_div) 
{
	RMPApplication.debug("begin drawPieChart");
	c_debug(debug.chart, "=> drawPieChart");

	// Data & option definitions for work order per product Chart
	var wo_per_prod_array = new Array(d_obj.wo_prod_reduced.length);
	for (var i=0; i<d_obj.wo_prod_reduced.length; i++) {
		if (i==0) {
			wo_per_prod_array[i] =  new Array('Produit', 'Nombre');
		} 
		wo_per_prod_array[i+1] =  [d_obj.wo_prod_reduced[i], d_obj.wo_prod_details[i]];
	}

	c_debug(debug.chart, "=> drawPieChart: wo_per_prod_array = ", wo_per_prod_array);
	var wo_per_prod_data = google.visualization.arrayToDataTable(wo_per_prod_array);
	var wo_per_prod_options_title = ${P_quoted(i18n("pie_title_id1", "Répartition des"))} + " (" + d_obj.wo_prod_number + ") " + ${P_quoted(i18n("pie_title_id2", "tickets par PRODUIT"))};
	var wo_per_prod_options = {
		title: wo_per_prod_options_title,
		titleTextStyle: {
			fontSize: 20,
			bold: true,
			color: '#c0392b'
		},
		chartArea: {width: '100%'},
		// backgroundColor: "#FCFEE0",
		pieHole: 0.4
	};

	// reset previous Chart DIV
	document.getElementById(id_div).innerHTML = '';

	//Draw Work Order per Product Chart
	var wo_per_prod_chart = new google.visualization.PieChart( document.getElementById(id_div) );
	wo_per_prod_chart.draw(wo_per_prod_data, wo_per_prod_options);

	RMPApplication.debug("end drawPieChart");
}	// End function drawPieChart

// Calculate breakdown rate
/*function setBreakdownRate(bd_obj)
{
	RMPApplication.debug ("begin setBreakdownRate");   
	var nb_intervMonth = 125;			// Nombre d'interventions du mois
	var nb_openSiteMonth = 800;		// Nombre de magasins ouverts au dernier jour du mois
	var tx_breakdownMonth = 0;

	var nb_intervQuarter = 700;		// Nombre d'interventions du trimestre
	var nb_openSiteQuarter = 3200;		// Nombre de magasins ouverts au dernier jour du trimestre	
	var tx_breakdownQuarter = 0;

	var nb_intervPeriod = 0;		// Nombre d'interventions du mois
	var nb_openSitePeriod = 0;		// Nombre de magasins ouverts au dernier jour du mois
	var tx_breakdownPeriod = 0;
	var nb_monthPeriod = getNumberMonth(Date.now());			// Nombre de mois de la période

    var my_pattern = {};
    eval(col_pannes).listCallback(my_pattern, {}, load_panne_ok, load_panne_ko);
	

	// Monthly Breakdown Rate
	tx_breakdownMonth = (nb_intervMonth * 12) / (nb_openSiteMonth / 12);

	// Quarterly Breakdown Rate
	tx_breakdownQuarter = (nb_intervQuarter * 12 / 4) / (nb_openSiteQuarter / 12);

	// Yearly Breakdown Rate
	for (var i=0, i<nb_monthPeriod; i++) {
		nb_intervPeriod += bd_obj.nb_inter[i];
		nb_openSitePeriod += bd_obj.nb_openSite[i];
	}
	tx_breakdownPeriod = (nb_intervPeriod * 12 / nb_monthPeriod) / (nb_openSitePeriod / 12);

	RMPApplication.debug ("end setBreakdownRate"); 
}

function load_panne_ok(result) 
{
    RMPApplication.debug ("begin load_panne_ok");
    c_debug(debug.chart, "=> load_panne_ok: result = ", result);

    RMPApplication.debug ("end load_panne_ok");    
}

function load_panne_ko(error) 
{
    RMPApplication.debug ("begin load_panne_ko : error = " + JSON.stringify(error));
    c_debug(debug.chart, "=> load_panne_ko: error = ", error);
	var error_msg = ${P_quoted(i18n("error_load_panne_ko_msg", "Calcul impossible du taux de panne!"))};
	notify_error(error_title_notify, error_msg + ' ' + error_thanks_notify);
    RMPApplication.debug ("end load_panne_ko");
}
*/