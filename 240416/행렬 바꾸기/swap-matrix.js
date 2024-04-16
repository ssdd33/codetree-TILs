const fs = require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.split(" ").map(v=>+v));
const [n,m]=input[0];
let from = input.slice(1,n+1);
const to = input.slice(1+n,1+n+m)

let cnt = 0;
let done =false;

function isSame(f,t){
    for(let i=0; i<n;i++){
        for(let j=0;j<m;j++){
            if(from[i][j]!=to[i][j])return false;
        }
    }
    return true;
}

for(let i=0;i<n-2;i++){
    for(let j=0;j<m-2;j++){
     if(from[i][j]!=to[i][j]){
        for(let k=i;k<i+3;k++){
            for(let l =j;l<j+3;l++){
                const o =from[k][l];
                from[k][l] = o==1?0:1;
            }
        }
     cnt++;
     }
       if(isSame(from,to)){
            done = true;
            break;
        }
    }
    if(done)break;
}

console.log(done?cnt:-1)