const fs = require('fs');
const moves = fs.readFileSync("/dev/stdin").toString().trim();
let n = moves.length;
let[x,y,dir,idx]=Array(4).fill(0);

const dx = [-1,0,1,0];
const dy= [0,1,0,-1];

while(true){
 if(idx>0&&x==0&&y==0){
    console.log(idx);
    break;
 }
 if(idx==n){
    console.log(-1)
    break;
 }
    const move = moves[idx];
    if(move=='F'){
        x+=dx[dir];
        y+=dy[dir];
    }
    if(move=='R'){
dir = (dir+1)%4;
    }
    if(move=='L'){
        dir = (dir+3)%4;
    }
    idx++;
}