const fs =require('fs');
const nums = fs.readFileSync('/dev/stdin').toString().split("\n").map(v=>+v);

let maxCnt = 0;
let cnt=0;

for(let i=0;i<nums.length;i++){
    if(i===0||nums[i]!==nums[i-1]){
        if(cnt>maxCnt){
            maxCnt = cnt;
        }
        cnt=1;
    }else{
        cnt++;
    }
}

console.log(maxCnt)