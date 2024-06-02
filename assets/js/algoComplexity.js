// операцій
// дані

// 100, 1000, 2000

// O(n) = 2000
// o(n) = 100
// tetta(n) = 1000

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function searchElement(arr, el) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      return i;
    }
  }
  return -1;
}

console.log(searchElement(arr, 5));

// O(n) = arr.length
// o(n) = 1

// Таблиця множення
const n = 10;

for (let i = 1; i < n; i++) {
  for (let j = 1; j < n; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// O(n) = n * n = n^2
// o(n) =
