const fs =require('fs');
const [a,b,c] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
const l = b-a;
const r =c-b;

console.log(Math.max(l,r)-1)