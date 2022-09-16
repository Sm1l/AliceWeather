const weatherBlock = document.querySelector(".weather__block");

export async function loadWeather(e) {
  weatherBlock.innerHTML = `
  <div class="weather__loading">
  <img src="images/gif/Xuw0.gif" alt="Загрузка" />
</div>`;

  const server =
    "http://api.openweathermap.org/data/2.5/weather?units=metric&q=Moscow&lang=ru&appid=e2e9bbafa027ecadd7d96a8ed7faef14";
  const response = await fetch(server, { method: "GET" });
  const responseResult = await response.json();

  if (response.ok) {
    // getWeather(responseResult);
    // return responseResult;

    return {
      location: responseResult.name,
      temp: Math.round(responseResult.main.temp),
      feelsLike: Math.round(responseResult.main.feels_like),
      weatherStatus: responseResult.weather[0].description,
      weatherIcon: responseResult.weather[0].icon,
      wind: responseResult.wind.speed,
    };
  } else {
    weatherBlock.innerHTML = responseResult.message;
  }
}

export function getWeather(data) {
  const weatherBlock = document.querySelector(".weather__block");

  console.log(data);

  const { location, temp, feelsLike, weatherStatus, weatherIcon, wind } = data;

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

export function renderWeather() {
  if (weatherBlock) {
    loadWeather();
  }
}
