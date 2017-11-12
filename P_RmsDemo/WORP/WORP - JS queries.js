var queries_title_notify = ${P_quoted(i18n("queries_title_notify", "Erreur"))};
var queries_thanks_notify = ${P_quoted(i18n("queries_thanks_notify", "Merci de signaler cette erreur!"))};
var queries_btn_ok = ${P_quoted(i18n("btn_ok", "OK"))};

// ===========================
//  numberFilter definition
// ===========================
function getWoNumberQuery()
{
    RMPApplication.debug("begin getWoNumberQuery");
    // console.log('getWoNumberQuery');
    var wm_number = $("#id_numberFilter").val();
    var wm_number_query = (isEmpty(wm_number)) ? "" : "^number=" + $.trim(wm_number);
    // console.log('=> getWoNumberQuery: wm_number_query = ', wm_number_query);
    return wm_number_query;
    RMPApplication.debug("end getWoNumberQuery");
}

// ===========================
//  referenceClient definition
// ===========================
function getCorrelationIdQuery()
{
    RMPApplication.debug("begin getcorrelationIdQuery");
    // console.log('getcorrelationIdQuery');
    var referenceClient = $("#id_clientReferenceFilter").val();
    var corr_id_query = (isEmpty(referenceClient)) ? "" : "^correlation_id=" + $.trim(referenceClient);
    // console.log('=> getCorrelationIdQuery: corr_id_query = ', corr_id_query);
    return corr_id_query;
    RMPApplication.debug("end getcorrelationIdQuery");
}

// ===========================
//  statusFilter definition
// ===========================
function getStatusQuery()
{
    RMPApplication.debug("begin getStatusQuery");
    // console.log('getStatusQuery');
    var status = $("#id_statusFilter").val();
    var first = true;
    var statusQuery = "";
    if (status != null) {
        if (status != "tous") {
            for (var i = 0; i < status.length; i++) {
                if (first == true) {
                    first = false;
                    statusQuery += "^stateIN" + $.trim(status[i]);
                } else {
                    statusQuery += "," + $.trim(status[i]);
                }
            }
        }
    }
    // console.log('=> getStatusQuery: statusQuery = ', statusQuery);
    return statusQuery;
    RMPApplication.debug("end getStatusQuery");
}

// ===================================
//  Work Order Type Filter definition
// ===================================
function getWoTypeQuery()
{
    RMPApplication.debug("begin getWoTypeQuery");
    // console.log('getWoTypeQuery');
    var wo_type = $("#id_woTypeFilter").val();
    var woTypeQuery = "";
    // "tous" value selected means "all incidents"
    if (!isEmpty(wo_type) && (wo_type != "tous")) {
        // console.log('wo_type = ', wo_type);
        var woTypeQuery = "^u_work_order_type=" + $.trim(wo_type);
    }
    // console.log('=> getWoTypeQuery: woTypeQuery = ', woTypeQuery);
    return woTypeQuery;
    RMPApplication.debug("end getWoTypeQuery");
}

// ===============================
//  descriptionFilter definition
// ===============================
function getDescriptionQuery()
{
    RMPApplication.debug("begin getDescriptionQuery");
    // console.log('getDescriptionQuery');
    var description = $("#id_descriptionFilter").val();
    var descriptionQuery = (isEmpty(description)) ? "" : "^short_descriptionLIKE" + $.trim(description);
    // console.log('=> getDescriptionQuery: descriptionQuery = ', descriptionQuery);
    return descriptionQuery;
    RMPApplication.debug("end getDescriptionQuery");
}

