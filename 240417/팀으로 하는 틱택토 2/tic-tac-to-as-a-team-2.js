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
    let i_cnt=0;
    let j_cnt=0;
    for(let y=0;y<3;y++){
      if(b[x][y]!=i&&b[x][y]!=j){ 
        break;
      }
      if(b[x][y]==i)i_cnt++
      if(b[x][y]==j)j_cnt++
    }
   if(i_cnt>0&&j_cnt>0&&(i_cnt+j_cnt==3)){
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
    let i_cnt=0;
    let j_cnt=0;
    for(let x=0;x<3;x++){
      if(b[x][y]!=i&&b[x][y]!=j){
        break;
      }
        if(b[x][y]==i)i_cnt++
      if(b[x][y]==j)j_cnt++
    }
      if(i_cnt>0&&j_cnt>0&&(i_cnt+j_cnt==3)){
    win=true;
    break;
   }
}
if(win){
    
 cnt++;   
    break;
}
//---------------------대각선 오 아래

 let i_cnt=0;
  let j_cnt=0;
for(let k=0; k<3; k++){
if(b[k][k]!=i&&b[k][k]!=j){
    break;
}
     if(b[k][k]==i)i_cnt++
      if(b[k][k]==j)j_cnt++
}
if(i_cnt>0&&j_cnt>0&&(i_cnt+j_cnt==3)){
    
    cnt++
    break;
}
//---------------------대각선 왼 아래
 i_cnt=0;
 j_cnt=0;
for(let k=0;k<3;k++){
    if(b[k][2-k]!=i&&b[k][2-k]!=j){
     
        break;
    }
     if(b[k][2-k]==i)i_cnt++
      if(b[k][2-k]==j)j_cnt++
}
if(i_cnt>0&&j_cnt>0&&(i_cnt+j_cnt==3)){
    
    cnt++
    break;
}

    }
}

console.log(cnt)