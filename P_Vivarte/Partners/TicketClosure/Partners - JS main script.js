function datesCheck() 
{
	RMPApplication.debug("begin datesCheck");
	// console.log("=> datesCheck");

	// retrieve dates from WI
	var start_date = id_work_start.getValue() * 1000;				// locale timestamp value in milliseconds
	var end_date = id_work_end.getValue() * 1000;
	var work_start_l = RMPApplication.get("work_start_l");			// locale date & time string
	var work_end_l = RMPApplication.get("work_end_l");
	var now_date = Date.now();										// current timestamp value in milliseconds

	// check if start_date < end_date
	if (start_date > end_date) {
		var title1 = "ERROR";
        var content1 = "The date of intervention end can't be lower than the date of intervention start!";
        RMPApplication.showErrorBox(title1, content1);
		return false;
	}

	// check if end_date < current date&time
	if (end_date > now_date) {
		var title2 = "ERROR";
        var content2 = "The date of intervention end can't be higher than the current date & time!";
        RMPApplication.showErrorBox(title2, content2);
		return false;
	}

	// dates should be converted in UTC format before updating the ticket
    var start_date_utc  = moment(work_start_l, "DD/MM/YYYY HH:mm:ss").utc().format("DD/MM/YYYY HH:mm:ss");
    var end_date_utc  = moment(work_end_l, "DD/MM/YYYY HH:mm:ss").utc().format("DD/MM/YYYY HH:mm:ss");

    // we save UTC dates for ulterior use
    id_utc_work_start.setValue(start_date_utc);
    id_utc_work_end.setValue(end_date_utc);

	RMPApplication.debug("end datesCheck");
	
	// console.log("=> datesCheck: before returning TRUE");
	return true;		// needed as called by pre-launch script "Fermer le ticket" button
}