// ==================================
//  Opened At Date filter definition
// ==================================
function getOpenedAtQuery()
{
    RMPApplication.debug("begin getOpenedAtQuery");
    // console.log('getOpenedAtQuery');
    var begin_opened_date = $("#id_beginOpenedDateFilter").val();
    var end_opened_date = $("#id_endOpenedDateFilter").val();
    var openedAtQuery = "";
    var contexte = id_context.getValue();
    // contexte == "web" for desktop screen and datepicker; otherwise (for tablet & mobile) datebox is used as calendar component
    var datebox_separator = (contexte == "web") ? "/" :  "-";
    var service_now_separator = "-";
    if (begin_opened_date != "" && end_opened_date != "") {
        var date1 = begin_opened_date.split(datebox_separator);
        // for any date, filter apply to previous day, that's why we add 1 aday
        var date2 = moment(end_opened_date, "DD" + datebox_separator + "MM" + datebox_separator + "YYYY").add(1,'days').format("DD" + datebox_separator + "MM" + datebox_separator + "YYYY").split(datebox_separator);
        openedAtQuery = "^opened_atBETWEEN" + date1[2] + service_now_separator + date1[1] + service_now_separator + date1[0] + "@" + date2[2] + service_now_separator + date2[1] + service_now_separator + date2[0];
    }
    if (begin_opened_date != "" && end_opened_date == "") {
        var date = begin_opened_date.split(datebox_separator);
        openedAtQuery = "^opened_at&gt;=" + date[2] + service_now_separator + date[1] + service_now_separator + date[0];
    }
    if (begin_opened_date == "" && end_opened_date != "") {
        var date = end_opened_date.split(datebox_separator);
        openedAtQuery = "^opened_at&lt;=" + date[2] + service_now_separator + date[1] + service_now_separator + date[0];
    }
    // console.log('=> getOpenedAtQuery: openedAtQuery = ', openedAtQuery);
    return openedAtQuery;
    RMPApplication.debug("end getOpenedAtQuery");
}

// ==================================
//  Closed At Date filter definition
// ==================================
function getClosedAtQuery()
{
    RMPApplication.debug("begin getClosedAtQuery");
    // console.log('getClosedAtQuery');
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
        closedAtQuery = "^closed_atBETWEEN" + date1[2] + service_now_separator + date1[1] + service_now_separator + date1[0] + "@" + date2[2] + service_now_separator + date2[1] + service_now_separator + date2[0];
    }
    if (begin_closed_date != "" && end_closed_date == "") {
        var date = begin_closed_date.split(datebox_separator);
        closedAtQuery = "^closed_at&gt;=" + date[2] + service_now_separator + date[1] + service_now_separator + date[0];
    }
    if (begin_closed_date == "" && end_closed_date != "") {
        var date = end_closed_date.split(datebox_separator);
        closedAtQuery = "^closed_at&lt;=" + date[2] + service_now_separator + date[1] + service_now_separator + date[0];
    }
    // console.log('=> getClosedAtQuery: closedAtQuery = ', closedAtQuery);
    return closedAtQuery;
    RMPApplication.debug("end getClosedAtQuery");
}

