const fs =require('fs');
const n= fs.readFileSync("/dev/stdin").toString().trim().split("").map(v=>+v);

for(let i=0; i<n.length; i++){
    if(n[i]==0){
        n[i]=1;
        let num=0;
        for(let j=0; j<n.length;j++){
num = num*2+n[j];
        }
        console.log(num)
        break;
    }
}