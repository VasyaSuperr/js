// let currentPage = 10;
// const PAGE = 20;

// while (currentPage <= PAGE) {
//   console.log("Current page: ", currentPage++);
// }

// let currentPage = 10;
// const END_PAGE = 20;

// while (currentPage <= END_PAGE) {
//   console.log("Current page: ", currentPage);
//   currentPage += 2;
// }

// let currentPage = +prompt("Input start page: ", "10");
// const END_PAGE = +prompt("Input end page: ", "20");

// while (currentPage <= END_PAGE) {
//   if (currentPage % 2 === 0) {
//     console.log("Current page: ", currentPage);
//   }
//   ++currentPage;
// }

// let someNumber = +prompt("Input some number: ", "10");

// while (!Number.isFinite(someNumber)) {
//   someNumber = +prompt("Input some number: ", "10");
// }

// console.log(`${someNumber}**2 = ${someNumber ** 2}`);

// let inputNumber = null;

// do {
//   inputNumber = +prompt("Input some number: ", "10");
// } while (!Number.isFinite(inputNumber));

// console.log(`${inputNumber}**2 = ${inputNumber ** 2}`);

// let startPage = 50;
// const endPage = 40;

// do {
//   console.log("Current page: ", startPage--);
// } while (startPage >= endPage);

const RIGHT_PASSWORD = "vasya";
const TRY_LIMIT = 3;
let currentTry = 1;
let isPasswordCorrect = false;

do {
  isPasswordCorrect = prompt("Input password: ", "vasya") === RIGHT_PASSWORD;
} while (++currentTry <= TRY_LIMIT && !isPasswordCorrect);

// if (!isPasswordCorrect) {
//   console.log("Password is wrong !");
// } else {
//   console.log("Password is correct !");
// }

console.log(`Password is ${isPasswordCorrect ? "correct" : "wrong"} ! `);
