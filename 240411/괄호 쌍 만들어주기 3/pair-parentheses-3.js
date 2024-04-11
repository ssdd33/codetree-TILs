const fs = require('fs');
const brakets = fs.readFileSync("/dev/stdin").toString().trim();

let sum=0;

for(let i =0; i<brakets.length; i++){
    if(brakets[i]=='('){
        for(let j =i+1; j<brakets.length;j++){
            if(brakets[j]==')'){
                sum++;
            }
        }
    }
}

console.log(sum)