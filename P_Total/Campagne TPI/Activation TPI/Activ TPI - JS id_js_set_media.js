// id_js_set_media

if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    
    RMPApplication.set("media", "mobile");
    console.log("Media type: mobile");
} else {
    console.log("Media type: NO mobile");
}