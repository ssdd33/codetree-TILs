const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n= +input[0];
const s = input.slice(1,n+1).map(v=>v.split(" ").map(v=>+v));

let cnts =[];
let max =0;
for(let i=1; i<=3; i++){
    let cups = Array(3).fill(0);
    cups[i]=1;
    let cnt =0;
    for(let j=0;j<n;j++){
        const [a,b,c]=s[j];
        const a_r = cups[a];
        const b_r = cups[b];
        cups[a]=b_r;
        cups[b]=a_r;
        if(cups[c]==1){cnt++}
    }
    
    max =Math.max(max,cnt);
}

console.log(max)