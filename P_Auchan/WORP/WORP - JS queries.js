var queries_title_notify = ${P_quoted(i18n("queries_title_notify", "Erreur"))};
var queries_thanks_notify = ${P_quoted(i18n("queries_thanks_notify", "Merci de signaler cette erreur!"))};
var queries_btn_ok = ${P_quoted(i18n("btn_ok", "OK"))};

// ===========================
//  numberFilter definition
// ===========================
function getWoNumberQuery()
{
    RMPApplication.debug("begin getWoNumberQuery");
    var wm_number = $("#id_numberFilter").val();
    var wm_number_query = (isEmpty(wm_number)) ? "" : "^wo_number=" + $.trim(wm_number);
    c_debug(debug.query, "=> getWoNumberQuery: wm_number_query = ", wm_number_query);
    RMPApplication.debug("end getWoNumberQuery");
    return wm_number_query;
}

// ===========================
//  referenceClient definition
// ===========================
function getCorrelationIdQuery()
{
    RMPApplication.debug("begin getcorrelationIdQuery");
    var referenceClient = $("#id_clientReferenceFilter").val();
    var corr_id_query = (isEmpty(referenceClient)) ? "" : "^wo_correlation_id=" + $.trim(referenceClient);
    c_debug(debug.query, "=> getCorrelationIdQuery: corr_id_query = ", corr_id_query);
    RMPApplication.debug("end getcorrelationIdQuery");
    return corr_id_query;
}

// ===========================
//  statusFilter definition
// ===========================
function getStatusQuery()
{
    RMPApplication.debug("begin getStatusQuery");
    var status = $("#id_statusFilter").val();
    var first = true;
    var statusQuery = "";
    if (status != null) {
        if (status != "tous") {
            for (var i = 0; i < status.length; i++) {
                if (first == true) {
                    first = false;
                    statusQuery += "^wo_stateIN" + $.trim(status[i]);
                } else {
                    statusQuery += "," + $.trim(status[i]);
                }
            }
        }
    }
    c_debug(debug.query, "=> getStatusQuery: statusQuery = ", statusQuery);
    RMPApplication.debug("end getStatusQuery");
    return statusQuery;
}

// ==================================================
//  Category Filter definition - Specific for AUCHAN
// ==================================================
function getCategoryQuery()
{
    RMPApplication.debug("begin getCategoryQuery");
    var category_val = $("#id_categoryFilter").val();
    var category_lbl = category_val.toUpperCase();
    c_debug(debug.query, "=> getCategoryQuery: category_val = ", category_val);
    c_debug(debug.query, "=> getCategoryQuery: category_lbl = ", category_lbl);
    var categoryQuery = "";
    var categoryList = [];

    // "tous" value selected means "all incidents"
    if (!isEmpty(category_val)) {
        var first = true;
        if (category_val == "tous") {   // "all" categorie should be included
            categoryList = JSON.parse(id_category_cl.getList()).list;
        } else {
            categoryList[0] = {
                "label" : category_lbl,
                "value" : category_val
            };
        }
        c_debug(debug.query, "=> getCategoryQuery: categoryList = ", categoryList);
        for (var i = 0; i < categoryList.length; i++) {
            if (first == true) {
                first = false;
                // categoryQuery += "^wo_u_categoryIN" + $.trim(categoryList[i].label);
                categoryQuery += "^cat_u_labelIN" + $.trim(categoryList[i].label);
            } else {
                categoryQuery += "," + $.trim(categoryList[i].label);
            }
        }
    }
    c_debug(debug.query, "=> getCategoryQuery: categoryQuery = ", categoryQuery);
    RMPApplication.debug("end getCategoryQuery");
    return categoryQuery;
}

// ===================================
//  Work Order Type Filter definition
// ===================================
function getWoTypeQuery()
{
    RMPApplication.debug("begin getWoTypeQuery");
    var wo_type = $("#id_woTypeFilter").val();
    var woTypeQuery = "";
    // "tous" value selected means "all incidents"
    if (!isEmpty(wo_type) && (wo_type != "tous")) {
        var woTypeQuery = "^wo_u_work_order_type=" + $.trim(wo_type);
    }
    c_debug(debug.query, "=> getWoTypeQuery: woTypeQuery = ", woTypeQuery);
    RMPApplication.debug("end getWoTypeQuery");
    return woTypeQuery;
}

