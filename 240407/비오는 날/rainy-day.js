const fs =require('fs');
const input =fs.readFileSync('/dev/stdin').toString().split("\n");
const n = +input[0];
const ws = input.slice(1,1+n);
let rs = ws.filter((w)=>w.includes("Rain"));


if(rs.length==1){
    console.log(rs[0]);
}else{
rs = rs.map(v=>v.split(" "));

let idxOfday =0;
for(let i=1; i<rs.length;i++){
let date1 = new Date(rs[i-1][0]);
let date2 = new Date(rs[i][0]);

if(date1 <date2){
    idxOfday = i-1;
}else{
    idxOfday =i;
}
}
console.log(rs[idxOfday].join(" "))

}