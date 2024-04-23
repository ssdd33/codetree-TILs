const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n =+input[0];
const segs = input.slice(1,1+n).map(v=>v.split(" ").map(Number));

const from_start = [...segs];
const from_end=[...segs];

from_start.sort((a,b)=>a[0]-b[0]);
from_end.sort((a,b)=>a[1]-b[1]);

let d;
if(from_end[n-1].join("")==from_start[0].join("")){
d= from_end[n-2][1]-from_start[1][0]

}else if(from_start[1][0]-from_start[0][0]>from_end[n-1][1]-from_end[n-2][1]){
d = from_end[n-1][1]-from_start[1][0]
}else{
d = from_end[n-2][1]-from_start[0][0]
}
console.log(d)