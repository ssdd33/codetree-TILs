const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
const nums = input[1].split(" ").map(Number);

nums.sort((a,b)=>a-b);

let min = nums[n-1];

for(let i =0; i<n; i++){
    min = Math.min(min, nums[i+n]-nums[i])
}

console.log(min)