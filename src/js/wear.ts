import { Data } from "./weather";

export function getWear(data: Data) {
  console.log(data);
  const { feelsLike, temp, weatherIcon, weatherStatus, wind, main } = data;

  function renderTemp() {
    const wearTemp = document.querySelector(".wear__temp");
    const baseTemp = {
      above30: `На улице настоящая жаришка! ${weatherStatus}, ${temp}° градусов.`,
      above25: `25`,
      above20: `На улице ${weatherStatus}, достаточно тепло, ${temp}° градусов.`,
      above15: `На улице `,
      above10: `Что ж, на улице ${weatherStatus}, температура ${temp}° градусов.
    Стоит достаточно тепло одеться, обязательно надеваем шапку.
    Отлично подойдут джинсы с колготками, бадлон, не забываем под падлон надеть маечку!
    Поверх теплую курточку: бомбер или пуховички из Юникло. На ноги сапоги или тимбы!
    `,
      above5: `За окном прохладно, ${weatherStatus}, температура ${temp}° градусов.`,
      above0: `0`,
      aboveMinus5: `-5`,
      aboveMinus10: `-10`,
      aboveMinus15: `-15`,
      aboveMinus20: `-20`,
      aboveMinus25: `-25`,
      belowminus25: `-30`,
    };
    if (wearTemp != null) {
      if (temp >= 30) {
        wearTemp.textContent = baseTemp.above30;
      } else if (temp >= 25) {
        wearTemp.textContent = baseTemp.above25;
      } else if (temp >= 20) {
        wearTemp.textContent = baseTemp.above20;
      } else if (temp >= 15) {
        wearTemp.textContent = baseTemp.above15;
      } else if (temp >= 10) {
        wearTemp.textContent = baseTemp.above10;
      } else if (temp >= 5) {
        wearTemp.textContent = baseTemp.above5;
      } else if (temp >= 0) {
        wearTemp.textContent = baseTemp.above0;
      } else if (temp >= -5) {
        wearTemp.textContent = baseTemp.aboveMinus5;
      } else if (temp >= -10) {
        wearTemp.textContent = baseTemp.aboveMinus10;
      } else if (temp >= -15) {
        wearTemp.textContent = baseTemp.aboveMinus15;
      } else if (temp >= -20) {
        wearTemp.textContent = baseTemp.aboveMinus20;
      } else if (temp >= -25) {
        wearTemp.textContent = baseTemp.aboveMinus25;
      } else if (temp < -25) {
        wearTemp.textContent = baseTemp.belowminus25;
      }
    }
  }
  renderTemp();

  function renderWind() {
    const wearWind = document.querySelector(".wear__wind");
    const baseWind = {
      above0: `Ветер слабый, ${wind} м/с.`,
      above3: `Ветер средний, ${wind} м/с.`,
      above6: `Достаточно сильный ветер, ${wind} м/с. Стоит задуматься о каком-нибудь головном уборе и шарфике!`,
      above9: `Очень сильный ветер, ${wind} м/с! Лучше конечно не выходить из дома, но если все-таки этого не избежать, то нужно очень хорошо закутаться!`,
    };
    if (wearWind != null) {
      if (wind <= 3) {
        wearWind.textContent = baseWind.above0;
      }
      if (wind <= 6) {
        wearWind.textContent = baseWind.above3;
      }
      if (wind <= 9) {
        wearWind.textContent = baseWind.above6;
      }
      if (wind > 9) {
        wearWind.textContent = baseWind.above9;
      }
    }
  }
  renderWind();

  function renderStatus() {
    const wearStatus = document.querySelector(".wear__status");
    const baseStatus = {
      sunshine: `За окном светит солнышко, ${weatherStatus}! Какой сегодня прекрасный день =)`,
      cloudy: `На улице ${weatherStatus}. Нужно подумать: брать ли с собой зонт..`,
      mist: `На улице ${weatherStatus}.`,
      rain: `На улице ${weatherStatus}! Обязательно берем зонт!`,
      snow: `На улице ${weatherStatus}!`,
    };
    if (wearStatus != null) {
      if (main == "Clear") {
        wearStatus.textContent = baseStatus.sunshine;
      } else if (main == "Clouds") {
        wearStatus.textContent = baseStatus.cloudy;
      } else if (main == "Thunderstorm" || "Rain" || "Drizzle") {
        wearStatus.textContent = baseStatus.rain;
      } else if (main == "Mist" || "Smoke" || "Haze" || "Fog") {
        wearStatus.textContent = baseStatus.mist;
      } else if (main == "Snow") {
        wearStatus.textContent = baseStatus.snow;
      }
    }
  }
  renderStatus();
}
