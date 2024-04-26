const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
const nums = input[1].trim().split(" ").map(Number);

for(let i =1;i<n;i++){
    let j =i-1;
    let key = nums[i];
    while(j>=0&&nums[j]>key){
        nums[j+1] = nums[j];
        j--;
    }
    nums[j+1] = key;

}

console.log(nums.join(" "))