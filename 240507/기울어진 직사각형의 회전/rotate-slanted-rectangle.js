const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n= +input[0];
const m = input.slice(1,1+n).map(v=>v.trim().split(" ").map(Number));
const [r,c,m1,m2,m3,m4,dr] = input[input.length-1].split(" ").map(Number);

const dx =[-1,-1,1,1];
const counter_dy =[1,-1,-1,1];
const clock_dy = [-1,1,1,-1];
const dy = dr==0?counter_dy:clock_dy;
const step=[dr==0?m1:m2,dr==0?m2:m1];
let cnt =0;
let d =0;
let prev = 0;
let [x,y]=[r-1,c-1]

while(cnt<((m1+1)*2)+((m2-1)*2)){

    const dir = d%4
        for(let s = 0; s<step[dir%2];s++){
       
const tmp = m[x][y];
if(prev>0){
    m[x][y] = prev;
    cnt++;
    if(cnt==((m1+1)*2)+((m2-1)*2)){
        break;
    }
}
[x,y]=[x+dx[dir],y+dy[dir]]
prev = tmp;

        }
        d++
}

m.forEach(v=>console.log(v.join(" ")))