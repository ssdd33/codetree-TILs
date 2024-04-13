const fs = require('fs');
const input= fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
const p = input.slice(1,n+1).map(v=>v.split(" ").map(v=>+v));

let max = 0;


for(let i = 0; i<n-1;i++){
    for(let j =i+1; j<n; j++){
        const [x1,y1]=p[i];
        const [x2,y2]=p[j];
        if(x1==x2){
            for(let k=0;k<n;k++){
                const [x3,y3]=p[k];
                if((i!=k&&y1==y3)||(k!=j&&y2==y3)){
                    max = Math.max(max,Math.abs(y1-y2)*Math.abs(x3-x1))
                }
                
            }
        }
    }
}

console.log(max)