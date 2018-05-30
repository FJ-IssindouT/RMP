// ================================================================================
// This library groups all utilities functions, which can be called by all programs
// ================================================================================

// ====================================================================================
//   For debugging purpose
// ====================================================================================
function c_debug(part, str_content, vb_content) 
{
    if (part) {
        if (!(isEmpty(vb_content))) {
            console.log("\n " + str_content, vb_content);
        } else {
            console.log("\n " + str_content);
        }
    }
}

// ====================================================================================
//   Some usefull functions to display a notification on screen
// ====================================================================================
function notify_success(title, content) 
{
    ssi_modal.notify('success', 
        {
            title: title,
            content: content,
            position: 'right bottom',
            closeAfter: { time: 3, displayTime: false, resetOnHover: true }
        }   
    );
}
function notify_error(title, content) 
{
    ssi_modal.notify('error', 
        {
            title: title,
            content: content,
            position: 'right bottom',
            closeAfter: { time: 3, displayTime: false, resetOnHover: true }
        }   
    );
}
function notify_info(title, content) 
{
    ssi_modal.notify('info', 
        {
            title: title,
            content: content,
            position: 'right bottom',
            closeAfter: { time: 3, displayTime: false, resetOnHover: true }
        }   
    );
}
function notify_warning(title, content) 
{
    ssi_modal.notify('warning', 
        {
            title: title,
            content: content,
            position: 'right bottom',
            closeAfter: { time: 3, displayTime: false, resetOnHover: true }
        }   
    );
}

// ====================================================================================
//   Some usefull functions to display a dialog box on screen
// ====================================================================================
function dialog_success(title, content, labelBtn)
{
    ssi_modal.dialog({
        title: title,
        content: content, 
        okBtn:
            {
                className:'btn btn-success btn-responsive',
                label: labelBtn
            }
    });
}
function dialog_info(title, content, labelBtn)
{
    ssi_modal.dialog({
        title: title,
        content: content, 
        okBtn:
            {
                className:'btn btn-primary btn-responsive',
                label: labelBtn
            }
    });
}
function dialog_error(title, content, labelBtn)
{
    ssi_modal.dialog({
        title: title,
        content: content, 
        okBtn:
            {
                className:'btn btn-danger btn-responsive',
                label: labelBtn
            }
    });
}
function dialog_warning(title, content, labelBtn)
{
    ssi_modal.dialog({
        title: title,
        content: content, 
        okBtn:
            {
                className:'btn btn-warning btn-responsive',
                label: labelBtn
            }
    });
}

// ====================================================================================
//   Some usefull functions to display a confirmation box on screen
// ====================================================================================
function modal_confirm(question, labelOK, functionOK, labelCancel, functionCancel)
{
    ssi_modal.confirm({
        content: question,
        okBtn: {
            label: labelOK,
            className: 'btn btn-primary btn-responsive'
        },
        cancelBtn:{
            label: labelCancel,
            className: 'btn btn-danger btn-responsive'
        }
    }, function(result) {
            if (result) {
                functionOK();
            }
            else {
                functionCancel();
            }
        }
    );
}

// ====================================================================================
//   Check if a substring is part of another string
// ====================================================================================
function include_string(str, sub_str) 
{
	var present = (str.indexOf(sub_str) !== -1) ? true : false;
	return present;
}

// =========================
// Hide/show HTML DIV tags
// =========================
function hideDiv(id_div) 
{
	document.getElementById(id_div).style.display = "none";
}
function showDiv(id_div) 
{
	document.getElementById(id_div).style.display = "block";
}

// ======================
// utility functions
// ======================
function isEmpty(s_var)
{
    if(s_var !== "" && s_var !== "undefined" && s_var !== null && s_var !== undefined && s_var !== "NOT DEFINED" && s_var !== "not defined") {
        return false;
    } else {
        return true;
    }
}

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
  
function capitalize(str)  
{  
 return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});  
}

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function setUrlfromId (id_account, id_file, file_name)
{
	var url = "https://live.runmyprocess.com/live/";
	url += id_account + "/upload/" + id_file + '/' + file_name;
	return url;
}

// =====================================================
// function reduce_array by deleting duplicate entries
// =====================================================
function reduce_array (P_array)	
{
	var arr = P_array.slice();
    arr.sort();
    for (var i=1; i<arr.length; i++) {
        if (arr[i-1] == arr[i]) {
            arr.splice(i--, 1);
        }
    }
    return arr;
}

function lineExistsInJsonArray(json_array, key, id) 
{
	var found = false;
	json_array.some(function (r) {
		if (r[key] === id) {
			found=true;
			return true;
		}
   	});
  	return found;
}

function lineExistsInJsonArray2(json_array, key, key2, id) 
{
	var found = false;
	json_array.some(function (r) {
		if (r[key][key2] == id) {
			found=true;
			return true;
		}
   });
  return found;
}

