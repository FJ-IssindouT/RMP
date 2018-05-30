set_image();

function set_image() 
{
	var language = RMPApplication.get("language");
	// var id_img_sdesk_1 = $("#id_img_sdesk_1");
	var id_img_sdesk_2 = $("#id_img_sdesk_2");
    var id_img_sdesk_3 = $("#id_img_sdesk_3");
    
	var scale_error_2;
    var scale_error_3;
	var scale_error_2_sp = "https://live.runmyprocess.com/live/112501480325272109/upload/2b7264a0-0f10-11e7-8bf9-02b3a23437c9/KD1.png";
	var scale_error_2_fr = "https://live.runmyprocess.com/live/112501480325272109/upload/2b7264a0-0f10-11e7-8bf9-02b3a23437c9/KD1.png";
	var scale_error_3_sp = "https://live.runmyprocess.com/live/112501480325272109/upload/2b708fe0-0f10-11e7-8bf9-02b3a23437c9/KD2.jpg";
    var scale_error_3_fr = "https://live.runmyprocess.com/live/112501480325272109/upload/2b708fe0-0f10-11e7-8bf9-02b3a23437c9/KD2.jpg";
    
	switch (language) {
		case "fr" : 
            scale_error_2 = '<img class="img-responsive" src="' + scale_error_2_fr + '">';
			scale_error_3 = '<img class="img-responsive" src="' + scale_error_3_fr + '">';
			break;
		case "es" :
            scale_error_2 = '<img class="img-responsive" src="' + scale_error_2_sp + '">';
            scale_error_3 = '<img class="img-responsive" src="' + scale_error_3_sp + '">';
            break;
        /*case "en" :
            scale_error_2 = '<img class="img-responsive" src="' + scale_error_2_en + '">';
            scale_error_3 = '<img class="img-responsive" src="' + scale_error_3_en + '">';
			break;;*/
		default : 
            scale_error_2 = '<img class="img-responsive" src="' + scale_error_2_fr + '">';
            scale_error_3 = '<img class="img-responsive" src="' + scale_error_3_fr + '">';
			break;
	}
	
	// id_img_sdesk_1.html('');
	// id_img_sdesk_1.append(scale_error_1);
	id_img_sdesk_2.html('');
	id_img_sdesk_2.append(scale_error_2);
	id_img_sdesk_3.html('');
	id_img_sdesk_3.append(scale_error_3);
}
