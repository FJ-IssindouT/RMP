set_image();

function set_image () {
    var language = RMPApplication.get("language");
    // var id_img_sdesk_1 = $("#id_img_sdesk_1");
    var id_img_sdesk_2 = $("#id_img_sdesk_2");
    // var id_img_sdesk_3 = $("#id_img_sdesk_3");

    var unknown_error;
    var unknown_error_sp = "https://live.runmyprocess.com/live/112501480325272109/upload/19a64a00-2f10-11e7-8c97-066d75fba2ef/UNKNOWN-ERROR_SP.PNG";
    var unknown_error_fr = "https://live.runmyprocess.com/live/112501480325272109/upload/c0b790c0-2f0f-11e7-86d1-02b3a23437c9/UNKNOWN-ERROR_FR.PNG";
    var unknown_error_en = "https://live.runmyprocess.com/live/112501480325272109/upload/cc8adcb0-554f-11e8-b35d-0639651b3341/UNKNOWN-ERROR_EN.PNG";

    switch (language) {
        case "fr" : 
            unknown_error = '<img class="img-responsive" src="' + unknown_error_fr + '">';
            break;
        case "es" :
            unknown_error = '<img class="img-responsive" src="' + unknown_error_sp + '">';
            break;
        case "en" :
            unknown_error = '<img class="img-responsive" src="' + unknown_error_en + '">';
            break;;
        default : 
            unknown_error = '<img class="img-responsive" src="' + unknown_error_fr + '">';
            break;
    }
    
    // id_img_sdesk_1.html('');
    // id_img_sdesk_1.append(unknown_error);
    id_img_sdesk_2.html('');
    id_img_sdesk_2.append(unknown_error);
    // id_img_sdesk_3.html('');
    // id_img_sdesk_3.append(unknown_error);
}