function getInvalidFields()
{
	invalid_fields = [];
	
	function checkValid(widget) {
		var regu = new RegExp("_", "g");
		var widget_name = widget.getName();
		
		try{
			if (!widget.isValid(true)) {
				/*If the variable name is not prefixed with a .*/
				if (widget.getIndex()<0) {
					invalid_fields.push({"type":"other","label":widget.getLabel(),"value":{}});
				} else {/*it should be an array*/
				
					var line_index = widget.getIndex();
				    var arr_widget_name = widget_name.split('.');
					var array_id  = arr_widget_name[0];
					console.log(array_id);
					var array_label   = array_id.split('_')[2].toUpperCase();
					/*Ca serait bien de pouvoir recuperer le header du widget et pas bricoler le nom de la variable */
					console.log(widget_name);
					
					var thisWidgetId = widget_name.split('.')[1];
					var columnOrder = JSON.parse(RMPApplication.get("array_column_order"));
					var thisColumnOrder = columnOrder[RMPApplication.get("request_type_value")];
					var thisColumnIndex = thisColumnOrder[thisWidgetId];
					//var label =	eval(array_id).getHeader(thisColumnIndex);
					var label =	array_id.getHeader(thisColumnIndex);
					//var label = widget_name.split('.')[1].replace('id_','').replace(regu," ");
					
					
					var obj = {};
					obj.type = "array";
					obj.value={};
					obj.value.array_id = array_id;
					obj.value.array_label = array_label;
					obj.value.lines = [{"index": line_index,"label":[label]}];
				
					/*If there's no entry for the same array => add a new entry*/
					if(!lineExistsInJsonArray2(invalid_fields,"value","array_id",array_id)){
						invalid_fields.push(obj);
					}
					else{
						invalid_fields.some(function (r) {
							if (r.value.array_label === array_label) {
								/*If there's no entry for the same array,same line index => add a new entry*/
								if(!lineExistsInJsonArray(r.value.lines,"index",line_index)){
									r.value.lines.push(obj.value.lines[0]);	
								}else{
									r.value.lines.some(function (l){
										if(l.index === line_index){//line index already exist
											var new_label_array = l.label;
											new_label_array.push(label);
											l.label.label =new_label_array;
										}
									});
								
								}									
							}
						});
					}					
				}
			}
		} catch(e) {
		console.log(e);
		}
	} 
	RMPWidgets.forEachWidget(checkValid);
	return invalid_fields;
}

function getHtmlInvalidFields()
{
	var invalid_fields = getInvalidFields();
	var html="<div id = 'InvalidFields'><ul>";
	var regu = new RegExp("_", "g");
	for (var i = 0; i< invalid_fields.length ; i++){
		if(invalid_fields[i].type=="other"){
			html += "<li>"+invalid_fields[i].label+"</li>";
		}else{
		var tmp_title_array = invalid_fields[i].value.array_id.replace('id_array_','').replace(regu," ").toUpperCase();
			html += "<li><b>"+tmp_title_array.replace('Array','')+"</b></li><ul>";
			for(var j =0 ; j<invalid_fields[i].value.lines.length ; j++){
				html += "<li><b> Ligne "+parseInt(invalid_fields[i].value.lines[j].index)+1+"</b></li><ul>";
				for(var k =0 ; k<invalid_fields[i].value.lines[j].label.length ; k++){
					html += "<li> "+invalid_fields[i].value.lines[j].label[k]+"</li>";
				}
				html += "</ul>";
			}
			html += "</ul>";
		}
		
	}
	html += "</ul></div>";
return html;
}

function rmp_transpose(my_object) 
{
    var a_keys = [];
    var my_output = {};
    if (my_object instanceof Array) {
    //we try to convert array of json to json of arrays


    if (my_object.length > 0) {
        for (var my_key in my_object[0]) {
            a_keys.push(my_key);
        }
    }
    for (var j = 0; j < a_keys.length; j++) {
        var a_cell = [];
        for (var i = 0; i < my_object.length; i++) {
            if (my_object[i][a_keys[j]] !== undefined) {
                a_cell.push(my_object[i][a_keys[j]]);
            } else {
                a_cell.push("");
            }
        }
        my_output[a_keys[j]] = a_cell;
    }
    return my_output;
    } else {
    //we try to convert json of arrays into an array of json
    my_output = [];
    a_keys = [];
    for (var ma_cle in my_object) {
        a_keys.push(ma_cle);
    }
    if (a_keys.length > 0) {
        for (var k = 0; k < my_object[a_keys[0]].length; k++) {
            var my_json = {};
            for (var l = 0; l < a_keys.length; l++) {
                my_json[a_keys[l]] = my_object[a_keys[l]][k];
            }
            my_output.push(my_json);
        }
    }
    return my_output;
    }
}

// ======================
// date & time functions
// ======================
function getNumberMonth(timeSt) 
{
    moment.locale('fr');
    var mm = moment(timeSt).format("MM");
	return mm;
}

function getPrevNumberMonth(timeSt) 
{
    moment.locale('fr');
    var mm = moment(timeSt).subtract(1, 'months').format("MM");
	return mm;
}

function getShortMonth(timeSt) 
{
	moment.locale('fr');
    var mm = moment(timeSt).format("MMM");
	return mm;
}

