const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n =+input[0];
const s = input[1].split("").map(Number);

let max = 0;

for(let i=0; i<n;i++){
   if(s[i]==1)continue;

   s[i]=1
   let min= n;
   let cnt=0;
   for(let si=0;si<n;si++){
if(s[si]==0){
    cnt++
}else if(si!=0){
    min = Math.min(min,cnt+1);
    cnt = 0;
}
   }
   max = Math.max(max,min);
   s[i]=0;

}

console.log(max);