const fs = require('fs');
const [n,m] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(v=>+v);
let answer = Array(n).fill(Array(m).fill(0));
const dx=[1,0,-1,0];
const dy=[0,1,0,-1];
let num =1;
let [x,y,d]=[0,0,0];

function inRange(x,y){
return x>=0&&x<n&&y>=0&&y<m
}
while(true){
answer[x]=[...answer[x]];
answer[x][y]=num;
if(num==n*m)break;

let nx = x+dx[d];
let ny = y+dy[d];
if(!inRange(nx,ny)||answer[nx][ny]!=0){
    d= (d+1)%4;
    nx=x+dx[d];
    ny=y+dy[d];
}
x=nx;
y=ny;
num++;
}

answer.forEach(r=>console.log(r.join(" ")));