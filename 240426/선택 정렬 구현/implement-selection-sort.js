const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
const nums = input[1].trim().split(" ").map(Number);


for(let i=0; i<n-1; i++){
    let min=i;
    for(let j=i+1;j<n;j++){
        if(nums[min]>nums[j]){
            min =j
        }
    }

    const tmp = nums[i];
    nums[i] =nums[min];
    nums[min] =tmp;
}

console.log(nums.join(" "))