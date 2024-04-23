const fs =require('fs');
const nums = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

nums.sort((a,b)=>a-b);

const [a,b,c] = nums.slice(0,3);

console.log(`${a} ${b} ${c} ${nums[14]-a-b-c}`)