const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");
const n = +input[0];
const nums = input[1].split(" ").map(v=>+v).sort((a,b)=>a-b);

function solution(num,i){
    let num2 = nums[i];
    for(let c = num2; c<=num*num2; c++){
        if(c%num==0&&c%num2==0){
            if(i!=n-1){
                solution(c,i+1)
            }else{
                console.log(c);
            }
            break;
        }
    }
}

solution(nums[0],1)