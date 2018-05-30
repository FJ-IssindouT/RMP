function legend(parent, data) {
    parent.className = 'legend';
    var datas = data.hasOwnProperty('datasets') ? data.datasets : data;

    // remove possible children of the parent
    while(parent.hasChildNodes()) {
        parent.removeChild(parent.lastChild);
    }

    datas.forEach(function(d) {
        var title = document.createElement('span');
        title.className = 'title';
        title.style.borderColor = d.hasOwnProperty('strokeColor') ? d.strokeColor : d.color;
        title.style.borderStyle = 'solid';
        parent.appendChild(title);

        var text = document.createTextNode(d.label);
        title.appendChild(text);
    });
}

function get_array(my_father, my_son) {
	if (typeof(my_father) == "object") {
		if (my_father[my_son] != undefined) {
			if (my_father[my_son].length != undefined) {
				var my_array = my_father[my_son];
				} 
				else {
			var my_array = [my_father[my_son]];
			}
		} else {
		var my_array = [];
		}
	} else {
	var my_array = [];
	}
	return my_array;
}

//Display a PieChart
function drawPieChart_js(html_id, array_data) {
	var colors = ["#CD1226","#0099D7","#FFDB78","#CD127F","#B1CD12","#AE12CD","#1222CD","#12CD3E","#E3E3E3"];
	 
	var data =   new Array();
	for (var i = 0; i < array_data.length; i++) {	
		my_value = {};
		my_value.label = array_data[i].label;   
        my_value.value = array_data[i].value;
        my_value.color = colors[i];
		data.push(my_value);
	}
	
	var ctx = document.getElementById(html_id).getContext("2d");
	var options = {};
	var myPieChart = new Chart(ctx).Pie(data);
	legend(document.getElementById(html_id+"_legend"), data);
}

/*Ajax Function to Load data from process report by status*/
function draw_pie1() {
	$.ajax({
		type : "GET",
		//url : "https://live.runmyprocess.com/live/112501412000161590/analysis/process/COUNT?field=NUMBER&group=MONTH&operator=EE%20EE%20IS%20EE&value=146550%20TEST%20NULL%20159933&filter=PROJECT%20MODE%20PARENT%20PROCESS&nb=10000&media=json",
		url :"https://live.runmyprocess.com/live/112501412000161590/analysis/process/COUNT?field=NUMBER&group=MEASURE_1&operator=EE%20EE%20IS%20EE&filter=PROJECT%20MODE%20PARENT%20PROCESS&value=146550%20LIVE%20NULL%20159933&nb=10000&media=json",	 
		async : true,
		data:{},
		dataType : "json",
		error :function () {
				alert('Error while loading status.');
		},
		success : function (P_result) {
			var my_entries = get_array(P_result.feed.entry.content.data, "result");
			var array_data = new Array();
			for (var i = 0; i < my_entries.length; i++) {
				array_data.push({
					"label" : my_entries[i].serie.value,
					"value" : parseFloat(my_entries[i].value)
				});
			}
			//alert(JSON.stringify(array_data));
			var html_id = "chart_1";
			drawPieChart_js(html_id, array_data);
		}
	});	
}

draw_pie1();
