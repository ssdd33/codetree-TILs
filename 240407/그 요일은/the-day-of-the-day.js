const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().split("\n");
    const [a,b,c,d]=input[0].split(" ").map(v=>+v);
    const theDay = input[1];
const day=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const days = [0,31,29,31,30,31,30,31,31,30,31,30,31];

const dif = day.indexOf(theDay)-1;
let difDays = d-b
if(a<c){

    difDays += days[a];
    for(let m = a+1;m<c;m++){
        difDays+=days[m]
    }
}

let times = Math.floor(difDays/7)+(dif<=0?0:difDays%7>=dif?1:0);
console.log(times);