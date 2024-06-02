// console.log("before error :>> ");
// const a = 4 + b;
// console.log("after error :>> ");

// console.log("before error :>> ");

// try {
//   console.log("before error in try :>> ");
//   const a = 4 + b; // catch(new Error())
//   console.log("after error in try :>> ");
// } catch (err) {
//   console.error("err :>> ", err);
//   document.write("<p>Sorry, service is unavailable</p>");
// }

// console.log("after error :>> ");

// throw new Error("ReferenceError: b is not defined");

// function f(n) {
//   if (typeof n !== Number) {
//     throw new Error("n must be a number");
//   }

//   return n * n;
// }

// try {
//   console.log("f(6)", f(6));
// } catch (err) {
//   console.log("err", err);
// }

// console.log("after try :>> ");

// 0 <= n <= maxSafeInteger, number, integer,
// function fact(n) {
//   if (typeof n !== "number") {
//     throw new TypeError("n must be number");
//   }
//   if (!Number.isInteger(n) || n < 0 || n > Number.MAX_SAFE_INTEGER) {
//     throw new RangeError("n must be nonnegative integer value");
//   }

//   function factorial(m) {
//     if (m === 0) {
//       return 1;
//     }

//     return n * factorial(m - 1);
//   }

//   return factorial(n);
// }

// try {
//   const f = fact(1);
// } catch (e) {
//   console.log("e :>> ", e);
// }

function validateName(name) {
  name = name.trim();

  if (typeof name !== "string") {
    throw new TypeError("name must be string");
  }
  if (name.length < 4 || name.length > 32) {
    throw new RangeError("name must be 4-32 lenght");
  }

  return name;
}

try {
  console.log(validateName("  User  "));
} catch (error) {
  if (error instanceof RangeError) {
    console.log("RangeError");
  } else if (error instanceof TypeError) {
    console.log("TypeError");
  } else {
    console.log("Error");
  }
  console.log("error :>> ", error);
}

// function validateAge(age) {
//   if (typeof age !== "number") {
//     throw new TypeError("Age must be a number");
//   } else if (!Number.isInteger(age)) {
//     throw new TypeError("Age must be an integer");
//   } else if (age < 0) {
//     throw new RangeError("Age must be a positive number");
//   } else if (age > 150) {
//     throw new RangeError("Age must be less than 150");
//   }
//   return age;
// }

// try {
//   console.log(validateAge(10));
// } catch (error) {
//   console.log("error :>> ", error);
// }