// ===============================
//  descriptionFilter definition
// ===============================
function getDescriptionQuery()
{
    RMPApplication.debug("begin getDescriptionQuery");
    var description = $("#id_descriptionFilter").val();
    var descriptionQuery = (isEmpty(description)) ? "" : "^wo_short_descriptionLIKE" + $.trim(description);
    c_debug(debug.query, "=> getDescriptionQuery: descriptionQuery = ", descriptionQuery);
    RMPApplication.debug("end getDescriptionQuery");
    return descriptionQuery;
}

// ======================================================
//  Period Date filter definition - Specific for AUCHAN
// ======================================================
function getPeriodQuery()
{
    RMPApplication.debug("begin getPeriodQuery");
    var selected_year = $("#id_yearFilter").val();
    var selected_quarter = $("#id_quarterFilter").val();
    var selected_month = $("#id_monthFilter").val();
    var selected_period = $("#id_periodFilter input[type=radio][name=periodOptRadio]:checked").val();
    c_debug(debug.query, "=> getPeriodQuery: selected_period = ", selected_period);
    var getPeriodQuery = "";

    switch (selected_period) {
        case "trimestre":
            var num_sel_quarter = Number(selected_quarter);
            c_debug(debug.query, "=> getPeriodQuery: num_sel_quarter = ", num_sel_quarter);

            var new_nsq = ((num_sel_quarter + 2) >= 4) ? (num_sel_quarter - 1) : (num_sel_quarter -1 + 4);
            c_debug(debug.query, "=> getPeriodQuery: new_nsq = ", new_nsq);
            var fmq = (4 * new_nsq) - (2 + new_nsq);
            c_debug(debug.query, "=> getPeriodQuery: fmq = ", fmq);
            var first_month_quarter = (fmq < 10) ? "0" + fmq : fmq;
            c_debug(debug.query, "=> getPeriodQuery: first_month_quarter = ", first_month_quarter);
            var first_day_text = selected_year + "-" + first_month_quarter + "-01";
            c_debug(debug.query, "=> getPeriodQuery: first_day_text = ", first_day_text);

            var first_day = moment(first_day_text).startOf('quarter').format("YYYY-MM-DD 00:00:00");
            var last_day = moment(first_day_text).endOf('quarter').format("YYYY-MM-DD 23:59:59");
            break;
        case "mois":
            var num_sel_month = Number(selected_month);
            var long_month_nbr = (num_sel_month < 10) ? "0" + selected_month : selected_month;
            var first_day_text = selected_year + "-" + long_month_nbr + "-01";

            var first_day = moment(first_day_text).startOf('month').format("YYYY-MM-DD 00:00:00");
            var last_day = moment(first_day_text).endOf('month').format("YYYY-MM-DD 23:59:59");
            break;
    }

    // c_debug(debug.query, "=> getPeriodQuery: first_day = ", first_day);
    // c_debug(debug.query, "=> getPeriodQuery: last_day = ", last_day);
    getPeriodQuery = "^wo_opened_atBETWEEN" + first_day + "@" + last_day;
    c_debug(debug.query, "=> getPeriodQuery: getPeriodQuery = ", getPeriodQuery);
    RMPApplication.debug("end getPeriodQuery");
    return getPeriodQuery;
}

// ==================================
//  Opened At Date filter definition
// ==================================
function getOpenedAtQuery()
{
    RMPApplication.debug("begin getOpenedAtQuery");
    var begin_opened_date = $("#id_beginOpenedDateFilter").val();
    var end_opened_date = $("#id_endOpenedDateFilter").val();
    var openedAtQuery = "";
    var contexte = id_context.getValue();
    // contexte == "web" for desktop screen and datepicker; otherwise (for tablet & mobile) datebox is used as calendar component
    var datebox_separator = (contexte == "web") ? "/" :  "-";
    var service_now_separator = "-";
    if (begin_opened_date != "" && end_opened_date != "") {
        var date1 = begin_opened_date.split(datebox_separator);
        // for any date, filter apply to previous day, that's why we add 1 day
        var date2 = moment(end_opened_date, "DD" + datebox_separator + "MM" + datebox_separator + "YYYY").add(1,'days').format("DD" + datebox_separator + "MM" + datebox_separator + "YYYY").split(datebox_separator);
        openedAtQuery = "^wo_opened_atBETWEEN" + date1[2] + service_now_separator + date1[1] + service_now_separator + date1[0] + "@" + date2[2] + service_now_separator + date2[1] + service_now_separator + date2[0];
    }
    if (begin_opened_date != "" && end_opened_date == "") {
        var date = begin_opened_date.split(datebox_separator);
        openedAtQuery = "^wo_opened_at&gt;=" + date[2] + service_now_separator + date[1] + service_now_separator + date[0];
    }
    if (begin_opened_date == "" && end_opened_date != "") {
        var date = end_opened_date.split(datebox_separator);
        openedAtQuery = "^wo_opened_at&lt;=" + date[2] + service_now_separator + date[1] + service_now_separator + date[0];
    }
    c_debug(debug.query, "=> getOpenedAtQuery: openedAtQuery = ", openedAtQuery);
    RMPApplication.debug("end getOpenedAtQuery");
    return openedAtQuery;
}

