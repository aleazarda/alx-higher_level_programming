#!/usr/bin/node
//'use strict';
let arg = process.arg[2];
if (arg === undefined) {
  console.log('No argument');
} else {
  console.log(arg);
}
