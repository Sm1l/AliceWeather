const now = new Date();
const year = now.getFullYear();
const month = getMonthNow(now);
const dateNumber = now.getDate();
const day = getDayNow(now);
const hour = now.getHours();
const minute = now.getMinutes();

function getMonthNow() {
  const months = [
    `января`,
    `февраля`,
    `марта`,
    `апреля`,
    `мая`,
    `июня`,
    `июля`,
    `августа`,
    `сентября`,
    `октября`,
    `ноября`,
    `декабря`,
  ];
  return months[now.getMonth()];
}

function getDayNow() {
  const days = [
    `воскресение`,
    `понедельник`,
    `вторник`,
    `среда`,
    `четверг`,
    `пятница`,
    `суббота`,
  ];
  return days[now.getDay()];
}

export function renderDate() {
  const date = document.querySelector(".date__text");
  if (date !== null) {
    date.innerHTML = `Этот прекрасный мир ждет тебя! <br> Сегодня отличный день =), <br> ${dateNumber} ${month} ${year} г., ${day}, <br> точное время ${hour} ч. ${minute} мин.`;
  }
}
