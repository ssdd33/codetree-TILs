const fs =require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const n =+input[0];
const grid = input.slice(1,1+n).map(v=>v.split(" ").map(v=>+v));

let max_of_row =[];

for(let i=0; i<n; i++){

    let max_cnt = Number.MIN_SAFE_INTEGER;

    for(let j=0; j<n-2; j++){
        max_cnt = Math.max(max_cnt,grid[i][j]+grid[i][j+1]+grid[i][j+2]);
    }
    max_of_row.push(max_cnt);
}

max_of_row = max_of_row.sort((a,b)=>b-a);

console.log(max_of_row[0]+max_of_row[1])