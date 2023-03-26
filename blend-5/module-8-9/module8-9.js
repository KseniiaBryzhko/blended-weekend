//TODO:====================01==========================
/**
 * Перероби функцію на проміс таким чином, щоб проміс повертав значення
 * через 2 секунди після виклику функції
 */

function greet() {
  return "hello world";
}

//? Answer

// function greet2() {
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("hello world"), 2000);
//     }).then(console.log);
//   };
// }
// greet2();

// function greet2() {
//   new Promise((res) => {
//     setTimeout(() => res("hello world"), 2000);
//   }).then(console.log);
// }
// greet2();

// function greet2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("hello world");
//     }, 2000);
//   }).then(console.log);
// }

// greet2();

//TODO:====================02==========================

/**
 * - Використовуй prompt і повертай значення звідти.
 * - Створи функцію, всередині якої буде проміс.
 * Якщо значення не є числом, відхиляй проміс і логіруй "error".
 * Якщо значення парне, вирішуй проміс і повертай "even" через 1 секунду.
 * Якщо значення не парне, вирішуй проміс і повертай "odd" через 2 секунди.
 */

//? Answer

// function checkValue(value) {
//   return new Promise((res, rej) => {
//     if (!value || isNaN(value)) rej("error");
//     if (value % 2 === 0) {
//       setTimeout(() => {
//         res("even");
//       }, 1000);
//     }
//     setTimeout(() => {
//       res("odd");
//     }, 2000);
//   });
// }

// const value = prompt("Введіть числове значення!");
// checkValue(value).then(console.log).catch(console.log);

//TODO:====================03==========================

/**
 *
 * Якщо імейл і пароль користувача збігаються, під час сабміту зберігай дані з форми
 * в локальне сховище і міняй кнопку login на logout і роби поля введення
 * недоступними для зміни.
 * При перезавантаженні сторінки, якщо користувач залогінений, ми повинні бачити logout-кнопку
 * і недоступні для зміни поля з даними користувача.
 * Клік по кнопці logout повертає все в первісний вигляд і видаляє дані користувача
 * з локального сховища.
 *
 * Якщо введені дані не збігаються з потрібними даними, викликати аlert і
 * повідомляти про помилку.
 */

const SAVED_LOGIN_DATA = "SAVED_LOGIN_DATA";
const USER_DATA = {
  email: "user@mail.com",
  password: "secret",
};

//? Answer

// const formEl = document.querySelector(".js-login-form");
// const savedDataFromLocalStorage = JSON.parse(
//   localStorage.getItem(SAVED_LOGIN_DATA)
// );
// if (savedDataFromLocalStorage) {
//   const { email, password } = savedDataFromLocalStorage;

//   formEl.elements.email.value = email;
//   formEl.elements.password.value = password;
//   formEl.elements.email.disabled = true;
//   formEl.elements.password.disabled = true;
//   formEl.elements.button.textContent = "Logout";
// }

// formEl.addEventListener("submit", onSubmit);

// function onSubmit(e) {
//   e.preventDefault();
//   const { email, password, button } = e.target.elements;

//   if (savedDataFromLocalStorage) {
//     email.disabled = false;
//     password.disabled = false;
//     localStorage.removeItem(SAVED_LOGIN_DATA);
//     button.textContent = "Login";
//     formEl.reset();
//     return;
//   }

//   console.log(e.target.elements.email);

//   if (!email.value || !password.value) return alert("Введіть дані!");
//   if (
//     email.value !== USER_DATA.email ||
//     password.value !== USER_DATA.password
//   ) {
//     return alert("Imposter!");
//   }

//   const userData = {
//     email: email.value,
//     password: password.value,
//   };

//   localStorage.setItem(SAVED_LOGIN_DATA, JSON.stringify(userData));

//   email.disabled = true;
//   password.disabled = true;

//   button.textContent = "Logout";
// }

//TODO:====================04==========================

/**
 * Кнопка increment повинна щосекунди збільшувати значення на 1
 * Кнопка decrement повинна щосекунди зменшувати значення на 1
 */

