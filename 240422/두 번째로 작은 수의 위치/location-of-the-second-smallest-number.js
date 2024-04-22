const fs =require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const n =+input[0];
const nums = input[1].split(" ").map(Number);

const sorted = [...Array.from(new Set(nums))];
sorted.sort((a,b)=>a-b);


const idx = nums.indexOf(sorted[1]);
const l_idx = nums.lastIndexOf(sorted[1]);

console.log(idx<0||idx!=l_idx?-1:idx+1)