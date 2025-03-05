const section2List = document.querySelectorAll(".section2");
const buttonList = document.querySelectorAll("span");
const section1 = document.querySelectorAll(".section1");

console.log(section1);

const buttons = buttonList;
console.log(buttons);

section2List.forEach((element) => {
  element.classList.add("hidden");
});

function turnVisible(index) {
  const classList = section2List[index].classList;

  if (classList.contains("hidden")) {
    section2List[index].classList.add("visible");
    section2List[index].classList.remove("hidden");
  } else {
    section2List[index].classList.add("hidden");
    section2List[index].classList.remove("visible");
  }

  if (classList.contains("visible")) {
    section1.forEach((element) => {
      element.classList.add("border-radius-left");
      element.classList.add("border-radius-right");
    });
  } else {
    section1.forEach((element) => {
      element.classList.remove("border-radius-left");
      element.classList.remove("border-radius-right");
    });
  }
}

function changeButton(element, index) {
  element.addEventListener("click", () => {
    if (buttonList[index].innerHTML === "+") {
      buttonList[index].innerHTML = "-";
    } else if (buttonList[index].innerHTML === "-") {
      buttonList[index].innerHTML = "+";
    } else {
      buttonList[index].innerHTML = "-";
    }

    turnVisible(index);
  });
}

buttonList.forEach((element, index) => {
  changeButton(element, index);
});
