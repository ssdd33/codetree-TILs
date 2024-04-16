const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const [n,k] =input[0].split(" ").map(v=>+v);
const bs = input.slice(1,1+n).map(v=>+v);

let biggest = -1;

for(let i=0; i<=n-k;i++){
   if(bs[i]==bs[i+k]){
    biggest = Math.max(biggest,bs[i])
   }
   
}

console.log(biggest)