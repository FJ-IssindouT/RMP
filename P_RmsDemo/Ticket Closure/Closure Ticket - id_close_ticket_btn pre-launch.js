// check if filled dates match some criterias to validate the closure
var dates_statut = datesCheck();
if (dates_statut) {
	setTimeout(function(){  location.reload(); }, 3000);
	true; 
} else {
	 false;
}