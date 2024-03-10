"use strict";

// Variable decleration
const daysEl = document.querySelector(".days");
const hoursEl = document.querySelector(".hours");
const minsEl = document.querySelector(".mins");
const secondsEl = document.querySelector(".seconds");

// This is the future time to be predicted
const futureDate = "17 march 2025";

// Function to count the Number of date and update ont the corresponding section
function countDownFun() {

  const newyearDate = new Date(futureDate);
  const currentDay = new Date();
  const totalSeconds = (newyearDate - currentDay) / 1000; //returns time in milisecond thus convert to seconds
  // console.log(totalSeconds);

  const days = Math.floor(totalSeconds / (3600 * 24)); //converts to days
  const hours = Math.floor((totalSeconds / 3600) % 24); //Returns the Remaining  Hours
  const mins = Math.floor((totalSeconds / 60) % 60); //Returns the remaining  minutes
  const seconds = Math.floor(totalSeconds % 60); //returns the  remainig Seconds

  // Update the DOM with Updated date
  daysEl.textContent = days;
  hoursEl.textContent = formatTime(hours);
  minsEl.textContent = formatTime(mins);
  secondsEl.textContent = formatTime(seconds);

    // Checks if the user enters A date less Than Current date
  if (newyearDate < currentDay){
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minsEl.textContent = "00";
    secondsEl.textContent = "00";
  }
}
// Function to format Time
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
// Invoke the function
countDownFun();
// Set time interval
setInterval(countDownFun, 1000);
