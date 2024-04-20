const fs =require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);
const n = input[0]
const k= 17;
const hs = input.slice(1,1+n);
hs.sort((a,b)=>a-b);

let min = Number.MAX_SAFE_INTEGER;

for(let i=0; i<83;i++){


let cost =0;

for(let j=0; j<n; j++){
    if(hs[j]<i){
        cost+= (i-hs[j])*(i-hs[j])
    }
    if( hs[j]>i+k){
cost += (hs[j]-i-k)*(hs[j]-i-k)
    }
}

min = Math.min(min, cost)

}

console.log(min)