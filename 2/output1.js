const input = require('./input');

const instrux = input.split('\n');

let horizontal = 0;
let depth = 0;
let other = 0;

for (let command of instrux) {
  const [dir, num] = command.split(' ');
  switch (dir.toLowerCase()) {
    case 'forward':
      horizontal += +num;
      break;
    case 'down':
      depth += +num;
      break;
    case 'up':
      depth -= +num;
      break;
    default:
      other++;
      break;
  }
}

console.log('horizontal:', horizontal);
console.log('depth:', depth);
console.log('other?:', other);
console.log('solution:', horizontal * depth);