// ==================================
//  Closed At Date filter definition
// ==================================
function getClosedAtQuery()
{
    RMPApplication.debug("begin getClosedAtQuery");
    var begin_closed_date = $("#id_beginClosedDateFilter").val();
    var end_closed_date = $("#id_endClosedDateFilter").val();
    var closedAtQuery = "";
    var contexte = id_context.getValue();
    // contexte == "web" for desktop screen and datepicker; otherwise (for tablet & mobile) datebox is used as calendar component
    var datebox_separator = (contexte == "web") ? "/" :  "-";
    var service_now_separator = "-";    
    if (begin_closed_date != "" && end_closed_date != "") {
        var date1 = begin_closed_date.split(datebox_separator);
        var date2 = moment(end_closed_date, "DD" + datebox_separator + "MM" + datebox_separator + "YYYY").add(1,'days').format("DD" + datebox_separator + "MM" + datebox_separator + "YYYY").split(datebox_separator);
        closedAtQuery = "^wo_closed_atBETWEEN" + date1[2] + service_now_separator + date1[1] + service_now_separator + date1[0] + "@" + date2[2] + service_now_separator + date2[1] + service_now_separator + date2[0];
    }
    if (begin_closed_date != "" && end_closed_date == "") {
        var date = begin_closed_date.split(datebox_separator);
        closedAtQuery = "^wo_closed_at&gt;=" + date[2] + service_now_separator + date[1] + service_now_separator + date[0];
    }
    if (begin_closed_date == "" && end_closed_date != "") {
        var date = end_closed_date.split(datebox_separator);
        closedAtQuery = "^wo_closed_at&lt;=" + date[2] + service_now_separator + date[1] + service_now_separator + date[0];
    }
    c_debug(debug.query, "=> getClosedAtQuery: closedAtQuery = ", closedAtQuery);
    RMPApplication.debug("end getClosedAtQuery");
    return closedAtQuery;
}

// =========================================================================================
//  define scope & locations list according to view, country & affiliate, locations filter
// =========================================================================================
function getLocations() 
{
    RMPApplication.debug("begin getLocations");
    var country_value = $("#id_countryFilter").val();
    var affiliate_value = $("#id_affiliateFilter").val();
    var allCountries = (country_value === "tous") ? true : false;
    var allAffiliates = (affiliate_value === "tous") ? true : false;

    // Set SCOPE variable: check if "tous" value is selected for country & affiliate filters
    c_debug(debug.query, "=> getLocations: switch | view = ", view);
    switch (view) {
        case "COMPANY" :
            if (allCountries && allAffiliates) {    // "tous" + "tous" => company is enough
                scope = "COMPANY";
                getCompanyQuery();
            } else if (allCountries) {              // "tous" + 1 selected affiliate => contract is enough
                scope = "AFFILIATE";
                getContractFullName();              // by requesting affiliate collection
            } else if (allAffiliates) {             // 1 selected country + "tous" => query with country setted
                scope = "COUNTRY";
                getCompanyQuery();
            } else {
                scope = "AFFILIATECOUNTRY";
                getContractFullName();              // by requesting affiliate collection
            }
            break;

        case "GRP_AFF" :
            if (allCountries && allAffiliates) {    // "tous" + "tous" => company is enough
                scope = "GRP_AFF";
                getContractFullName();
            } else if (allCountries) {              // "tous" + 1 selected affiliate => contract is enough
                scope = "AFFILIATE";
                getContractFullName();              // by requesting affiliate collection
            } else if (allAffiliates) {             // 1 selected country + "tous" => query with country setted
                scope = "COUNTRY";
                getContractFullName();
            } else {
                scope = "AFFILIATECOUNTRY";
                getContractFullName();              // by requesting affiliate collection
            }
            break;

        case "AFFILIATE" :
            if (allCountries) {              // "tous" + 1 selected affiliate => contract is enough
                scope = "AFFILIATE";
                getContractFullName();              // by requesting affiliate collection
            } else {
                scope = "AFFILIATECOUNTRY";
                getContractFullName();              // by requesting affiliate collection
            }
            break;

        case "COUNTRY" :
            if (allAffiliates) {            // 1 selected country + "tous" => query with country setted
                scope = "COUNTRY";
                getCompanyQuery();
            } else {
                scope = "AFFILIATECOUNTRY";
                getContractFullName();      // by requesting affiliate collection
            }
            break;

        case "DIVISION" :
            scope = "DIVISION";
            getContractFullName();          // by requesting affiliate collection
            break;

        case "REGION" :
            scope = "REGION";
            getContractFullName();          // by requesting affiliate collection
            break;

        case "LOCAL" :
            scope = "LOCAL";
            getContractFullName();          // by requesting affiliate collection
            break;
    }
    RMPApplication.debug("end getLocations");
}

