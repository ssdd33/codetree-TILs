const fs =require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);
const n = input[0]
const hs = input.slice(1,1+n);
hs.sort((a,b)=>a-b);
const lowest = hs[0];
const highest = hs[n-1];
const dif = highest-lowest;

if(dif<=17){console.log(0)}else{
const rest_dif = dif-17;
    const half = Math.floor(rest_dif/2);
    
    console.log(Math.pow(half,2)+Math.pow(rest_dif-half,2))
}