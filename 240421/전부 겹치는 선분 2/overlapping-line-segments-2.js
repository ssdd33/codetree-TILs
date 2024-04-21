const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
const segs =input.slice(1,1+n).map(v=>v.split(" ").map(Number));

    let possible = true;
for(let j =0; j<n;j++){
 possible = true;
    let common = segs[j==0?1:0];

    for(let i=0; i<n; i++){
        if(i==j)continue;
    const [x1,x2]=common;
    const [x3,x4]=segs[i];
    if(x2<x3||x4<x1){
       
possible=false;
break;
        
    }else{
        common = [Math.max(x1,x3),Math.min(x2,x4)]
    }
}
if(possible){
    break;
}

}

if(possible){
    console.log("Yes")
}else{
    console.log("No")
}