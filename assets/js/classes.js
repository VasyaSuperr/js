// function User1(name, surname, age, isMale, email, isSubscribed) {
//   this.firstName = name;
//   this.lastName = surname;
//   this.age = age;
//   this.isMale = isMale;
//   this.email = email;
//   this.isSubscribed = isSubscribed;
// }

// // в прототипі - для екземплярів
// User1.prototype.getFullName = function () {
//   return this.firstName + " " + this.lastName;
// };

// // статичний метод - для функції конструктора
// User1.isUser = function (obj) {
//   return obj instanceof User1;
// };

// const user1 = new User1(
//   "jack",
//   "wilsher",
//   23,
//   true,
//   "test@SpeechGrammarList.com",
//   true
// );

// //
// class User {
//   constructor(name, surname, age, isMale, email, isSubscribed) {
//     this._name = name;
//     this._surname = surname;
//     this.age = age;
//     this._isMale = isMale;
//     this._email = email;
//     this._isSubscribed = isSubscribed;
//   }
//   getFullName() {
//     return `${this.name} ${this.surname}`;
//   }
//   //   get fullName() {
//   //     return `${this.name} ${this.surname}`;
//   //   }
//   set age(value) {
//     if (typeof value !== "number") {
//       throw new TypeError("age must be number");
//     }
//     if (!Number.isInteger(value) || value < 0 || value > 150) {
//       throw RangeError("age must be nonnegative integer 0-150");
//     }
//     this._age = value;
//   }
//   get age() {
//     return this._age;
//   }

//   static isUser(obj) {
//     return obj instanceof User;
//   }
// }

// try {
//   // екземпляр
//   const user2 = new User(
//     "jack",
//     "wilsher",
//     23,
//     true,
//     "test@SpeechGrammarList.com",
//     true
//   );
//   console.log(user2.getFullName());
//   console.log(User.isUser(user2));
//   console.log("user2.age :>> ", user2.age);
//   user2.age = 23;
// } catch (error) {
//   console.log("Error :>> ", error);
// }

// class Phone {
//   constructor(brand, model, color, price, year) {
//     this._brand = brand;
//     this._model = model;
//     this.color = color;
//     this._price = price;
//     this._year = year;
//   }

//   get age() {
//     return new Date().getFullYear() - this._year;
//   }

//   render() {
//     document.write(`
//     <article>
//         <h3>${this._brand}</h3>
//         <p>${this._model} ${this._color} ${this._price} ${this._price}</p>
//     </article>

//     `);
//   }

//   set color(value) {
//     let valColor = ["white", "red", "black", "yellow", "green", "blue", "grey"];
//     if (valColor.includes(value)) {
//       this._color = value;
//     } else {
//       throw new RangeError("Input other color");
//     }
//   }
//   get color() {
//     return this._color;
//   }
// }

// try {
//   const myPhone = new Phone("Apple", "Iphone 12 Pro Max", "black", 20000, 2004);
//   console.log(myPhone.age);
//   myPhone.render();
//   myPhone.color = "blue";
//   console.log(myPhone.color);
// } catch (error) {
//   console.error(error);
// }

// Об'єктно-орієнтоване програмування ------------------------------------------

// Принципи ООП:
// інкапсуляція - приховання логіки (особливостей реалізації)
// спадкування  - перевикористання структури та логіки (альт. назва - спеціалізація, is a)
// поліморфізм  - можливість через однаковий інтерфейс працювати з різними типами (в js поліморфізм підтипів)

class User {
  constructor(name, surname, age, isMale, email) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.isMale = isMale;
    this.email = email;
    this.isBanned = false;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user1 = new User("Test", "Testovych", 25, false, "test@test.com");

// дочірній / спадкоємець

class Moderator extends User {
  constructor(name, surname, age, isMale, email, permission) {
    super(name, surname, age, isMale, email); // виклик конструктора базового класу
    this.permission = permission;
  }

  sendMessage(user, message) {
    return `Moderator ${this.getFullName()} send message "${message}" to user ${user.getFullName()}`;
  }
}

const moderator1 = new Moderator(
  "Mod",
  "Modovych",
  25,
  false,
  "test@test.com",
  { canRead: true, canWrit: true }
);

document.write(moderator1.sendMessage(user1, "Your message is beautiful"));

class Admin extends Moderator {
  constructor(name, surname, age, isMale, email, permission, category) {
    super(name, surname, age, isMale, email, permission);
    this.category = category;
  }

  bann(user) {
    user.isBanned = true;
  }

  unban(user) {
    user.isBanned = false;
  }

  // перевизначення
  sendMessage(user, message) {
    return `Administrator  ${this.getFullName()} send message "${message}" to user ${user.getFullName()}`;
  }
}

const admin1 = new Admin(
  "Admin",
  "Adminovych",
  30,
  false,
  "admin@admin.com",
  { canRead: true, canWrit: true },
  1
);

admin1.bann(user1);
console.log(user1.isBanned);
admin1.unban(user1);
console.log(user1.isBanned);
document.write(admin1.sendMessage(user1, "Your message is beautiful"));
