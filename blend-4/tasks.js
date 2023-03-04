//TODO:====================01==========================
// Натискання на кновку "SHOW ME" має виводити значення з поля введення в alert

// const inputTextEl = document.querySelector(".js-alert-input");
// const submitBtnEl = document.querySelector(".js-alert-button");

// const showText = function (event) {
//   if (inputTextEl.value.trim() === "") return;
//   alert(inputTextEl.value);
//   inputTextEl.value = "";
// };

// submitBtnEl.addEventListener("click", showText);

//TODO:====================02==========================
// Після натискання на кнопку "SWAP ME" здійснюється обмін вмістом між двома інпутами. Можете натискати на неї кілька разів або вручну змінити вміст інпутів.

// const btnEl = document.querySelector(".js-swap-button");
// const leftInputEl = document.querySelector(".js-left-swap-input");
// const rightInputEl = document.querySelector(".js-right-swap-input");

// const replaceInput = function (event) {
//   const initialValue = leftInputEl.value;

//   if (leftInputEl.value.trim() === "" || rightInputEl.value.trim() === "") {
//     alert("Wright something!!");
//     return;
//   }

//   leftInputEl.value = rightInputEl.value;
//   rightInputEl.value = initialValue;
// };

// btnEl.addEventListener("click", replaceInput);

//TODO:====================03==========================
// Кнопка "Приховати" ховає текст і замінює назву кнопки на "Розкрити", у разі повторного натискання текст знову стає доступним і кнопка набуває початкового вигляду.
// const inputPasswordEl = document.querySelector(".js-password-input");
// const btnPasswordEl = document.querySelector(".js-password-button");
// btnPasswordEl.addEventListener("click", showPassword);

// function showPassword() {
//   if (inputPasswordEl.type === "text") {
//     inputPasswordEl.type = "password";
//     btnPasswordEl.textContent = "Розкрити";
//     return
//   }
//   inputPasswordEl.type = "text";
//   btnPasswordEl.textContent = "Скрити";
// }

//TODO:====================04==========================
// Кнопка "Зменшити" робить квадрат меншим на 10 пікселів, кнопка "Збільшити" - робить більшим на 10 пікселів.
// const boxEl = document.querySelector(".box");
// const boxDecreaseBtnEl = document.querySelector(".js-decrease");
// const boxIncreaseBtnEl = document.querySelector(".js-increase");
// boxDecreaseBtnEl.addEventListener("click", handleBoxChange);
// boxIncreaseBtnEl.addEventListener("click", handleBoxChange);

// function handleBoxChange(event) {
//   const { offsetWidth } = boxEl;

//   console.log(offsetWidth);
//   const idBtn = event.target.id;
//   console.log(idBtn);

//   if (idBtn === "decrease") {
//     boxEl.style.width = `${offsetWidth - 10}px`;
//     boxEl.style.height = `${offsetWidth - 10}px`;
//     return;
//   }
//   boxEl.style.width = `${offsetWidth + 10}px`;
//   boxEl.style.height = `${offsetWidth + 10}px`;
// }

//TODO:====================05==========================
// Навісьте слухач за кліком на глобальний об'єкт window і визначте, коли клік відбувається всередині елемента з класом "place", виведіть в консоль повідомлення "Ви клікнули в цільовий елемент". Коли клік припадає поза зоною елемента, виведіть повідомлення "Це не цільовий елемент". Використайте метод contains.
// https://developer.mozilla.org/en-US/docs/Web/API/Node/contains

// window.addEventListener('click', onClick);
// const place = document.querySelector('.place');

// function onClick(e) {
//     if (place.contains(e.target)) {
//         alert('Це є цільовий елемент')
//     } else { alert('Це не є цільовий елемент')}

// }

//TODO:====================06==========================
// По кліку на кнопку "Подвоїти" збільшити значення у кожному елементі списку в 2 рази

// const itemsEl = document.querySelectorAll('.js-list-item');
// const doubleBtnEl = document.querySelector('.js-double-btn');

// doubleBtnEl.addEventListener('click', () => {
//     itemsEl.forEach((el) => {
//         const value = Number(el.textContent);
//         el.textContent = value * 2;
//         console.log(value);
//     })
    
// })



//TODO:====================07==========================
// При кліку на коло воно має слідувати за курсором. При повторному кліку воно стає в початкове положення.

// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
// https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY

//TODO:====================08==========================
// При кліці на кожну з кнопок підсумовуються значення з data-атрибутів. Після натискання на кнопку "Вивести результат" виводиться сума значення, а також статистика з інформацією про те, яка кнопка була натиснута скільки разів.

//TODO:====================09==========================
// Видаліть зі списку ті елементи, які позначені у чекбоксу.

//TODO:====================10==========================
// Дано список людей. Зроби можливість сортування списку за іменем і за прізвищем.

//TODO:====================11==========================
// Даний список людей. Зроби фільтр за ім'ям/прізвищем.

//TODO:====================12==========================
// Клік по кнопці замінює символ з першого поля введення на символ із другого поля введення в усьому тексті. Якщо одне з полів порожнє, викликай alert із проханням заповнити їх.

//TODO:====================12==========================
// Коло має зникати під час наведення на нього.При цьому позиція сусідніх кіл повинна залишатися незмінною.
