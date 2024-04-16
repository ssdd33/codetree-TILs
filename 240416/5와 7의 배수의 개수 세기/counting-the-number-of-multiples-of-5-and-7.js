const fs= require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n =+input[0];
const nums = input[1].split(" ").map(v=>+v);

let ans1 =0;
let ans2 = 0;

for(let i=0; i<n; i++){
    const num = nums[i];
    if(num%5==0)ans1++;
    if(num%7==0)ans2++;
}

console.log(ans1);
console.log(ans2)