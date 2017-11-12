// ==========================
//   Dashboard: MAP section
// ==========================
RMPApplication.debug("Dashboard Map Section: Application started");

// ========================
// Variables declaration
// ========================

var map, bounds, infoWindow, current_markers, current_sla, sla_loc_name;
var overSLA_WO, soonOverSLA_WO, onTimeSLA_WO;

// parameters for different SLAs
var sla_def = [
    { 
        'type' : 'overSLA', 
        'marker' : 'https://live.runmyprocess.com/live/112501480325272109/upload/2b6c9840-0f10-11e7-8bf9-02b3a23437c9/marker_red.png',
        'sign' : 'frown-o',
        'color' : '#FF0000'
    },
    { 
        'type' : 'soonOverSLA', 
        'marker' : 'https://live.runmyprocess.com/live/112501480325272109/upload/2b6d0d70-0f10-11e7-8bf9-02b3a23437c9/marker_yellow.png',
        'sign' : 'meh-o',
        'color' : '#FFD760'
    },
    { 
        'type' : 'onTimeSLA', 
        'marker' : 'https://live.runmyprocess.com/live/112501480325272109/upload/2b6bade0-0f10-11e7-8bf9-02b3a23437c9/marker_green.png',
        'sign' : 'smile-o',
        'color' : '#00DD21'
    }
];

// ===============================================================
//  set Map on the page
// ===============================================================
function initMap()
{
    RMPApplication.debug("begin initMap");
    // console.log('begin initMap');
    map = null;
    bounds = null;
    infoWindow = null;
    current_markers = null;
    current_sla = "all";    // we initialize the map with all markers (=> all SLA states)
    sla_loc_name = [];

    var headquarter_coords = {lat: 48.913792, lng: 2.305747};       // FUJITSU HeadQuarter coordinates

    // Options for the map
    var mapOptions = {
        zoom: 6,
        scrollwheel: false,
        center: headquarter_coords
    };

    // select the DIV container where the map will be shown
    map = new google.maps.Map(document.getElementById('pan_map'), mapOptions);
    bounds = new google.maps.LatLngBounds();
    // console.log("initmap: bounds = ", bounds);
    infoWindow = new google.maps.InfoWindow();

    var selected_dashboard_tab = id_selected_dashboard_tab.getValue();
    if (selected_dashboard_tab == "map") {
        dispatchWorkOrder();
    }    

    RMPApplication.debug("end initMap"); 
}

