const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("").map(v=>+v);
let num =0;
for(let i = 0; i<input.length; i++){
num =num*2+input[i]
}
console.log(num)