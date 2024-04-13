const fs =require('fs');
const s = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(v=>+v);
const n =s.length;
const t = s.reduce((a,c)=>a+c);

let min = Number.MAX_SAFE_INTEGER;

function getSum(i,j){
    return s[i]+s[j]
}

for(let t1a = 0; t1a <n-1; t1a++){
    for(let t1b=t1a+1;t1b<n;t1b++){
        for(let t2a =0; t2a<n; t2a++){
            if(t2a==t1a||t2a==t1b)continue;
            for(let t2b=0;t2b<n;t2b++){
                if(t2b==t1a||t2b==t1b||t2b==t2a)continue;

                const t1s = getSum(t1a,t1b);
                const t2s= getSum(t2a,t2b);
                const t3s = t -t1s-t2s;

                if(t1s==t2s||t1s==t3s||t2s==t3s)continue;

                const maxS = Math.max(t1s,t2s,t3s)
                const minS = Math.min(t1s,t2s,t3s)
                min = Math.min(min,maxS-minS)
            }
        }
    }
}

if(min!=Number.MAX_SAFE_INTEGER){
    console.log(min)
}else{
    console.log(-1)
}