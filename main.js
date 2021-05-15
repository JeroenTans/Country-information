

const container = document.getElementById('pictureFlag');
const containerTwo = document.getElementById('countryInfo')
const containerThree = document.getElementById('errorMessage')
const inputField = document.getElementById('searchCountry');
const countryFlagg = document.createElement('img');
countryFlagg.style.width = "400px";
countryFlagg.style.height = "210px";

function whatCurrencies (currencies) {
    let arrayCurrency = [];
    for (let i = 0; i < currencies.length; i++) {
        arrayCurrency[i] = currencies[i].name
    }
    return arrayCurrency.join(" and ")
}

function whatLanguage (languages) {
    let arrayLanguages = [];
    for (let i = 0; i < languages.length; i++) {
        arrayLanguages[i] = languages[i].name;
    }
    return arrayLanguages.join(" and ");
}

function countryInfo (flagOfCountry, nameOfCountry, region, amountOfPeople, capital, currencies, languages) {

    container.appendChild(countryFlagg);
    countryFlagg.setAttribute('src', flagOfCountry);

    containerTwo.textContent = nameOfCountry + " is situated in " + region + ". It has a population of " + amountOfPeople + " people. The capital is " + capital + " and you can pay with " + whatCurrencies(currencies) + "'s. They speak " + whatLanguage(languages);

    return inputField.value = "";
}

async function allCode () {

    const result = await axios.get(`https://restcountries.eu/rest/v2/name/${inputField.value}`);

    try {
        const data = result.data[0];
        const nameOfCountry = data.name;
        const region = data.subregion
        const amountOfPeople = data.population
        const capital = data.capital
        const currencies = data.currencies;
        const languages = data.languages
        const flagOfCountry = data.flag

        countryInfo(flagOfCountry, nameOfCountry, region, amountOfPeople, capital, currencies, languages)
    } catch (e) {
        console.log('Kan dit land momenteel niet laden');
    }
}

const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', allCode)

inputField.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') allCode();})



