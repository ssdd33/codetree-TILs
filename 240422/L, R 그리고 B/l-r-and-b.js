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

console.log(Math.abs(bx-lx)+Math.abs(by-ly)-1)