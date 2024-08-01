const itens = document.querySelectorAll(".content-itens");
const buttons = document.querySelectorAll("#submit");

let currentIndex = 0;

console.log(itens);

function showQuizz() {
  if (itens.length > 0) {
    itens[currentIndex].classList.add("visible");
  }
}

showQuizz();

function currentQuizz(index) {
  if (index >= itens.length) {
    currentIndex = 0;
  } else if (index > itens.length) {
    currentIndex = length - 1;
  }

  itens.forEach((itens) => {
    itens.classList.remove("visible");
  });

  itens[currentIndex].classList.add("visible");
}

function nextSlider() {
  currentIndex++;
  currentQuizz(currentIndex);
}

function updatingAll() {
  currentQuizz();
  nextSlider();
}

console.log(buttons);

buttons.forEach((btn) => {
  btn.addEventListener("click", updatingAll);
});
