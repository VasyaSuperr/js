// const newsTitle1 = "Lorem ipsum dolor sit amet";
// const newsBody1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
// const newsDate1 = new Date(2024, 4, 18);

// // Objects
// const obj1 = new Object();
// const obj2 = Object();
// const obj3 = {}; // Синтаксичний цукор

// // Ім'я властивості - string, symbol
// const news = {
//   // prop:value,
//   newsTitle: "Lorem ipsum dolor sit amet",
//   newsBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   newDate: new Date(2024, 4, 18),
// };

// console.log("News :>> ", news);
// // alert(news);

// // Читання R
// console.log(news.newsTitle); // операція звернення до властивості

// // Зміна U
// news.newDate = new Date("2024-05-19");
// console.log(news);

// // Додавання C
// news.author = "Test Testovych";
// console.log(news);

// // Видалення D
// delete news.newDate;
// console.log(news);

// const car = {
//   brand: "Dodge",
//   model: "Charger",
//   year: 1970,
//   color: "black",
//   owner: {
//     firstName: "Test",
//     lastName: "Testovych",
//   },
// };

// console.log(car);
// car.model = "Challenger";
// car.author = "Carl Cameron";
// delete car.year;
// console.log(car);
// document.write(`<h2>${car.brand}, ${car.model}</h2>`);
// document.write(`<p>${car.owner.firstName} ${car.owner.lastName}</p>`);

// const carCopy1 = Object.assign({}, car);
// console.log("carCopy1 === car", carCopy1 === car);
// console.log("carCopy1", carCopy1);

// const carCopy2 = { ...car };
// console.log("carCopy2 === car", carCopy2 === car);

// // Копіювання об'єктів (некоректне)

// // Змінні значення
// const a = 1;
// let b = a;
// console.log("b :>> ", b);

// console.log(a === b);
// b = 100;
// console.log(a, b);

// // Змінні посилання
// let newsCopy = news;
// console.log("newsCopy :>> ", newsCopy);

// newsCopy.author = "new Test";

// console.log("newsCopy :>> ", newsCopy);
// console.log("news :>> ", news);

// // Копіювання об'єктів (коректне)
// const correctNewsCopy1 = Object.assign({}, news);
// console.log("correctNewsCopy1 === news", correctNewsCopy1 === news);

// const correctNewsCopy2 = { ...news };
// console.log("correctNewsCopy2 === news", correctNewsCopy2 === news);

// Методи

// function getFullName() {
//   return `${this.firstName} ${this.lastName}`;
// }

const user = {
  firstName: "Test",
  lastName: "Testovych",
  passw: "qwerty",
  age: 23,
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  changePassw(newPassw) {
    this.passw = newPassw;
  },
};

console.log(user.getFullName());
user.changePassw(prompt("Inpun new password"));
console.log("user :>> ", user);

document.write(`<h2>${user.getFullName()}</h2>`);

// // Маленька вставка
// function f() {
//   console.log("this", this);
//   //this.alert = 10;
//   this.alert("sdfasdasd");
// }

// f();
