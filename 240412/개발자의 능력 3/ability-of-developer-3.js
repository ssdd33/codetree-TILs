const fs =require('fs');
const s = fs.readFileSync('/dev/stdin').toString().trim().split(" ").map(v=>+v);
const total = s.reduce((a,c)=>a+c);
let min = Number.MAX_SAFE_INTEGER;

for(let i=0; i<s.length-2; i++){
    for(let j = i+1; j<s.length-1;j++){
        for( let k = j+1; k<s.length; k++){
const t1_s = s[i]+s[j]+s[k];

min = Math.min(min, Math.abs((2*t1_s)-total))
        }
    }
}

console.log(min)