// ======================================
// save ticket evaluation to collection
// ======================================
function sendEval() {
} 

// ready
$("#id_heartRating").on(
    'change', function () {
        console.log('Rating selected: ' + $(this).val());
});

$("#id_heartRating").rating({
    language: 'fr',
    value: 0,
    stars:5 ,
    min: 0, 
    max: 5, 
    step: 1, 
    size: 'md',
    theme: 'rating-rms-fa'
    // filledStar: '<i class="fa fa-3x fa-heart"></i>',
    // emptyStar: '<i class="fa fa-3x fa-heart-o"></i>'
});
