let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("displayTime");
let timer = null;
const startTime = document.querySelector(".btn-outline-success");
const resetTime = document.querySelector(".btn-outline-primary");
const stopTime = document.querySelector(".btn-outline-danger");

// start button
startTime.addEventListener("click", watchStart);

// reset button
resetTime.addEventListener("click", watchReset);

// stop button
stopTime.addEventListener("click", watchStop);

function stopWatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  displayTime.innerHTML = h + ":" + m + ":" + s;
}

function watchStart() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 1000);
}

function watchStop() {
  clearInterval(timer);
}

function watchReset() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  displayTime.innerHTML = "00:00:00";
}
