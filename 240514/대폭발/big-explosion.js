const fs =require('fs');
const [n,m,r,c] =fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
const grid = Array.from(Array(n),(a)=>Array(n).fill(0));
let posOfB = [[r-1,c-1]];

function inRange(x,y){
    return x>=0&&x<n&&y>=0&&y<n;
}

function expl(x,y,d){
    const dx= [-1,0,1,0];
    const dy= [0,1,0,-1];
    

    for(let i=0;i<4;i++){
        let [nx,ny] = [x+(dx[i]*d),y+(dy[i]*d)];
        if(inRange(nx,ny)&&grid[nx][ny]==0){
            
            posOfB.push([nx,ny]);
            grid[nx][ny] =1;
        }
    }

    
}
let distance = 1;
for(let i=1;i<=m;i++){
    const tmp = [...posOfB];
    for(const [x,y] of tmp){
      expl(x,y,distance);
    }
    distance*=2;
}

console.log(posOfB.length)