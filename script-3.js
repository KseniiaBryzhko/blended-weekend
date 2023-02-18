// Напишіть функцію чи явдяється строка паліндромом
// function palindrome(str) {
//   const arr = str.split('')
//   const array =[]
//   const array2 =[]
//   arr.filter(el => {
//     if(el.match(/[a-zA-Z0-9]/)) {
// array.push(el)
//     }
//   })
// console.log(array)
//   for(let i = array.length-1; i >= 0 ; i -= 1) {
// array2.push(array[i])
//   }
// console.log(array2)
// console.log(array.join(''))
// console.log(array2.join(''))

// return array.join('').toLowerCase() === array2.join('').toLowerCase() ? true : false

// }

// palindrome("one eno")
function chekIfPalindrom() {
  const userStr = prompt("Введіть сроку для перевірки на паліндромність");
  if (userStr && userStr.trim() !== "") {
    const userStrNorm = userStr.toLowerCase().split(" ").join("");
    console.log(userStrNorm);
    if (userStrNorm === userStrNorm.split("").reverse().join("")) {
      alert("Ваша строка паліндром");
    } else {
      alert("Ваша строка не є паліндромом");
    }
  } else {
    alert("Ви нічого не ввели");
  }
}
chekIfPalindrom();

function chekIfPalindrom2() {
  const userStr = prompt("Введіть сроку для перевірки на паліндромність");
  return userStr.toLowerCase() ===
    userStr.toLowerCase().split("").reverse().join("")
    ? alert("Так, рядок паліндром")
    : alert("Ні, рядок не паліндром");
}

const isPalindrom = (str) => {
  const str1 = str.toLowerCase().split(" ").join("");
  console.log(str1);
  const str2 = str
    .toLowerCase()
    .split(" ")
    .join("")
    .split("")
    .reverse()
    .join("");
  console.log(str2);
  console.log(str1 === str2);
};

console.log(isPalindrom("Аргентина манит негра"));
