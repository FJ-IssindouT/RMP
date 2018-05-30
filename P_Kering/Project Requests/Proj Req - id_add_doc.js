// id_add_doc

function add_document_e(){
	//Get value
	var today_d = new Date();
	var today = today_d.getDate()+"/"+(today_d.getMonth()+1)+"/"+today_d.getFullYear();
	var step = RMPApplication.get("step");
	var row_nb = parseInt(id_doc_approval_e.getRowsCount());
	var value = JSON.parse(id_upload_e.getValue());
	if(RMPApplication.get("comments_tmp_e")!=null){
		var comments = RMPApplication.get("comments_tmp_e");
	} else{
		var comments = "";
	}
	//var new_index =  (id_doc_approval.id_document[row_nb-1].getHtml() == "<!-- HTML code -->") ? row_nb-1 : row_nb;
			//Loading window
			var windowComp = $('[id="id_please_wait"]').dialog({
				autoOpen: false,
				modal: true,
				stack: false,
				width:600,
				title: 'Loading',
				closeOnEscape: false,
				open: function(event, ui) {
					$(".ui-dialog-titlebar-close").remove();
				}
			});
			$(windowComp).dialog('open');
	
			var url = value[0].url;
			var title = value[0].name;
			var id = value[0].id;
			console.log(id);
			//id_doc_approval.setModifyRows(true);
			if(id_doc_approval_e.id_document[0].getHtml() == "<!-- HTML code -->"  || id_doc_approval_e.id_document[0].getHtml() == ""){
				var i = 0;
			} else {
				id_doc_approval_e.setAddRows(true);
				id_doc_approval_e.insertRow(row_nb.toString());
				var i = row_nb;
				id_doc_approval_e.setAddRows(false);
			}console.log("1");
			//Insert les données du fichier chargé dans le tableau
			id_doc_approval_e.id_document[i].setHtml('<a href="'+url+'" target="_blank">'+title+'</a>');console.log("title");
			//id_doc_approval_e.id_comments[i].setHtml(comments);console.log("2");
			id_doc_approval_e.id_url[i].setText(url);console.log("3");
			//id_doc_approval_e.id_title[i].setText(title);console.log("4");
			id_doc_approval_e.id_id[i].setText(id);console.log("5");
			id_doc_approval_e.id_comments_var[i].setText(comments);console.log("6");
			id_doc_approval_e.id_upload_date[i].setText(today);console.log("7");
			id_doc_approval_e.id_step[i].setText(step);console.log(id);
			//Réinitialise les widgets pour le fichier suivant
//Mon propre code
id_upload_e.selectFileId(id);
id_upload_e.downloadSelected();
id_upload_e.selectFileId(id);
id_upload_e.deleteSelected();
id_upload_e.setRequired(false);
//***********************************************************
		/*	id_comments_tmp_e.setText("");console.log("1");
			var input_file_detach = {};
			var file_variable = id_upload_e.getValue();console.log("2");
			var json_file_variable = JSON.parse(file_variable);
			input_file_detach.file_variable = json_file_variable[0].id;
			input_file_detach.instance_id = RMPApplication.get("entityId");
			console.log(input_file_detach);
			id_kp3___detach_file_capi.trigger(input_file_detach,{},file_detach_e_ok,file_detach_e_ko);
			$("#id_upload_e .gwt-TextBox").val("");console.log("void");*/
}

function file_detach_e_ok(P_computed){
	id_upload_e.refresh();
	$('[id="id_please_wait"]').dialog('close');
}

function file_detach_e_ko(P_error){
	$('[id="id_please_wait"]').dialog('close');
}


	
	
	function populate_doc_approval_e(){
	var row_nb = parseInt(id_doc_approval_e.getRowsCount());
	for(var i=0; i<row_nb; i++){
		if(id_doc_approval_e.id_url[i].getText() != null && id_doc_approval_e.id_url[i].getText() != ""){
			id_doc_approval_e.id_document[i].setHtml('<a href="'+id_doc_approval_e.id_url[i].getText()+'" target="_blank">'+id_doc_approval_e.id_title[i].getText()+'</a>');
		}
		id_doc_approval_e.id_comments[i].setHtml(id_doc_approval_e.id_comments_var[i].getText());
	}
	}