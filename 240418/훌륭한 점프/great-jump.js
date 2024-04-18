const fs =require('fs');
const input= fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.split(" ").map(Number));
const [n,k]=input[0];
const nums = input[1];

function isPossibleMin(x){
    let possibleIndecies =[];
    
    for(let i=0; i<n;i++){
        if(i==0||i==n-1){
            possibleIndecies.push(i);
        }else if(nums[i]<=x){
          possibleIndecies.push(i)
        }
    }

    for(let i =0; i<possibleIndecies.length-1;i++){
        if(possibleIndecies[i+1]-possibleIndecies[i]>k){
            return false;
        }
    }
    return true;
}

for(let i= Math.max(nums[0],nums[n-1]);i<=Math.max(...nums);i++){
   
    if(isPossibleMin(i)){
        console.log(i);
        break;
    }
}