const fs = require('fs');
let [n,b] = fs.readFileSync('/dev/stdin').toString().trim().split(" ").map(v=>+v);

let arr = [];

while(true){
    if(n<b){
        arr.unshift(n);
        break;
    }
    arr.unshift(n%4);
    n = Math.floor(n/4);
}

console.log(arr.join(""))