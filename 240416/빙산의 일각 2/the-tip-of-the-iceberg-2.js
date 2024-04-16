const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>+v);
const n =input[0];
const p =input.slice(1,n+1);
const sorted = [...p];
sorted.sort((a,b)=>a-b);
const min_h = sorted[0];
const max_h = sorted[n-1];


let max = 0;

for(let h=min_h;h<max_h;h++){
    let cnt = 0;
    let isPeak =false;
    for(let i=0;i<n;i++){
        const p1 = p[i]-h>0
      if(!isPeak&&p1){
        cnt++;
      }
      isPeak=p1;
    }

    max = Math.max(max,cnt)
}

console.log(max)