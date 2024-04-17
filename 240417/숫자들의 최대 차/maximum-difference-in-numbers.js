const fs =require('fs');
const input= fs.readFileSync("/dev/stdin").toString().split("\n");
const [n,k]=input[0].split(" ").map(Number);
const nums = input.slice(1,1+n).map(Number);

nums.sort((a,b)=>a-b);

let max =0;

for(let i=0 ;i<n-1;i++){
for(let j =i+1;j<n;j++){
   const part = nums.slice(i,j+1);
   const min_n = Math.min(...part);
   const max_n =Math.max(...part);
  
    if(max_n-min_n<=k){
        
        max = Math.max(max,j-i+1);
        if(max==n)break;
    }

}
if(max==n)break;
}

console.log(max)