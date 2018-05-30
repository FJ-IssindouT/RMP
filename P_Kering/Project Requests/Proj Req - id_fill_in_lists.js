// id_fill_in_lists

var my_pattern = {};
col_lists.listCallback(my_pattern, {}, list_ok, list_ko);

function list_ok(result) 
{
   // alert("ok=" + JSON.stringify(result));

	//List Org unit
	var vb_org = new Array();
	for (i=0; i<result[0].organization_unit.list_elements.length; i++) {
		vb_org.push({"label":result[0].organization_unit.list_elements[i], "value":result[0].organization_unit.list_elements[i]});
	}

	var a = new RMP_List();
	a.fromArray(vb_org);
	RMPApplication.setList("vb_org", a);

	//List Target 
	var vb_target = new Array();
	for (i=0; i<result[0].target_brand.list_elements.length; i++) {
		vb_target.push({"label": result[0].target_brand.list_elements[i], "value": result[0].target_brand.list_elements[i]});
	}

	var a = new RMP_List();
	a.fromArray(vb_target);
	RMPApplication.setList("vb_target", a);
}

function list_ko(result) 
{
    alert("list_ko = " + JSON.stringify(result));
}
