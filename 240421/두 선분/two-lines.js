const fs =require('fs');
const [x1,x2,x3,x4]=fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

if(x2<x3||x4<x1){
    console.log("nonintersecting")
}else{
    console.log("intersecting")
}