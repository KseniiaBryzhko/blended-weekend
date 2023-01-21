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

// const userInfo = Number(prompt("Введіть значення від 0 до 60 включно"));

// function checkQuater(num) {
//   let message;

//   if (num >= 0 && num <= 15) {
//     message = console.log("Ваше число в 1ій чверті.");
//   } else if (num >= 16 && num <= 30) {
//     message = console.log("Ваше число в 2ій чверті.");
//   } else if (num >= 31 && num <= 45) {
//     message = console.log("Ваше число в 3ій чверті.");
//   } else if (num >= 46 && num <= 60) {
//     message = console.log("Ваше число в 4ій чверті.");
//   } else {
//     message = console.log("Ваше число невірне.");
//   }

//   return message;
// }

// checkQuater(userInfo);

function checkString() {
  const userStr = prompt("Input string");
  const userLetter = prompt("Write letter");
  const userLetterNum = Number(prompt("Write letter`s number"));
  let message;
  // console.log(typeof userStr);
  // console.log(typeof userLetter);
  // console.log(typeof userLetterNum);

  if (
    typeof userStr === "string" &&
    typeof userLetter === "string" &&
    typeof userLetterNum === "number"
  ) {
    const arrayStr = userStr.split("");

    if (!arrayStr.includes(userLetter)) {
      message = `There is no such letter`;
    } else {
      if (userLetterNum <= arrayStr.length) {
        if (arrayStr[userLetterNum - 1] === userLetter) {
          message = `Your letter ${userLetter} in string ${userStr} on position ${userLetterNum}`;
        } else {
          message = `Your letter ${userLetter}  doesn't match position ${userLetterNum}`;
        }
      } else {
        message = "Your LetterNum is false";
      }
    }
  } else {
    message = "Your data is invalid";
  }
  return console.log(message);
}
checkString();
