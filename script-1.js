//Напишите программу, которая получит от пользователя
//число (количество минут) и выведет в консоль
//строку в формате часов и минут
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

const userData = Number(prompt("Введіть кількість хвилин"));
console.log(typeof userData);
const hours = Math.floor(userData / 60);
const minutes = userData % 60;
const hoursMode = String(hours).padStart(2, 0);
const minutesMode = String(minutes).padStart(2, 0);
const time = `${hoursMode}:${minutesMode}`;
console.log(time);
