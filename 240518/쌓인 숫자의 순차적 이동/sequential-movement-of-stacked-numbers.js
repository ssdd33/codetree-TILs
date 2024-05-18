const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(v=>v.trim().split(" ").map(Number));
const [n,m] =input[0];
const grid = input.slice(1,1+n).map(v=>v.map(c=>[c]));
const nums = input[n+1];

function inRange(x,y){
    return x>=0&&x<n&&y>=0&&y<n;
}

function findPos(num){
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            
            if(grid[i][j].includes(num)){
                return [i,j]
            }
        }
    }
}


function newPos(x,y){
    const dx =[-1,-1,-1,0,1,1,1,0];
    const dy =[-1,0,1,1,1,0,-1,-1];

    let max=0;
    let max_d =[x,y];

    for(let i=0; i<8;i++){
        const [nx,ny] = [x+dx[i],y+dy[i]];
        if(!inRange(nx,ny)||grid[nx][ny].length==0)continue;
        const num = Math.max(...grid[nx][ny]);
        if(num>max){
            max =num;
            max_d =[nx,ny]
        }
    }

    return max_d
}

for(let i=0; i<m;i++){
    const num = nums[i];
    const [x,y]= findPos(num);
    const [nx,ny] =newPos(x,y);

    if([x,y].join()!=[nx,ny].join()){
        const point_idx = grid[x][y].indexOf(num)+1
        const target = grid[x][y].slice(0,point_idx);
        grid[x][y] = grid[x][y].slice(point_idx,grid[x][y].length);
        grid[nx][ny] =[...target,...grid[nx][ny]];
    }

}

grid.forEach(v=>v.forEach(c=>console.log(c.length==0?"None":c.join(" "))))