// ===============================================================
//  dispatch work order according its SLA elapsed time percentage
// ===============================================================
function dispatchWorkOrder()
{
    RMPApplication.debug("begin dispatchWorkOrder");
    // console.log('begin dispatchWorkOrder');
    
    // attach concerned SLA definition to each work orker
    var SLA_overSLA = sla_def[0];
    var SLA_soonOverSLA = sla_def[1];
    var SLA_onTimeSLA = sla_def[2];

    // reset previous list Work Orders according their SLA
    overSLA_WO = [];
    onTimeSLA_WO = [];
    soonOverSLA_WO = [];

    // No opened ticked with active SLA
    if ( (wos_array.length == undefined) || (wos_array.length == 0) ) {
        var error_title = ${P_quoted(i18n('error_title_id9', 'Information'))};
        var error_text = ${P_quoted(i18n('error_text_id9', 'Aucun incident associé à un SLA est en cours !'))};
       notify_error(error_title, error_text); 
    
    } else {

        console.log('=> dispatchWorkOrder: wos_array = ', wos_array);
        var wos_loc_name = [];              // store all locations with an active SLA
        var reduced_wos_loc_name = [];      // delete all duplicates and keep only one instance of each location

        // Work orders will be ordered by their location, especially when showing SLA
        for (var i=0; i<wos_array.length; i++) {
            wos_loc_name[i] = wos_array[i].loc_name;
            reduced_wos_loc_name = reduce_array(wos_loc_name);
        }
        // console.log('=> dispatchWorkOrder: reduced_wos_loc_name = ', reduced_wos_loc_name);

        // 1) deal with location name
        var k_on = 0;
        var k_soon = 0;
        var k_over = 0;
        for (var j=0; j<reduced_wos_loc_name.length; j++) {
            
            // Indices changed only if one site at least belongs to dedicated SLA
            var increment_k_on = false;
            var increment_k_soon = false;
            var increment_k_over = false;
            // Isolate location code
            var tiret_j = reduced_wos_loc_name[j].lastIndexOf("-");
            var sla_loc_code = reduced_wos_loc_name[j].substring(tiret_j+1, reduced_wos_loc_name[j].length).trim();
            sla_loc_name[j] = {};
            sla_loc_name[j].loc_name = reduced_wos_loc_name[j];
            sla_loc_name[j].wo_list = [];

            // 2) list work order by tasksla_planned_end_time
            for (var i=0; i<wos_array.length; i++) {

                var tiret_i = wos_array[i].loc_name.lastIndexOf("-");
                // keep additionnal location informations for further needs
                wos_array[i].loc_col_location_code = wos_array[i].loc_name.substring(tiret_i+1, wos_array[i].loc_name.length).trim();
                wos_array[i].loc_col_location_name = wos_array[i].loc_name.substring(0, tiret_i);
                // console.log('=> dispatchWorkOrder: location_name = "' + wos_array[i].loc_col_location_name + '"\nlocation_code = "' + wos_array[i].loc_col_location_code + '"');

                if (wos_array[i].loc_col_location_code === sla_loc_code) {                // strict dispatching                  
                    sla_loc_name[j].wo_list.push(wos_array[i]);

                    if ( parseFloat(wos_array[i].tasksla_percentage) < 80 ) {             // On Time SLA
                        // console.log('=> dispatchWorkOrder: j='+j+'; i='+i+'; < 80');
                        wos_array[i].sla_def = SLA_onTimeSLA;
                        if (isEmpty(onTimeSLA_WO[k_on])) {
                            onTimeSLA_WO[k_on] = {};
                            onTimeSLA_WO[k_on].loc_name = reduced_wos_loc_name[j];
                        }
                        if (isEmpty(onTimeSLA_WO[k_on].wo_list)) {
                            onTimeSLA_WO[k_on].wo_list = [];
                        }
                        onTimeSLA_WO[k_on].wo_list.push(wos_array[i]);
                        increment_k_on = true;
                        // console.log("=> dispatchWorkOrder: onTimeSLA_WO[" + k_on + "] = " + onTimeSLA_WO[k_on]);

                    } else if ( parseFloat(wos_array[i].tasksla_percentage) < 100 ) {     // between 80 and 100% elapsed Time
                        // console.log('=> dispatchWorkOrder: 80 < x < 100');
                        wos_array[i].sla_def = SLA_soonOverSLA;
                        if (isEmpty(soonOverSLA_WO[k_soon])) {
                            soonOverSLA_WO[k_soon] = {};
                            soonOverSLA_WO[k_soon].loc_name = reduced_wos_loc_name[j];
                        }
                        if (isEmpty(soonOverSLA_WO[k_soon].wo_list)) {
                            soonOverSLA_WO[k_soon].wo_list = [];
                        }
                        soonOverSLA_WO[k_soon].wo_list.push(wos_array[i]);
                        increment_k_soon = true;

                    } else {                                        // over SLA time
                        // console.log('=> dispatchWorkOrder: > 100');
                        wos_array[i].sla_def = SLA_overSLA;
                        if (isEmpty(overSLA_WO[k_over])) {
                            overSLA_WO[k_over] = {};
                            overSLA_WO[k_over].loc_name = reduced_wos_loc_name[j];
                        }
                        if (isEmpty(overSLA_WO[k_over].wo_list)) {
                            overSLA_WO[k_over].wo_list = [];
                        }
                        overSLA_WO[k_over].wo_list.push(wos_array[i]);
                        increment_k_over = true;
                    }
                }
            }
            if (increment_k_on) { k_on++; }
            if (increment_k_soon) { k_soon++; }
            if (increment_k_over) { k_over++; }
            // console.log('=> dispatchWorkOrder: sla_loc_name['+ j + '] = ' + sla_loc_name[j]);
        }
    }

    // console.log('onTimeSLA_WO = ', onTimeSLA_WO, '\n','soonOverSLA_WO = ', soonOverSLA_WO, '\n','overSLA_WO = ', overSLA_WO);
    // console.log('=> dispatchWorkOrder: sla_loc_name = ', sla_loc_name);
    
    setTimeout(function() { 
        // show tickets with an active SLA (3 states)
        showSLA('all');
    }, 300);

    RMPApplication.debug("end dispatchWorkOrder"); 
}


