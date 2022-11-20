// challenge 1

function showPosition(position){
    // console.log(`Your latitude is ${position.coords.latitude}`);
    // console.log(`Your longitude is ${position.coords.longitude}`);
    
    let lat = position.coords.latitude;
    return(lat);
}

navigator.geolocation.getCurrentPosition(showPosition);


// console.log(`lat is ${lat}`);

// challenge 2
// // function showTemperature(response){
// // console.log(response.data);
// // }
// // // let lat = position.coords.latitude;
// // // let long = position.coords.longitude;
// // let apiKey = "3324937c27278e13f542f63f7e3df9b5";
// // let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
// axios.get(apiUrl).then(showTemperature);