// alert("Hello world");

// let, const,
// var - застарілий
// debugger;
// let age = 18;
// alert(age);
// age = 19;
// alert(age);

const count = 10;
// count = 11;
// alert(count);

const PI = 3.14;

Number.MAX_SAFE_INTEGER;
// alert(Number.MAX_SAFE_INTEGER);
Number.MAX_VALUE;
// alert(Number.MIN_SAFE_INTEGER);

let nameUser = "Vasyl";
let email = "vasia@gmail.com";
let ageUser = 20;
let gender = "male";

// console.log("Name:", nameUser, "\nEmail:", email);

// let totalPrise = 2 * 500 + 3 * 200;
// console.log("Total price:", totalPrise, "hrn");

// let amount1 = 2;
// let price1 = 500;
// let amount2 = 3;
// let price2 = 200;

// let totalPrise = amount1 * price1 + amount2 * price2;

// console.log("Total price:", totalPrise, "hrn");

// let amount1 = 1;
// let price1 = 600;
// let discount1 = 0.1;

// let amount2 = 1;
// let price2 = 800;
// let discount2 = 0.15;

// let totalPrise =
//   amount1 * price1 - price1 * discount1 + amount2 * price2 - price2 * discount2;
// console.log("Total price:", totalPrise, "hrn");

// const firstName = prompt("Input name: ", "Anonimus");
// const lastName = prompt("Input surname: ", "Noname");

// //alert(firstName + " " + lastName);

// document.write("<h2>" + firstName + " " + lastName + "</h2>");

// const firstNumber = Number(prompt("Input first number: ", "1"));
// const secondNumber = +prompt("Input second Number: ", "2");

// const sum = firstNumber + secondNumber;

// document.write("<h2>" + sum + "</h2>");

const countGoods = Number(prompt("Input quantity goods: ", "10"));
const cost = 200;
document.write("<h2>" + countGoods * cost + "</h2>");
