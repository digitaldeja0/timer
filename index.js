// Variables
let tens = 00;
let seconds = 00;
let appendTens = document.querySelector("#tens");
let appendSeconds = document.querySelector("#seconds");
let startBtn = document.querySelector("#button-start");
let stopBtn = document.querySelector("#button-stop");
let resetBtn = document.querySelector("#button-reset");

// Functions

function startTimer() {
  tens++;

  if (tens < 10) {
    appendTens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    appendTens.innerHTML = tens;
  }
  if (tens > 59) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = "0";
    appendTens.innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
}

startBtn.addEventListener("click", () => {
  interval = setInterval(startTimer, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(interval);
});

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  tens = "00";
  seconds = "00";
  appendTens.innerHTML = tens;
  appendSeconds.innerHTML = seconds;
});
