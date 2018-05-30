// id_set_date
// listen: timezone

setDate();

function setDate() 
{
	RMPApplication.debug("begin setDate");
	c_debug(debug.dates_check, "=> begin datesCheck");

    // Retrieving local current date&time
    var today = new Date();
    var local_date = moment(today, "DD/MM/YYYY HH:mm:ss").format("DD/MM/YYYY HH:mm:ss");
    id_date.setValue(local_date);
	c_debug(debug.dates_check, "=> datesCheck: local_date = ", local_date);

    // we save UTC dates for ulterior use
    var utc_date = moment(today, "DD/MM/YYYY HH:mm:ss").utc().format("DD/MM/YYYY HH:mm:ss");
    id_utc_date.setValue(utc_date);
    c_debug(debug.dates_check, "=> datesCheck: utc_date = ", utc_date);

	RMPApplication.debug("end setDate");
}
