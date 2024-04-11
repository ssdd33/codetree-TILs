const fs=require('fs');
const brakets = fs.readFileSync("/dev/stdin").toString().trim();

let sum=0;

for(let i=0; i<n-3;i++){
    if(brakets[i]=='('&&brakets[i+1]=='('){
        for(let j=i+2;j<n-1;j++){
            if(brakets[j]==')'&&brakets[j+1]==')'){
                sum++
            }
        }
    }
}

console.log(sum)