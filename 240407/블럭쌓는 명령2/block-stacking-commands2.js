const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n").map(v=>v.split(" ").map(v=>+v));

const [n,k] = input[0];
const order = input.slice(1,k+1);
let blocks = Array(n).fill(0);

for(let i=0; i<order.length; i++){
    for( let bi = order[i][0]; bi<=order[i][1];bi++){
        blocks[bi]++;
    }
}

blocks = blocks.sort((a,b)=>b-a);
console.log(blocks[0])