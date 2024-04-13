const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n")
const n = +input[0];
const p = input.slice(1,n+1).map(v=>v.split(" ").map(v=>+v));

let min = Number.MAX_SAFE_INTEGER;

for(let i=0; i<n-1;i++){
    for(let j=i+1;j<n; j++){
        const [x1,y1]=p[i];
        const [x2,y2]=p[j];

        min = Math.min(min,Math.pow(x1-x2,2)+Math.pow(y1-y2,2))
    }
}
console.log(min)