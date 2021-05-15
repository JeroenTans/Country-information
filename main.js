


const container = document.getElementById('pictureFlag');
const containerTwo = document.getElementById('countryInfo')

const countryFlagg = document.createElement('img');
countryFlagg.style.width = "400px";
countryFlagg.style.height = "210px";

/*
const inputField = document.getElementById('searchCountry');
inputField.addEventListener('keydown', allCode)
*/

const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', async function () {

    const result = await axios.get('https://restcountries.eu/rest/v2/name/belgie');

    try {
        const data = result.data[0];
        const nameOfCountry = data.name;
        const region = data.subregion
        const amountOfPeople = data.population
        const capital = data.capital
        const currencies = data.currencies;
        let arrayCurrency = [];
        let arrayLanguages = [];
        const languages = data.languages
        const flagOfCountry = data.flag

        function whatCurrencies () {
            for (let i = 0; i < data.currencies.length; i++) {
                arrayCurrency[i] = currencies[i].name
            }
            return arrayCurrency.join(" and ")
        }

        function whatLanguage () {
            for (let i = 0; i < data.languages.length; i++) {
                arrayLanguages[i] = languages[i].name;
            }
            return arrayLanguages.join(" and ");
        }

        function countryInfo () {

            //container.appendChild(nameOfCountry)
            container.appendChild(countryFlagg);
            countryFlagg.setAttribute('src', flagOfCountry);

            containerTwo.textContent = nameOfCountry + " is situated in " + region + ". It has a population of " + amountOfPeople + " people. The capital is " + capital + " and you can pay with " + whatCurrencies(currencies) + "'s. They speak " + whatLanguage();
        }

        countryInfo()
    } catch (e) {
        console.log('Kan dit land momenteel niet laden');
    }

})








//let currency = [];
/* console.log("lengte te van currency array: ", array.length);*/
//for (let i = 0; i < response.data[0].currencies.length; i++) {
//    if (response.data[0].currencies[i].name === false) {
//        i++
//    } else {
//       currency[i] = response.data[0].currencies[i].name
//    }
//    if (currency[i].length > 1) {
//        console.log(currency[i] + " and ");
//    } else {
//        console.log(currency[i]);
//        /*console.log("dit moeten alle losse currency's zijn:", currency[i]);*/
//    }
// }