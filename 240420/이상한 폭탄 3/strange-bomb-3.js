const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const [n,k]= input[0].split(" ").map(Number);
const bs = input.slice(1,1+n).map(Number);

const b = Array.from(new Set(bs));

let max_cnt= 0;
let max_b = 0;

for(let i =0; i<b.length; i++){
    const cur_b = b[i];
    const distances = [];
    for(let j = 0; j<n; j++){
        if(bs[j]==cur_b)distances.push(j);
    }
let cnt =0;
for(let t =0; t<distances.length;t++){
    if(distances[t+1]-distances[t]<=k||distances[t]-distances[t-1]<=k)cnt++
}

if(max_cnt==cnt){
    max_b = Math.max(max_b,cur_b);
}else if(max_cnt<cnt){
    max_cnt = cnt;
    max_b = cur_b
}


}

console.log(max_b)