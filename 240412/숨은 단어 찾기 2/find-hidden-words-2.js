const fs = require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const [n,m]=input[0].split(" ").map(v=>+v);
const map = input.slice(1,1+n).map(v=>v.split(""));

let cnt =0;
//위,오,아래,왼, 왼위,오위,오아래,왼아래
const dx=[-1,0,1,0,-1,-1,1,1];
const dy=[0,1,0,-1,-1,1,1,-1];

function inRange(x,y){
    return x>=0&&x<n&&y>=0&&y<m
}
for(let i=0; i<n;i++){
    for (let j=0; j<m;j++){
        if(map[i][j]=='L'){
for(let d=0;d<8;d++){
    const [x1,y1] =[i+dx[d],j+dy[d]];
    const [x2,y2] = [i+(dx[d]*2),j+(dy[d]*2)]


    if(inRange(x1,y1)&&inRange(x2,y2)&&map[x1][y1]=='E'&&map[x2][y2]=='E'){
        
        cnt++
    }
}
        }
    }
}


console.log(cnt)