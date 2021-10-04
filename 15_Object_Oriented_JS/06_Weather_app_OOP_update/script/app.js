// DOM Manipulations
const citySearchBar = document.querySelector('.change-location') 
const card = document.querySelector('.card');
const cardDetails = document.querySelector('.details');

const time = document.querySelector("img.time");
const icon = document.querySelector('.icon img');

// Calling the forecast class
const forecast = new Forecast();

const updateUI = (data) => {
    
    // const cityDetails = data.cityDetails;
    // const weather = data.weather;

    // Destructuring properties:
    const {cityDetails, weather} = data;

    // update Details template:
    cardDetails.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;</span>
    </div>
    `
    // Update image for day and night: Ternary Operator
    let timeSrc = weather.IsDayTime ? 'img/day.jpg' : 'img/night.jpg';
    
    // Update Icons:
    let iconSrc = null;
    iconSrc = `icons/${weather.WeatherIcon}.png`;
    
    // remove d-none if it has that class:
    if(card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
    time.setAttribute('src', timeSrc);
    icon.setAttribute('src', iconSrc);
    
};

citySearchBar.addEventListener('submit', e => {
    e.preventDefault();
    const searchedCity = citySearchBar.city.value.trim();
    citySearchBar.reset();

    // Update city name:
    forecast.updateCity(searchedCity)
        .then(data => updateUI(data))
        .catch(err => console.log(err));

    // Storing the return in local storage:
    localStorage.setItem('city', searchedCity);
});

if(localStorage.getItem('city')){
    forecast.updateCity(localStorage.getItem('city'))
        .then(data => updateUI(data))
        .catch(err => console.log(err));
}