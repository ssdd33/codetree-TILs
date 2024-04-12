const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.split(" ").map(v=>+v));
const [n,k]=input[0];
let c = input.slice(1,1+n);
c= c.sort((a,b)=>b[1]-a[1]);
const arr_length = (2*k)+2>c[0][1]+1?(2*k)+2:c[0][1]+1;
let arr = Array(arr_length).fill(0);

let max = Number.MIN_SAFE_INTEGER;
for(let i =0; i<c.length;i++){
    
    arr[c[i][1]]+=c[i][0];
}

for(let i = k+1; i<arr_length-k;i++){
const section = arr.slice(i-k,i+k+1);
const sum =section.reduce((a,c)=>a+c)

max = Math.max(max,sum)

}

console.log(max)