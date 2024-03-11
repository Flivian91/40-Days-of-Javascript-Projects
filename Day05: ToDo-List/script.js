"use strict";
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addtaskBtn = document.getElementById("add-task");

//Code
addtaskBtn.addEventListener("click", () => {
  if (inputBox.value === "") {
    alert("You Must Fill Something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    // Add Times Icon
    let span = document.createElement("span");
    span.classList.add("close-icon");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData(); //called when data is added
});

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
// Function to prevent unsaved data from being lost
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
//savedata() function dhould becalled whenever we add new data
// Function to display the content once We open the broswer again
function showContentAgain() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showContentAgain();
