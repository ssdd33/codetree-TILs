const fs = require('fs');
const input  = fs.readFileSync('/dev/stdin').toString().split("\n");
const [n,m,k]=input[0].trim().split(" ").map(v=>+v);
const p = input.slice(1,1+m);
let s = Array(n+1).fill(0);

for(let i=0; i<m; i++){
    s[p[i]]++;
    const ioc = s.indexOf(k);
    if(ioc!=-1||i==m-1){
        console.log(ioc);
        break;
    }
}