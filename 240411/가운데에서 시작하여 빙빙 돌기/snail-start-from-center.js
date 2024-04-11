const fs =require('fs');
const n = +fs.readFileSync("/dev/stdin").toString().trim();

let answer = Array(n).fill(Array(n).fill(0));

const dx=[0,-1,0,1];
const dy=[-1,0,1,0];

let num = n*n;
let x= n-1;
let y=n-1;
let d=0;

function inRange(x,y){
    return x>=0&&x<n&&y>=0&&y<n;
}

while(num>0){
answer[x]=[...answer[x]];
answer[x][y]=num;

let nx = x+dx[d];
let ny= y+dy[d];
if(!inRange(nx,ny)||answer[nx][ny]!=0){
    d = (d+1)%4;
    nx = x+dx[d];
    ny=y+dy[d];
}
x=nx;
y=ny;
num--;
}

answer.forEach(r=>console.log(r.join(" ")));