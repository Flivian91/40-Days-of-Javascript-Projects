"use strict";

const questionEl = document.getElementById("question");
const aEl = document.getElementById("ans-a");
const bEl = document.getElementById("ans-b");
const cEl = document.getElementById("ans-c");
const dEl = document.getElementById("ans-d");
const nextBtn = document.getElementById("next");
const quiz = document.getElementById("quiz");

const initialNo = document.getElementById("initial-no");
const lastNo = document.getElementById("last-no");
const all_answer = document.querySelectorAll(".answer");

const questions = [
  {
    questionText: "What is the capital of France?",
    options: ["Berlin", "Paris", "Madrid", "Rome"],
    correctAnswer: b,
  },
  {
    questionText: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: b,
  },
  {
    questionText: "What is the largest mammal on Earth?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: b,
  },
];
// console.log(questions[0].correctAnswer.id);

// Initialize First Question
let currentQuestion = 0;
let score = 0;

// Function To load Questions
function loadQuestions() {
  deselectQuestion();
  const questionIndex = questions[currentQuestion];
  questionEl.innerHTML = questionIndex.questionText;
  aEl.innerHTML = questionIndex.options[0];
  bEl.innerHTML = questionIndex.options[1];
  cEl.innerHTML = questionIndex.options[2];
  dEl.innerHTML = questionIndex.options[3];
}

// Function to check the selected answer
function checkSelectedAnswer() {
  let answerSelected = undefined;
  all_answer.forEach((answer) => {
    if (answer.checked) {
      answerSelected = answer.id;
    }
  });
  return answerSelected;
}

// Function To deselect the selected question when it loads next
function deselectQuestion() {
  all_answer.forEach((answer) => {
    answer.checked === true;
  });
}
// Load question When the user load next
nextBtn.addEventListener("click", loadNextQuestion);
function loadNextQuestion() {
  currentQuestion++;
  score++;
  const answerCorrect = checkSelectedAnswer();
  // console.log(answerCorrect);
  if (answerCorrect) {
    const answerOn = questions[currentQuestion].correctAnswer.id
    console.log(answerOn);
    if (answerCorrect === answerOn) {
      score++;
    }
    if (currentQuestion < questions.length) {
      loadQuestions();
    } else {
      quiz.innerHTML = `<h2 class="new">You Scored ${score}/${questions.length}</h2>`;
    }
    checkSelectedAnswer();
  }
}

// Implement time count
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

// Function to show time count
const futureTime = "mar 10 2025";
function countDownFun() {
  const getFuture = new Date(futureTime);
  const currentDate = new Date();
  const totalSeconds = (getFuture - currentDate) / 1000;

  minutesEl.textContent = pad(Math.floor((totalSeconds / 60) % 60));
  secondsEl.textContent = pad(Math.floor(totalSeconds % 60));
}

// Pand the seconds and minutes when time is less than 10
function pad(time) {
  return time < 10 ? "0" + time : time;
}
countDownFun(); //calling the function
setInterval(countDownFun, 1000);

// Function to load questions once the window had loaded
window.addEventListener("load", loadQuestions);
