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
    const tmp =[];

    for(let i=0;i<4;i++){
        let [nx,ny] = [x+(dx[i]*d),y+(dy[i]*d)];
        if(inRange(nx,ny)&&grid[nx][ny]==0){
            tmp.push([nx,ny]);
            grid[nx][ny] =1;
        }
    }

    return tmp;
}

for(let i=1;i<=m;i++){
    let tmp = [];
    for(let j=0; j<posOfB.length; j++){
        const [x,y]=posOfB[j];
        const distance = Math.pow(2,i-1);
      tmp = tmp.concat(expl(x,y,distance));
    }
    
    posOfB = posOfB.concat(tmp)

}

console.log(posOfB.length)