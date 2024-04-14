const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.split(" ").map(v=>+v));
const [k,n]=input[0];
const comps =input.slice(1,1+n);

let cnt =0;

for(let i=0; i<n-1;i++){
    for(let j=i+1;j<n;j++){
        const d1 = comps[0][i];
        const d2 = comps[0][j];
let isThatComb = true;
    for(let c=1;c<k;c++){
const comp = comps[c];
if(comp.indexOf(d1)>comp.indexOf(d2)){
    isThatComb = false;
    break;
}

    }
    if(isThatComb)cnt++
    }
}

console.log(cnt)