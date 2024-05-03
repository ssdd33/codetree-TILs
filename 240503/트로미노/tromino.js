const fs = require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.split(" ").map(Number));
const [n,m]=input[0];
const g = input.slice(1);

let ans = 0;

//첫번째 블록

for(let r=0; r<n-2;r++){
    for(let c =0; c<m-2;c++){
             const tmp =[g[r][c],g[r][c+1],g[r+1][c],g[r+1][c+1]]
        const min = Math.min(...tmp);
        ans = Math.max(tmp.reduce((a,c)=>a+c)-min,ans)
    }
}

//두번째 블록

for(let i=0;i<n;i++){
    for(let j=0;j<m-2;j++){
        
        ans = Math.max(ans,g[i].slice(j,j+3).reduce((a,c)=>a+c))
    }
    
}

for(let i =0; i<m;i++){
    
    for(let j=0; j<n-2; j++){
        
        ans = Math.max(ans,g[j][i]+g[j+1][i]+g[j+2][i])
    }
    
}

console.log(ans)