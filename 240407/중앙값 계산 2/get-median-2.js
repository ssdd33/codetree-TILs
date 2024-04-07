const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");
const n = +input[0];
const nums = input[1].trim().split(" ").map(v=>+v);
let result = '';
for( let i=0; i<n; i++){
    
    if((i+1)%2!=0){
        let temp = nums.slice(0,i+1).sort((a,b)=>a-b);
   
        let idx = Math.ceil((i+1)/2)-1;
        result +=`${temp[idx]} `
    }

}

console.log( result)