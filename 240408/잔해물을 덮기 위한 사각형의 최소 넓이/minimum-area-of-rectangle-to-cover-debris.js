const fs = require('fs');
const [A,B] = fs.readFileSync('/dev/stdin').toString().split("\n").map(v=>v.split(" ").map(v=>+v+1000));
let field = Array(2000).fill(Array(2000).fill(0));
let [minX,minY,maxX,maxY] = [2000,2000,0,0];
const [x1,y1,x2,y2]=A;

/*
최소 x 최대 x
최소 Y 최대 y

*/

function drawSquare(square,mark){
    const [x1,y1,x2,y2]=square;
    for(let r= x1; r<x2;r++){
        field[r]=[...  field[r]]  
        for(let c=y1;c<y2;c++){
            field[r][c]=mark;
        }}
}

drawSquare(A,1);
drawSquare(B,0);


for(let r=x1;r<x2; r++){
    if(!field[r].filter(v=>v==1).length)continue;
   if(r<minX)minX = r;
   if(r>maxX)maxX = r;
    for(let c= y1;c<y2;c++){
if(field[r][c]==1){
    if(c<minY)minY=c;
    if(c>maxY)maxY =c;
}
    }
}

console.log((maxX-minX+1)*(maxY-minY+1))