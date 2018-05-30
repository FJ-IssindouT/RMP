// Mes rapports - loading data script

var option = {};
var input ={};
//input.Filtervar=RMPApplication.get("nom_de_la_societe");
//input.Filtervar="Madic";
id_report.setLoading(true);
id_get_process_report.trigger(input, option, load_data_ok, load_data_ko);

function load_data_ok(P_result)
{
	var type_result= typeof P_result.Result.feed.entry;
	var data = [];
	console.log(type_result);
    console.log(Array.isArray(P_result.Result.feed.entry));
    if (type_result === "object") {
        if(Array.isArray(P_result.Result.feed.entry)) {
            for (var i=0; i<P_result.Result.feed.entry.length; i++) {
                console.log("boucle for: array");
                var obj = {};
                obj.nom = P_result.Result.feed.entry[i].title;
                obj.code_implant = P_result.Result.feed.entry[i].category[4].label;
                obj.nom_fichier = P_result.Result.feed.entry[i].category[3].label;
                obj.societe = P_result.Result.feed.entry[i].category[5].label;
                obj.file_url = P_result.Result.feed.entry[i].category[6].label;
                data.push(obj);
                console.log(obj);
            }
        } else {
            console.log("object");
            var obj = {};
            obj.nom = P_result.Result.feed.entry.title;
            obj.code_implant = P_result.Result.feed.entry.category[4].label;
            obj.nom_fichier = P_result.Result.feed.entry.category[3].label;
            obj.societe = P_result.Result.feed.entry.category[5].label;
            obj.file_url = P_result.Result.feed.entry.category[6].label;
            data.push(obj);
            console.log(obj);
        }
    }

    if (type_result == "undefined") { 
        alert("Aucun rapport n'a été créé!");
        var obj = {};
        data.push(obj);
    }
    //	console.log(data);
    option.count = data.length;
    option.first = P_first;
    option.pagerCount = data.length;
    id_report.setData(data, option);
    id_report.setLoading(false);     
}

function load_data_ko(P_result)
{
	alert("No data loaded");
}
