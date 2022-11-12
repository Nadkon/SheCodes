// Current date, time and weekday
let now = new Date();
let date = now.getDate();
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let month = months[now.getMonth()];
let year = now.getFullYear();
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let day = days[now.getDay()];
let hour = now.getHours();
let minute = now.getMinutes();

// alert(`Today is ${date} ${month} ${year}, ${day}, ${hour}:${minute}`);
let currentDate = document.querySelector("#date");
let currentMonth = document.querySelector("#month");
let currentYear = document.querySelector("#year");
let weekDay = document.querySelector("#weekday");

currentDate.innerHTML = date;
currentMonth.innerHTML = month;
currentYear.innerHTML = year;
weekDay.innerHTML = day;

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
    degree.innerHTML = 57;    
    let fahrenheit = document.querySelector("#fahrenheit");
    fahrenheit.innerHTML = "<strong>°F</strong>";
    let celsius = document.querySelector("#celsius");
    celsius.innerHTML = "°C";

}

let celsius = document.querySelector("#celsius");
let fahrenheit = document.querySelector("#fahrenheit");
celsius.addEventListener("click", changeToCelsius);
fahrenheit.addEventListener("click", changeToFahrenheit);