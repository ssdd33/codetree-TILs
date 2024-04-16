const fs=require('fs');
const [x,y]=fs.readFileSync("/dev/stdin").toString().split(" ").map(v=>+v);

let cnt =0;
for(let n=x;n<=y;n++){
    const arr = Array.from(String(n),Number);
    const ei = Math.floor(arr.length/2);
let isThatNum= true;
    for(let i=0; i<ei;i++){
if(arr[i]!=arr[arr.length-1-i]){
    isThatNum =false;
    break;
}
    }
    if(isThatNum)cnt++
}

console.log(cnt)