const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.split(" ").map(v=>+v));
const [n,k,p,t]=input[0]
const hs = input.slice(1,1+t).sort((a,b)=>a[0]-b[0]);

let devs = Array(n+1).fill(0);
let k_cnt = Array(n+1).fill(0);

devs[p]=1;
k_cnt[p]=k;

function influence(pos_i,encounter_i){
    
        if(devs[encounter_i]!=1){
            devs[encounter_i]=1;
            k_cnt[encounter_i]=k;
        }
        k_cnt[pos_i]--;
    
}
for(let i=0; i<hs.length;i++){
const [sec,x,y]=hs[i];
const isXCanInfl = k_cnt[x]>0;
const isYCanInfl= k_cnt[y]>0;

if(isXCanInfl) influence(x,y);
if(isYCanInfl) influence(y,x);
}


console.log(devs.slice(1).join(""))