const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
const segs =input.slice(1,1+n).map(v=>v.split(" ").map(Number));

let common = segs[0];
let cnt =0;
let possible = true;
for(let i=1; i<n; i++){
    const [x1,x2]=common;
    const [x3,x4]=segs[i];
    if(x2<x3||x4<x1){
        if(cnt<1){
            cnt++
            continue;
        }else{
possible=false;
break;
        }
    }else{
        common = [Math.max(x1,x3),Math.min(x2,x4)]
    }
}

if(possible){
    console.log("Yes")
}else{
    console.log("No")
}