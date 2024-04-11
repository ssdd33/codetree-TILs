const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
const moves = input.slice(1,n+1).map(v=>v.split(" ")).map(v=>[v[0],+v[1]]);

let [x,y,cnt,idx,timer,dir] =[0,0,0,0,0,0];
const dx =[0,0,1,-1];
const dy=[1,-1,0,0];
const d= {'E':0,'W':1,'S':2,'N':3};

while(idx<n||timer>=0){
if(idx>0&&x==0&&y==0){
console.log(cnt)
    break;
} 
if(idx==n&&timer==0)break;

if(timer==0){
const move = moves[idx];
dir = d[move[0]];
timer = move[1];
idx++;
}
x+= dx[dir];
y+= dy[dir];
cnt++;
timer--;

}

if(x!=0||y!=0){

console.log(-1);
}