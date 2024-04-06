const fs = require('fs');
const [n,ns]=fs.readFileSync('/dev/stdin').toString().split("\n");
const nums = ns.split(" ").map(v=>+v);

let minDif = nums[1]-nums.shift();

for(let i=0; i<n-2;i++){
    const dif = nums[i+1]-nums[i];
if(dif<minDif){
    minDif = dif;
}
}

console.log(minDif)