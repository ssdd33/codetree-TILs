const fs =require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const n= +input[0];
const nums = input[1].split(" ").map(v=>+v);

let maxSum = Number.MIN_SAFE_INTEGER;

for(let i=0;i<n-2;i++){
    for(let j=i+2;j<n; j++){
maxSum = Math.max(maxSum,nums[i]+nums[j])
    }
}

console.log(maxSum)