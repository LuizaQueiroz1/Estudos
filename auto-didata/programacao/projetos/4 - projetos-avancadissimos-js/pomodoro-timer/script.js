const startButton = document.getElementById("start");
const display = document.getElementById("display");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let interval;
let timeLeft = 1500;

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  display.innerHTML = formattedTime;
}

function startTime() {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();

    if (timeLeft === 0) {
      clearInterval(interval);
      alert("time is up");
      timeLeft = 1500;
      updateTimer();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
  updateTimer();
}

function resetTimer() {
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
}

startButton.addEventListener("click", () => {
  startTime();
});
stopButton.addEventListener("click", () => {
  stopTimer();
});
resetButton.addEventListener("click", () => {
  resetTimer();
});