// =========================================================================================
//  define scope & locations list according to view, country & affiliate, locations filter
// =========================================================================================
function getLocations() 
{
    RMPApplication.debug("begin getLocations");
    // console.log('getLocations');
    var country_value = $("#id_countryFilter").val();
    var affiliate_value = $("#id_affiliateFilter").val();
    var allCountries = (country_value === "tous") ? true : false;
    var allAffiliates = (affiliate_value === "tous") ? true : false;

    // Set SCOPE variable: check if "tous" value is selected for country & affiliate filters
    // console.log('getLocations: view = ', view);
    switch (view) {
        case "COMPANY" :
            // console.log("getLocations: switch COMPANY");
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
            // console.log("getLocations: switch GRP_AFF");
            // TO DO => traiter ce cas particulier => ex: SMC (3 enseignes)
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
            // console.log("getLocations: switch AFFILIATE");
            if (allCountries) {              // "tous" + 1 selected affiliate => contract is enough
                scope = "AFFILIATE";
                getContractFullName();              // by requesting affiliate collection
            } else {
                scope = "AFFILIATECOUNTRY";
                getContractFullName();              // by requesting affiliate collection
            }
            break;

        case "COUNTRY" :
            // console.log("getLocations: switch COUNTRY");
            if (allAffiliates) {            // 1 selected country + "tous" => query with country setted
                scope = "COUNTRY";
                getCompanyQuery();
            } else {
                scope = "AFFILIATECOUNTRY";
                getContractFullName();      // by requesting affiliate collection
            }
            break;

        case "DIVISION" :
            // console.log("getLocations: switch DIVISION");
            scope = "DIVISION";
            getContractFullName();          // by requesting affiliate collection
            break;

        case "REGION" :
            // console.log("getLocations: switch REGION");
            scope = "REGION";
            getContractFullName();          // by requesting affiliate collection
            break;

        case "LOCAL" :
            // console.log("getLocations: switch LOCAL");
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
    // console.log('getCompanyQuery: view = ' + view + '\n scope = ' + scope);
    var company = login.company;
    if (isEmpty(company)) {
        var error_msg = ${P_quoted(i18n("error_getCompanyQuery_msg", "Le nom de la compagnie n'est pas pas défini!"))};
        notify_error(queries_title_notify, error_msg + ' ' + queries_thanks_notify); 
        return;
    } else {
        var companyQuery = "^company.u_full_nameLIKE" + login.company;
        // console.log('=> getCompanyQuery: companyQuery = ', companyQuery);    
        sn_query += companyQuery;
        getContractFullName();
    }
    RMPApplication.debug("end getCompanyQuery");
}

// =============================================
//  compose Contract FullName
// =============================================
function getContractFullName()
{
    RMPApplication.debug("begin getContractFullName");
    // console.log('getContractFullName: view = ' + view + '\n scope = ' + scope);
    var affiliate_value = $("#id_affiliateFilter").val();          //get selected affiliate value (only one can be selected)
    var affiliate_label = $("#id_affiliateFilter").val();          //get selected affiliate value (only one can be selected)
    var allAffiliates = (affiliate_value.toLowerCase() === "tous") ? true : false;

    switch (scope) {
        case "COUNTRY" :
        case "GRP_AFF" :         // affiliate_value = 'tous'
            // console.log("getContractFullName: switch GRP_AFF");
            var contractQuery = '';
            switch (login.grp_affiliates) {
                case 'SOCIETE2' :
                case 'SOCIETE3' :
                    var first = true;
                    // affiliateList contains all affiliates involded in the query
                    for (var i=0; i < affiliateList.length; i++) {
                        var contract = login.company + "\\" + affiliateList[i].value;          // contract definition
                        if (first == true) {
                            first = false;
                            contractQuery += "^company.u_full_nameIN" + contract.toUpperCase();
                        } else {
                            contractQuery += "," + contract.toUpperCase();
                        }
                    }
                    break;
                default :
                    break;
            }
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
                // console.log("getContractFullName switch default: input = ", input);
                id_get_affiliate_api.trigger(input, {}, affiliate_ok, affiliate_ko);
            }
            break;
    }

    RMPApplication.debug("end getContractFullName");
}

function affiliate_ok(result)
{
    RMPApplication.debug("begin affiliate_ok : result = " + JSON.stringify(result));
    // console.log("=> affiliate_ok: result = ", result);
    if ( (result.records.length == undefined) || (result.records.length == 0) ) {
        // console.log('=> affiliate_ok: aucune enseigne ne répond aux critères!');
        var  error_affiliate_ok_title = ${P_quoted(i18n("error_affiliate_ok_title", "Résultat de la recherche"))};
        var  error_affiliate_ok_msg = ${P_quoted(i18n("error_affiliate_ok_msg", "Aucune enseigne ne répond aux critères!"))};
        dialog_error(error_affiliate_ok_title, error_affiliate_ok_msg, queries_btn_ok);
        return;
    } else {
        affiliate_obj = result.records[0];
        var contract = affiliate_obj.company + "\\" + affiliate_obj.abbreviation;   // contract definition
        sn_query += "^company.u_full_name=" + contract;
        
        getLocationQuery();     // precise geographical area to limit search time
    }
    RMPApplication.debug("end affiliate_ok");
}

