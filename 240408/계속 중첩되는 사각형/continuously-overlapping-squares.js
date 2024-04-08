const fs = require('fs');
const input =fs.readFileSync('/dev/stdin').toString().split("\n");
const n = +input[0];
const squares = input.slice(1,n+1).map(v=>v.split(" ").map(v=>+v+100));
let field = Array(200).fill(Array(200).fill(0));
let totalSizeOfBlue = 0;

for(let i=0;i<squares.length;i++){
    const [x1,y1,x2,y2]=squares[i];
    const mark =i%2==0?1:2;
    for(let r=x1;r<x2;r++){
        field[r]=[...field[r]]
        for(let c=y1;c<y2;c++){
            field[r][c]=mark;
        }
    }
}

field.forEach(r=>totalSizeOfBlue+=r.filter(v=>v==2).length);
console.log(totalSizeOfBlue)