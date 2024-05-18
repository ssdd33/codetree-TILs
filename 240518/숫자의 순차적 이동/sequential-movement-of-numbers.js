const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(v=>v.trim().split(" ").map(Number));
const [n,m]=input[0];
const grid = input.slice(1,1+n);
const orderMap = {};
grid.forEach((v,i)=>v.forEach((c,j)=>orderMap[grid[i][j]]=[i,j]));

function inRange(x,y){
    return x>=0&&x<n&&y>=0&&y<n;
}

function searchMaxNumPos(x,y){
    const dx = [-1,-1,-1,0,1,1,1,0]
    const dy = [-1,0,1,1,1,0,-1,-1]

    let max =0;
    let max_p=[x,y];

    for(let i=0; i<8;i++){
        const [nx,ny] = [x+dx[i],y+dy[i]]
        if(!inRange(nx,ny))continue;
        const cur_num = grid[nx][ny];
        if(cur_num>max){
            max = cur_num;
            max_p=[nx,ny]
        }

    }

    return max_p
}

function moveNum(x,y){
    const centerNum = grid[x][y];
    const [nx,ny] = searchMaxNumPos(x,y);
    const moveToNum = grid[nx][ny];

    grid[x][y] = moveToNum;
    grid[nx][ny]=centerNum;
    orderMap[centerNum] =[nx,ny];
    orderMap[moveToNum] =[x,y];
}


for(let i=0;i<m; i++){
    for(let j=1; j<=n*n;j++){
        moveNum(...orderMap[j])
    }
}


grid.forEach(v=>console.log(v.join(" ")))