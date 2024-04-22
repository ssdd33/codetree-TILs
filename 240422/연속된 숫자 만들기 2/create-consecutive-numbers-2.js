const fs =require('fs');
const [a,b,c] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
const l = b-a;
const r = c-b;

if(l==2||r==2){
    console.log(1);
}else if(l>2||r>2){
    console.log(2);
}else{
    console.log(0)
}