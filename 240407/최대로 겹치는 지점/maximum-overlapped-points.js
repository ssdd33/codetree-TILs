const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");
const n = +input[0];
const l = input.slice(1,n+1).map(v=>v.split(" ").map(v=>+v));
let arr = Array(100).fill(0);

for(let i = 0; i<l.length;i++){
    for(let s = l[i][0];s<=l[i][1];s++){
        arr[s]++;
    }
}

arr = arr.sort((a,b)=>b-a);
console.log(arr[0])