// ===========================
//  company definition
// ===========================
function getCompanyQuery()
{
    RMPApplication.debug("begin getCompanyQuery");
    var company = login.company;
    if (isEmpty(company)) {
        var error_msg = ${P_quoted(i18n("error_getCompanyQuery_msg", "Le nom de la compagnie n'est pas pas défini!"))};
        notify_error(queries_title_notify, error_msg + ' ' + queries_thanks_notify); 
        return;
    } else {
        var companyQuery = "^co_u_full_nameLIKE" + login.company;
        c_debug(debug.query, "=> getCompanyQuery: companyQuery = ", companyQuery);
        sn_query += companyQuery;       // query is completed
        getContractFullName();          // to define contract name
    }
    RMPApplication.debug("end getCompanyQuery");
}

// =============================================
//  compose Contract FullName
// =============================================
function getContractFullName()
{
    RMPApplication.debug("begin getContractFullName");
    c_debug(debug.query, "=> getContractFullName: view = ", view);
    var affiliate_value = $("#id_affiliateFilter").val();          //get selected affiliate value (only one can be selected)
    var affiliate_label = $("#id_affiliateFilter").text();          //get selected affiliate label value (only one can be selected)
    var allAffiliates = (affiliate_value.toLowerCase() === "tous") ? true : false;

    c_debug(debug.query, "=> getContractFullName: switch | scope = ", scope);
    switch (scope) {
        case "COUNTRY" :
        case "GRP_AFF" :         // affiliate_value = 'tous'
            var contractQuery = '';
            switch (login.grp_affiliates) {
                case 'XXXXXX' :
                case 'YYYYYY' :
                    var first = true;
                    // affiliateList contains all affiliates involded in the query
                    for (var i=0; i < affiliateList.length; i++) {
                        var contract = login.company + "\\" + affiliateList[i].value;          // contract definition
                        if (first == true) {
                            first = false;
                            contractQuery += "^co_u_full_nameIN" + contract.toUpperCase();
                        } else {
                            contractQuery += "," + contract.toUpperCase();
                        }
                    }
                    break;
                default :
                    break;
            }
            c_debug(debug.query, "=> getContractFullName: contractQuery = ", contractQuery);
            sn_query += contractQuery;
            getLocationQuery();
            break;

        default :

            if (allAffiliates) {
                getLocationQuery();             // precise geographical area to limit search time
            } else {
                var input = {};
                var query = {};
                query.abbreviation = { "$regex" : affiliate_value, "$options" : "i"};      // options for case INSENSITIVE
                input.input_query = query;
                c_debug(debug.query, "=> getContractFullName: switch default: input = ", input);
                id_get_affiliate_api.trigger(input, {}, affiliate_ok, affiliate_ko);
            }
            break;
    }    
    RMPApplication.debug("end getContractFullName");
}

