// id_format_heartrating_pluggin

// detect user language
var language = RMPApplication.get("language");

// find rating labels for selected language
var star_opt = {};
for (var i=0; i<star_lang.length; i++) {
	if (star_lang[i].language == language) {
		star_opt = star_lang[i].options;
	}
}

// apply language to HeartRating pluggin
(function ($) {
	"use strict";
	$.fn.ratingLocales[language] = star_opt;
})(window.jQuery);

// Options values for pluggin
$(function () {
	$("#id_heartRating").rating({
    	language: language,
	    stars:5 ,
	    min: 0, 
	    max: 5, 
	    step: 1, 
	    size: 'sm',
	    theme: 'rating-rms-fa',
	    filledStar: '<i class="fa fa-lg fa-heart"></i>',
	    emptyStar: '<i class="fa fa-lg fa-heart-o"></i>'
	});

	$("#id_heartRating").on(
        'change', function () {
            var selectedNote = $(this).val(); 
            // console.log('selectedNote: ' + selectedNote);
			setNotationValue(selectedNote);
			id_submit_btn.setVisible(true);
    });
})