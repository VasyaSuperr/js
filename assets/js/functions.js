// ім'я - найчастіше дієслово
// одна функція - одна дія

// 1
// function sayHello() {
//   document.write(`<p>Hello User!</p>`);
// }

// sayHello();

// 2
// function sayHello(user, surname) {
//   document.write(`<p>Hello ${user} ${surname}!</p>`);
// }

// sayHello("Test", "Testovych");
// sayHello("Wally", "Robot");

// 3
// function sayHello(user, surname) {
//   const returnString = `Hello ${user} ${surname}!`;

//   return returnString;
// }
// const helloString = sayHello("Test", "Testovych");

// console.log("helloString", helloString);
// document.write(`<p>${helloString}</p>`);

// Test
// function sum(firstNumber, secondNumber) {
//   const sum = firstNumber + secondNumber;

//   return sum;
// }

// const sumNumber = sum(12, 15);
// console.log("suma = ", sumNumber);

// Test
// function sum(a, b) {
//   return a + b;
// }

// function inputSummand(summandNumber) {
//   let summand;

//   do {
//     summand = prompt(`Enter ${summandNumber} number`, 15);
//   } while (!Number.isFinite(+summand) || summand === "");

//   return Number(summand);
// }

// let firstSummand = inputSummand(1);
// let secondSummand = inputSummand(2);

// const sumNumber = sum(firstSummand, secondSummand);
// console.log("suma = ", sumNumber);

// Функція чи людина повнолітня, чи ні
// function isAdult(age) {
//   return age >= 18;
// }

// const age = 19;
// console.log(isAdult(age));

// Розмітка для 3 новин (заголовок, тіло, дата)
// Попередження, якщо новини переглядає неповнолітній
// Для сьогоднішніх новин (підсвітити червоним заголовок, New!)

// const age = 18;

// // Змінні для заголовка новини
// const newsTitle1 = "Lorem ipsum dolor sit amet";
// const newsTitle2 = "Consectetur adipiscing elit";
// const newsTitle3 = "Sed do eiusmod tempor";

// // Змінні для тіла новини
// const newsBody1 =
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
// const newsBody2 =
//   "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
// const newsBody3 =
//   "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

// // Змінні для дати новини
// const newsDate1 = new Date(2024, 4, 18); // May 18, 2024 (місяці починаються з 0)
// const newsDate2 = new Date(2024, 4, 17); // May 17, 2024
// const newsDate3 = new Date(2024, 4, 16); // May 16, 2024

// function news(newsTitle, newBody, newDate) {
//   const today = new Date();
//   let insert;

//   if (newDate.toLocaleDateString() === today.toLocaleDateString()) {
//     insert = "<span class='todayNews'>New!</span>";
//   }

//   return `
//    <article>
//      <h3>${newsTitle} ${insert}</h3>
//      <p>${newBody}</p>
//      <p>${newDate.toDateString()}</p>
//    </article>
//     `;
// }

// if (age < 18) {
//   alert("Контент може бути тяжким для сприйняття");
// }

// document.write(news(newsTitle1, newsBody1, newsDate1));
// document.write(news(newsTitle2, newsBody2, newsDate3));
// document.write(news(newsTitle3, newsBody2, newsDate3));

// Типові значення, значення за замовчуванням
// pow(4, 2); // 16
// pow(4, 3); // 64

// /**
//  * @function pow
//  * @param {number} a - Power base
//  * @param {number} [exp = 2] - Power exp
//  * @returns {number} Base a in power exp
//  */
// function pow(a, exp = 2) {
//   return a ** exp;
// }

// console.log(pow(4));
// console.log(pow(4, 3));

// console.log(pow(3));
// console.log(pow(3, 4));

// /**
//  * @function userCard
//  * @param {string} name - User name
//  * @param {string} [surname = "Anonim"] - User surname
//  * @returns {string} User card
//  */
// function userCard(name, surname = "Anonim") {
//   document.write(`
//    <article>
//      <h2>${name} ${surname}</h2>
//    </article>
//     `);
// }

// userCard("Vasya", "Super");
// userCard("Vasya");

// Function Declaration - можна використати до оголошення
// function fName(par1, par2) {
//   console.log("Test :>> ");
// }

// // Function Expression - не можна не використати до оголошення
// const fName1 = function (par1, par2) {
//   console.log("Test :>> ");
// };

// const userCard = function (name, surname = "Anonim") {
//   document.write(`
//    <article>
//      <h2>${name} ${surname}</h2>
//    </article>
//     `);
// };

// userCard("Vasya");

// Чисті функції
// 1) детерміновані - при одних і тих самих параметрах повертатимуть одне і те саме значення
// 2) без побічних ефектів - завантаження/localStorage

let b = 10;

function notDetern(a) {
  //   return a * Math.random();
  return a * b;
}

console.log(notDetern(100));
b = 200;
console.log(notDetern(100));
