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

// const circleRef = document.querySelector('.outer-circle');
// const onMouseMove = (event) => {
//     console.log('move');
//     let leftTurn = event.pageX;
//     let topTurn = event.pageY;

//     circleRef.style.top = `${topTurn - 15}px`;
//     circleRef.style.left = `${leftTurn -15}px`;

// }
// circleRef.addEventListener('click' , (event) => {
//     const item = event.currentTarget;

//     if (item.style.position === 'absolute') {
//         window.removeEventListener('mousemove', onMouseMove);

//         item.style.position = 'static';
//         return;
//     }

//     item.style.position = 'absolute';

//     window.addEventListener('mousemove', onMouseMove);
// })

//TODO:====================08==========================
// При кліці на кожну з кнопок підсумовуються значення з data-атрибутів. Після натискання на кнопку "Вивести результат" виводиться сума значення, а також статистика з інформацією про те, яка кнопка була натиснута скільки разів.

// const listRef = document.querySelector('.stat-list');
// const resButtonRef = document.querySelector('.js-result-button');
// const resSectionRef = document.querySelector('.js-result-section');

// let total = 0;
// const stat = {};

// const onButtonClick = (event) => {
//     if (event.target.nodeName !== 'BUTTON') {
//         return;
//     }
//     const valueRes = Number(event.target.dataset.number);
//     const buttonName = event.target.textContent;
//     console.log(stat);

//     if (!stat[buttonName]) {
//         stat[buttonName] = 1; // 0 це false;
//             console.log(stat);

//     } else {
//         stat[buttonName] += 1;
//             console.log(stat);

//     }

//     total += valueRes;
//     // console.log(event.target);

// }

// const onResButtonClick = () => {
//     const totalRes = `<p>Total: ${total}</p>`

//     const markup = Object.entries(stat).map((el) => {
//         // console.log(Object.entries(stat));
//         return `<li>${el[0]} була натиснута ${el[1]} разів</li>`;

//     }).join('');

//     resSectionRef.insertAdjacentHTML('afterbegin', totalRes + `<ul>${markup}</ul>`);
// }

// resButtonRef.addEventListener('click', onResButtonClick);

// listRef.addEventListener('click', onButtonClick);

//TODO:====================09==========================
//! Видаліть зі списку ті елементи, які позначені у чекбоксу.

/*
const formEl = document.querySelector(".js-checkbox-form");
const listEl = document.querySelector(".js-checkbox-list");

formEl.addEventListener("submit", (e) => {
  const checkboxes = listEl.querySelectorAll('input[type="checkbox"]');

  for (let i = 0; i < checkboxes.length; i += 1) {
    if (checkboxes[i].checked) {
      e.preventDefault();
      checkboxes[i].closest(".js-checkbox-wrapper").remove();
    }
  }
});
*/

// ще можливий розв'язок
// const checkFormEl = document.querySelector(".js-checkbox-form");
// const checkEl = document.querySelectorAll(
//   ".js-checkbox-wrapper > input[type='checkbox']"
// );

// checkFormEl.addEventListener("submit", (event) =>
//   checkEl.forEach((elem) => {
//     event.preventDefault();
//     if (elem.checked) {
//       elem.closest(".js-checkbox-wrapper").remove();
//     }
//   })
// );
//TODO:====================10==========================
// Дано список людей. Зроби можливість сортування списку за іменем і за прізвищем.
/*
const peopleList = document.querySelector(".js-people");
const sortByNameBtn = document.querySelector(".js-sort-by-name-btn");
const sortByLastNameBtn = document.querySelector(".js-sort-by-last-name-btn");

function sortPeopleList(sortField) {
  const peopleArray = [...peopleList.children];

  peopleArray.sort((a, b) => {
    const [aName, aLastName] = a.textContent.split(" ");
    const [bName, bLastName] = b.textContent.split(" ");
    return sortField === "firstName"
      ? aName.localeCompare(bName)
      : aLastName.localeCompare(bLastName);
  });
  peopleList.innerHTML = "";
  peopleArray.forEach((person) => peopleList.appendChild(person));
}

sortByNameBtn.addEventListener("click", () => sortPeopleList("firstName"));
sortByLastNameBtn.addEventListener("click", () => sortPeopleList("lastName"));
*/

//TODO:====================11==========================
// Даний список людей. Зроби фільтр за ім'ям/прізвищем.
// const listEl = document.querySelector(".js-contacts");
// const inputEl = document.querySelector(".js-contacts-filter");

// const nameArr = [...listEl.children].map((el) => el.textContent);

// inputEl.addEventListener("input", handleFilter);

// function handleFilter(event) {
//   const filter = event.target.value.toLowerCase();

//   const nameArrFilter = nameArr.filter((el) =>
//     el.toLowerCase().includes(filter)
//   );

//   listEl.innerHTML = "";
//   listEl.innerHTML = nameArrFilter
//     .map((el) => `<li class="contact">${el}</li>`)
//     .join("");
// }
//TODO:====================12==========================
// Клік по кнопці замінює символ з першого поля введення на символ із другого поля введення в усьому тексті. Якщо одне з полів порожнє, викликай alert із проханням заповнити їх.

//TODO:====================12==========================
// Коло має зникати під час наведення на нього.При цьому позиція сусідніх кіл повинна залишатися незмінною.
