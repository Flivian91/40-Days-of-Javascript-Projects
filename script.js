// Color Flipper
// Get the object of html Element
const colorflipperBtn = document.getElementById("btn"); //button to trigger change

const container = document.querySelector(".container"); //Change the background color
const colorArea = document.querySelector(".color"); //displays the color changed

// Create an array with Specified Colors
// Array with 50 different hex colors
// const colors = [
//   "#FF5733", "#33FF57", "#5733FF", "#FF336E", "#33B8FF",
//   "#FFD133", "#33FFC8", "#5A33FF", "#FF33A4", "#33FFFA",
//   "#FF33E2", "#FFC833", "#9C33FF", "#33FF77", "#FF7F33",
//   "#33FFAE", "#FF337A", "#7A33FF", "#FFE933", "#33FF5C",
//   "#3364FF", "#FF33C1", "#33FFE4", "#FF33B3", "#33FF3D",
//   "#FFB333", "#333BFF", "#FF33F5", "#49FF33", "#FF3375",
//   "#3359FF", "#FF33D9", "#FF7A33", "#33FF8C", "#FF3366",
//   "#33D5FF", "#FF33B6", "#56FF33", "#FF3360", "#33FFF5",
//   "#FF333E", "#33FFA2", "#F733FF", "#A233FF", "#FF334C",
//   "#33FFC2", "#8AFF33", "#337DFF", "#FF33D3", "#33FF48"
// ];

const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "purple",
  "pink",
  "brown",
  "gray",
  "black",
  "white",
  "cyan",
];

colorflipperBtn.addEventListener("click", colorChange);

function colorChange() {
  const randomColor = Math.floor(Math.random() * colors.length);
  const currentColor = colors[randomColor];
  container.style.backgroundColor = currentColor;
  colorArea.textContent = currentColor;
}

// Hex Color
