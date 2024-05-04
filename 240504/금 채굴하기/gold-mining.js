const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.split(" ").map(Number));
const [n,m]=input[0];
const g = input.slice(1);

function getAreaOfK(k){
    return k*k+(k+1)*(k+1);
}

function getNumOfGold(row,col,k){
    let numOfGold =0;
    for(let i=0; i<n; i++){
        for(let j=0;j<n;j++){
            if(Math.abs(row-i)+Math.abs(col-j)<=k){
                numOfGold+=g[i][j]
            }
        }
    }

    return numOfGold;
}

let max = 0;

for(let i=0; i<n; i++){
    for(let j=0; j<n;j++){
for(let k =0; k<=n-1;k++){
    const numOfGold = getNumOfGold(i,j,k);
    if(getAreaOfK(k)<=numOfGold*m){
       
        max = Math.max(max,numOfGold);
    }
}
    }
}

console.log(max)