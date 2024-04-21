const fs =require('fs');
const input=fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.split(" ").map(Number));

const [x1,y1,x2,y2] = input[0]
const [a1,b1,a2,b2]=input[1];


if(x2>a1||a2>x1||y1>b2||b1>y2){
    console.log("nonoverlapping")
}else{
    console.log("overlapping")
}