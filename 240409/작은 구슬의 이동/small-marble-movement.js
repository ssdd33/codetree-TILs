const fs = require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.split(" "));
let [n,t]=input[0].map(v=>+v);
let [r,c,d]=[+input[1][0],+input[1][1],input[1][2]]

const dx=[0,-1,0,1];
const dy=[-1,0,1,0];
const mapper = {'L':0,'U':1,'R':2,'D':3};
let cur_d = mapper[d]
function inRange(x,y){
    return x>0&&x<=n&&y>0&&y<=n;
}

for(t;t>0;t--){
const nx = r+dx[cur_d];
const ny = c+dy[cur_d];
if(!inRange(nx,ny)){
cur_d = (cur_d+2)%4
}else{
r=nx;
c=ny;
}
}
console.log(`${r} ${c}`)