var country_arr=new Array("Abruzzo","Basilicata","Calabria","Campania","Emilia Romagna","Friuli Venezia Giulia","Lazio","Liguria","Lomabardia","Marche","Molise","Piemonte","Puglia","Sardegna","Sicilia","Toscana","Trentino Alto Adige","Umbria","Valle d'Aosta","Veneto");

var s_a=new Array();
s_a[0]="";
s_a[1]="Chieti|L'Aquila|Pescara|Teramo";
s_a[2]="Matera|Potenza";
s_a[3]="Catanzaro|Cosenza|Crotone|Reggio Calabria|Vibo Valentia";
s_a[4]="Avellino|Benevento|Caserta|Napoli|Salerno";
s_a[5]="Bologna|Ferrara|Forlì-Cesena|Modena|Parma|Piacenza|Ravenna|Reggio Emilia|Rimini";
s_a[6]="Gorizia|Pordenone|Trieste|Udine";
s_a[7]="Frosinone|Latina|Rieti|Roma|Viterbo";
s_a[8]="Genova|Imperia|La Spezia|Savona";
s_a[9]="Bergamo|Brescia|Como|Cremona|Lecco|Lodi|Mantova|Milano|Monza e della Brianza|Pavia|Sondrio|Varese";
s_a[10]="Ancona|Ascoli Piceno|Fermo|Macerata|Pesaro e Urbino";
s_a[11]="Campobasso|Isernia";
s_a[12]="Alessandria|Asti|Biella|Cuneo|Novara|Torino|Verbano-Cusio-Ossola|Vercelli";
s_a[13]="Bari|Barletta-Andria-Trani|Brindisi|Foggia|Lecce|Taranto";
s_a[14]="Cagliari|Carbonia-Iglesias|Nuoro|Olbia-Tempio|Oristano|Medio Campidano|Sassari|Ogliastra";
s_a[15]="Agrigento|Caltanissetta|Catania|Enna|Messina|Palermo|Ragusa|Siracusa|Trapani";
s_a[16]="Arezzo|Firenze|Grosseto|Livorno|Lucca|Massa-Carrara|Pisa|Pistoia|Prato|Siena";
s_a[17]="Bolzano|Trento";
s_a[18]="Perugia|Terni";
s_a[19]="Aosta";
s_a[20]="Belluno|Padova|Rovigo|Treviso|Venezia|Verona|Vicenza";

function populateStates( countryElementId, stateElementId ){
	
	var selectedCountryIndex = document.getElementById( countryElementId ).selectedIndex;

	var stateElement = document.getElementById( stateElementId );
	
	stateElement.length=0;	// Fixed by Julian Woods
	stateElement.options[0] = new Option('Select State','');
	stateElement.selectedIndex = 0;
	
	var state_arr = s_a[selectedCountryIndex].split("|");
	
	for (var i=0; i<state_arr.length; i++) {
		stateElement.options[stateElement.length] = new Option(state_arr[i],state_arr[i]);
	}
}

function populateCountries(countryElementId, stateElementId){
	// given the id of the <select> tag as function argument, it inserts <option> tags
	var countryElement = document.getElementById(countryElementId);
	countryElement.length=0;
	countryElement.options[0] = new Option('Select Country','-1');
	countryElement.selectedIndex = 0;
	for (var i=0; i<country_arr.length; i++) {
		countryElement.options[countryElement.length] = new Option(country_arr[i],country_arr[i]);
	}

	// Assigned all countries. Now assign event listener for the states.

	if( stateElementId ){
		countryElement.onchange = function(){
			populateStates( countryElementId, stateElementId );
		};
	}
}