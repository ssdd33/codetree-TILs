const fs = require('fs');
const input =fs.readFileSync('/dev/stdin').toString().split("\n");
const n = +input[0];
const map_of_direction = {'E':0,'W':1,'S':2,'N':3};
const move = input.slice(1,n+1).map(v=>v.split(" ")).map(v=>[map_of_direction[v[0]],+v[1]]);
const dx = [1,-1,0,0];
const dy = [0,0,-1,1];
let [x,y]=[0,0]
for(let i =0;i<n;i++){
    const cur_move = move[i] 
    const direction = cur_move[0];
    const distance = cur_move[1];
x+=dx[direction]*distance;
y+= dy[direction]*distance;
}

console.log(`${x} ${y}`);