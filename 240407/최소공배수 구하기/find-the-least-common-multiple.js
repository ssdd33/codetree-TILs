const fs = require('fs');
const [n,m] = fs.readFileSync('/dev/stdin').toString().split(" ").map(v=>+v)

function leastCommonMultple(a,b){
    let sn = a>b?a:b;
for(let i =sn; i<=a*b; i++ ){
    if(i%a==0&&i%b==0){
        console.log(i);
    break;
    }
}
}

leastCommonMultple(n,m)