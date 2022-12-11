#!/usr/bin/node
const times = process.argv[2];
if (times === undefined) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < times; i++) {
    console.log('C is fun');
  }
}