function getPrevShortMonth(timeSt) 
{
	moment.locale('fr');
    var mm = moment(timeSt).subtract(1, 'months').format("MMM");
	return mm;
}

function getLongMonth(timeSt) 
{	
	moment.locale('fr');
    var mmmm = moment(timeSt).format("MMMM");
	return mmmm;
}

function getPrevLongMonth(timeSt) 
{	
	moment.locale('fr');
    var mmmm = moment(timeSt).subtract(1, 'months').format("MMMM");
	return mmmm;
}

function getDateTimeNow() 
{
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; 	//January is 0!
    var hh = today.getHours();
    var MM = today.getMinutes();
    var ss = today.getSeconds();
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    if (hh < 10) {
        hh = '0' + hh;
    }
    if (MM < 10) {
        MM = '0' + MM;
    }
    if (ss < 10) {
        ss = '0' + ss;
    }
    return dd + '/' + mm + '/' + yyyy + " " + hh + ":" + MM + ":" + ss;
}

function getDateNow()
{
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1; 		//January is 0!
	var yyyy = today.getFullYear();
	if (dd < 10) {
		dd = '0' + dd;
	}
	if (mm < 10) {
		mm = '0' + mm;
	}
	return dd + '/' + mm + '/' + yyyy;
}

function getExpectedStartDateSN(addDays)
{
	var today = new Date();
	today.setTime(today.getTime() + addDays*24*60*60*1000);
	var dd = today.getDate();
	var mm = today.getMonth() + 1; 		//January is 0!
	var yyyy = today.getFullYear();
	if (dd < 10) {
		dd = '0' + dd;
	}
	if (mm < 10) {
		mm = '0' + mm;
	}
	return yyyy + '-' + mm + '-' + dd + " 10:00:00";
}

function getExpectedStartDateRMP(addDays)
{
	var today = new Date();
	today.setTime(today.getTime() + addDays*24*60*60*1000);
	var dd = today.getDate();
	var mm = today.getMonth() + 1; 		//January is 0!
	var yyyy = today.getFullYear();
	if (dd < 10) {
		dd = '0' + dd;
	}
	if (mm < 10) {
		mm = '0' + mm;
	}
	return yyyy + '-' + mm + '-' + dd + " 10:00:00";
}

function stringToDate(dateStr, separator) {
    var date = dateStr.split(separator);
    return new Date(date[2], date[1] - 1, date[0]);
}

// String format shoud be "dd/MM/YYYY HH:mm" or "dd-MM-YYYY HH:mm"
function stringToDateTime(dateStr, separator) {
    var temp = dateStr.split(" ");      // Split date and time
    var date = temp[0].split(separator);
    var time = temp[1].split(":");
    return new Date(date[2], date[1] - 1, date[0], time[0], time[1]);
}

String.prototype.toDate = function(format)
{
  var normalized      = this.replace(/[^a-zA-Z0-9]/g, '-');
  var normalizedFormat= format.toLowerCase().replace(/[^a-zA-Z0-9]/g, '-');
  var formatItems     = normalizedFormat.split('-');
  var dateItems       = normalized.split('-');

  var monthIndex  = formatItems.indexOf("mm");
  var dayIndex    = formatItems.indexOf("dd");
  var yearIndex   = formatItems.indexOf("yyyy");
  var hourIndex     = formatItems.indexOf("hh");
  var minutesIndex  = formatItems.indexOf("ii");
  var secondsIndex  = formatItems.indexOf("ss");

  var today = new Date();

  var year  = yearIndex>-1  ? dateItems[yearIndex]    : today.getFullYear();
  var month = monthIndex>-1 ? dateItems[monthIndex]-1 : today.getMonth()-1;
  var day   = dayIndex>-1   ? dateItems[dayIndex]     : today.getDate();

  var hour    = hourIndex>-1      ? dateItems[hourIndex]    : today.getHours();
  var minute  = minutesIndex>-1   ? dateItems[minutesIndex] : today.getMinutes();
  var second  = secondsIndex>-1   ? dateItems[secondsIndex] : today.getSeconds();

  return new Date(year,month,day,hour,minute,second);
};

// ================================
// order array & object functions
// ================================

function sortObjectByKey(obj, key) {
    return Object.keys(obj).sort().reduce(function (result, key) {
        result[key] = obj[key];
        return result;
    }, {});
}

function sortArrayByKey(on, descending) {
 on = on && on.constructor === Object ? on : {};
 return function(a,b){
   if (on.string || on.key) {
     a = on.key ? a[on.key] : a;
     a = on.string ? String(a).toLowerCase() : a;
     b = on.key ? b[on.key] : b;
     b = on.string ? String(b).toLowerCase() : b;
     // if key is not present, move to the end 
     if (on.key && (!b || !a)) {
      return !a && !b ? 1 : !a ? 1 : -1;
     }
   }
   return descending ? ~~(on.string ? b.localeCompare(a) : a < b)
                     : ~~(on.string ? a.localeCompare(b) : a > b);
  };
}