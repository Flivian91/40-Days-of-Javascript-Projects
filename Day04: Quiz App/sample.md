<!-- 




// Function to load the questions

function loadQuestions() {
  deselectAnswers();
  const questionIndex = questions[currentQuiz];
  questionEl.innerText = questionIndex.questionText;
  aEl.innerText = questionIndex.options[0];
  bEl.innerText = questionIndex.options[1];
  cEl.innerText = questionIndex.options[2];
  dEl.innerText = questionIndex.options[3];
  lastNo.innerText = questions.length;
  initialNo.innerText = currentQuiz + 1;
  // console.log(currentQuiz);

  // currentQuiz++
}
 Function to check button selected
f unction getSelected() {
  let answerun = undefined;
  // const all_answer = document.querySelectorAll(".answer");
  all_answer.forEach((answer) => {
    if (answer.checked) {
      answerun = answer.id;
    }
  });
  return answerun;
}

// Function deselect answers
function deselectAnswers() {
  all_answer.forEach((answer) => {
    answer.checked = false;
  });
}

// Allow the user to load next Question
submitBtn.addEventListener("click", loadNextQuestion);
function loadNextQuestion() {
  currentQuiz++;

  const answerSelect = getSelected();
  // console.log(answerSelect);
  // console.log(answerSlect);
  if (answerSelect) {
    if (answerSelect === questions[currentQuiz].correctAnswer) {
      score++;
    }

    if (currentQuiz < questions.length) {
      loadQuestions();
    } else {
      currentQuiz = 0;
      // console.log(score);
      quiz.innerHTML = `<h2 class="new">You Scored ${score}/${questions.length}</h2>`;
    }
  }
}

// Check the value of clicked btn
// const lableEl = document.getElementsByTagName("label")
// for(const item of lableEl){
//   console.log();
// }
// function checkClicked(e){
//   const target = e.target;
//   if(target.matches(lableEl)){
//     alert("You clicked here")
//   }

// }
// checkClicked()
// document.querySelector(".sport").addEventListener("click", function(e){
//   console.log(e.target.getAttribute("class") + " is clicked")

//   const target = e.target
//   if (target.matches("li")){
//     target.style.backgroundColor = "blue";
//     target.style.color = "white";
//     target.style.fontSize = "25px";
//   }
// })
// console.log(lableEl);
 -->