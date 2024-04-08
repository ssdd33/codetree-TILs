const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n").map(v=>+v);
const nums = input.slice(1,1+input[0]);

let maxCnt = 0;
let cnt=0;

for(let i=0; i<nums.length; i++){

    
    if(i==0||nums[i]<=nums[i-1]){
        if(cnt>maxCnt){
            maxCnt = cnt;
        }
        cnt=1
    }else{
        cnt++
    }
    if(i==nums.length-1&&cnt>maxCnt){
        maxCnt=cnt
    }
}

console.log(maxCnt)