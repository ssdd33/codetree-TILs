const fs= require('fs');
const d = +fs.readFileSync("/dev/stdin").toString().trim();

let cur_v = 1;
let cur_d = 0;
let t =0;

while(cur_d<d){
    cur_d+=cur_v;
    t++;

    if(d-cur_d-1>Math.floor(d/2)){
        cur_v++;
    }else if(cur_v>1){
        cur_v--;
    }
}

console.log(t)