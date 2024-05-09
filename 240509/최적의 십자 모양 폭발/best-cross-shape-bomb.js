const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n =+input[0];
const g = input.slice(1,1+n).map(v=>v.trim().split(" ").map(Number));

let ans =0;

function inRange(x,y){
    return x>=0&&x<n&&y>=0&&y<n;
}

function expl(x,y){
    const copy = Array.from(g,(a)=>Array.from(a));

    const sizeOfExpl = copy[x][y]-1;

  //왼쪽
    for(let c = y-sizeOfExpl;c<y;c++){
        copy[x][c]=0
        for(let r =x-1;r>=0;r--){
            if(inRange(r,c)){
                copy[r+1][c] =copy[r][c];
                copy[r][c]=0;
            }
        }
    }

    //오른쪽
    for(let c =y+1; c<=y+sizeOfExpl;c++){
        copy[x][c]=0
      for(let r =x-1;r>=0;r--){
            if(inRange(r,c)){
                copy[r+1][c] =copy[r][c];
                copy[r][c]=0;
            }
        }
    }



  //가운데
    for(let r =x-sizeOfExpl; r<=x+sizeOfExpl;r++){
        if(inRange(r,y)){
            copy[r][y] =0;
        }
    }

    let lastIdx = -1;
    for(let r =x-sizeOfExpl-1; r>=0;r--){
        if(lastIdx<0){
            if(r+(2*sizeOfExpl)+1>n-1){
                lastIdx = n-1;
            }else{
                copy[r+(2*sizeOfExpl)+1][y] =copy[r][y]
            }
        }else{
            copy[lastIdx][y] =copy[r][y]
            lastIdx--;
        }
        copy[r][y] = 0;
    }

    return copy;
}


function searchPair(grid){
    
    let cnt =0;
    //가로
    for(let i=0; i<n; i++){
        for(let j=0; j<n-1; j++){
            
            if(grid[i][j]!=0&&grid[i][j]==grid[i][j+1]){
                cnt++
            }
        }
    }

    //세로
    for(let i =0; i<n-1;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j]!=0&& grid[i][j]==grid[i+1][j]){
                cnt++
            }
        }
    }

    return cnt;
}


for(let i=0;i<n;i++){
    for(let j=0; j<n; j++){
        const resultOfExpl = expl(i,j);
        const cnt = searchPair(resultOfExpl);
  
        ans = Math.max(ans,cnt)
    }
}

console.log(ans)