let timer = null;
const count = document.querySelector(".js-counter-value");
const buttons = document.querySelectorAll(".js-counter-button");

//? Answer

// buttons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     const { action } = event.target.dataset;
//     clearInterval(timer);

//     if (action === "increment") {
//       timer = setInterval(() => {
//         let number = Number(count.textContent);
//         number += 1;
//         count.textContent = number;
//         console.log(number);
//       }, 1000);

//       return;
//     }

//     timer = setInterval(() => {
//       let number = Number(count.textContent);
//       number -= 1;
//       count.textContent = number;
//       console.log(number);
//     }, 1000);
//     console.log("hello");
//   });
// });

// console.log("1");

// setTimeout(() => {
//   console.log("asyn");
// }, 5000);

// console.log("2");
//TODO:====================05==========================

/**

 * Перероби код так, щоб усі дані збиралися
 * одноразово і приходили у вигляді масиву
 */

const getData = () =>
  new Promise((res) => {
    setTimeout(() => {
      const data = 1;
      // console.log(data);
      res(data);
    }, 1000);
  });

const getNewData = () =>
  new Promise((res) => {
    setTimeout(() => {
      const data = 2;
      // console.log(data);
      res(data);
    }, 1000);
  });

const getAnotherData = () =>
  new Promise((res) => {
    setTimeout(() => {
      const data = 3;
      // console.log(data);
      res(data);
    }, 1000);
  });

const getLastData = () =>
  new Promise((res) => {
    setTimeout(() => {
      const data = 4;
      // console.log(data);
      res(data);
    }, 1000);
  });

//? Answer
// const dataArray = [];
// getData()
//   .then((data) => {
//     dataArray.push(data);
//     return getNewData();
//   })
//   .then((data) => {
//     dataArray.push(data);
//     return getAnotherData();
//   })
//   .then((data) => {
//     dataArray.push(data);
//     return getLastData();
//   })
//   .then((data) => {
//     dataArray.push(data);
//     console.log(dataArray);
//   });

// const data = await Promise.all([
//   getData(),
//   getNewData(),
//   getAnotherData(),
//   getLastData(),
// ]);
// console.log(data);

//TODO:====================06==========================

/**
 * Функція startTimer повинна логати кожен елемент масиву раз на секунду.
 * Коли черга дійде до останнього елемента масиву, продовжити логати у зворотному порядку
 * доти, доки не дійде до першого елемента, потім зупинити процес.
 *
 */

//? Answer
// function startTimer(array1) {
//   let index = 0;
//   let array = [...array1];
//   let isResolved, timer;

//   timer = setInterval(() => {
//     console.log(array[index]);
//     console.log(index);

//     if (index === array.length - 1 && !isResolved) {
//       array.reverse();
//       index = -1;
//       isResolved = true;
//     }
//     if (index === array.length - 1 && isResolved) {
//       clearInterval(timer);
//     }
//     index += 1;
//   }, 1000);
// }

// startTimer(["a", "b", "c", "d", "e", "f"]);

//TODO:====================07==========================
/**
 * Функція countWithDelay приймає приймає 3 аргументи:
 * 1) кількість секунд перед тим як спрацює ф-ція logCount
 * 2) скільки разів має відпрацювати logCount
 * 3) затримка між викликами ф-ції
 *
 * logCount повинна логувати кількість викликів
 */

//? Answer

// countWithDelay(3000, 5, 1000);

//TODO:====================08==========================
/**
 * Створи список справ.
 * Є інпут, у який вводиться назва завдання.
 * Після натискання на кнопку "Додати" завдання додається до списку #list.
 * Поруч із кожним завданням знаходиться кнопка "Видалити", щоб можна було
 * прибрати завдання зі списку.
 * Список із завданнями має бути доступним після перезавантаження сторінки.
 */

const TASKS_KEY = "TASKS_KEY";
const taskForm = document.querySelector(".js-task-form");
const taskList = document.querySelector(".js-task-list");

//? Answer

//TODO:==============================================
