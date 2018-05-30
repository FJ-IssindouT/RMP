$('.flip').bind({
    mouseover: function() {
        $('.flip .card').toggleClass('flipped');
    },
    mouseout: function() {
	    	if ($('.flip .card').hasClass('flipped')) {
	    	    $('.flip .card').removeClass('flipped');
	      }
	  }
});
