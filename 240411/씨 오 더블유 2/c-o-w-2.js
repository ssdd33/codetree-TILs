const fs = require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
const strs = input[1].trim();

let sum = 0;


for(let c=0; c<n-2; c++){
    if(strs[c]=='C'){
        for(let o=c+1; o<n-1;o++){
            if(strs[o]=='O'){
                for(let w=o+1;w<n;w++){
                    if(strs[w]=='W'){sum++}
                }
            }
        }
    }
}

console.log(sum)