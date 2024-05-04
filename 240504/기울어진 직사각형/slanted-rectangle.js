const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n")
const n = +input[0];
const g = input.slice(1).map(v=>v.split(" ").map(Number));

let ans =0;
const dx =[-1,-1,1,1];
const dy =[1,-1,-1,1];

function inRange(rangeE,x,y){
    
    return x>=(n-1)-rangeE&&x<=rangeE&&y>=(n-1)-rangeE&&y<=rangeE;
}

for( let row =n-1; row>n/2;row--){
    for(let col = n-row; col<row;col++){
    let [x,y]= [row,col];
    let cnt = 0;
    for(let dir =0;dir<4;dir++){
     
        while(!(dir==3&&x==row&&y==col)){

            cnt+=g[x][y]

x = x+dx[dir];
y = y+dy[dir];
if(!inRange(row,x+dx[dir],y+dy[dir])){
 break;
}
        }
       
    }
    ans = Math.max(ans,cnt)
    }
}

console.log(ans)