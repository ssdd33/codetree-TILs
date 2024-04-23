const fs =require('fs');
const [[x1,y1,x2,y2],[a1,b1,a2,b2]]=fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.split(" "))
const d = Math.max(Math.max(x2,a2)-Math.min(x1,a1),Math.max(b2,y2)-Math.min(y1,b1))
console.log(Math.pow(d,2))