const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");
const n = +input[0];
const squares = input.slice(1,n+1).map(v=>v.split(" ").map(v=>+v+100));

let field = Array(200).fill(Array(200).fill(0));
let totalSize = 0;
/*
x1 y1 x2 y2

x1행 y1열~  y2-1
x2-1  행까지
*/


for(let i = 0; i<squares.length;i++){
    const [x1,y1,x2,y2]=squares[i];
for(let r =x1;r<x2;r++){
    field[r] =[...field[r]]
    for(let c=y1;c<y2;c++){
field[r][c] = 1;

    }
}
}

field.forEach(r=>totalSize += r.reduce((a,c)=>a+c,0));
console.log(totalSize);