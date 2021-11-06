const clock = document.querySelector("h2#clock");

function getTime() {
  const date = new Date();
  let hr = String(date.getHours()).padStart(2, "0");
  let min = String(date.getMinutes()).padStart(2, "0");
  let sec = String(date.getSeconds()).padStart(2, "0");
  clock.innerHTML = `${hr} : ${min} : ${sec}`;
}
getTime();
setInterval(getTime, 500);
