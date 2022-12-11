#!/usr/bin/node
function add (a, b) {
  const sum = a + b;
  return sum;
}
console.log(add(Number(process.argv[2]), Number(process.argv[3])));
