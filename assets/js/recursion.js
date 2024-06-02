function fact(n) {
  if (n === 0) {
    return 1;
  }

  return n * fact(n - 1);
}

const f = fact(5);
console.log(f);

function bracketSeq(n) {
  if (n === 0) {
    return ``;
  }
  return `(${bracketSeq(n - 1)})`;
}

const bracket = bracketSeq(4);
console.log(bracket);