// ========================================================
//  show markers responding to selected SLA and hide others
// ========================================================
function showSLA(sla_type) 
{
    RMPApplication.debug("begin showSLA");
    current_sla = sla_type;
    // console.log('current_sla = ', current_sla);

    if (sla_type == "all") {
        current_sla = "all";
        showMarkers(sla_loc_name);
    } else {
        for (var i=0; i<sla_def.length; i++) {
            var array_WO = eval(sla_def[i].type + '_WO');
            // console.log('array_WO = ', array_WO);
            if (sla_def[i].type == sla_type) {
                showMarkers(array_WO);
            }
        }
    }
    RMPApplication.debug("end showSLA");
}

// ===============================================================
// Shows any markers currently in the array
// ===============================================================
function showMarkers(arr_loc) 
{
    RMPApplication.debug("begin showMarkers");
    if ( (arr_loc.length == undefined) || (arr_loc.length == 0) ) {
        var error_title = ${P_quoted(i18n('error_title_id10', 'Information'))};
        var error_text = ${P_quoted(i18n('error_text_id10', 'Aucun incident en cours est concerné par ce statut de SLA!'))};
         notify_error(error_title, error_text);
        return;
    }
    // clear previous markers on the map before showing the new markers
    if (!isEmpty(current_markers)) {
        hideMarkers(current_markers);
    }
    current_markers = [];
    for (var i=0; i<arr_loc.length; i++) {
        addMarker(arr_loc[i]);
    }
    // Automatically center the map fitting all markers on the screen
    // console.log("showMarkers: bounds = ", bounds);
    if (!isEmpty(bounds)) {
        map.fitBounds(bounds);
        if (arr_loc.length == 1) {      // if only one location, adjust a correct zoom
            map.setZoom(6);
        }
    }
    // console.log('current_markers = ', current_markers);

    RMPApplication.debug("end showMarkers");
}

// ===============================================================
//  Add a marker
// ===============================================================
function addMarker(loca)
{
    RMPApplication.debug("begin addMarker");
    // console.log('addMarker: loca = ', loca);

    var contentInfo = setSiteInfo(loca);
    // console.log('contentInfo = ', contentInfo);
    var place = new google.maps.LatLng (loca.wo_list[0].loc_latitude, loca.wo_list[0].loc_longitude);
    // console.log('addMarker: place = ', place);
    
    // define a rectangle with all markers on the map
    if (!isEmpty(place)) {
        bounds.extend(place);
    }

    // place marker on the map
    var marker = new google.maps.Marker({
        map: map,
        position: place,
        title: loca.loc_name,
        icon: loca.wo_list[0].sla_def.marker
    });
    marker.setMap(map);
    // console.log('addMarker: marker = ', marker);

    // keep all current markers on the map in an array
    current_markers.push(marker);

    // Allow each marker to have an info window 
    google.maps.event.addListener(marker, 'click', (function(marker) {
            return function() {
                infoWindow.setContent(contentInfo);                 
                infoWindow.open(map, marker);
                $('.gm-style-iw').parent('div').css({"background-color": "#FFFFFF"});
            }
        })(marker));

    RMPApplication.debug("end addMarker");
}

