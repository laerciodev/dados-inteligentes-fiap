const bodyContent = document.body.textContent;

const removeAsteriks = (str) => {
  return str.substring(1, str.length - 1);
};

// Regex to find city between asterisks (*)
const regexCities = /([\*'])(?:(?=(\\?))\2.)*?\1/g;
const citiesFound = bodyContent
  .match(regexCities)
  .map((city) => removeAsteriks(city));

// cities Roteiro A

const contentFirstCity = 'MASP; Parque Trianon; Rua Augusta'.split(';');
const contentSecondCity = 'Fonte do Bellagio; Principais Cassinos; Madame Tussauds'.split(';');
const contentThirdCity = 'Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin'.split(';');

// number of locations by city ROTEIRO A
const numberLocationsFirstCity = contentFirstCity.length;
const numberLocationsSecondCity = contentSecondCity.length;
const numberLocationsThirdCity = contentThirdCity.length;

// tourist attractions Centro - São Paulo
const touristAttractionsSP = 'Catedral da Sé; Pátio do Colégio; Rua Augusta'.split(';');

// tourist attractions Downtown - Los Angeles
const touristAttractionsLA = 'Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado'.split(';');

const citiesFoundElement = document.getElementById('cities-found');
const contentFirstCityElement = document.getElementById('content-first-city');
const contentSecondCityElement = document.getElementById('content-second-city');
const contentThirdCityElement = document.getElementById('content-third-city');
const numberLocationsSPElement = document.getElementById('number-locations-sp');
const numberLocationsLAElement = document.getElementById('number-locations-la');
const numberLocationsMWElement = document.getElementById('number-locations-mw');
const touristAttractionsSPELement = document.getElementById('tourist-attractions-sp');
const touristAttractionsLAELement = document.getElementById('tourist-attractions-la');


const renderContent = (variable, containerUl) => {
  variable.map(value => {
    const li = document.createElement('li');
    li.textContent = value;
    containerUl.appendChild(li);
  });
}

renderContent(citiesFound, citiesFoundElement);
renderContent(contentFirstCity, contentFirstCityElement);
renderContent(contentSecondCity, contentSecondCityElement);
renderContent(contentThirdCity, contentThirdCityElement);

document.getElementById('number-locations-sp').textContent = numberLocationsFirstCity;
document.getElementById('number-locations-la').textContent = numberLocationsSecondCity;
document.getElementById('number-locations-mw').textContent = numberLocationsThirdCity;

renderContent(touristAttractionsSP, touristAttractionsSPELement);
renderContent(touristAttractionsLA, touristAttractionsLAELement);
