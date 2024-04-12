const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.split(" "));
const [n,k] = input[0].map(v=>+v);
let line = input.slice(1,1+n).map(v=>[+v[0],v[1]]);
line = line.sort((a,b)=>b[0]-a[0]);
let arr = Array(line[0]+1).fill(0);

let max = Number.MIN_SAFE_INTEGER;

for(let i=0; i<line.length; i++){
    arr[line[i][0]] = line[i][1]=='G'?1:2;
}


for( let i =1; i<arr.length-k+1; i++){
    
max = Math.max(max, arr.slice(i,i+k+1).reduce((a,c)=>a+c));
}

console.log(max)