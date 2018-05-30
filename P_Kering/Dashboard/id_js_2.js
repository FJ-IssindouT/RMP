
function drawColumnChart(html_id, array_data, array_column, chart_title, chart_width, chart_height) {
    // Create our data table.
    var data = new google.visualization.DataTable();
    for (i = 0; i < array_column.length; i++) {
    data.addColumn(array_column[i].type, array_column[i].title);
   
    }
    var array_array_data = new Array();
    for (i = 0; i < array_data.length; i++) {
    array_array_data.push([array_data[i].label, array_data[i].value]);
    }
    data.addRows(array_array_data);
   
    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(document.getElementById(html_id));
    chart.draw(data, {
    width : chart_width,
    height : chart_height,
    is3D : true,
    title : chart_title
    });
   }
   
   //Get report feed and then render the ColumnChart 2
   
   function draw_ColumnChart2() {
    $.ajax({
    type : "GET",
    url : "https://live.runmyprocess.com/live/112501412000161590/analysis/process/COUNT?field=NUMBER&group=MONTH&operator=EE%20EE%20IS%20EE&value=146550%20LIVE%20NULL%20159933&filter=PROJECT%20MODE%20PARENT%20PROCESS&nb=10000&media=json",
    data : {},
    cache : false,
    async : true,
    dataType : "json",
    error : function () {
    alert('Error while loading credits.');
    },
    success : function (P_result) {
    var array_column = [{
    "type" : "string",
    "title" : "Company"
    }, {
    "type" : "number",
    "title" : "RFP amount"
    }
    ];
    var my_entries = get_array(P_result.feed.entry.content.data, "result");
   
   
    var array_data = new Array();
    for (var i = 0; i < my_entries.length; i++) {
    array_data.push({
    "label" : my_entries[i].serie.value,
    "value" : parseFloat(my_entries[i].value)
    });
   
    }
    //alert(JSON.stringify(array_data));
    var html_id = "chart_div2";
    var chart_title = "Number of request by status per mounth";
    var chart_width = 0;
    var chart_height = 240;
    drawColumnChart(html_id, array_data, array_column, chart_title, chart_width, chart_height);
    }
    });
   }
   draw_ColumnChart2();
   