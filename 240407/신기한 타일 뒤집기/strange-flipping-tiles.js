const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");
const n = +input[0];
const p = input.slice(1,1+n).map(v=>v.split(" ")).map(v=>[+v[0],v[1]]);

let arr = Array(100000).fill(2);
let cti = 50000;

for(let i = 0; i<p.length;i++){
    const direction = p[i][1];
    const distance = p[i][0];
    const code = direction=='L'?1:0;
    const si = direction=='L'?cti-distance+1:cti;
    const se = direction=='L'?cti:cti+distance-1;

    for(let t = si; t<=se;t++){
        arr[t]=code;
        
    }
    cti = direction=='L'?si:se;
}
const wt = arr.filter(v=>v==1);
const bt = arr.filter(v=>v==0);

console.log(`${wt.length} ${bt.length}`)