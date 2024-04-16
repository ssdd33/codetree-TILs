const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.split(" ").map(v=>+v));

const [n,b]=input[0];
const sp = input.slice(1,1+n);
sp.sort((a,b)=>(a[0]+a[1])-(b[0]+b[1])||a[0]-b[0]);

let max =0;

for(let i=n-1;i>=0;i--){
    const [p,s] =sp[i];
    let sum = (p/2)+s;
    let cnt = 1;

    for(let j=0;j<n;j++){
        if(i==j)continue;
        const [ap,as]=sp[j];
        const nsum = sum+ap+as;
        
        if(nsum>b){
            
            break;}
        sum = nsum;
        cnt++;
    }
    
    max = Math.max(max,cnt)
}

console.log(max)