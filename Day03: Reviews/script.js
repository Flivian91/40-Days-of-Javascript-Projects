"use strict";
// To test the both method you can Decide to Comment out the first method and test the second Method


// Variables for btn
const backBtn = document
  .getElementById("back")
  .addEventListener("click", backFun);
const forwardBtn = document
  .getElementById("forward")
  .addEventListener("click", nextFun);
const surpriseBtn = document
  .getElementById("surprise")
  .addEventListener("click", randomImageGenerator);

// Image Variable
const image = document.getElementById("image");
// Details to change variables
const nameEl = document.querySelector(".name");
const roleEl = document.querySelector(".role");
const detailsEl = document.querySelector(".details");

let count = 0;
const maxCount = 5;

////////////////////////////////////////////////////////////////
//01. method 

/*
const people = {
  name: [
    "Alice Johnson",
    "Ethan Miller",
    "Sophia Brown",
    "Noah Smith",
    "Ava Williams",
  ],
  role: [
    "Software Engineer",
    "Product Manager",
    "QA Engineer",
    "UI/UX Designer",
    "Data Scientist",
  ],
  text: [
    "A Software Engineer develops and maintains software applications, collaborating with cross-functional teams to ensure high-quality code and efficient software functionality. They use various programming languages and tools to deliver reliable and scalable solutions.",

    "A Product Manager oversees the entire product lifecycle, from ideation to launch. They define requirements, prioritize features, and align with business goals for successful product development. Product Managers bridge the gap between development and business teams.",

    "A QA Engineer focuses on testing software applications to identify and fix bugs. They design test cases, execute testing processes, and collaborate with development teams for high-quality software delivery. QA Engineers play a critical role in ensuring product.",

    "A UI/UX Designer specializes in creating visually appealing and user-friendly interfaces. They work closely with development teams to bring their designs to life and ensure seamless user experiences. UI/UX Designers use design tools to create intuitive .",

    "A Data Scientist analyzes complex datasets to derive valuable insights, using statistical models, machine learning algorithms, and data visualization tools to inform decision-making processes. Data Scientists play a crucial role in extracting actionable intelligence.",
  ],
};

// Function To Next Review
function nextFun() {
  count++;
  if (count === 5) {
    count = 0;
    count++;
  }
  nameEl.textContent = people.name[count];
  roleEl.textContent = people.role[count];
  detailsEl.textContent = people.text[count];

  // Increment on the image
  image.setAttribute("src", `image-${count}.jpg`);
}
// Function to Previous Review
function backFun() {
  count--;
  if (count < 0) {
    count = 5;
    count--;
  }
  nameEl.textContent = people.name[count];
  roleEl.textContent = people.role[count];
  detailsEl.textContent = people.text[count];

  // Decrement the image
  image.setAttribute("src", `image-${count}.jpg`);
}

// Function to generate random Images
function randomImageGenerator() {
  const randomNumber = Math.floor(Math.random() * 5);
  // Update the corresponding Element
  nameEl.textContent = people.name[randomNumber];
  roleEl.textContent = people.role[randomNumber];
  detailsEl.textContent = people.text[randomNumber];

  // Update on the Image
  image.setAttribute("src", `image-${randomNumber}.jpg`);
}



// Sample Function to Increment the counter
// setInterval(counter, 1000);
// function counter(change) {
//   count++;
//   if (count === 4) {
//     count = 0;
//     count++;
//   }
//   change[count];
// }

*/

////////////////////////////////////////////////////////////////////
//02. Method (Appropriate Method)
const reviews = [
  {
    id: 1,
    name: "John Smith",
    image: "image-0.jpg",
    job: "Software Engineering",
    text: "A Software Engineer develops and maintains software applications, collaborating with cross-functional teams to ensure high-quality code and efficient software functionality. They use various programming languages and tools to deliver reliable and scalable solutions.",
  },
  {
    id: 2,
    name: "Emily Johnson",
    image: "image-1.jpg",
    job: "Product Management",
    text: "As a Product Manager, Emily oversees product development from ideation to launch. She defines requirements, prioritizes features, and aligns with business goals for successful product outcomes. Her role is crucial in bridging the gap between development and business teams.",
  },
  {
    id: 3,
    name: "David Brown",
    image: "image-2.jpg",
    job: "QA Engineering",
    text: "David, a QA Engineer, focuses on testing software applications to identify and fix bugs. He designs test cases, executes testing processes, and collaborates with development teams to ensure high-quality software delivery. His efforts contribute to maintaining product reliability.",
  },
  {
    id: 4,
    name: "Sophia Miller",
    image: "image-3.jpg",
    job: "UI/UX Design",
    text: "Sophia, a UI/UX Designer, specializes in creating visually appealing and user-friendly interfaces. She collaborates closely with development teams to bring her designs to life, ensuring seamless and intuitive user experiences for web and mobile applications.",
  },
  {
    id: 5,
    name: "Noah Jones",
    image: "image-4.jpg",
    job: "Data Science",
    text: "Noah, a Data Scientist, analyzes complex datasets to derive valuable insights. Using statistical models and machine learning algorithms, he interprets data trends and correlations, providing actionable intelligence to inform decision-making processes.",
  },
  {
    id: 6,
    name: "Ava Williams",
    image: "image-5.jpg",
    job: "Web Development",
    text: "Ava, a Web Developer, designs and builds websites, combining technical skills with creativity. She works with coding languages like HTML, CSS, and JavaScript to create responsive and visually appealing web applications, ensuring functionality and usability.",
  },
];

// Listen to When the document load and update the images
window.addEventListener("load", () => {
  showPerson();
});

//Reusable functionon the project
// Function to show person
function showPerson() {
  const item = reviews[count];
  image.src = item.image;
  nameEl.textContent = item.name;
  roleEl.textContent = item.job;
  detailsEl.textContent = item.text;
}

function backFun() {
  count --
  if(count < 1){
    count = reviews.length-1
  }
  // console.log(count);
  showPerson();
}
// Function next
function nextFun() {
  count++;
  if (count > reviews.length - 1) {
    count = 0;
  }
  // console.log(count);
  showPerson();
}

// Show random Person
function randomImageGenerator() {
  // console.log("available");
  count = Math.floor(Math.random()* reviews.length) //update count to random number
  showPerson()
}
