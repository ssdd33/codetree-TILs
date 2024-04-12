const fs = require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.split(" ").map(v=>+v));
const [n,s]= input[0];
const nums = input[1];

let min_dif =Number.MAX_SAFE_INTEGER;

for(let i = 0; i< n; i++){
    for(let j=i+1; j<n; j++){
        min_dif = Math.min(min_dif,Math.abs(s-nums.filter((v,idx)=>idx!=i&&idx!=j).reduce((a,c)=>a+c)))
    }
}

console.log(min_dif)