const body = document.getElementsByTagName("body")[0];
const h1 = document.getElementsByTagName("h1")[0];
const button = document.getElementsByTagName("button")[0];

const lightModeText = "Light Mode ON";
const darkModeText = "Dark Mode ON";
const btnLightMode = "switch to Light mode";
const btnDarkMode = "switch to Dark Mode";

h1.innerHTML = lightModeText;
button.innerHTML = btnDarkMode;

console.log(button);

function changeMode() {
  changeTexts();
  changeClasses();
}

function changeTexts() {
  if (body.classList.contains("darkMode")) {
    button.innerHTML = btnDarkMode;
    h1.innerHTML = lightModeText;
    return;
  }
  button.innerHTML = btnLightMode;
  h1.innerHTML = darkModeText;
}

function changeClasses() {
  h1.classList.toggle("darkMode");
  button.classList.toggle("darkMode");
  body.classList.toggle("darkMode");
}

button.addEventListener("click", changeMode);
