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
    const dx=[-1,0,1,0]
    const dy=[0,1,0,-1]
    copy[x][y]=0;

    for(let i=0; i<4;i++){
        let[r,c]=[x,y]
        for(let j =1; j<=sizeOfExpl;j++){
            r+=dx[i]
            c+=dy[i]
            if(inRange(r,c)){
                  copy[r][c] = 0;
            }
          
        }
    }

    return copy;
}

function fallDown(grid){

for(let i=n-1;i>=1;i--){
    for(let j =0;j<n;j++){
        if(grid[i][j]==0){
            for(let k=i-1; k>=0;k--){
                if(grid[k][j]!=0){
                    grid[i][j] = grid[k][j];
                    grid[k][j]=0;
                    break;
                }
            }

        }
    }
}
return grid;
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
        const resultOfExpl = fallDown(expl(i,j));
        const cnt = searchPair(resultOfExpl);
        ans = Math.max(ans,cnt)
    }
}

console.log(ans)