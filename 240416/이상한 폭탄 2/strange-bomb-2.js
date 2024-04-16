const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const [n,k] =input[0].split(" ").map(v=>+v);
const bs = input.slice(1,1+n).map(v=>+v);
const max = [...bs].sort((a,b)=>b-a)[0]
let biggest = -1;

for(let i=0; i<n-1;i++){
const ei = i+k+1>n?n:i+k+1
    for(let j=i+1;j<ei;j++){
        if(bs[i]==bs[j]){
biggest = Math.max(biggest,bs[i]);
break;
        }
    }
 if(biggest==max)break;
   
}

console.log(biggest)