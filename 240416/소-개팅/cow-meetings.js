const fs = require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n =+input[0];
 let p = input.slice(1,1+n).map(v=>v.split(" ")).map(v=>[v[0],+v[1],v.slice(2,2+(+v[1]))]);
 

let  ans=0;

while(p.length>1){
       const cnt = {};
    for(let i=0; i<p.length;i++){
        const [e,k,props]=p[i];
        for(let j=0; j<k;j++){
            const prop = props[j];
            if(cnt[prop]!=undefined){
                cnt[prop]++;
            }else{
                cnt[prop]=1;
            }
        }
    }

    let sorted_props = Object.keys(cnt);
    sorted_props.sort((a,b)=>cnt[b]-cnt[a]);
 
p = p.filter(v=>v[2].includes(sorted_props[0])).map(v=>[v[0],v[1]-1,v[2].filter(p=>p!=sorted_props[0])]);

ans++;
    
}

console.log(ans)