function affiliate_ko(error)
{
    RMPApplication.debug("begin affiliate_ko : error = " + JSON.stringify(error));
    // console.log("=> affiliate_ko: error = ", error);
    var error_msg = ${P_quoted(i18n("affiliate_ko_msg", "Récupération impossible des informations de la filiale!"))};
    notify_error(queries_title_notify, error_msg + ' ' + queries_thanks_notify); 
    RMPApplication.debug("end affiliate_ko");
}

// ===========================
//  locationFilter definition
// ===========================
function getLocationQuery()
{
    RMPApplication.debug("begin getLocationQuery");
    // console.log('getLocationQuery');
    var country_value = $("#id_countryFilter").val();
    var affiliate_value = $("#id_affiliateFilter").val();
    var locations_value = $("#id_locationFilter").val();
    var allLocations = (locations_value.indexOf("tous") > -1) ? true : false;
    var locationQuery = "";
    
    // console.log("=> getLocationQuery: locations_value = ", locations_value);
    // console.log("=> getLocationQuery: var_location_list = ", var_location_list);
    // console.log("=> getLocationQuery: allLocations = ", allLocations);
    // console.log("=> getLocationQuery: view = ", view);
    // console.log("=> getLocationQuery: scope = ", scope);
    if (allLocations) {
        switch (scope) {            // "scope" is defined in getLocations() function

            case "COMPANY" :        // contract is already defined and is enough to query SNOW
                break;

            case "GRP_AFF" :        // list of involved contracts are already defined 
                break;

            case "AFFILIATE" :      // contract is already defined and is enough to query SNOW
                break;              // "All countries" and 1 affiliate are selected

            case "COUNTRY" :
                locationQuery += "^location.country=" + $.trim(country_value);
                break;              // "All affiliates" and 1 country are selected            

            case "AFFILIATECOUNTRY" :       // contract is already defined !
                locationQuery += "^location.country=" + $.trim(country_value);
                break;

            case "DIVISION" :       // we can optimize SN query by adding division's location value
                locationQuery += "^location.country=" + $.trim(country_value);
                locationQuery += "^location.u_division=" + $.trim(login.division);
                break;

            case "REGION" :         // we can optimize SN query by adding region's location value
                locationQuery += "^location.country=" + $.trim(country_value);
                locationQuery += "^location.u_region=" + $.trim(login.region);
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

                        // ATTENTION: location's name logic is different in Service Now according each affiliate
                        var separator, rule_name;
                        switch (var_location_list[j].affiliate.toUpperCase()) {
                            case 'YYYYYY':
                                separator = "-";
                                rule_name = "loca_rule_1";
                                break;
                            
                            default:        // other affiliates with common rule
                                separator = "-";
                                rule_name = "loca_rule_2";
                                break;
                        }
                        // console.log("=> getLocationQuery: rule_name = ", rule_name);

                        switch (rule_name) {
                            case 'loca_rule_1':         // YYYYYY
                                var loca_name = $.trim(var_location_list[j].location_name);
                                break;
                            case 'loca_rule_2':
                                var loca_name = $.trim(var_location_list[j].location) + separator + $.trim(var_location_list[j].location_code);
                                break;
                        }   // -- end switch (rule_name)
                        // console.log('i:', i, "- loca_name: ", loca_name);

                        if (first == true) {
                            first = false;
                            locationQuery += "^location.nameIN" + loca_name;
                        } else {
                            locationQuery += "," + loca_name;
                        }
                    }
                }       // -- end (for j)
            }       // -- end (for i)
            // console.log("getLocationQuery: locationQuery = ", locationQuery);

        }       // -- end if (locations_value[0] === 'false') 
    }       // -- end  if (allLocations) 

    sn_query += locationQuery;          // query is complete
    queryServiceNow();                  // request Service Now with sn_query    sn_query += locationQuery;

    RMPApplication.debug("end getLocationQuery");
}
