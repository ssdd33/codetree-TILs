const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n").map(v=>v.split(" "));
const [n,m]=input[0].map(v=>+v);
const a=input.slice(1,1+n).map(v=>[+v[0],v[1]]);
const b = input.slice(1+n,1+n+m).map(v=>[+v[0],v[1]]);

let [cnt,cap,cbp,cad,cbd,cac,cbc,ai,bi]=Array(9).fill(0);

function getDirection(d){
    return d=='R'?1:-1
}

while(true){
    
    if(cac==0&&cbc==0&&ai==n&&bi==m)break;
       const isSameBefore = cap==cbp;
    if(cac==0){
        if(ai!=n){
            const cai = a[ai];
            cac = cai[0]-1;
             cad = getDirection(cai[1]);
            cap+=cad;
            ai++;
        }
    }else{
  cap+=cad;
    cac--;
    }

    if(cbc==0){
        if(bi!=m){
            const cbi = b[bi];
             cbc = cbi[0]-1;
            cbd = getDirection(cbi[1]);
            cbp+=cbd;
            bi++;
        }
    }else{
    cbp+=cbd;
cbc--;
    }
 
  

const isSameNow = cap==cbp;
if(!isSameBefore&&isSameNow)cnt++;
}

console.log(cnt)