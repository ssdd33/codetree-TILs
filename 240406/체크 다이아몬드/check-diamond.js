const fs = require('fs');
const n = +fs.readFileSync('/dev/stdin').toString();

for(let i=1; i<=(2*n)-1;i++){
if(i!=n){
console.log(`${' '.repeat(Math.abs(n-i))}${'* '.repeat(n-Math.abs(n-i)).trim()}${' '.repeat(Math.abs(n-i))}`)
}else{
console.log('* '.repeat(n).trim())

}}