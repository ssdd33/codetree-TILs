const fs =require('fs');
const [a,b,c,d]=fs.readFileSync('/dev/stdin').toString().trim().split(" ").map(v=>+v);

const daysOfmonth = [0,31,28,31,30,31,30,31,31,30,31,30,31];

function getDays(m,d){
    return daysOfmonth.slice(1,m+1).reduce((a,c)=>a+c,0)+d
}

console.log(getDays(c,d)-getDays(a,b))