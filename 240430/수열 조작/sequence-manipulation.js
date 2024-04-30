const fs =require('fs');
const n = +fs.readFileSync("/dev/stdin").toString().trim();

const arr = [];
for(let i=1; i<=n;i++){
    arr.push(i);
}


let head =0;
while(head!=arr.length-1){
   
    arr.push(arr[head+1])
    head +=2;
}

console.log(arr[head])