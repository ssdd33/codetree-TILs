const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split('\n').map(v=>v.split(" ").map(v=>+v));

const [n,h,t]=input[0];
const fields = input[1];

let min = Number.MAX_SAFE_INTEGER;

function getCost(seq){
    return seq.reduce((a,c)=>a+Math.abs(c-h),0);
}

for(let i =0; i<n-t+1;i++){
    min = Math.min(min,getCost(fields.slice(i,i+t)))
}


console.log(min)