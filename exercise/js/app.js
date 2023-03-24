let questions = [];
//let unansweredQuestionIndex = [];
let score = 0;
const numProblems = 10;

document.addEventListener("DOMContentLoaded", () => {
  generateProblems(numProblems);
  displayNextProblem();


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
    answers: answers
  };
}

function generateProblems(num) {
  for (let i = 0; i < num; i++) {
    questions.push(generateProblem());
    //unansweredQuestionIndex.push(i);
  }
  shuffleArray(questions);
}

function displayNextProblem() {
  //let problemNumber = getRandomNumber(numProblems);
  if(questions.length > 0){
    let problem = questions.pop();
    const expression = document.querySelector(".expression");
    expression.innerText = `${problem.numOne} * ${problem.numTwo}`;
  
    const answersOnpage = Array.from(document.querySelectorAll("li"));
    answersOnpage.forEach((answerOnPage) => {
      answerOnPage.innerText = problem.answers.pop();

      // answerOnpage.addEventListener('click', (event) => {
      //   if(event.target.innerText = problem.correctAnswer){
      //     score++;
      //     //displayNextProblem();
      //   }
      //   else {
      //     let showhide = Array.from(document.getElementsByClassName("show-hide"));
      //     showhide.foreach((element) => {           //stuff
      //       })
      //     }
      //   })
      })
    }

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
