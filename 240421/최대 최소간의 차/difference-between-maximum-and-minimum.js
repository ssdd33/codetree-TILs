const fs =require('fs')
const input = fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.split(" ").map(Number));
const [n,k]=input[0];
const nums = input[1];

nums.sort((a,b)=>a-b);

let min = Number.MAX_SAFE_INTEGER;

const min_n = nums[0]>0?nums[0]:1

for(let i=min_n;i<=nums[n-1];i++){
let cost =0;
for(let j=0; j<n; j++){
    if(nums[j]<i){
cost += i- nums[j];
    }
    if(nums[j]>i+k){
        cost+=nums[j]-i-k
    }
}

 min = Math.min( min,cost)
}



console.log(min)