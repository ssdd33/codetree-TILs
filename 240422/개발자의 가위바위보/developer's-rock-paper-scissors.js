const fs =require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
const comb = input.slice(1,n+1).map(v=>v.split(" ").map(Number));

const c1 =[0,2,3,1]
const c2 = [0,3,1,2];

let c1_cnt =0;
let c2_cnt =0;

for(let i=0; i<n; i++){
    const [a,b]=comb[i];

    if(c1[a]==b){
        c1_cnt++;
    }
    if(c2[a]==b){
        c2_cnt++
    }
}

console.log(Math.max(c1_cnt,c2_cnt))