const fs =require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>+v);
const n = input[0];
const rooms = input.slice(1,1+n);
const members = rooms.reduce((a,c)=>a+c);

let minDistance = Number.MAX_SAFE_INTEGER;

for(let s=0; s<n; s++){
    let distanceCnt =0;
   
    for(let d=1;d<n;d++){
const next_room_idx = (s+d)%n;
distanceCnt += d*rooms[next_room_idx];


    }
    minDistance = Math.min(minDistance,distanceCnt);
}

console.log(minDistance)