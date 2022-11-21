// Show date
let now = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
let day = days[now.getDay()];
let hours = now.getHours();
if (hours < 10){
    hours = `0${hours}`;
};
let minutes = now.getMinutes();
if (minutes < 10){
    minutes = `0${minutes}`;
};
let dateTimeMessage = `${day} ${hours}:${minutes}`;
// console.log(dateTimeMessage);

let dateTime = document.querySelector("#date-time");
dateTime.innerHTML = dateTimeMessage;

// Show city
function searchCity(event){
    event.preventDefault();
    let city = document.querySelector("#city");
    let cityName = document.querySelector("#city");
    cityName.innerHTML = city.value;
}

let formSearch = document.querySelector("#form-search");
formSearch.addEventListener("submit", searchCity);

// show currecnt position
function showCityName(response){
    let city = document.querySelector("#city")
    city.innerHTML = response.data.name;
}
    // function showTemperature(response){
    //   let temperature = Math.round(response.data.main.temp);
    //   let temp = document.querySelector("#temp");
    //   temp.innerHTML = temperature;
    // }

function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "3324937c27278e13f542f63f7e3df9b5";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showCityName);
    // axios.get(apiUrl).then(showTemperature);
}
    navigator.geolocation.getCurrentPosition(showPosition);
 


// Show temperature
