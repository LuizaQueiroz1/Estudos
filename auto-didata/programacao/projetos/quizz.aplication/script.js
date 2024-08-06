const data = [
  {
    id: 1,
    question: "Who wrote the novel 1984?",
    answers: [
      { answer: "George Orwell", isCorrect: true },
      { answer: "kjsdfjksdfafk", isCorrect: false },
      { answer: "jnksdhnsdshnds", isCorrect: false },
      { answer: "mdlksksdklsds", isCorrect: false },
    ],
  },

  {
    id: 2,
    question: "What is the capital city of Australia?",
    answers: [
      { answer: "asdskldfaksd", isCorrect: false },
      { answer: "kjsdkjsadkjd", isCorrect: true },
      { answer: "asdskldfaksd", isCorrect: false },
      { answer: "kjsdkjsadkjd", isCorrect: false },
    ],
  },

  {
    id: 3,
    question: "What is the chemical symbol for Gold?",
    answers: [
      { answer: "asdskldfaksd", isCorrect: false },
      { answer: "kjsdkjsadkjd", isCorrect: false },
      { answer: "asdskldfaksd", isCorrect: true },
      { answer: "kjsdkjsadkjd", isCorrect: false },
    ],
  },

  {
    id: 4,
    question: "In what year was the first iPhone released?",
    answers: [
      { answer: "asdskldfaksd", isCorrect: false },
      { answer: "kjsdkjsadkjd", isCorrect: true },
      { answer: "asdskldfaksd", isCorrect: false },
      { answer: "kjsdkjsadkjd", isCorrect: false },
    ],
  },
];

const gameScreen = document.querySelectorAll(".content-itens");
const resultsScreen = document.querySelectorAll(".results");
const question = document.querySelector(".question");
const answersContainer = document.querySelectorAll(".answers");
const submit = document.querySelectorAll("#submit");
const playAgain = document.querySelector(".play-again");

console.log(answersContainer);

let qIndex = 0;
let correctAnswer = 0;
let wrongAnswer = 0;
let total = 0;
let selectedAnswers;

let currentIndex = 0;

showQuizz();

function showQuizz() {
  if (gameScreen.length > 0) {
    gameScreen[currentIndex].classList.add("visible");
  }
}

const showQuestion = (qNUmber) => {
  question.textContent = data[qNUmber].question;
  answersContainer.inner = data[qNUmber].answers.map(
    (item, index) =>
      `<div class "answer">     
    <input name="answer" class="first-q-radio" type="radio" id=${index} value=${item.isCorrect}/>
    <label name="answer" class="first-q" for"1">${item.answer}</label>
    </div>
              `
  );
};

showQuestion(qIndex);
