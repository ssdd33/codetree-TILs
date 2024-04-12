const fs =require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const n =+input[0];
const grid = input.slice(1,1+n).map(v=>v.split(" ").map(v=>+v));
let max = Number.MIN_SAFE_INTEGER

function coinSum(i,j){
    return grid[i][j]+grid[i][j+1]+grid[i][j+2]
}

for(let i=0; i<n;i++){
    for(let j=0; j<n-2;j++){
        for(let k =0; k<n;k++){
            for(let l=0;l<n-2;l++){
                if(i==k&&l<=j+2)continue;
                max = Math.max(max, coinSum(i,j)+coinSum(k,l))
            }
        }
    }
}

console.log(max)