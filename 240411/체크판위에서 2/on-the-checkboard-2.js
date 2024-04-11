const fs =require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const [r,c] = input[0].trim().split(" ").map(v=>+v);
const grid = input.slice(1,r+1).map(v=>v.split(" "));

let sum =0;
if(grid[0][0]==grid[r-1][c-1]){
    console.log(0);
}else{
for(let i=1; i<r; i++){
    for(let j=1; j<c;j++){
        if(grid[i][j]!=grid[0][0]){
            for(let k =i+1;k<r-1;k++){
                for(let l=j+1;l<c-1;l++){
                    if(grid[i][j]!=grid[k][l]){
                        sum++
                    }
                }
            }
        }
    }
}

console.log(sum)
}