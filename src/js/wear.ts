import { Data } from "./weather";

let wearTemp = document.querySelector(".wear__temp");
// const wind = document.querySelector(".weather__wind");
// const rain = document.querySelector(".weather__status");
let weatherTemp = document.querySelector(".weather__real");

if (weatherTemp) {
  function tempDetection() {
    console.log(weatherTemp);
  }
  tempDetection();
} else {
  console.log("not work");
}

export function getWear(data: Data) {
  console.log(data);
  const {feelsLike, location, temp, weatherIcon, weatherStatus, wind } = data;

  wearTemp.innerText = `Что ж, на улице ${weatherStatus}, меньше ${temp}  градусов.
       Стоит достаточно тепло одеться, обязательно надеваем шапку.
       Отлично подойдут джинсы с колготками, бадлон, не забываем под падлон надеть маечку!
       Поверх теплую курточку: бомбер или пуховички из Юникло. На ноги сапоги или тимбы!
       `;
}
// function tempDetection() {
//   if (getWeather) {
//     let temp = document.querySelector(".weather__real");
//     console.log(temp);
//   }

//   switch (temp) {
//     case ">=25":
//       wearTemp.innerHTML = `
//         `;
//       break;
//     case ">=20":
//       break;
//     case ">=15":
//       break;
//     case ">=10":
//       wearTemp.innerText = `Что ж, на улице достаточно прохладно, меньше 15 градусов.
//       Стоит достаточно тепло одеться, обязательно надеваем шапку.
//       Отлично подойдут джинсы с колготками, бадлон, не забываем под падлон надеть маечку!
//       Поверх теплую курточку: бомбер или пуховички из Юникло. На ноги сапоги или тимбы!
//       `;
//   }
// break;
// }
