// Current date, time and weekday
function setDate (currentTime){
    
let now = new Date();
let date = now.getDate();
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let month = months[now.getMonth()];
let year = now.getFullYear();
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let day = days[now.getDay()];
let hour = now.getHours();
if (hour < 10){
    hour = `0${hour}`;
}

let minute = now.getMinutes();
if (minute < 10){
    minute = `0${minute}`;
}

return (`${date} ${month} ${year}<br/> ${day}, ${hour}:${minute}`);
}
let currentDate = document.querySelector("#date");
let currentTime = new Date();
currentDate.innerHTML = setDate(currentTime);


// City search
function searchCity(event){
    event.preventDefault();
    let city = document.querySelector("#city-input");
    let cityName = document.querySelector("#city");
    cityName.innerHTML = city.value.toUpperCase(); 
}

let formSearch = document.querySelector("#form-search");

formSearch.addEventListener("submit", searchCity);

// Change C to F and reverse

function changeToCelsius(event){
let degree = document.querySelector("#degree");
degree.innerHTML = 14;   
let celsius = document.querySelector("#celsius");
celsius.innerHTML = "<strong>°C</strong>";
let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.innerHTML = "°F";
}

function changeToFahrenheit(event){
    let degree = document.querySelector("#degree");
    degree.innerHTML = Math.round((degree * 9) / 5 + 32);    
    let fahrenheit = document.querySelector("#fahrenheit");
    fahrenheit.innerHTML = "<strong>°F</strong>";
    let celsius = document.querySelector("#celsius");
    celsius.innerHTML = "°C";

}

let celsius = document.querySelector("#celsius");
let fahrenheit = document.querySelector("#fahrenheit");
celsius.addEventListener("click", changeToCelsius);
fahrenheit.addEventListener("click", changeToFahrenheit);