#!/usr/bin/node
function fact (n) {
  if (n === 0 || isNaN(n)) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}
console.log(fact(Number(process.argv[2])));
