const fs =require('fs');
const [a,b,c] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

if(b-a==2||c-b==2){
    console.log(1);
}else{
    console.log(2)
}