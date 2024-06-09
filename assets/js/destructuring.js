// const user = { firstName: "Test", lastName: "Testovych" };

// function renderUser(user) {
//   document.write(`
//       <article>
//           <h2>${user.firstName} ${user.lastName} </h2>
//       </article>
//       `);
// }

// function renderUser(user) {
//   //   const firstName = user.firstName;
//   //   const lastName = user.lastName;
//   const { firstName, lastName } = user;

//   document.write(`
//     <article>
//         <h2>${firstName} ${lastName} </h2>
//     </article>
//     `);
// }

// Tипові значення
// function renderUser({ firstName: name = "Anon", lastName = "Anonimous" }) {
//   document.write(`
//       <article>
//           <h2>${name} ${lastName} </h2>
//       </article>
//       `);
// }

// renderUser(user);

// // Оголосити змінні, використовуючи деструктуризацію
// const book = { author: "Astred Lindgren", title: "Karlson" };
// function renderBook({ author: founder = "Unknown", title = "Secret" }) {
//   document.write(`
//       <article>
//           <h2>${founder} - ${title} </h2>
//       </article>
//       `);
// }

// renderBook(book);

// Вкладені об'єкти
const book = {
  author: {
    firstName: "Test",
    lastName: "Testovych",
  },
  title: "Karlson",
};

function renderBook({ author: { firstName, lastName }, title }) {
  document.write(`
          <article>
              <h2>${firstName} ${lastName} - ${title}</h2>
          </article>
          `);
}

renderBook(book);

const {
  author: { firstName, lastName },
  title,
} = book;

console.log("firstName :>> ", firstName);
console.log("lastName :>> ", lastName);
console.log("title :>> ", title);

// Array
const arr = [1, 2, 3];

const [, , thirdEl] = arr;
console.log("thirdEl :>> ", thirdEl);

//
const user1 = {
  name: "Test",
  age: 23,
  emails: ["test1@test.com", "test2@test.com"],
  isMale: true,
};

// Task: name -> userName, age -> userAg, email1, email2, isMale
const {
  name: userName,
  age: userAg,
  emails: [emai1, email2],
  isMale,
} = user1;

console.log(userName);
console.log(userAg);
console.log(emai1);
console.log(email2);
console.log(isMale);

const { name, ...restParam } = user1;
console.log("name :>> ", name);
console.log("restParam :>> ", restParam);
