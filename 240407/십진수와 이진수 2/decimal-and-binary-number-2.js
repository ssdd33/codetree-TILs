const fs = require('fs');
let binary = fs.readFileSync('/dev/stdin').toString().trim().split("").map(v=>+v);

let num=0;
for(let i=0; i<binary.length; i++){
    num = num*2+binary[i];
}

num = num*17;
let arr = [];
while(true){
    if(num<2){
        arr.unshift(num);
        break;
    }
    arr.unshift(num%2);
num = Math.floor(num/2);
}

console.log(arr.join(""))