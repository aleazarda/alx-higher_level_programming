#!/usr/bin/node
const numC = Number(process.argv[2]);
console.log(isNaN(numC) ? 'Not a number' : 'My number: ' + ~~numC);
