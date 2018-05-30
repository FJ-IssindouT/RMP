// id_js_hour

var my_pattern = {};
col_hours.listCallback(my_pattern, {}, hour_ok, hour_ko);

function hour_ok(result) 
{
    var vb_hour = new Array();
    for(i=0; i<result.length; i++) {
        vb_hour.push({"label":result[i].hour, "value":result[i].hour});
    }
    var a = new RMP_List();
    a.fromArray(vb_hour);
    RMPApplication.setList("vb_hour",a);
}

function hour_ko(error) 
{
    alert("hour_ko = " + JSON.stringify(error));
}

