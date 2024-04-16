const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const [t,a,b]=input[0].split(" ").map(v=>+v);
const as = input.slice(1,1+t).map(v=>v.split(" ")).map(v=>[v[0],+v[1]]);
const s = as.filter(v=>v[0]=='S').map(v=>v[1]);
const n= as.filter(v=>v[0]=='N').map(v=>v[1]);

let cnt = 0;

for(let i=a;i<=b;i++){
const sd = s.map(v=>Math.abs(i-v));
const nd = n.map(v=>Math.abs(i-v));

sd.sort((a,b)=>a-b);
nd.sort((a,b)=>b-a);

if(sd[0]<=nd[0]){
    cnt++
}

}

console.log(cnt)