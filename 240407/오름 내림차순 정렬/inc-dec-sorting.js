const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");
const n = +input[0];
const nums = input[1].split(" ").map(v=>+v).sort((a,b)=>a-b);

console.log(nums.join(" "));
console.log(nums.reverse().join(" "))