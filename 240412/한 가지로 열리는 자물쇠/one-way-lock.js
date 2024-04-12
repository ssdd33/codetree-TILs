const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
const comb = input[1].split(" ").map(v=>+v);

let cnt = 0;

function isValidNum(x,y){
    return Math.abs(x-y)<=2
}
for(let i=1; i<n+1;i++){
    for(let j=1; j<n+1; j++){
        for(let k=1; k<n+1;k++){
            if(isValidNum(i,comb[0])||isValidNum(j,comb[1])||isValidNum(k,comb[2])){
                cnt++
            }
        }
    }
}

console.log(cnt)