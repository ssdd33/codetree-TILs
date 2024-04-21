const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.split(" ").map(Number));

const [n,l]=input[0];
const nums = input[1];

for(let i=101; i>0; i--){
    const num = i

    const arr =[...nums];
    let cnt = l;

    for(let j=0; j<n;j++){
        if(cnt==0)break;
        if(nums[j]+1==num){
arr[j]++;
cnt--;
        }
    }

    const h_cnt = arr.filter(v=>v>=num).length;

    if(h_cnt>=num){
console.log(num)
break;
    }

}