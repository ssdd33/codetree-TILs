const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");
const n = +input[0];
const squares = input.slice(1,n+1).map(v=>v.split(" ").map(v=>+v+100));

let field = Array(200).fill(Array(200).fill(0));
let totalSize = 0;

for(let i=0; i<squares.length; i++){
    const [x,y] = squares[i];
  for(let r= x; r<x+8;r++){
    field[r]=[...field[r]];
    for(let c= y;c<y+8;c++){
field[r][c]=1;
    }
  }
}

field.forEach(r=>totalSize+=r.reduce((a,c)=>a+c,0));
console.log(totalSize)