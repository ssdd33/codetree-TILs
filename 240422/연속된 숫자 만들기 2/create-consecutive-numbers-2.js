const fs =require('fs');
const [a,b,c] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

if(b-a<=2||c-b<=2){
    console.log(Math.floor(Math.min(b-a,c-b)/2));
}else{
    console.log(2)
}