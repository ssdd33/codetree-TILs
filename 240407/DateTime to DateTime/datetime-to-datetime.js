const fs = require('fs');
const [a,b,c]=fs.readFileSync('/dev/stdin').toString().trim().split(" ").map(v=>+v);

if(a<11||(a==11&&(b<11||(b==11&&c<11)))){
    console.log(-1)
}else{

const minsBefore12 = (24*60) - (11*60+11);
const d2m = (a-12)*24*60;
const restMin = b*60+c

console.log(minsBefore12+d2m+restMin)
}