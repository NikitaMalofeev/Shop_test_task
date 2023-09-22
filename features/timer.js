let initialTime = 17476;
const countDownEl = document.getElementById("timer");

function updateCountDown() {
  const hours = "0" + Math.floor(initialTime / 60 / 60);
  const minutes = Math.floor(initialTime / 60) % 60;
  let seconds = initialTime % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  countDownEl.innerHTML = `${hours}:${minutes}:${seconds}`;
  initialTime--;
}

setInterval(updateCountDown, 1000);
