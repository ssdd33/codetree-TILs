const fs =require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.split(" ").map(v=>+v));

const [n,m,d,s]=input[0];
let eat = input.slice(1,1+d);

const sick = input.slice(1+d,1+d+s);
if(n==sick.length){
    console.log(n)
}else{
let rotten = Array(m+1).fill(false);
for(let i=0; i<s;i++){
    const [sp,ss]=sick[i]
    eat.forEach(v=>{
        const [ep,c,es ]=v;
        if(sp==ep&&es<ss){
            rotten[c]=true;
        }
    })
}
let mightSick = Array(n+1).fill(false);
eat.forEach(v=>{
    const [p,c,s]=v;
    if(rotten[c]){
        mightSick[p]=true;
    }
})
console.log(mightSick.filter(v=>v).length)
}