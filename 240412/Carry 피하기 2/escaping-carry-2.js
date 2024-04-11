const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>+v);
const n = input[0];
const nums = input.slice(1,n+1);

let maxSum = -1;

function isThatNum(x,y,z){
    const arrs = [x,y,z].map(n=>n.toString().split("").reverse().map(v=>+v)).sort((a,b)=>a.length-b.length);
const n = arrs[0].length;

for(let i=0; i<n; i++){
    let sum = 0;
    arrs.forEach((n)=>sum+=n[i]);
    if(sum>=10) return -1;
}
return x+y+z;
}

for(let i = 0; i<n-2; i++){
    for(let j=i+1; j<n-1; j++){
        for(let k= j+1; k<n; k++){
maxSum = Math.max(maxSum,isThatNum(nums[i],nums[j],nums[k]));
        }
    }
}


console.log(maxSum)