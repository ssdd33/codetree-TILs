const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.split(" ").map(Number));

const [n,l]=input[0];
const nums = input[1];

let max_h = 0;

for(let i=0; i<n; i++){
    const num = nums[i];
    const arr =[...nums];
    let cnt = l;
    for(let j=0; j<n;j++){
        if(cnt==0)break;
        if(nums[j]<num){
arr[j]++;
cnt--;
        }
    }

    const h_cnt = arr.filter(v=>v>=num).length;

    if(h_cnt>=num){
        max_h = Math.max(max_h,num)
    }

}

console.log(max_h)