function affiliate_ok(result)
{
    RMPApplication.debug("begin affiliate_ok : result = " + JSON.stringify(result));
    c_debug(debug.query, "=> affiliate_ok: result = ", result);
    if ( (result.records.length == undefined) || (result.records.length == 0) ) {
        var  error_affiliate_ok_title = ${P_quoted(i18n("error_affiliate_ok_title", "Résultat de la recherche"))};
        var  error_affiliate_ok_msg = ${P_quoted(i18n("error_affiliate_ok_msg", "Aucun contrat ne répond aux critères!"))};
        dialog_error(error_affiliate_ok_title, error_affiliate_ok_msg, queries_btn_ok);
        return;
    } else {
        affiliate_obj = result.records[0];
        var contract = affiliate_obj.company + "\\" + affiliate_obj.abbreviation;   // contract definition
        var contract_query = "^co_u_full_name=" + contract;
        sn_query += contract_query;
        c_debug(debug.query, "=> affiliate_ok: contract_query = ", sn_query);
        getLocationQuery();     // precise geographical area to limit search time
    }
    RMPApplication.debug("end affiliate_ok");
}

function affiliate_ko(error)
{
    RMPApplication.debug("begin affiliate_ko : error = " + JSON.stringify(error));
    c_debug(debug.query, "=> affiliate_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("affiliate_ko_msg", "Récupération impossible des informations du contrat!"))};
    notify_error(queries_title_notify, error_msg + ' ' + queries_thanks_notify); 
    RMPApplication.debug("end affiliate_ko");
}

// ===========================
//  locationFilter definition
// ===========================
function getLocationQuery()
{
    RMPApplication.debug("begin getLocationQuery");
    c_debug(debug.query, "=> getLocationQuery: scope = ", scope);
    var country_value = $("#id_countryFilter").val();
    var affiliate_value = $("#id_affiliateFilter").val();
    var locations_value = $("#id_locationFilter").val();
    var allLocations = (locations_value.indexOf("tous") > -1) ? true : false;
    var locationQuery = "";

    if (allLocations) {
        switch (scope) {            // "scope" is defined in getLocations() function

            case "COMPANY" :        // contract is already defined and is enough to query SNOW
                break;

            case "GRP_AFF" :        // list of involved contracts are already defined 
                break;

            case "AFFILIATE" :      // contract is already defined and is enough to query SNOW
                break;              // "All countries" and 1 affiliate are selected

            case "COUNTRY" :
                locationQuery += "^loc_country=" + $.trim(country_value);
                break;              // "All affiliates" and 1 country are selected            

            case "AFFILIATECOUNTRY" :       // contract is already defined !
                locationQuery += "^loc_country=" + $.trim(country_value);
                break;

            case "DIVISION" :       // we can optimize SN query by adding division's location value
                locationQuery += "^loc_country=" + $.trim(country_value);
                locationQuery += "^loc_u_division=" + $.trim(login.division);
                break;

            case "REGION" :         // we can optimize SN query by adding region's location value
                locationQuery += "^loc_country=" + $.trim(country_value);
                locationQuery += "^loc_u_region=" + $.trim(login.region);
                break;

            case "LOCAL" :          // this case never exists
                break;
        }   // -- end switch (scope)

    } else {        // (allLocations == false)

        if (locations_value[0] === 'false') {        // no location matching
            $("#id_spinner_search").hide();
            var  error_location_title = ${P_quoted(i18n("error_location_title", "Suivi des incidents"))};
            var  error_location_text = ${P_quoted(i18n("error_location_text", "Il n'existe aucun site répondant aux critères de recherche!"))};
            dialog_warning(error_location_title, error_location_text, queries_btn_ok);
            return;
        } else {
            var first = true;
            for (var i=0; i<locations_value.length; i++) {
                for (var j=0; j<var_location_list.length; j++) {
                    if (var_location_list[j].location_code === locations_value[i]) {

                        var loca_name = $.trim(var_location_list[j].location_name);
                        // c_debug(debug.query, "=> getLocationQuery: i = ", i);
                        // c_debug(debug.query, "=> getLocationQuery: loca_name = ", loca_name);

                        if (first == true) {
                            first = false;
                            locationQuery += "^loc_nameIN" + loca_name;
                        } else {
                            locationQuery += "," + loca_name;
                        }
                    }
                }       // -- end (for j)
            }       // -- end (for i)
        }       // -- end if (locations_value[0] === 'false') 
    }       // -- end  if (allLocations) 
    
    c_debug(debug.query, "=> getLocationQuery: locationQuery = ", locationQuery);
    sn_query += locationQuery;          // query is complete
    queryServiceNow();                  // request Service Now with sn_query    sn_query += locationQuery;

    RMPApplication.debug("end getLocationQuery");
}
