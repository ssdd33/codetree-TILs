const fs=require("fs")
const input=fs.readFileSync("/dev/stdin").toString().split("\n")
const n=+input[0]
const nums=input[1].trim().split(" ").map(Number)
let sorted=true
do{
    sorted=true
for(let i=0;i<nums.length-1;i++){

    if(nums[i]>nums[1+i]){
        const tmp=nums[i]
        nums[i]=nums[1+i]
        nums[1+i]=tmp
        sorted=false
    }
}
}while(!sorted)

console.log(nums.join(" "))