const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const [n,t]=input[0].split(" ").map(v=>+v);
const moves = input[1].trim();
const map = input.slice(2,2+n).map(v=>v.split(" ").map(v=>+v));

const dx=[-1,0,1,0];
const dy=[0,1,0,-1];

let isNewBlock = true;
let x= Math.floor(n/2);
let y = Math.floor(n/2);
let [d,idx,sum]=[0,0,0];

function inRange(x,y){
    return x>=0&&x<n&&y>=0&&y<n;
}


while(true){
    
if(isNewBlock)sum +=map[x][y];

if(idx==moves.length) break;
const move = moves[idx];
if(move=='F'){
    let nx= x+dx[d];
    let ny = y+dy[d];
    if(inRange(nx,ny)){
        x= nx;
        y= ny;
        isNewBlock = true;
    }else{
        isNewBlock =false;
    }
}

if(move=='R'){
    d= (d+1)%4
    isNewBlock = false;
}
if(move=='L'){
    d= (d+3)%4
    isNewBlock = false;
}
idx++;
}

console.log(sum)