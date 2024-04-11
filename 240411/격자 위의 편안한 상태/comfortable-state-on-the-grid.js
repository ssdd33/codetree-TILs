const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.split(" ").map(v=>+v));
const[n,m]=input[0];
const paints = input.slice(1,1+m);
let field = Array(n).fill(Array(n).fill(0));
const dx =[0,0,1,-1];
const dy=[1,-1,0,0];
let [cnt,idx]=[0,0]

function inRange(x,y){
    return x>=0&&x<n&&y>=0&&y<n
}

while(idx<m){
const paint = paints[idx];
const [x,y]=[paint[0]-1,paint[1]-1]
field[x]=[...field[x]];
field[x][y]= 1;

let block_cnt = 0;
for(let i=0;i<4;i++){
    const nx = x+dx[i];
    const ny = y+dy[i];
    if(inRange(nx,ny)&&field[nx][ny]==1){
        block_cnt++
    }
   
}
console.log(block_cnt==3?1:0)
idx++;
}