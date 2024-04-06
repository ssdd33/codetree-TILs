const fs = require('fs');
const [n,ns]=fs.readFileSync('/dev/stdin').toString().split("\n");
const nums = ns.split(" ").map(v=>+v);

let c = 0;

for(let i=0; i<nums.length;i++){
if(nums[i]==2){
    c++;
    if(c==3){console.log(i+1);
    break;}
}
}