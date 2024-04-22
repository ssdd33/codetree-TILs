const fs= require('fs');
const d = +fs.readFileSync("/dev/stdin").toString().trim();

let cur_v = 1;
let cur_d = 0;
let t =0;

function fac(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}

while(cur_d<d){
    cur_d+=cur_v;
    t++;

   if(d-cur_d>fac(cur_v+1)){
cur_v++;
   }

   if(d-cur_d<fac(cur_v)){
    cur_v--;
   }

    
}

console.log(t)