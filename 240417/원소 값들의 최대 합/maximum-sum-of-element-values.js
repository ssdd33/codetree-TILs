const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.split(" ").map(Number));

const [n,m]=input[0];
const nums =input[1];

let max =0;

for(let i=0; i<n;i++){
    let sum=0;
    let p =i;
    for(let c=0;c<m; c++){
sum+=nums[p];
p=nums[p]-1;
    }
    max = Math.max(max,sum)
}

console.log(max)