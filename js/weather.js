const weatherBlock = document.querySelector(".weather__block");

async function loadWeather(e) {
  weatherBlock.innerHTML = `
  <div class="weather__loading">
  <img src="images/gif/Xuw0.gif" alt="Загрузка" />
</div>`;

  const server =
    "http://api.openweathermap.org/data/2.5/weather?units=metric&q=Moscow&lang=ru&appid=e2e9bbafa027ecadd7d96a8ed7faef14";
  const response = await fetch(server, { method: "GET" });
  const responseResult = await response.json();

  if (response.ok) {
    getWeather(responseResult);
  } else {
    weatherBlock.innerHTML = responseResult.message;
  }
}

function getWeather(data) {
  // console.log(data);

  const location = data.name;
  const temp = Math.round(data.main.temp);
  const feelsLike = Math.round(data.main.feels_like);
  const weatherStatus = data.weather[0].description;
  const weatherIcon = data.weather[0].icon;
  const wind = data.wind.speed;

  // HTML шаблон
  const template = `
  <div class="weather__city">${location}</div>
  <div class="weather__info">
    <div class="weather__icon">
      <img src="https://openweathermap.org/img/w/${weatherIcon}.png" alt="погодный статус" />
    </div>
    <div class="weather__status">${weatherStatus}</div>
  </div>
  <div class="weather__temp">
    <div class="weather__real">${temp}°</div>
    <div class="weather__feels-like">Ощущается как: ${feelsLike}°</div>
    <div class="weather__wind">Ветер: ${wind} м/с</div>
  </div>
  `;

  weatherBlock.innerHTML = template;
}

if (weatherBlock) {
  loadWeather();
}
