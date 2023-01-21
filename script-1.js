//Напишите программу, которая получит от пользователя
//число (количество минут) и выведет в консоль
//строку в формате часов и минут
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

// const userData = Number(prompt("Введіть кількість хвилин"));
// console.log(typeof userData);
// const hours = Math.floor(userData / 60);
// const minutes = userData % 60;
// const hoursMode = String(hours).padStart(2, 0);
// const minutesMode = String(minutes).padStart(2, 0);
// const time = `${hoursMode}:${minutesMode}`;
// console.log(time);

const userInfo = Number(prompt("Введіть значення від 0 до 60 включно"));

function checkQuater(num) {
  let message;

  if (num >= 0 && num <= 15) {
    message = console.log("Ваше число в 1ій чверті.");
  } else if (num >= 16 && num <= 30) {
    message = console.log("Ваше число в 2ій чверті.");
  } else if (num >= 31 && num <= 45) {
    message = console.log("Ваше число в 3ій чверті.");
  } else if (num >= 46 && num <= 60) {
    message = console.log("Ваше число в 4ій чверті.");
  } else {
    message = console.log("Ваше число невірне.");
  }

  return message;
}

checkQuater(userInfo);
