var data = id_report.getAllValues();
//var year = [];
var year = new Array();
var month = new Array(12);
for (var i = 0; i < 12; i++) {
  month[i] = new Array();
}

var accepted = new Array(12);
for (var i = 0; i < 12; i++) {
  accepted[i] = new Array();
}

var rejected = new Array(12);
for (var i = 0; i < 12; i++) {
  rejected[i] = new Array();
}

var onprogress = new Array(12);
for (var i = 0; i < 12; i++) {
  onprogress[i] = new Array();
}

var tobereviewed = new Array(12);
for (var i = 0; i < 12; i++) {
  tobereviewed[i] = new Array();
}

var nbaccepted=[];
var nbrejected=[];
var nbonprogress=[];
var nbtobereviewed=[];
alert("n1");
for (var i = 0; i < data.length; i++) {
	if (year[data[i].year - 2017] == undefined) {
		year.push([]);
	}
	year[data[i].year - 2017].push(data[i]);
}
alert("n2");
var f=year.length - 1;
alert(year[f]);
for (var j = 0; j < year[f].length; j++) {
try{
alert("n3");
month[year[f][j].month - 1].push(year[f][j]);
}catch(err) {
//alert("n3");
    alert(err.message);
}
//month[year[year.length - 1][j].month - 1].push(year[year.length - 1][j]);
}
alert("n3");
for (var k = 0; k < 12; k++) {
	if (month[k][0] != undefined) {
		for (var l = 0; l < month[k].length; l++) {
			if (month[k][l].measure_1 == "Accepted") {
				accepted[k].push(month[k][l]);
			}
			if (month[k][l].measure_1 == "Rejected") {
				rejected[k].push(month[k][l]);
			}
			if (month[k][l].measure_1 == "On progress") {
				onprogress[k].push(month[k][l]);
			}
			if (month[k][l].measure_1 == "To be reviewed") {
				tobereviewed[k].push(month[k][l]);
			}
		}
	}
}
alert("n4");
for (var i = 0; i < 12; i++) {
	nbaccepted[i] = accepted[i].length;
	nbrejected[i] = rejected[i].length;
	nbonprogress[i] = onprogress[i].length;
	nbtobereviewed[i] = tobereviewed[i].length;
}
 
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Month', 'Accepted', 'Rejected', 'On progress','to be reviewed'],
          ['01-2017',nbaccepted[0],nbrejected[0], nbonprogress[0],nbtobereviewed[0]],
		  ['02-2017',nbaccepted[1],nbrejected[1], nbonprogress[1],nbtobereviewed[1]],
		  ['03-2017',nbaccepted[2],nbrejected[2], nbonprogress[2],nbtobereviewed[2]],
		  ['04-2017',nbaccepted[3],nbrejected[3], nbonprogress[3],nbtobereviewed[3]],
		  ['05-2017',nbaccepted[4],nbrejected[4], nbonprogress[4],nbtobereviewed[4]],
		  ['06-2017',nbaccepted[5],nbrejected[5], nbonprogress[5],nbtobereviewed[5]],
		  ['07-2017',nbaccepted[6],nbrejected[6], nbonprogress[6],nbtobereviewed[6]],
		  ['08-2017',nbaccepted[7],nbrejected[7], nbonprogress[7],nbtobereviewed[7]],
		  ['09-2017',nbaccepted[8],nbrejected[8], nbonprogress[8],nbtobereviewed[8]],
		  ['10-2017',nbaccepted[9],nbrejected[9], nbonprogress[9],nbtobereviewed[9]],
          ['11-2017',nbaccepted[10],nbrejected[10], nbonprogress[10],nbtobereviewed[10]],
		  ['12-2017',nbaccepted[11],nbrejected[11], nbonprogress[11],nbtobereviewed[11]],
        ]);

        var options = {
          chart: {
            title: 'Company Performance',
            subtitle: 'Request by Status per Month: 2017',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));
        chart.draw(data, options);
      }
	  google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);