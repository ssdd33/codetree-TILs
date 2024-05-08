const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = +input[0];
let blocks = input.slice(1,1+n).map(Number);
const rms = input.slice(1+n,1+n+2).map(v=>v.split(" ").map(v=>+v-1));


for(let i =0; i<2; i++){
    const [si,ei]=rms[i];

    const tmp =[];
    for(let j=0; j<blocks.length;j++){
        if(j>=si&&j<=ei)continue;
 
        tmp.push(blocks[j]);
    }
    blocks = tmp;
}

console.log(blocks.length)
blocks.forEach(v=>console.log(v))