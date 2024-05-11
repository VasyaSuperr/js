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

const isOnline = false;

// Умовна (тернарна) операція
const color = isOnline ? "green" : "red";
// console.log("color :>> ", color);

const status = isOnline ? "online" : "offline";
// console.log("Status :>> ", status);

// Єдине джерело істини, DRY - dont repeat yourself
document.write(`<p>User is <span style="color:${color};">${status}</span></p>`);
