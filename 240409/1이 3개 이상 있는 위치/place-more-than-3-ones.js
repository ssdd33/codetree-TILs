const fs = require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
const map = input.slice(1,1+n).map(v=>v.split(" ").map(v=>+v));

const dx = [-1,0,1,0]
const dy = [0,-1,0,1]
let result = 0;

function inRange(x,y){
    return x>=0&&x<n&&y>=0&&y<n;
}

for(let r = 0; r<n;r++){
    for(let c=0;c<n;c++ ){
        let cnt=0;
        for(let i =0; i<4;i++){
            const nx = r+dx[i];
            const ny=c+dy[i];
            if(!inRange(nx,ny)) continue;
            if(map[nx][ny]==1)cnt++
        }
        if(cnt>=3)result++
    }
}

console.log(result)