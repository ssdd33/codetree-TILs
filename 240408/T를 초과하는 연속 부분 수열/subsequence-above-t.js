const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n").map(v=>v.trim().split(" ").map(v=>+v));
const [n,t]=input[0]
const nums = input[1]

let maxCnt = 0;
let cnt=0;

for(let i=0; i<nums.length; i++){
 
    if(nums[i]<=t){
        if(cnt>maxCnt){
            maxCnt = cnt;
        }
        cnt=0
    }else{
        cnt++
    }
    if(i==nums.length-1&&cnt>maxCnt){
        maxCnt=cnt
    }
}

console.log(maxCnt)