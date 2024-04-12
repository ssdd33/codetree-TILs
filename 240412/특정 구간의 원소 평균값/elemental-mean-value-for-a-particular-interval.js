const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
const nums = input[1].split(" ").map(v=>+v);
let cnt = n;
for(let i=0; i<n-1; i++){
    for(let j=i+1; j<n;j++){
        const section = nums.slice(i,j+1);
        const avg = section.reduce((a,c)=>a+c)/(j-i+1);
        if(section.indexOf(avg)!=-1){
            cnt++;
        }
    }
}

console.log(cnt)