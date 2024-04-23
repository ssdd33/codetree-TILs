const fs =require('fs');
const [[x1,y1,x2,y2],[a1,b1,a2,b2]] =fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.split(" ").map(Number));


console.log((Math.max(x2,a2)-Math.min(x1,a1))*(Math.max(y2,b2)-Math.min(y1,b1)))