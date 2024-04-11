const fs =require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
const grid = input.slice(1,1+n).map(v=>v.split(" ").map(v=>+v));

let maxCnt =0;

for(let i =0; i<n; i++){
    for(let j=0; j<n-2;j++){
        maxCnt = Math.max(maxCnt,grid[i][j]+grid[i][j+1]+grid[i][j+2])
    }
}

console.log(maxCnt)