const fs = require('fs');
const[A,B,M]= fs.readFileSync('/dev/stdin').toString().split("\n").map(v=>v.split(" ").map(v=>+v+1000));

let field = Array(2000).fill(Array(2000).fill(0));
let totalSize = 0;
function drawSquare(square,mark){
const [x1,y1,x2,y2]=square;
    for(let r=x1;r<x2;r++){
        field[r]=[...field[r]];
        for(let c=y1;c<y2;c++){
field[r][c]=mark
        }
    }
}

drawSquare(A,1);
drawSquare(B,1);
drawSquare(M,0);

field.forEach(r=>totalSize+=r.reduce((a,c)=>a+c,0));
console.log(totalSize)