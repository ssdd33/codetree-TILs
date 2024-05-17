const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n,m,k]=input[0].split(" ").map(Number);
const apples = input.slice(1,1+m).map(v=>v.trim().split(" ").map(Number));
const moves = input.slice(1+m,1+m+k).map(v=>v.trim().split(" ")).map(v=>[v[0],+v[1]]);

const grid = Array.from(Array(n),(a)=>Array(n).fill(0));

for(let i=0; i<m;i++){
    const [x,y] = apples[i];
    grid[x-1][y-1] =2;
}

function inRange(x,y){
    return x>=0&&x<n&&y>=0&&y<n;
}

const dx= [-1,0,1,0]
const dy =[0,1,0,-1]
const dir_map ={'U':0,'R':1,'D':2,'L':3};

const snake_que = [[0,0]];
let cnt =0;
let gameOver = false;
for(let i=0; i<k;i++){
    const [d,s] = moves[i];

    for(let j=0; j<s;j++){
        const [x,y] = snake_que[0];
        const [nx,ny] = [x+dx[dir_map[d]],y+dy[dir_map[d]]];
        cnt++;
        
        if(!inRange(nx,ny)){
            gameOver =true;
            break;
        }
        if(grid[nx][ny]!=2){
           const [tx,ty]= snake_que.pop();
           grid[tx][ty]= 0;
        }
        if(grid[nx][ny]==1){
            gameOver =true;
            break;
        }
           grid[nx][ny] =1;
           snake_que.unshift([nx,ny]);
   
    }
    if(gameOver)break;
}

console.log(cnt)