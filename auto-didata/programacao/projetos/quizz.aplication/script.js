const firstQ = document.querySelectorAll(".first-q");
const secondQ = document.querySelectorAll(".second-q");
const thirdQ = document.querySelectorAll(".third-q");
const fourthQ = document.querySelectorAll(".fourth-q");

const firstQradio = document.querySelectorAll(".first-q-radio");
const secondQradio = document.querySelectorAll(".second-q-radio");
const thirdQradio = document.querySelectorAll(".third-q-radio");
const fourthQradio = document.querySelectorAll(".fourth-q-radio");

const rightAs = document.querySelector(".correct-answ");
const wrongAs = document.querySelector(".wrong-answ");

const playAgain = document.querySelector(".play-again");

const results = document.querySelector(".results");
const itens = document.querySelectorAll(".content-itens");
const buttons = document.querySelectorAll("#submit");

let radioIndex = 0;
let questionsIndex = 0;

let currentIndex = 0;

showQuizz();

function showQuizz() {
  if (itens.length > 0) {
    itens[currentIndex].classList.add("visible");
  }
}

function currentQuizz(index) {
  if (index >= itens.length) {
    results.classList.add("results-visible");
    itens.forEach((item) => {
      item.classList.remove("visible");
    });
  } else {
    itens.forEach((item) => {
      item.classList.remove("visible");
    });
    itens[index].classList.add("visible");
  }
}

function nextSlider() {
  currentIndex++;
  currentQuizz(currentIndex);
}

function updatingAll() {
  nextSlider();
}

playAgain.addEventListener("click", () => {
  currentIndex = 0;
  results.classList.remove("results-visible");

  itens.forEach((item) => {
    item.classList.remove("visible");
  });

  showQuizz();
});

const ans = document.getElementsByName("answer");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (ans !== null) {
      updatingAll();
    } else {
      alert("select an answear");
    }
  });
});

console.log(choices);

// Se o radio escolhido corresponder a resposta certa, cada uma vale 10 pontos e então o usuário ganha 40 pontos
// se acertar menos, dependendo de quanto for, ganha correspondente ao que acertar
// O resultado sera mostrado em um box com o tanto de erro e acertos! Fazer isso certinho, Larissa. Você consegue!
