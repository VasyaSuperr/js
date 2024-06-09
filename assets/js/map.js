"use strict";

const map1 = new Map();

// map1.name = 'Test';
map1.set("name", "Test");
map1.set("surname", "Testovych");

map1.set("age", 20).set("email", "qwerty@com");

// console.log("map1 :>> ", map1);

// Створення
const map2 = new Map([
  ["age", 30],
  ["isMale", true],
]);

// console.log("map2 :>> ", map2);

// console.log(map1.get("age"));
// console.log(map1.size);

// Видалення
map2.delete("isMale");
// console.log("map2 :>> ", map2);

// Чи існує значення з певним ключем
// console.log(map1.has("age"));
// console.log(map1.has("age1"));

// forEach()
function printMap(currentValue, key, map) {
  //   console.log(`map1[${key}] = ${currentValue}`);
}

map1.forEach(printMap);
map1.set("age", 21);

const phoneBook = new Map([
  ["+380505111768", "Test"],
  ["+380981234567", "Vasya"],
]);
// console.log(phoneBook.has("+380981234567"));

// for...of
for (const prop of phoneBook) {
  //   console.log("prop :>> ", prop);
}

// Symbol.iterator - деструктуризація, spread, Array.from{}, for...of
// Масив ключів, значень, ентрізів
// console.log(...phoneBook.keys());
// console.log(...phoneBook.values());
// console.log(...phoneBook.entries());

// Copy
const phoneBookCopy = phoneBook; // не можна
// const phoneBookCopy1 = new Map([phoneBook]);
const phoneBookCopy1 = new Map([...phoneBook.entries()]);

// Example: перекладач. Словник міститься в мапі
const vocabulary = new Map();
vocabulary.set("dog", "собака");
vocabulary.set("cat", "кіт");
vocabulary.set("run", "бігти");

const engPhrase = "dog run white cat";

// function translatePhrase(engPhrase) {
//   // отримати масив слів
//   const engWords = engPhrase.split(" ");
//   console.log("engWords :>> ", engWords);

//   // перекласти кожне слово якщо воно існує в словнику
//   const ukrWords = engWords.map((w) => {
//     if (vocabulary.has(w)) {
//       return vocabulary.get(w);
//     }
//     return w;
//   });

//   console.log("ukrWords :>> ", ukrWords);

//   // перетворити масив укр слів на рядок
//   const ukrPhrase = ukrWords.join(" ");
//   return ukrPhrase;
// }

function translatePhrase(engPhrase) {
  return engPhrase
    .split(" ")
    .map((w) => (vocabulary.has(w) ? vocabulary.get(w) : w))
    .join(" ");
}

const ukrPhrase = translatePhrase(engPhrase);
// console.log(ukrPhrase);

// Об'єкти як ключі
const user = {
  firstNmae: "Test",
  lastName: "Testovych",
};

const usersMessages = new Map();
usersMessages.set(user, [
  { id: 1, body: "blablabla1" },
  { id: 2, body: "blablabla2" },
]);

console.log(usersMessages.get(user));

// practice
const usersWithMessages2 = [
  { id: 1, name: "Test1", message: "hello", date: new Date() },
  { id: 1, name: "Test1", message: "how are you", date: new Date() },
  { id: 2, name: "Test2", message: "hi)", date: new Date() },
  { id: 2, name: "Test2", message: "fine)", date: new Date() },
];

// Отримати масив унікальних користувачів
const users = [];

usersWithMessages2.forEach((um) => {
  if (!users.find((u) => u.id === um.id)) {
    users.push({ id: um.id, nmae: um.name });
  }
});

console.log("users :>> ", users);

// usersWithMessages2 => [
//     {message: "hello", date: new Date()},
//     {message: "how are you", date: new Date()}
// ]

// const newArray = usersWithMessages2.map((m) => ({
//   message: m.message,
//   date: m.date,
// }));

const uToM = new Map();

users.forEach((u) => {
  uToM.set(
    u,
    usersWithMessages2
      .filter((uwm) => uwm.id === u.id)
      .map((uwm) => ({ message: uwm.message, date: uwm.date }))
  );
});
console.log(uToM);
