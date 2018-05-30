// id_get_template_url

var my_pattern = {};
col_hours.listCallback(my_pattern, {}, hour_ok, hour_ko);

function hour_ok(result) 
{
    //alert("hour_ok =" + JSON.stringify(result));
	id_file_url.setText(result[result.length - 1].file_url);
}

function hour_ko(error) 
{
    alert("The template file was not uploaded. Please contact your administrator. Error:" + JSON.stringify(error));
}
