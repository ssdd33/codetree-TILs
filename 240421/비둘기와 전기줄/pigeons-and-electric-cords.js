const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n= +input[0];
const ps = input.slice(1,1+n).map(v=>v.split(" ").map(Number));

const position = Array(11).fill(2);
const cnt = Array(11).fill(0);

for(let i=0; i<n;i++){
    const [pg,pp]=ps[i];

    if(position[pg]==2){
        position[pg]=pp;
    }else if(position[pg]!=pp){
       cnt[pg]++; 
    }
}

console.log(cnt.reduce((a,c)=>a+c))