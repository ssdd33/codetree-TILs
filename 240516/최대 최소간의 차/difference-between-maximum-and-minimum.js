const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(v=>v.trim().split(" ").map(Number));
const [n,k]=input[0];
const nums = input[1];

const min = Math.min(...nums);
const max = Math.max(...nums) ;

let ans = Number.MAX_SAFE_INTEGER;

for(let i = min; i<=max-2;i++){
    let cnt =0;
    for(let j=0;j<n;j++){
        if(nums[j]<i){
            cnt+=Math.abs(nums[j]-i)
        }else if(nums[j]-i>k){
            cnt+=Math.abs(nums[j]-i-k)
        }
    }
    ans = Math.min(ans,cnt)
}

console.log(ans);