const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.split(" ").map(v=>+v));
const [n,k]=input[0];
const nums = input[1];

let max = Number.MIN_SAFE_INTEGER;

for(let i =0; i<n-k+1;i++){


        max = Math.max(max,nums.slice(i,i+k).reduce((a,c)=>a+c))
    
}

console.log(max)