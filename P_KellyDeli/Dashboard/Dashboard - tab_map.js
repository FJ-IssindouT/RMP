// if [tab] is selected
if (typeof ready !== 'undefined') {
	if (ready) {
			var selected_tab = "map";
			id_selected_dashboard_tab.setValue(selected_tab);
			// console.log('onglet Cartographie sélectionné');
			initMap();
	}
}