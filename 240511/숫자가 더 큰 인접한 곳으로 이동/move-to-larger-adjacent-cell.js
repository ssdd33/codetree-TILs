const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(v=>v.trim().split(" ").map(Number));
const [n,r,c]=input[0];
const grid = input.slice(1,1+n);

let curX = r-1
let curY =c-1
let ans =[];

const dx =[-1,1,0,0];
const dy =[0,0,-1,1];

function inRange(x,y){
    return x>=0&&x<n&&y>=0&&x<n;
}

while(true){
    const curNum = grid[curX][curY];
    ans.push(curNum)
    let foundBiggerONe = false;
    for(let i=0;i<4;i++){
        const nx =curX+dx[i];
        const ny =curY+dy[i];
        if(inRange(nx,ny)&&curNum<grid[nx][ny]){
            curX = nx;
            curY = ny;
            foundBiggerONe = true;
            break;
        }
    }
    if(!foundBiggerONe){
        break;
    }
}

console.log(ans.join(" "))