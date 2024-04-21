const fs =require('fs');
const [[a,b],[c,d]]=fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.split(" ").map(Number));

if(b<c||d<a){
    console.log(b-a+d-c)
}else{
    if(b>d){
        console.log(b-c);
    }else{
        console.log(d-a)
    }
}