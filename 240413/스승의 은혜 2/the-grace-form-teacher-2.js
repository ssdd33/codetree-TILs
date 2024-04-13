const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const [n,b]= input[0].split(" ").map(v=>+v);
let s = input.slice(1,1+n).map(v=>+v);
s = s.sort((a,b)=>a-b);

let max = 0;

for(let i=n-1; i>=0; i--){
    let left_b = b- s[i]/2;
    let cnt =1;
    for(let j=0;j<n;j++){
if(left_b-s[j]<0)break;
left_b -=s[j];
cnt++;
    }

    max = Math.max(max,cnt)
}

console.log(max)