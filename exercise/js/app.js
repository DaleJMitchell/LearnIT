let questions = [];
//let unansweredQuestionIndex = [];
let score = 0;
const numProblems = 10;
let problem;
let problemNumber = 0;

document.addEventListener("DOMContentLoaded", () => {
  generateProblems(numProblems);
  displayNextProblem();

  const answersOnpage = document.querySelectorAll("li");
  answersOnpage.forEach((answerOnPage) => {
    answerOnPage.addEventListener("click", (event) => {
      console.log(
        `${event.target.innerText} correct answer: ${problem.correctAnswer}`
      );
      if (event.target.innerText == problem.correctAnswer) {
        score++;
        let currentScore = document.querySelector(".currentScore");
        currentScore.innerText = score;
      }
      if (questions.length > 0) {
        displayNextProblem();
      } else {
        let showhide = Array.from(document.getElementsByClassName("show-hide"));
        showhide.forEach((element) => {
          element.classList.add("hidden");
        });
      }
    });
  });
  const startOver = document.getElementById("btnStartOver");
  startOver.addEventListener("click", () => {
    generateProblems(numProblems);
    problemNumber = 0;
    score = 0;
    let currentScore = document.querySelector(".currentScore");
    currentScore.innerText = score;
    let currentProblem = document.querySelector(".currentProblem");
    currentProblem.innerText = problemNumber;
    let showhide = Array.from(document.getElementsByClassName("hidden"));

    showhide.forEach((element) => {
      element.classList.remove("hidden");
    });
  });
});

function generateProblem() {
  let numOne = getRandomNumber(10);
  let numTwo = getRandomNumber(10);
  let correctAnswer = numOne * numTwo;

  let wrongOne = getRandomNumber(100);
  let wrongTwo = getRandomNumber(100);
  let wrongThree = getRandomNumber(100);
  let answers = [correctAnswer, wrongOne, wrongTwo, wrongThree];
  shuffleArray(answers);

  return {
    numOne: numOne,
    numTwo: numTwo,
    correctAnswer: correctAnswer,
    answers: answers,
  };
}

function generateProblems(num) {
  questions = [];
  for (let i = 0; i < num; i++) {
    questions.push(generateProblem());
    //unansweredQuestionIndex.push(i);
  }
  shuffleArray(questions);
}

function displayNextProblem() {
  //let problemNumber = getRandomNumber(numProblems);

  problemNumber++;
  let currentProblem = document.querySelector(".currentProblem");
  currentProblem.innerText = problemNumber;
  problem = questions.pop();
  const expression = document.querySelector(".expression");
  expression.innerText = `${problem.numOne} * ${problem.numTwo}`;

  const answersOnpage = document.querySelectorAll("li");
  answersOnpage.forEach((answerOnPage) => {
    answerOnPage.innerText = problem.answers.pop();
  });
}

/**
 * Utility function to generate a random number based on max
 * @param {number} max
 */
function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

/**
 * Utility function to shuffle the items in an array
 * @param {object} arr
 */
function shuffleArray(arr) {
  return arr.sort(function (a, b) {
    return Math.random() - 0.5;
  });
}
