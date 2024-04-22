const fs =require('fs');
const [a,b,x,y]=fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const c1 = Math.abs(b-a);
const c2 = Math.abs(x-a)+Math.abs(y-b)
const c3 = Math.abs(y-a)+Math.abs(x-b);

console.log(Math.min(c1,c2,c3))