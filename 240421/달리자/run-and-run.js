const fs =require('fs');
const input= fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
const [a,b] = input.slice(1,3).map(v=>v.split(" ").map(Number));


let cnt =0; 

for(let i=0; i<n-1;i++){
const moved = a[i]-b[i];
cnt+=moved;
a[i+1]+=moved;
}

console.log(cnt)