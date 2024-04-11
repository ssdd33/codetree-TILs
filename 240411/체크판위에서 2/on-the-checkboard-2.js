const fs =require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const [r,c] = input[0].trim().split(" ").map(v=>+v);
const grid = input.slice(1,n+1).map(v=>v.split(" "));

let sum =0;

for(let i=1; i<r; i++){
    for(let j=1; j<c;j++){
        if(grid[i][j]!=grid[0][0]){
            for(let k =i+1;k<r;k++){
                for(let l=j+1;l<c;l++){
                    if(grid[i][j]!=grid[k][l]){
                        for(let p = k+1;p<r; p++){
                            for(let q = l+1; q<c; q++){
                                if(grid[p][q]!=grid[k][l]){
                                    sum++
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

console.log(sum)