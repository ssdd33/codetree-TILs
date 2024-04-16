const fs = require('fs');
const [x,y] = fs.readFileSync("/dev/stdin").toString().split(" ").map(v=>+v);

let cnt =0;

for(let n=x; n<=y;n++){
    const nums = Array.from(String(n),Number);
    const nset = new Set(nums);
    const nsetArr = Array.from(nset)
    if(nsetArr.length==2){
 const len = nums.filter(v=>v==nsetArr[0]).length
 if(len==1||len==nums.length-1){
    cnt++;
 }
    }
   
    
}

console.log(cnt)