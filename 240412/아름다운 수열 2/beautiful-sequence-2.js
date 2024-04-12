const fs =require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.trim().split(" ").map(v=>+v));
const [n,m]=input[0];
const seqA = input[1];
const seqB =input[2];

let cnt =0;

const strB = seqB.sort((a,b)=>a-b).join("");


function isThatSeq(seq){
    const str = seq.sort((a,b)=>a-b).join("")
    
    return str==strB;
}

for( let i =0; i<n-m+1;i++){
    if(isThatSeq(seqA.slice(i,i+m))){
        cnt++;
    }
}

console.log(cnt)