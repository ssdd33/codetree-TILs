const fs =require('fs');
const [a,b,c]= fs.readFileSync("/dev/stdin").toString().split(" ").map(v=>+v);

const max_a = Math.floor(c/a);
const max_b = Math.floor(c/b);

let max = 0;

for(let i = 0;i<=max_b;i++){
    
   for(let j=0; j<max_a;j++){
        const num =b*i + a*j;
        if(num<=c){

       max=Math.max(max, num)
        }
    }
    
 
}

console.log(max)