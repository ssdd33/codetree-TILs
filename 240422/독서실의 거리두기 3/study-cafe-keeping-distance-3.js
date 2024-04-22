const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
const s = input[1].trim().split("").map(Number);

const e =Array(n).fill(0);
let cnt=0;
for(let i=0;i<n;i++){
    if(s[i]==0){
        cnt++;
    }else if(i!=0){
        e[i]=cnt+1;
cnt=0;
    }
}

console.log(Math.min(Math.min(...e.filter(v=>v>0)), Math.floor(Math.max(...e)/2)))