const fs =require('fs');
const [n,m]=fs.readFileSync("/dev/stdin").toString().split(" ").map(v=>+v);

let map = Array(n).fill(Array(m).fill(0));

const dx =[0,1,0,-1];
const dy =[1,0,-1,0];
let [x,y]=[0,0];
let num=1;
let direction = 0;
function inRange(x,y){
return x>=0&&x<n&&y>=0&&y<m;
}


while(true){
    if(num>n*m) break;

map[x]=[...map[x]];
map[x][y] = num;

let nx = x+dx[direction];
let ny = y+dy[direction];

if(!inRange(nx,ny)||map[nx][ny]!=0){
    direction = (direction+1)%4
    nx = x+dx[direction];
ny = y+dy[direction];
}
[x,y]=[nx,ny];

num++
    
}
for(let i=0; i<n; i++){
console.log(map[i].join(" "))
}