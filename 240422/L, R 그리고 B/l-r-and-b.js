const fs =require('fs');
const grid = fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.split(""));

let [rx,ry]=[0,0];
let [bx,by]=[0,0];
let [lx,ly]=[0,0];

grid.forEach((v,i)=>{
    if(v.includes('R')){
    rx = i;
}
if(v.includes("B")){
    bx=i;
}
if(v.includes("L")){
    lx =i;
}
})
ry = grid[rx].indexOf('R')
by = grid[bx].indexOf("B");
ly = grid[lx].indexOf("L");

let d = Math.abs(bx-lx)+Math.abs(by-ly);



if((bx==lx&&lx==rx)||(by==ly&&ly==ry)){
    if((bx>lx&&rx>bx)||(bx>lx&&rx<lx)||(bx<lx&&rx<bx)||(bx<lx&&rx>lx)||(by>ly&&ry>by)||(by>ly&&ry<ly)||(by<ly&&ry<by)||(by<ly&&ry>ly)){
d-=2;
    }else{

d++;
    }
}else{
d--;
}
console.log(d)