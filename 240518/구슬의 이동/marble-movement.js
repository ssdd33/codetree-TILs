const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n,m,t,k]=input[0].trim().split(" ").map(Number);
const dm = {'U':0,'R':1,'D':2,'L':3};
const marbles = input.slice(1,1+m).map(v=>v.trim().split(" ")).map((v,i)=>[+v[0]-1,+v[1]-1,dm[v[2]],+v[3],i+1]);
let grid = Array.from(Array(n),(a)=>Array(n).fill([]))


class Marble{
    constructor(d,v,i){
        this.d  =d;
        this.v= v;
        this.i =i;
    }
}

for(let [r,c,d,v,i] of marbles){
    grid[r][c] =[];
    grid[r][c].push(new Marble(d,v,i));
   
}

function inRange(x,y){
    return x>=0&&x<n&&y>=0&&y<n;
}

function newPos(x,y,d){
    const dx =[-1,0,1,0];
    const dy =[0,1,0,-1];
    const [nx,ny] = [x+dx[d],y+dy[d]];
    if(inRange(nx,ny))return [nx,ny,d];
    const nd = (d+2)%4;
    return [x+dx[nd],y+dy[nd],nd];
}


for(let i=0; i<t;i++){
    const newGrid = Array.from(Array(n),(a)=>Array(n).fill([]));
    for(let r= 0; r<n;r++){
        for(let c=0;c<n;c++){
            if(grid[r][c].length==0)continue;
            for(let m of grid[r][c]){
                let nextPos =[r,c,m.d];
                let cnt_v = m.v;
                while(cnt_v>0){
                    cnt_v--;
                    nextPos = newPos(...nextPos)
                }
                m.d = nextPos[2];
          
                if(newGrid[nextPos[0]][nextPos[1]].length==0){
                    newGrid[nextPos[0]][nextPos[1]] = [];
                }
                newGrid[nextPos[0]][nextPos[1]].push(m);
                if(newGrid[nextPos[0]][nextPos[1]].length>k){
                    newGrid[nextPos[0]][nextPos[1]].sort((a,b)=>b.v-a.v||b.i-a.i);
                    while(newGrid[nextPos[0]][nextPos[1]].length>k){
                        newGrid[nextPos[0]][nextPos[1]].pop();
                    }
                } 
            }
        }
    }
    grid = newGrid;
}

console.log(grid.reduce((a,c)=>a+c.reduce((a1,c1)=>a1+c1.length,0),0))