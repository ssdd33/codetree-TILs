const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n").map(v=>v.split(" ").map(v=>+v))
const [n,m] = input[0];
const nums = input[1];
const pairs = input.slice(2,2+m);

function solution(){
    for(let i = 0; i<m;i++){
        var a1 = pairs[i][0];
        var a2 = pairs[i][1]    
        
        let sum=0;
        for(let c = a1-1; c<a2;c++){
sum+=nums[c];
        }
        console.log(sum)
        }
}
solution();