const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.split(" ").map(Number));
const [n,m]=input[0];
const g = input.slice(1);


let ans = Number.MIN_SAFE_INTEGER;

function isAllPos(x,y,k,l){
    let sum = 0
    for(let i = x;i <x+k;i++){
        for(let j=y;j<y+l;j++){
if(g[i][j]<0){
    return false;
}
        }
    }

    return true;
}

for(let i= 0; i< n;i++){
    for(let j =0; j<m; j++){
        for(let k =1; k<=n-i;k++){
            for(let l = 1; l<=m-j;l++){
           
                if(isAllPos(i,j,k,l)){
                    ans = Math.max(ans,k*l)
                }
            }
        }
    }
}

console.log(ans)