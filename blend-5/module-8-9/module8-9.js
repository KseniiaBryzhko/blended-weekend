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

//TODO:====================04==========================

/**
 * Кнопка increment повинна щосекунди збільшувати значення на 1
 * Кнопка decrement повинна щосекунди зменшувати значення на 1
 */

let timer = null;
const count = document.querySelector(".js-counter-value");
const buttons = document.querySelectorAll(".js-counter-button");

//? Answer

//TODO:====================05==========================

/**

 * Перероби код так, щоб усі дані збиралися
 * одноразово і приходили у вигляді масиву
 */

const getData = () =>
  new Promise((res) => {
    setTimeout(() => {
      const data = 1;
      console.log(data);
      res(data);
    }, 1000);
  });

const getNewData = () =>
  new Promise((res) => {
    setTimeout(() => {
      const data = 2;
      console.log(data);
      res(data);
    }, 1000);
  });

const getAnotherData = () =>
  new Promise((res) => {
    setTimeout(() => {
      const data = 3;
      console.log(data);
      res(data);
    }, 1000);
  });

const getLastData = () =>
  new Promise((res) => {
    setTimeout(() => {
      const data = 4;
      console.log(data);
      res(data);
    }, 1000);
  });

//? Answer

//TODO:====================06==========================

/**
 * Функція startTimer повинна логати кожен елемент масиву раз на секунду.
 * Коли черга дійде до останнього елемента масиву, продовжити логати у зворотному порядку
 * доти, доки не дійде до першого елемента, потім зупинити процес.
 *
 */

//? Answer

// startTimer(['a', 'b', 'c', 'd', 'e', 'f']);

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
