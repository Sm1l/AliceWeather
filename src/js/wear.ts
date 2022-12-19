import { Data } from "./weather";

export function getWear(data: Data) {
  console.log(data);
  const { feelsLike, temp, weatherIcon, weatherStatus, wind, main } = data;

  function renderTemp() {
    const wearTemp = document.querySelector(".wear__temp");
    const baseTemp = {
      above30: `На улице настоящая жаришка, температура ${temp}° градусов, ${weatherStatus}!`,
      above25: `На улице прям тепло, температура ${temp}° градусов, ${weatherStatus}.  Одеваемся легко.`,
      above20: `На улице ${weatherStatus}, тепло, температура ${temp}° градусов.`,
      above15: `На улице достаточно комфортная температура, ${temp}° градусов, ${weatherStatus}. Можно надеть джинсики/брючки/штанишки, маечку с бадлоном. Сверху кожаную курточку, либо джинсовку. На ноги кроссовки или легкие ботиночки.`,
      above10: `Что ж, на улице ${weatherStatus}, температура ${temp}° градусов.
      Стоит достаточно тепло одеться, обязательно надевай шапку.
      Отлично подойдут джинсы с колготками, бадлон, не забывай под бадлон надеть маечку!
      Поверх теплую курточку: бомбер или пальто. На ноги сапоги или тимбы!`,
      above5: `За окном прохладно, ${weatherStatus}, температура ${temp}° градусов. Одевайся тепло: джинсы/кожаные штанишки, обязательно колготки! Бадлон или свитер, обязательно поддень маечку. На голову надень шапочку и, возможно, уже стоит задуматься о перчатках. Поверх пальто, пуховик из Юникло или бомбер. На ноги сапоги или тимбы.`,
      above0: `Температура немного выше нуля, за окном ${temp}° градусов, ${weatherStatus}. Одеваемся тепло. Поддевай колготки под штанишки, под бадлон надевай футболочку! Обязательно перчатки, шапку, шарф! Сверху либо пуховик, либо зеленую шубку! На ноги зимние сапоги, либо тимбы.`,
      aboveMinus5: `За окном немного ниже нуля, температура ${temp}° градусов, ${weatherStatus}. Под джинсики обязательно поддеваем колготки. Сверху маечку и бадлон. Обязательно перчатки, шапку, теплый шарфик! Сверху курточку, либо зеленую шубку! На ноги теплые ботиночки с мехом или зимние сапожки!`,
      aboveMinus10: `На улице уверенный минус, температура ${temp}° градусов, ${weatherStatus}. Стоит задуматься о том, чтобы надеть двое колготок под джинсики/штанишки! Под бадлон обязательно поддевай маечку, а, возможно, стоит задуматься о теплом свитере! Надевай теплую шапку, шарф и перчатки! Сверху можно надеть зеленую или желтую шубку, теплый пуховик! На ноги зимние сапоги, Угги или Джог-Доги!`,
      aboveMinus15: `За окном хороший минус, температура ${temp}° градусов, ${weatherStatus}. Под штанишки обязательно надевай двое колготок. Теплый свитер, под свитер обязательно маечку=) Самую теплую шапку и шарф, перчатки! Сверху теплый пуховик из Рокси или желтую шубу! На ноги Угги или Джог-Доги!`,
      belowMinus15: `Нет, ну ты видела, что творится? Температура за окном ${temp}° градусов. Самое лучшее, что можно и нужно сделать - это горячий чай, а после чая забраться в Лисий офис и никуда оттуда не вылезать =) ! Но если все-таки придется выходить из дома, то одевайся ооочень тепло! Штанишки с двумя колготами, много-много кофточек под свитер! На голову надевай самую теплую шапку, повязывай теплый шарф! Сверху теплый пуховик из Рокси или желтую шубу! На ноги Угги или Джог-Доги!`,
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
      } else if (temp < -15) {
        wearTemp.textContent = baseTemp.belowMinus15;
      }
    }
  }
  renderTemp();

  function renderWind() {
    const wearWind = document.querySelector(".wear__wind");
    const baseWind = {
      above0: `Ветер слабый, ${wind} м/с.`,
      above4: `Ветер умеренный, ${wind} м/с!`,
      above7: `Сильный ветер, ${wind} м/с! Лучше конечно не выходить из дома, но если все-таки этого не избежать, то нужно очень хорошо закутаться!`,
    };
    if (wearWind != null) {
      if (wind > 7) {
        wearWind.textContent = baseWind.above7;
      } else if (wind > 4) {
        wearWind.textContent = baseWind.above4;
      } else if (wind > 0) {
        wearWind.textContent = baseWind.above0;
      }
    }
  }
  renderWind();

  function renderStatus() {
    const wearStatus = document.querySelector(".wear__status");
    const baseStatus = {
      sunshine: `За окном светит солнышко, ${weatherStatus}! Какой сегодня прекрасный день =)`,
      cloudy: `На улице ${weatherStatus}. Возможно сегодня понадобится зонт!`,
      mist: `На улице ${weatherStatus}.`,
      rain: `На улице ${weatherStatus}! Обязательно берем зонтик!`,
      snow: `На улице ${weatherStatus}! Обязательно берем зонтик!`,
    };
    if (wearStatus != null) {
      if (main == "Clear") {
        wearStatus.textContent = baseStatus.sunshine;
      } else if (main == "Clouds" && temp >= -3) {
        wearStatus.textContent = baseStatus.cloudy;
      } else if ((main == "Thunderstorm" || "Rain" || "Drizzle") && temp >= -3) {
        wearStatus.textContent = baseStatus.rain;
      } else if ((main == "Mist" || "Smoke" || "Haze" || "Fog") && temp >= -3) {
        wearStatus.textContent = baseStatus.mist;
      } else if (main == "Snow" && temp >= -3) {
        wearStatus.textContent = baseStatus.snow;
      }
    }
  }
  renderStatus();
}
