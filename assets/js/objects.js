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

// const user = {
//   firstName: "Test",
//   lastName: "Testovych",
//   passw: "qwerty",
//   age: 23,
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   changePassw(newPassw) {
//     this.passw = newPassw;
//   },
// };

// console.log(user.getFullName());
// user.changePassw(prompt("Inpun new password"));
// console.log("user :>> ", user);

// document.write(`<h2>${user.getFullName()}</h2>`);

// const car = {
//   brand: "Dodge",
//   model: "Charger",
//   year: 1970,
//   color: "black",
//   owner: {
//     firstName: "Test",
//     lastName: "Testovych",
//   },
//   changeColor(newColor) {
//     this.color = newColor;
//   },
//   getAge() {
//     return new Date().getFullYear() - this.year;
//   },
// };

// car.changeColor(prompt("Inpun new color: ", "yellow"));
// console.log("car year :>> ", car.getAge());
// console.log("car :>> ", car);
// console.dir(car);
// console.dir(car.getAge);
// console.dir(new Date());

// Перебір об'єктів,
// for (const key in car) {
//   console.log("key :>> ", key, car[key]);
// }

// car[key] - синтаксис обчислювальних властивостей

// const propName = "color";
// console.log("Color: ", car[propName]);

// Ввести дані для кішки з імені властивості і значення для них
// const cat1 = {};

// for (let i = 0; i < 3; i++) {
//   let key = prompt("Enter the key");
//   let value = prompt("Enter the value");
//   cat1[key] = value;
// }

// Функція конструктор
function User(name, surname, userAge, userEmail, isMail) {
  //   const this = {};
  this.firstName = name;
  this.lastName = surname;
  this.age = userAge;
  this.email = userEmail;
  this.isMail = isMail;
  //   this.changeEmail = function (newEmail) {
  //     this.email = newEmail;
  //   };
  //   return this;
}

User.prototype.changeEmail = function (newEmail) {
  this.email = newEmail;
};

const user1 = new User("Test", "Testovych", 23, "mail@mail.com", true);
const user2 = new User("Wally", "Robort", 2, "wally@robot.mail", true);

user1.changeEmail("newmail@com");

console.log("user1 :>> ", user1);
console.log("user2 :>> ", user2);

// function Car(brand, model, year, color, owner) {
//   this.brand = brand;
//   this.model = model;
//   this.year = year;
//   this.color = color;
//   this.owner = owner;
// }
// const car = new Car("Dodge", "Changer", 1970, "black", "Dominic");
// car.model = "Challenger";
// console.log(car);
