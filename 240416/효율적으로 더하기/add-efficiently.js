const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n =+input[0];
const nums = input[1].split(" ").map(v=>+v);

nums.sort((a,b)=>b-a);

let ans = 0;

for(let i=0; i<n; i++){
    let sum =0;
    for(let j=i;j<n;j++){
      sum+=nums[j];
    }
    ans+=sum;
}
console.log(ans)