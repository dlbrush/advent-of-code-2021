const input = require('./input');

const instrux = input.split('\n');

let horizontal = 0;
let depth = 0;
let aim = 0;

for (let command of instrux) {
  const [dir, num] = command.split(' ');
  switch (dir.toLowerCase()) {
    case 'forward':
      horizontal += +num;
      depth += +num * aim;
      break;
    case 'down':
      aim += +num;
      break;
    case 'up':
      aim -= +num;
      break;
    default:
      break;
  }
}

console.log('aim:', aim);
console.log('horizontal:', horizontal);
console.log('depth:', depth);
console.log('solution:', horizontal * depth);
