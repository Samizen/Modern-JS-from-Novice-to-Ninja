// Interacting with API
const key = "TmixvTdeOLafomiw1Ie5cgbrBYP0duCW"; 

const getCity = async(city) => {
    
    const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(base + query);
    const data = await response.json();
    
    return(data[0]);
};

const getWeather = async(keyCode) => {
    const base ="http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${keyCode}?apikey=${key}`
    const response = await fetch(base + query);
    const data = await response.json();

    
    return(data[0]);
};

// getCity('Pokhara')
//     .then(data => {
//         return getWeather(data.Key);
//     }),then(data => {
//         console.log(data);
//     })
//     .catch(error => console.log(error));

