const fs = require('fs');
const n = +fs.readFileSync('/dev/stdin').toString();


for(let i=n; i>0; i--){
    console.log(`${'*'.repeat(i)}${" ".repeat((n-i)*2)}${'*'.repeat(i)}`)
}