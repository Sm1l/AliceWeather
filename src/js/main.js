import { renderWeather, loadWeather, getWeather } from "./weather.js";
import { getWear } from "./wear.js";

// (async function () {
//   const data = await loadWeather();
//   getWeather(data);
//   getWear(data);
// })();

loadWeather().then((data) => {
  getWeather(data);
  getWear(data);
});
