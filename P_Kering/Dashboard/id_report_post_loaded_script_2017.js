var data = id_report.getAllValues();
console.log("data = ", data);
var annee_depart = 2016;

if (data.length == 0) {      // pas besoin de traiter si aucun résultat

    alert("INFO: Aucune donnée à traiter!");

} else {

    var year = new Array();
    var month = new Array(12);
    var acknowled = new Array(12);
    var acknowledgment = new Array(12);
    var accepted = new Array(12);
    var rejected = new Array(12);
    var onprogress = new Array(12);
    var tobereviewed = new Array(12);
    for (var i = 0; i < 12; i++) {
        month[i] = new Array();
        acknowled[i] = new Array();
        acknowledgment[i] = new Array();
        accepted[i] = new Array();
        rejected[i] = new Array();
        onprogress[i] = new Array();
        tobereviewed[i] = new Array();
    }

    var nbaccepted = [];
    var nbrejected = [];
    var nbonprogress = [];
    var nbtobereviewed = [];
    var nbacknowledgment = [];
    var nbacknowled = [];

    for (var i = 0; i < data.length; i++) {
        if (year[data[i].year - annee_depart] == undefined) {
            year.push([]);
        } else {
            year[data[i].year - annee_depart].push(data[i]);
        }
    }

    var f = year.length - 1;

    for (var j = 0; j < year[f].length; j++) {
        try {

            month[year[f][j].month - 1].push(year[f][j]);
        }
        catch(err) {
            alert(err.message);
        }
        //month[year[year.length - 1][j].month - 1].push(year[year.length - 1][j]);
    }

    for (var k = 0; k < 12; k++) {
        if (month[k][0] != undefined) {
            for (var l = 0; l < month[k].length; l++) {
                if (month[k][l].measure_1 == "Accepted") {
                    accepted[k].push(month[k][l]);
                }
                if (month[k][l].measure_1 == "Rejected") {
                    rejected[k].push(month[k][l]);
                }
                if (month[k][l].measure_1 == "On progress"|| month[k][l].measure_1 == "Back To Requester") {
                    onprogress[k].push(month[k][l]);
                }
                if (month[k][l].measure_1 == "To be reviewed") {
                    tobereviewed[k].push(month[k][l]);
                }
                if (month[k][l].measure_1 == "Waiting for PM acknowledgment") {
                    acknowledgment[k].push(month[k][l]);
                }
                if (month[k][l].measure_1 == "Acknowledged by the PM") {
                    acknowled[k].push(month[k][l]);
                }
            }
        }
    }
    for (var i = 0; i < 12; i++) {
        nbaccepted[i] = accepted[i].length;
        nbrejected[i] = rejected[i].length;
        nbonprogress[i] = onprogress[i].length;
        nbtobereviewed[i] = tobereviewed[i].length;
        nbacknowledgment[i] = acknowledgment[i].length;
        nbacknowled[i] = acknowled[i].length;
    }
    
    function drawChart() {
        var data = google.visualization.arrayToDataTable([
        ['Month', 'Accepted', 'Rejected', 'Back To Requester','to be reviewed', 'Waiting for PM acknowledgment', 'Acknowledged by the PM'],
        ['01-'+annee_depart,nbaccepted[0],nbrejected[0], nbonprogress[0],nbtobereviewed[0],nbacknowledgment[0],nbacknowled[0]],
        ['02-'+annee_depart,nbaccepted[1],nbrejected[1], nbonprogress[1],nbtobereviewed[1],nbacknowledgment[1],nbacknowled[1]],
        ['03-'+annee_depart,nbaccepted[2],nbrejected[2], nbonprogress[2],nbtobereviewed[2],nbacknowledgment[2],nbacknowled[2]],
        ['04-'+annee_depart,nbaccepted[3],nbrejected[3], nbonprogress[3],nbtobereviewed[3],nbacknowledgment[3],nbacknowled[3]],
        ['05-'+annee_depart,nbaccepted[4],nbrejected[4], nbonprogress[4],nbtobereviewed[4],nbacknowledgment[4],nbacknowled[4]],
        ['06-'+annee_depart,nbaccepted[5],nbrejected[5], nbonprogress[5],nbtobereviewed[5],nbacknowledgment[5],nbacknowled[5]],
        ['07-'+annee_depart,nbaccepted[6],nbrejected[6], nbonprogress[6],nbtobereviewed[6],nbacknowledgment[6],nbacknowled[6]],
        ['08-'+annee_depart,nbaccepted[7],nbrejected[7], nbonprogress[7],nbtobereviewed[7],nbacknowledgment[7],nbacknowled[7]],
        ['09-'+annee_depart,nbaccepted[8],nbrejected[8], nbonprogress[8],nbtobereviewed[8],nbacknowledgment[8],nbacknowled[8]],
        ['10-'+annee_depart,nbaccepted[9],nbrejected[9], nbonprogress[9],nbtobereviewed[9],nbacknowledgment[9],nbacknowled[9]],
        ['11-'+annee_depart,nbaccepted[10],nbrejected[10], nbonprogress[10],nbtobereviewed[10],nbacknowledgment[10],nbacknowled[10]],
        ['12-'+annee_depart,nbaccepted[11],nbrejected[11], nbonprogress[11],nbtobereviewed[11],nbacknowledgment[11],nbacknowled[11]],
        ]);

        var options = {
        chart: {
            title: 'Request Status',
            subtitle: 'Request by Status per Month: '+annee_depart,
        }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));
        chart.draw(data, options);
    }

    google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(drawChart);

}