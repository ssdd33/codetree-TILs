const fs = require('fs');
const map = fs.readFileSync('/dev/stdin').toString().split("\n").map(v=>v.split(" ").map(v=>+v));


let result = 0;

for(let r =0 ; r<4; r++){
for(let c=0; c<r+1; c++){
    result+=map[r][c]
}
}

console.log(result);