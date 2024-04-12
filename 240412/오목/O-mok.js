const fs =require('fs');
const grid = fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.split(" ").map(v=>+v));
let winner =0;
let mid = '';
for(let i=0; i<19;i++){
    for(let j=0;j<19;j++){
 const st = grid[i][j];
    if(st!=0){
        //가로
        if(j<15){
              let isWin = true;
            for(let k=j+1; k<j+5; k++){
                if(grid[i][k]!=st){
                    isWin=false;
                    break;
                }
            }
             if(isWin){
                
                    winner =st;
                  mid = `${i+1} ${j+3}`;
                  break;
                }
                
        }
        //세로
        if(i<15){
            let isWin = true;
for(let k=i+1; k<i+5;k++){
    if(grid[k][j]!=st){
        isWin=false;
        break;
    }
}
 if(isWin){
                    winner =st;
                  mid = `${i+3} ${j+1}`;
                  break;
                }
        }
        //대각선
        //오른쪽
        if(i<15&&j<15){
            let isWin = true;
            for(let k=1; k<5;k++){
                if(grid[i+k][j+k]!=st){
                    isWin=false;
                    break;
                }
            }
            if(isWin){
                
                winner= st;
                mid = `${i+3} ${j+3}`
                break;
            }
            
        }
//왼쪽
if(i<15&&j>3){
   let isWin=true;
for(let k=1; k<5; k++){
    if(grid[i+k][j-k]!=st){
        isWin=false;
        break;
    }
}
if(isWin){
    
    winner = st;
    mid = `${i+3} ${j-1}`;
    break;
}
}



    }
    }
   if(winner!=0)break; 
}

console.log(winner);
if(winner!=0){
    console.log(mid);
}