// challenge 1

function showPosition(position){
    console.log(`Your latitude is ${position.coords.latitude}`);
    console.log(`Your longitude is ${position.coords.longitude}`);
    
}

navigator.geolocation.getCurrentPosition(showPosition);


// challenge 2-3
function showTemperature(response){
    console.log(response.data.main.temp);
  let temperature = Math.round(response.data.main.temp);
  let h1 = document.querySelector("h1");
  let message = `The temperature in my city is ${temperature} degree now`;
  h1.innerHTML = message;
}

function getPosition(position){
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(showTemperature);
}

let apiKey = "3324937c27278e13f542f63f7e3df9b5";
navigator.geolocation.getCurrentPosition(getPosition);

