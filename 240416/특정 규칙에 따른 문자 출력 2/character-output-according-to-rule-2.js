const fs= require("fs");
const n = +fs.readFileSync("/dev/stdin").toString();

for(let i=1; i<=n;i++){
    console.log('@ '.repeat(i));
}

for(let i=1; i<n;i++){
    console.log('  '.repeat(i)+'@ '.repeat(n-i))
}