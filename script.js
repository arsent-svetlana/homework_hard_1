// 1. Навпаки.

const userNumber = prompt(`Введіть тризначне число`);
alert(`Число навпаки - ${userNumber.split("").reverse().join("")}.`);

//2.Температурний помічник.

const celsiusTemperature = prompt(`Введіть температуру у Цельсіях`);
const fahrenheitTemperature = celsiusTemperature * 9 / 5 + 32;

alert(`Температура у Фарингейтах ${fahrenheitTemperature}°F`);

//3.Конвертер кольору.

const red = prompt(`Введіть насиченість червоного кольору`);
const green = prompt(`Введіть насиченість зеленого кольору`);
const blue = prompt(`Введіть насиченість синього кольору у`);

let r = parseInt(red, 16);
let g = parseInt(green, 16);
let b = parseInt(blue, 16);

alert(`#${r}${g}${b}`);