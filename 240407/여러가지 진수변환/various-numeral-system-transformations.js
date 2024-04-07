const fs = require('fs');
let [n,b] = fs.readFileSync('/dev/stdin').toString().trim().split(" ").map(v=>+v);

let arr = [];

while(true){
    if(n<b){
        arr.unshift(n);
        break;
    }
    arr.unshift(n%b);
    n = Math.floor(n/b);
}

console.log(arr.join(""))