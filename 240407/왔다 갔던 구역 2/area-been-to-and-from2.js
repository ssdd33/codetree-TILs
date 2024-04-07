const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");
const n = +input[0];
const order = input.slice(1,n+1).map(v=>v.split(" ")).map(v=>[+v[0],v[1]]);

let arr = Array(200).fill(0);
let p = 100;

for(let i=0; i<order.length;i++){
    const d = order[i][0]
    const si = order[i][1]=='R'?p:p-d;
    const se = order[i][1]=='R'?p+d:p;
    for(let s = si; s<se; s++){
arr[s]++

    }
    p = order[i][1]=='R'?se:si;
    }

    
    
    console.log(arr.filter(v=>v>=2).length)