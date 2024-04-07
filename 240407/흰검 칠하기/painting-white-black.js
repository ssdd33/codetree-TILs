const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");
const n = +input[0];
const p = input.slice(1,1+n).map(v=>v.split(" ")).map(v=>[+v[0],v[1]]);
let ts =[[]];
let cti = 0;
let colorCount = {'w':0,'b':0,'g':0};
function getColor(po){
    const bc = po.filter(v=>v=='b').length;
    const wc = po.filter(v=>v=='w').length;

    return (bc>=2&&wc>=2)?'g':po[po.length-1];
}

for(let i =0; i<p.length; i++){
    const tc =p[i][0];
    const c = p[i][1]=='L'?'w':'b';
    
    for( let o = 0; o<tc; o++){
        ts[cti].push(c);
        
        if(o==tc-1)break;
        if(p[i][1]=='L'){
            if(cti==0){
                ts.unshift([]);
            }else{
                cti--;
            }
        }else{
            if(cti==ts.length-1){
       ts.push([]);

            }
            cti++;
        }
    }
}

ts = ts.filter(v=>v.length).map(v=>getColor(v));

ts.forEach(v=>colorCount[v]++);

console.log(Object.values(colorCount).join(" "))