const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
const gr =input.slice(1,1+n).map(v=>v.split(" ")).map(v=>[v[0]=='A'?0:1,+v[1]]);

let scores = [0,0];
let d = 2;
let cnt =0;
for(let i=0; i<n ;i++){
const [c,s] = gr[i];
scores[c]+=s;
const n_d = scores[0]>scores[1]?0:scores[1]>scores[0]?1:2;
if(d!=n_d){
    cnt++;
    d=n_d;
}
}

console.log(cnt)