const input = require('./input');

const depths = input.split('\n').map(n => parseInt(n));

let count = 0;
let groups = 0;

for (let i = 3; i < depths.length; i++) {
  groups++;
  const group1Sum = depths[i - 1] + depths[i - 2] + depths[i - 3];
  const group2Sum = depths[i] + depths[i - 1] + depths[i - 2];
  if ((group2Sum - group1Sum) > 0) {
    count++;
  }
}

console.log('length:', depths.length);
console.log('numGroups:', groups);
console.log('increases:', count);