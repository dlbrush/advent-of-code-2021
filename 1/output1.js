const input = require('./input');

const depths = input.split('\n').map(n => parseInt(n));

let count = 0;

for (let i = 1; i < depths.length; i++) {
  if ((depths[i] - depths[i - 1]) > 0) {
    count++;
  }
}

console.log('length:', depths.length);
console.log('increases:', count);