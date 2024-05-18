const fs = require('fs');
const input =fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(v=>v.trim().split(" ").map(Number));
const [n,m,t] =input[0];
const grid = input.slice(1,1+n);
let marbles = input.slice(1+n,1+n+m).map(v=>v.map(c=>c-1));
const count = Array.from(Array(n),(a)=>Array(n).fill(0));

for(let i=0;i<m;i++){
    const [x,y]=marbles[i];
    count[x][y]++;
}


function inRange(x,y){
    return x>=0&&x<n&&y>=0&&y<n;
}

function move(x,y){
    const dx= [-1,1,0,0];
    const dy=[0,0,-1,1];
    let max = 0;
    let [max_x,max_y] =[x,y];

    for(let i=0; i<4;i++){
       const[nx,ny]=[x+dx[i],y+dy[i]];
        if(!inRange(nx,ny))continue;
        if(grid[nx][ny]>max){
            max = grid[nx][ny];
            [max_x,max_y]=[nx,ny];
        }
    }
count[x][y]--;
count[max_x][max_y]++;
}

function moveAll(){

 for(let i =0; i<marbles.length;i++){
    
    move(...marbles[i]);
 }

}

function removeMarbles(){
     const tmp =[];
count.forEach((v,i)=>v.forEach((c,j)=>{
    if(c==1){
        tmp.push([i,j])
}
if(c>1){
    count[i][j]=0;
}
}))
marbles = tmp;
}


for(let i=0; i<t;i++){
    moveAll();
    removeMarbles();
}

console.log(marbles.length)