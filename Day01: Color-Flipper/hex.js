// Color Flipper
// Get the object of html Element
const colorflipperBtn = document.getElementById("btn"); //button to trigger change

const container = document.querySelector(".container"); //Change the background color
const colorArea = document.querySelector(".color"); //displays the color changed

colorflipperBtn.addEventListener("click", colorChange);

// Function to generate random Colors
function colorChange() {
  const colorHexLetters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const randomColor = colorHexLetters[Math.floor(Math.random() * 16)];
    color += randomColor;
  }
  container.style.backgroundColor = color;
  colorArea.textContent = color;
}
