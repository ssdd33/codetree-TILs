const fs =require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
const cows = input[1].split(" ").map(v=>+v);

let sum =0;

for(let i=0; i<n;i++){
for(let j=i+1; j<n; j++){
    for(let k=j+1; k<n;k++){
        if(cows[i]<=cows[j]&&cows[j]<=cows[k]){
            sum++;
        }
    }
}
}

console.log(sum)