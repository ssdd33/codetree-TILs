const fs =require('fs');
const [a,b,c,d]=fs.readFileSync('/dev/stdin').toString().trim().split(" ").map(v=>+v);

function getMins(h,m){
    return 60*h+m;
}

console.log(getMins(c,d)-getMins(a,b));