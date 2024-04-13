const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
const t = input.slice(1,1+n).map(v=>v.split(" ").map(v=>+v));

let max= Number.MIN_SAFE_INTEGER;

for(let i=0; i<n; i++){
    let wh = Array(1000).fill(0);
    for(let j=0;j<n; j++){
if(i==j)continue;
const [s,e]=t[j];
for(let k=s;k<e;k++){
    wh[k]=1;
}
    }

    max = Math.max(max,wh.reduce((a,c)=>a+c))
}

console.log(max)