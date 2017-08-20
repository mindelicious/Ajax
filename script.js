var url = 'https://restcountries.eu/rest/v2/name/',
    countriesList = $('#countries');

$('#search').click(searchCountries);
$('#country-name').keypress(function(e) {
    if (e.which == 13) {
        searchCountries();
    }
});

function searchCountries() {
 	var countryName = $('#country-name').val();
   if(!countryName.length) countryName = 'Poland';
   $.ajax({
        url: url + countryName,
        method: 'GET',
 		success: showCountriesList
  	});
}

function showCountriesList(resp) {
	countriesList.empty();
  resp.forEach(function(item) {
   	  $('<li>')
        .text(item.name)
        .append('<img src="'+item.flag+'" width="50">')
        .appendTo(countriesList);
  });
}