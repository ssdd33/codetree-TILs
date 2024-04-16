const fs = require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n =+input[0];
 let p = input.slice(1,1+n).map(v=>v.trim().split(" ")).map(v=>[v[0],+v[1],v.slice(2,2+(+v[1]))]);
 

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
    for(let i=0; i<sorted_props.length-2;i++){
        const prop1 = sorted_props[i];
        const prop2 = sorted_props[i+1];
        const prop3 = sorted_props[i+2];
        if(cnt[prop1]==cnt[prop2]){
            const prop1_e = p.filter(v=>v[2].includes(prop1)).filter(v=>v[2].includes(prop3)).length;
            const prop2_e = p.filter(v=>v[2].includes(prop2)).filter(v=>v[2].includes(prop3)).length;

            if(prop2_e>prop1_e){
                sorted_props[i ]=prop2;
                sorted_props[i+1]=prop1;
            }

        }
    }
 
p = p.filter(v=>v[2].includes(sorted_props[0])).map(v=>[v[0],v[1]-1,v[2].filter(p=>p!=sorted_props[0])]);
ans++;
    
}

console.log(ans)