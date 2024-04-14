const fs =require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.split(" ").map(v=>+v));

const [n,m,d,s]=input[0];
let eat = input.slice(1,1+d);
const sick = input.slice(1+d,1+d+s);

if(n==sick.length){
    console.log(n)
}else{
let max = 0;
let rotten = Array(m+1).fill(0);

sick.forEach(v=>{
    const [sp,ss]=v;
    eat.forEach(e=>{
        const [ p,c,s]=e;
        if(p==sp&&s<ss) rotten[c]++;
    })
})

let suspect=[];
rotten.forEach((v,i)=>{if(v>=sick.length)suspect.push(i)});

suspect.forEach(v=>{
let eat_rotten = Array(n+1).fill(false);
eat.forEach(e=>{
    const [p,c,s]=e;
    if(c==v)eat_rotten[p]=true;
})

max = Math.max(max,eat_rotten.filter(v=>v).length)
})

console.log(max)

}