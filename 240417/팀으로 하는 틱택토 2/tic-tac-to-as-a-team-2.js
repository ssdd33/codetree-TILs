const fs =require('fs');
const b = fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>Array.from(v,Number));

let cnt =0;

function inRange(x,y){
    return x>=0&&x<3&&y>=0&&y<3;
}

for(let i=1; i<9;i++){
    for(let j=i+1;j<=9;j++){
//---------------------------가로
let win =false;
for(let x=0;x<3;x++){
    let fill =true;
    for(let y=0;y<3;y++){
      if(b[x][y]!=i&&b[x][y]!=j){
        fill=false;
        break;
      }
    }
   if(fill){
    win=true;
    break;
   }
}
if(win){
    
 cnt++;   
    break;
}
//----------------------세로
for(let y=0;y<3;y++){
    let fill=true;
    for(let x=0;x<3;x++){
      if(b[x][y]!=i&&b[x][y]!=j){
        fill=false;
        break;
      }
    }
      if(fill){
    win=true;
    break;
   }
}
if(win){
    
 cnt++;   
    break;
}
//---------------------대각선 오 아래

let fill =true;
for(let k=0; k<3; k++){
if(b[k][k]!=i&&b[k][k]!=j){
    fill =false;
    break;
}
}
if(fill){
    
    cnt++
    break;
}
//---------------------대각선 왼 아래
fill=true;
for(let k=0;k<3;k++){
    if(b[k][2-k]!=i&&b[k][2-k]!=j){
        fill=false;
        break;
    }
}
if(fill){
    
    cnt++
    break;
}

    }
}

console.log(cnt)