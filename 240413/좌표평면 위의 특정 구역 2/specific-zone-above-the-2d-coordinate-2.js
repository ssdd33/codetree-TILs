const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n= +input[0];
const p = input.slice(1,1+n).map(v=>v.split(" ").map(v=>+v));


let min = Number.MAX_SAFE_INTEGER;

for(let i=0; i<n;i++){
  let xs=[];
  let ys=[];

  p.forEach((v,idx)=>{
    if(idx!=i){
        xs.push(v[0]);
        ys.push(v[1])
    }
  })

  min = Math.min(min,(Math.max(...xs)-Math.min(...xs))*(Math.max(...ys)-Math.min(...ys)))
}

console.log(min)