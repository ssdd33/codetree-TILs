const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n").map(v=>v.split(" ").map(v=>+v));
const [n,m] = input[0];
const m1 = input.slice(1,n+1);
const m2 = input.slice(n+1,2*n+1);


for(let r=0;r<n;r++){
    let nr = '';
    for(let c=0;c<m;c++){
        if(m1[r][c]==m2[r][c]){
            nr+='0 ';

        }else{
        nr+='1 '
    }
    }
    console.log(nr)
}