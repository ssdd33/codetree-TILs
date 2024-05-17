const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = +input[0];
const grid = input.slice(1,1+n).map(v=>v.trim().split(" ").map(Number));

const dx = [-1,0,1,0];
const dy = [0,1,0,-1];

let ans =0;
let cur_dir=0;

function inRange(x,y){
    return x>=0&&x<n&&y>=0&&y<n;
}

const d_switch ={1:{0:1,1:0,2:3,3:2},2:{0:3,1:2,2:1,3:0}}

function getTimeToOut(x,y){
    let [cx,cy] = [x,y];
    let cnt= 1;

    while(true){
        cnt++;
        const [nx,ny]=[cx+dx[cur_dir],cy+dy[cur_dir]]
        if(!inRange(nx,ny))break;
        [cx,cy]=[nx,ny];
        const wall = grid[nx][ny];
        if(wall !=0){
            cur_dir = d_switch[wall][cur_dir]
        }
       
    }

 return cnt;
}

for(let i=0; i<n; i++){
    for(let j=0;j<n;j++){

        if(i==0||i==n-1||j==0||j==n-1){
            let [x,y] = [i,j];
            if(i==n-1){
                cur_dir=0;
                ans = Math.max(ans, getTimeToOut(i,j))
            }
             if(j==0){
              cur_dir=1;
                ans = Math.max(ans, getTimeToOut(i,j))
            }
            if(i==0){
                cur_dir =2;
                ans = Math.max(ans, getTimeToOut(i,j))
            }
           
            if(j==n-1){
                cur_dir =3;
                ans = Math.max(ans, getTimeToOut(i,j))
            }
         
        }
    }
}

console.log(ans)