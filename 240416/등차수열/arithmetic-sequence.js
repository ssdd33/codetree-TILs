const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n =+input[0];
const nums = input[1].trim().split(" ").map(v=>+v);
nums.sort((a,b)=>a-b);

const min_k = nums[0]+1;
const max_k = nums[n-1]-1;

let max =0;
for(let k=min_k;k<=max_k;k++){
    let cnt =0;
for(let i=0; i<n-1;i++){
    for(let j=i+1;j<n;j++){
        if(k-nums[i]==nums[j]-k){
            
            cnt++
            }
    }
}
max = Math.max(max,cnt)
}

console.log(max)