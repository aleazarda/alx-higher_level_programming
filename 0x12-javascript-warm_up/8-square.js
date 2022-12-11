#!/usr/bin/node
const times = process.argv[2];
if (isNaN(times)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < times; i++) {
    let row = '';
    for (let j = 0; j < times; j++) {
      row += 'X';
    }
    console.log(row);
  }
}
