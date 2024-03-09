"use strict";
//set initial count
let count = 0;
// Select values and button
const counter = document.querySelector(".counter");
const btns = document.querySelectorAll(".btn");


// Function
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;

    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      counter.style.color = "green";
    } else if (count < 0) {
      counter.style.color = "red";
    } else {
      counter.style.color = "black";
    }
    counter.textContent = count;
  });
});
