const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.split(" ").map(Number));
const [n,m]=input[0];
const g = input.slice(1);

function getAreaOfK(k){
    return k*k+(k+1)*(k+1);
}

function inRange(x,y){
    return x>=0&&x<n&&y>=0&&y<n;
}

function getNumOfGold(row,col,k){
    const dx =[1,1,-1,-1];
    const dy =[-1,1,1,-1];

    let numOfGold =g[row][col];

for(let curK =1; curK<=k;curK++){
    let curX = row-curK,curY=col;
    for(let dir=0; dir<4; dir++){
        for (let step = 0; step<curK;step++){
            if(inRange(curX,curY)){
                numOfGold+=g[curX][curY];
            }
            curX+=dx[dir];
            curY+=dy[dir];
        }
    }
}
    return numOfGold;
}

let max = 0;

for(let i=0; i<n; i++){
    for(let j=0; j<n;j++){
for(let k =0; k<(n-1)*2+1;k++){
    const numOfGold = getNumOfGold(i,j,k);

    if(getAreaOfK(k)<=numOfGold*m){
       
        max = Math.max(max,numOfGold);
    }
}
    }
}

console.log(max)