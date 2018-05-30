set_image();

function set_image () {
	var language = RMPApplication.get("language");
	var id_img_sdesk_1 = $("#id_img_sdesk_1");
	var id_img_sdesk_2 = $("#id_img_sdesk_2");
	var id_img_sdesk_3 = $("#id_img_sdesk_3");

	var label_in_printer;
	var unknown_error;
	var printer_out_of_paper;
	var label_in_printer_sp = "https://live.runmyprocess.com/live/112501480325272109/upload/230f0aa0-2f10-11e7-86d1-02b3a23437c9/LABEL-IN-PRINTER_SP.PNG";
	var label_in_printer_fr = "https://live.runmyprocess.com/live/112501480325272109/upload/c6d08a20-2f0f-11e7-b6d5-0619bd984419/LABEL-IN-PRINTER_FR.PNG";
	var label_in_printer_en = "";
	var unknown_error_sp = "https://live.runmyprocess.com/live/112501480325272109/upload/19a64a00-2f10-11e7-8c97-066d75fba2ef/UNKNOWN-ERROR_SP.PNG";
	var unknown_error_fr = "https://live.runmyprocess.com/live/112501480325272109/upload/c0b790c0-2f0f-11e7-86d1-02b3a23437c9/UNKNOWN-ERROR_FR.PNG";
	var unknown_error_en = "https://live.runmyprocess.com/live/112501480325272109/upload/cc8adcb0-554f-11e8-b35d-0639651b3341/UNKNOWN-ERROR_EN.PNG";
	var printer_out_of_paper_sp = "https://live.runmyprocess.com/live/112501480325272109/upload/1e1def70-2f10-11e7-8c97-066d75fba2ef/PRINTER-OUT-OF-PAPER_SP.PNG";
	var printer_out_of_paper_fr = "https://live.runmyprocess.com/live/112501480325272109/upload/c4308ae0-2f0f-11e7-b6d5-0619bd984419/PRINTER-OUT-OF-PAPER_FR.PNG";
	var printer_out_of_paper_en = "";
	
	switch (language) {
		case "fr" : 
			label_in_printer = '<img class="img-responsive" src="' + label_in_printer_fr +'">';
			unknown_error = '<img class="img-responsive" src="' + unknown_error_fr + '">';
			printer_out_of_paper = '<img class="img-responsive" src="' + printer_out_of_paper_fr + '">';
			break;
		case "es" :
			label_in_printer = '<img class="img-responsive" src="' + label_in_printer_sp + '">';
			unknown_error = '<img class="img-responsive" src="' + unknown_error_sp + '">';
			printer_out_of_paper = '<img class="img-responsive" src="' + printer_out_of_paper_sp + '">';
			break;
		case "en" :
			label_in_printer = '<img class="img-responsive" src="' + label_in_printer_fr + '">';			// to change with "en" version
			unknown_error = '<img class="img-responsive" src="' + unknown_error_en + '">';
			printer_out_of_paper = '<img class="img-responsive" src="' + printer_out_of_paper_fr + '">';	// to change with "en" version
			break;
		default : 
			label_in_printer = '<img class="img-responsive" src="' + label_in_printer_fr + '">';
			unknown_error = '<img class="img-responsive" src="' + unknown_error_fr + '">';
			printer_out_of_paper = '<img class="img-responsive" src="' + printer_out_of_paper_fr + '">';
			break;
	}
	
	id_img_sdesk_1.html('');
	id_img_sdesk_1.append(label_in_printer);
	id_img_sdesk_2.html('');
	id_img_sdesk_2.append(printer_out_of_paper);
	id_img_sdesk_3.html('');
	id_img_sdesk_3.append(unknown_error);
}