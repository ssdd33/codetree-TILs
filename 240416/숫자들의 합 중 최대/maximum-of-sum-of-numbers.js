const fs =require('fs');
const [x,y] =fs.readFileSync("/dev/stdin").toString().split(" ").map(v=>+v);

let max = Number.MIN_SAFE_INTEGER;

for(let n =x; n<=y;n++){
    let nums = Array.from(String(n),Number);
let sum = nums.reduce((a,c)=>a+c);
max = Math.max(max,sum)
}

console.log(max)