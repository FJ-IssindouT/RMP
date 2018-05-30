set_image();

function set_image() 
{
	var language = RMPApplication.get("language");
	var id_img_sdesk_1 = $("#id_img_sdesk_1");
	var id_img_sdesk_2 = $("#id_img_sdesk_2");
	var id_img_sdesk_3 = $("#id_img_sdesk_3");
	var paper_jam;
	var unknown_error;
	var printer_out_of_paper;
	var paper_jam_sp = "https://live.runmyprocess.com/live/112501480325272109/upload/230f0aa0-2f10-11e7-86d1-02b3a23437c9/LABEL-IN-PRINTER_SP.PNG";
	var paper_jam_fr = "https://live.runmyprocess.com/live/112501480325272109/upload/bd75b750-568f-11e7-8e20-02b3a23437c9/SD_PRN_bourrage_papier.png";
	var unknown_error_sp = "https://live.runmyprocess.com/live/112501480325272109/upload/19a64a00-2f10-11e7-8c97-066d75fba2ef/UNKNOWN-ERROR_SP.PNG";
	var unknown_error_fr = "https://live.runmyprocess.com/live/112501480325272109/upload/bffe5e00-568f-11e7-82f0-066d75fba2ef/SD_PRN_erreur_inconnue.png";
	var printer_out_of_paper_sp = "https://live.runmyprocess.com/live/112501480325272109/upload/1e1def70-2f10-11e7-8c97-066d75fba2ef/PRINTER-OUT-OF-PAPER_SP.PNG";
	var printer_out_of_paper_fr = "https://live.runmyprocess.com/live/112501480325272109/upload/c28cf820-568f-11e7-ba78-0639651b3341/SD_PRN_manque_papier.png";
	switch (language) {
		case "fr" : 
			paper_jam = '<img class="img-responsive" src="' + paper_jam_fr +'">';
			unknown_error = '<img class="img-responsive" src="' + unknown_error_fr + '">';
			printer_out_of_paper = '<img class="img-responsive" src="' + printer_out_of_paper_fr + '">';
			break;
		case "es" :
			paper_jam = '<img class="img-responsive" src="' + paper_jam_sp + '">';
			unknown_error = '<img class="img-responsive" src="' + unknown_error_sp + '">';
			printer_out_of_paper = '<img class="img-responsive" src="' + printer_out_of_paper_sp + '">';
			break;
		default : 
			paper_jam = '<img class="img-responsive" src="' + paper_jam_fr + '">';
			unknown_error = '<img class="img-responsive" src="' + unknown_error_fr + '">';
			printer_out_of_paper = '<img class="img-responsive" src="' + printer_out_of_paper_fr + '">';
			break;
	}
	
	id_img_sdesk_1.html('');
	id_img_sdesk_1.append(paper_jam);
	id_img_sdesk_2.html('');
	id_img_sdesk_2.append(printer_out_of_paper);
	id_img_sdesk_3.html('');
	id_img_sdesk_3.append(unknown_error);
}
