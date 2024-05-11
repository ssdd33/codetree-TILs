const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.trim().split(" ").map(Number));
const [n,m,k]=input[0];
const grid = input.slice(1,1+n);

for(let i=0; i<n; i++){
    let setBlock = false;
    for(let j =k-1; j<k+m-1;j++){
        if(grid[i][j]!=0||(j==k+m-2&&i==n-1&&grid[i][j]==0)){
          grid[i-1] = [...grid[i-1].slice(0,k-1),...Array(m).fill(1),...grid[i-1].slice(k-1+m,n)];
          setBlock =true;
          break;
        }
    }
  if(setBlock)break;
  
}

grid.forEach(v=>console.log(v.join(" ")))