const API_KEY = "22adab92eaa0c155f727e7ff1573e5e2";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      const now = new Date();
      const date = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      date.innerText = `${now.getFullYear()} / ${now.getMonth()} / ${String(
        now.getDay()
      ).padStart(2, "0")}`;
      weather.innerText = `${data.name} / ${data.main.temp}℃ / ${data.weather[0].main}`;
    });
}
function onGeoError() {
  alert("can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
