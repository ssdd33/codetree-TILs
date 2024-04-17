const fs =require('fs');
const input =fs.readFileSync('/dev/stdin').toString().split('\n').map(v=>v.split(" ").map(Number));
const [n,m]=input[0];
const nums =input.slice(1,1+m);

let max =0;

for(let i=0; i<m;i++){
    let comb1 =nums[i];
    comb1.sort((a,b)=>a-b);
    
    let cnt=1;
    for(let j=0;j<m;j++){
if(i==j)continue;
const comb2 = nums[j];
comb2.sort((a,b)=>a-b);
let isSame =true;
for(let j=0;j<2;j++){
if(comb1[j]!=comb2[j]){
    isSame =false;
    break;
}

}
if(isSame){
    cnt++
}
    }
    max= Math.max(max,cnt)
}

console.log(max)