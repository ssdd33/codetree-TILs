const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
let s = input.slice(1,1+n).map(v=>v.split(" ").map(v=>+v));
s=s.sort((a,b)=>a[0]-b[0]);

let isOverlap = Array(n).fill(0);

for(let i=0; i<n-1; i++){
    for(let j=i+1; j<n; j++){
        const e1 = s[i][1];
        const e2 = s[j][1];
if(e2<e1){
    isOverlap[i]=1;
    isOverlap[j]=1;
}
if(isOverlap.reduce((a,c)=>a+c)==n)break;
    }
    if(isOverlap.reduce((a,c)=>a+c)==n)break;
}

console.log(n-isOverlap.reduce((a,c)=>a+c))