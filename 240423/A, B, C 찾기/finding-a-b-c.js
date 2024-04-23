const fs =require('fs');
const nums = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

nums.sort((a,b)=>a-b)
console.log(`${nums[0]} ${nums[1]} ${nums[6]-(nums[0]+nums[1])}`)