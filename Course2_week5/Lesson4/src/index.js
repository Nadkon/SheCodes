// Challenge 1 - done
// Challenge 2 - 5


function getTemperature(response){
    console.log(response.data);
    let temperature = Math.round(response.data.main.temp);
    console.log(temperature);
   let city = response.data.name;
    let h1 = document.querySelector("h1");
    let message = `It is ${temperature} degrees in ${city}`;
    h1.innerHTML = message;
}

let apiKey = "3324937c27278e13f542f63f7e3df9b5";
let city = "Sydney";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;

axios.get(`${apiUrl}&appid=${apiKey}`).then(getTemperature);
