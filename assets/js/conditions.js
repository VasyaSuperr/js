// if - умовний оператор, розгалуження

// if (condition) {
//     гілка true
// } else {
//     гілка false
// }

// const isOnline = false;

// debugger;
// if (isOnline) {
//   document.write(`<p>User is online</p>`);
// } else {
//   document.write(`<p>User is offline</p>`);
// }

// const isEnoughMoney = true;

// if (isEnoughMoney) {
//   document.write(`<p>Операцію схвалено</p>`);
// } else {
//   document.write(`<p>Операцію відхилено</p>`);
// }

// const isOnline = true;
// let color = null;
// let status = null;

// if (isOnline) {
//   color = "green";
//   status = "online";
// } else {
//   color = "red";
//   status = "offline";
// }

// console.log(color);

// if (isOnline) {
//   document.write(`<p>User is <span style="color:${color}">online</span></p>`);
// } else {
//   document.write(
//     `<p>User is <span style="color:${color}">offline</span></p></p>`
//   );
//   console.log("new code");
// }

// document.write(`<p>User is <span style="color:${color};">${status}</span></p>`);

// const isOnline = false;

// // Умовна (тернарна) операція
// const color = isOnline ? "green" : "red";
// // console.log("color :>> ", color);

// const status = isOnline ? "online" : "offline";
// // console.log("Status :>> ", status);

// // Єдине джерело істини, DRY - dont repeat yourself
// document.write(`<p>User is <span style="color:${color};">${status}</span></p>`);

//
// const age = 16;

// // > < >= <=

// if (age >= 18) {
//   document.write("<p>У вас повний доступ</p>");
// } else {
//   document.write("<p>У вас обмежений доступ</p>");
// }

// const RIGHT_NUMBER = 2;

// const guessNumber = +prompt("Вкажіть число: ", "5");

//  ==, ===
//  == - приведе до одного типу, ПОГАНО
//  === - порівнює так як є, ДОБРЕ

// if (RIGHT_NUMBER == guessNumber) {
//   document.write("<p>Ви вгадали число</p>");
// } else {
//   document.write("<p>Ви не вгадали число</p>");
// }

// != - нестрога нерівність ПОГАНО
// !== - ДОБРЕ строга нерівність

// const isRightNumber = RIGHT_NUMBER === guessNumber;
// document.write(`<p>Ви ${isRightNumber ? "" : "не "}вгадали число</p>`);

// Ввести 2 числа і знак операції.
// Якщо введено "+", то порахувати і вивести суму цих чисел,
// інакше вивести їхню різницю

// const firstNumber = +prompt("Вкажіть число: ", "5");
// const secondNumber = +prompt("Вкажіть число: ", "3");
// const sign = prompt("Вкажіть знак: ", "+");

// if (sign === "+") {
//   console.log(firstNumber + secondNumber);
// } else if (sign === "*") {
//   console.log(firstNumber * secondNumber);
// } else if (sign === "-") {
//   console.log(firstNumber - secondNumber);
// } else {
//   console.log("Невірний знак операції");
// }

// if (умова) {
//     гілка true
// }

// const age = 16;

// if (age <= 18) {
//   alert("У вас обмежений доступ для послуг порталу");
// }

// document.write(`<p>Вітаємо на порталі</p>`);

// const age1 = +prompt("Input age", "0");

// if (Number.isInteger(age1)) {
//   console.log("Correct");
// } else {
//   console.log("Incorect. Input again");
// }

// if (Number.isInteger(age1) === false) {
//   console.log("Incorect. Input again");
// }

// Логічні (булеві) операції

// console.group("Таблиця істинності &&:");

// console.log("true && true :>> ", true && true); // => true, якщо всі true
// console.log("false && false :>> ", false && false);
// console.log("true && false :>> ", true && false);
// console.log("false && true :>> ", false && true);

// console.groupEnd();

// console.group("Таблиця істинності :");

// console.log("true  true :>> ", true || true);
// console.log("false  false :>> ", false || false); // => false, якщо всі false
// console.log("true  false :>> ", true || false);
// console.log("false  true :>> ", false || true);

// console.groupEnd();

// const isMale = true;
// const isMarried = true;

// const name = "Test";

// if (isMale) {
//   document.write(`<p>Hello Mr. ${name}</p>`);
// } else if (!isMale && isMarried) {
//   document.write(`<p>Hello Mrs. ${name}</p>`);
// } else {
//   document.write(`<p>Hello Ms. ${name}</p>`);
// }

// let appeal = "";

// if (isMale) {
//   appeal = "Mr";
// } else if (isMarried) {
//   appeal = "Mrs";
// } else {
//   appeal = "Ms";
// }

// document.write(`<p>Hello ${appeal} ${name}</p>`);

// const price = 800;
// const age = 66;
// let discount = null;

// if (age < 18 || age >= 65) {
//   discount = price * 0.25;
// }

// document.write(`<p>${price - discount}</p>`);

// const day = "friday";
// const date = 13;

// if (day === "friday" || date === 13) {
//   document.write("<p>Вітаємо, у Вас знижка 10%</p>");
// }

// NaN === NaN => false
// Number.isNaN()

// Перевірка

let value = 0;

// if (value !== undefined && value !== null) {
//   console.log("Correct");
// }

// false, null, undefined, '', NaN, 0/-0 - falsy - значення
if (value) {
  console.log("Correct");
}

const port = 0;

const PORT = port || 5500; // false, null, undefined, '', NaN, 0/-0
const PORT1 = port ?? 5500; // null, undefined - (nullish)

console.log("PORT :>> ", PORT);
console.log("PORT1 :>> ", PORT1);
