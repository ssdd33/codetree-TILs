const fs =require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const n =+input[0];
const nums = input[1].split(" ").map(Number);

const sorted = [...Array.from(new Set(nums))];
sorted.sort((a,b)=>a-b);

console.log(nums.indexOf(sorted[1])+1)