const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
const nums = input[1].trim().split(" ").map(Number);



for(let i=1; i<nums[0];i++){
    let remainNum = Array(n+1).fill(true);
remainNum[0]=false;
    let arr = [i];
    remainNum[i]=false;
    for(let j=0; j<nums.length; j++){
        const dif = nums[j]-arr[arr.length-1];
        if(!remainNum[dif])break;
        arr.push(dif);
        remainNum[dif]=false;
    }
    
    if(arr.length==n){
        console.log(arr.join(" "));
        break;
    }
}