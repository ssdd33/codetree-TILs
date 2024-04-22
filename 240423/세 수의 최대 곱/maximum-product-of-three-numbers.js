const fs = require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
const nums = input[1].split(" ").map(Number);
nums.sort((a,b)=>a-b);

/*
- p3
- n2 * p1
*/


console.log(Math.max(nums[0]*nums[1]*nums[n-1], nums[n-1]*nums[n-2]*nums[n-3]))