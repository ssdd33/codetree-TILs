const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.split(" ").map(v=>+v));
const [n,c,g,h]=input[0];
const ms = input.slice(1,1+n);
const fms = ms.flat();
fms.sort((a,b)=>a-b);

let max= c

function getProductionSize(t){
    let sum=0;
    for(let i=0;i<ms.length;i++){
        const [ta,tb] =ms[i];
if(t<ta){
    sum+=c;
}else if(t>=ta&&t<=tb){
    sum+=g
}else{
sum+=h;
}
    }
    
    return sum;
}

const min_temp=fms[0]>0? fms[0]-1:fms[0];
const max_temp = fms[fms.length-1]>=1000?1000:fms[fms.length-1]+1

for(let t= min_temp; t<=max_temp; t++){
max = Math.max(max,getProductionSize(t))
}

console.log(max)