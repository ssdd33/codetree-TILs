const fs =require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.split(" "));
const [n,m]=input[0].map(v=>+v);
const a = input.slice(1,1+n).map(v=>[v[0],+v[1]]);
const b = input.slice(n+1,n+m+1).map(v=>[v[0],+v[1]]);


let atl = [];
let btl = [];

function makeTimeLine(snapshot,i,id){
const d = snapshot[0]=='R'?1:-1;

return new Array(snapshot[1]).fill(d)

}

a.forEach((snapshot,i)=>atl=[...atl,...makeTimeLine(snapshot,i,'a')]);
b.forEach((snapshot,i)=>btl=[...btl,...makeTimeLine(snapshot,i,'b')]);

const longgerLength = n>m?n:m
let ad = 0;
let bd = 0;

for(let i = 0; i<longgerLength;i++){
ad+=atl[i]==undefined?0:atl[i];
bd+=btl[i]==undefined?0:btl[i];
if(ad==bd){
    console.log(i+1);
    break;
}
}
if(ad!=bd){
    console.log(-1)
}