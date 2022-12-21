import { renderWeather, loadWeather, getWeather } from "./weather.ts";
import { getWear } from "./wear.ts";
import { createSurpriseElement } from "./surprise.js";
// import { renderDate } from "./date.ts";

// (async function () {
//   const data = await loadWeather();
//   getWeather(data);
//   getWear(data);
// })();

loadWeather().then((data) => {
  getWeather(data);
  getWear(data);
});
import { renderDate } from "./date.ts";
renderDate();
