const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.split(" ").map(Number));
const [n,m]=input[0];
const hs = input[1]


let cnt = 0;
let idx=0;
while(idx<n){

if(hs[idx]==1)cnt++
idx+=m*2+1
}

console.log(cnt)