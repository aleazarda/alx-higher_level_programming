#!/usr/bin/node

const myArgs = process.argv.slice(2);

function sortArrayBackwards (a, b) {
  return (b - a);
} if (process.argv.length < 4) {
  console.log(0);
} else {
  myArgs.sort(sortArrayBackwards);
  console.log(myArgs[1]);
}
