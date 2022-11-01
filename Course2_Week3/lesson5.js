// Challenge 1
// Create an array weekDays with all days of the week, console log the array
let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log(weekDays);
// Challenge 2
// Log ‘Monday’ and ‘Sunday’
console.log(weekDays[1]);
console.log(weekDays[0]);
// Challenge 3
// Change ‘Sunday’ by ‘Funday’
weekDays[0] = "Funday";
console.log(weekDays);
// Challenge 4
// Remove Monday and Tuesday
// Log the array
console.log(weekDays.slice(2, 7));
// Challenge 5
// Log every day of the week this way:`Temperature on Monday is 18 degrees’

// Version 1
console.log(`Temperature on ${weekDays[0]} is 18 degrees`);
console.log(`Temperature on ${weekDays[1]} is 18 degrees`);
console.log(`Temperature on ${weekDays[2]} is 18 degrees`);
console.log(`Temperature on ${weekDays[3]} is 18 degrees`);
console.log(`Temperature on ${weekDays[4]} is 18 degrees`);
console.log(`Temperature on ${weekDays[5]} is 18 degrees`);
console.log(`Temperature on ${weekDays[6]} is 18 degrees`);


//Verssion 2: more interesting one

function showTemperature(day) {
    console.log(`Temperature on ${day} is 18 degrees`);
}
weekDays.forEach(showTemperature);