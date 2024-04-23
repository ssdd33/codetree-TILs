const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);
const n=input[0];
const nums = input.slice(1,1+n);

const avg = nums.reduce((a,c)=>a+c)/n;

console.log(nums.reduce((a,c)=>{
if(c>avg){
    return a+c-avg;
}
return a
},0))