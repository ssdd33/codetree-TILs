const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n =+input[0];
let nums = input[1].split(" ").map(Number);


const temp = [...nums];
temp.sort((a,b)=>a-b);
const to_be = temp.join("")
let cnt =0;

while(nums.join("")!=to_be){
    
const num =nums.shift();
for(let i=n-2; i>=2;i--){
 if(i==2){
    if(num>nums[i]){

    nums = [...nums,num]
    }else{
        nums =[...nums.slice(0,i),num,...nums.slice(i,n-1)]
    }
    cnt++
}else if(nums[i]>num&&nums[i-1]<num){
nums =[...nums.slice(0,i),num,...nums.slice(i,n-1)]
cnt++
}
}
}

console.log(cnt)