// ===============================================================
//  set Content of information windows with work_order & SLA info
// ===============================================================
function setSiteInfo(w_order_arr) 
{
    RMPApplication.debug("begin setSiteInfo");
    // console.log('setSiteInfo : w_order_arr = ', w_order_arr);

    var imgInfo = "https://live.runmyprocess.com/live/112501480325272109/upload/2b634970-0f10-11e7-8bf9-02b3a23437c9/locations_200.png";
    var siteInfo =    
        '<div id="content' + w_order_arr.wo_list[0].loc_col_location_code + '">' +
            '<div id="siteNotice' + w_order_arr.wo_list[0].loc_col_location_code + '">' +
                '<img src="' + imgInfo + '" height="35">' +
                '<h1 id="titleSite_' + w_order_arr.wo_list[0].loc_col_location_code + '" class="title_infoWindowMap"><strong>' + w_order_arr.wo_list[0].loc_col_location_name + ' - ' + w_order_arr.wo_list[0].loc_col_location_code + '</strong></h1>' +
                '<div id="contentSite_' + w_order_arr.wo_list[0].loc_col_location_code + '" class="content_infoWindowMap">' +
                    '<br>' + 
                    '<div class="address_infoWindowMap">' + w_order_arr.wo_list[0].loc_street + '<br>' + 
                   w_order_arr.wo_list[0].loc_zip + '  ' + w_order_arr.wo_list[0].loc_city.toUpperCase()  + '<br>' + 
                    '<i class="glyphicon glyphicon-globe" aria-hidden="true"> </i>' + ' GPS: Lat (' + w_order_arr.wo_list[0].loc_latitude + ') - Long (' + w_order_arr.wo_list[0].loc_longitude + ')</div>' +
                    '<hr>' + 
                    '<p><strong>' + ${P_quoted(i18n('popup_id1', 'Incidents en cours (Etat SLA)'))} + '</strong></p>';

/*    var w_order_arr_sorted = w_order_arr;
    w_order_arr_sorted.sort( function(a, b) {
        return new Date(a.tasksla_planned_end_time).getTime() - new Date(b.tasksla_planned_end_time).getTime();
    });

    for (var i=0; i<w_order_arr_sorted.wo_list.length; i++) {
        var end_time = moment(w_order_arr.wo_list[i].tasksla_planned_end_time).format("DD/MM/YYYY HH:mm");
        siteInfo += '<p>- ' + w_order_arr.wo_list[i].wo_number + ' &#10143; Fin SLA: ' + end_time  + ' - <span style="color: ' + w_order_arr.wo_list[i].sla_def.color + ';"><i class=\"fa fa-' +  w_order_arr.wo_list[i].sla_def.sign + ' fa-lg\" aria-hidden=\"true\"></i></span> [' + w_order_arr.wo_list[i].tasksla_percentage + '%]</p>';
    }*/

    for (var i=0; i<w_order_arr.wo_list.length; i++) {
        // var end_time = moment(w_order_arr.wo_list[i].tasksla_planned_end_time).format("DD/MM/YYYY HH:mm");
        var end_time_utc = moment.tz(w_order_arr.wo_list[i].tasksla_planned_end_time, "UTC");
        var end_time = moment(end_time_utc, "YYYY-MM-DD HH:mm:ss").tz(login.timezone).format("DD/MM/YYYY HH:mm:ss");
        siteInfo += '<p>- ' + w_order_arr.wo_list[i].wo_number + ' &#10143; ' + ${P_quoted(i18n('popup_id2', 'Fin SLA'))} + ': ' + end_time  + ' - <span style="color: ' + w_order_arr.wo_list[i].sla_def.color + ';"><i class=\"fa fa-' +  w_order_arr.wo_list[i].sla_def.sign + ' fa-lg\" aria-hidden=\"true\"></i></span> [' + w_order_arr.wo_list[i].tasksla_percentage + '%]</p>';
    }

    siteInfo += '</div></div></div>';

    RMPApplication.debug("end setSiteInfo");
    return siteInfo;
}

// ===============================================================
// Hide all markers in the array
// ===============================================================
function hideMarkers(markers_array) 
{
    RMPApplication.debug("begin hideMarkers");
    // console.log('hideMarkers : markers_array = ', markers_array);
    clearMarkers(markers_array);
    RMPApplication.debug("end hideMarkers");
}

// ===============================================================
// Deletes all markers in the array by removing references to them
// ===============================================================
function deleteMarkers(markers_array) 
{
    RMPApplication.debug("begin deleteMarkers");
    // console.log('deleteMarkers : markers_array = ', markers_array);
    clearMarkers(markers_array);
    markers_array = [];                 // delete all markers on the map, by resetting array
    RMPApplication.debug("end deleteMarkers");
}

// ===============================================================
// Removes the markers from the map, but keeps them in the array
// ===============================================================
function clearMarkers(markers_array) 
{
    RMPApplication.debug("begin clearMarkers");
    // console.log('clearMarkers : markers_array = ', markers_array);
    var clean = true;
    setMapOnAll(markers_array, clean);
    RMPApplication.debug("end clearMarkers");
}

// ===============================================================
//  Set the map on all markers in the array or clean the map
// ===============================================================
function setMapOnAll(markers_array, clean) 
{
    RMPApplication.debug("begin setMapOnAll");
    // console.log('setMapOnAll : markers_array = ', markers_array, '\n clean = ', clean);
    for (var i=0; i<markers_array.length; i++) {
        if (clean) {
            markers_array[i].setMap(null);
        } else {
            markers_array[i].setMap(map);
        }
    }
    RMPApplication.debug("end setMapOnAll");
}
