const fs=require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n=+input[0];
const h = input[1].split(" ").map(v=>+v);

let minSum = Number.MAX_SAFE_INTEGER;

for(let i=0; i<n;i++){
    let sum = 0;
    for(let j=0; j<n;j++){
        if(j!=i){
            sum+= h[j]*Math.abs(j-i);
        }
    }
    minSum = Math.min(minSum,sum)
}

console.log(minSum)