const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
let segs = input.slice(1,1+n).map(v=>v.split(" ").map(v=>+v));


 const xs = segs.map(v=>v[0]);
    const ys = segs.map(v=>v[1]);
    const x_set = Array.from(new Set(xs));
    const y_set =Array.from(new Set(ys));

    const x_cnt ={};
    const y_cnt ={};

    x_set.forEach(v=>x_cnt[v]=xs.filter(c=>c==v).length);
    y_set.forEach(v=>y_cnt[v]=ys.filter(c=>c==v).length);

const x_sorted = Object.keys(x_cnt);
x_sorted.sort((a,b)=>x_cnt[b]-x_cnt[a]);
const y_sorted =Object.keys(y_cnt);
y_sorted.sort((a,b)=>y_cnt[b]-y_cnt[a]);

for(let i=0; i<3;i++){
    const x_max = x_cnt[x_sorted[0]];
    const y_max =y_cnt[y_sorted[0]];

  if(x_max>y_max){
    const tx =x_sorted[0];
    segs = segs.filter(v=>v[0]!=tx);
    x_sorted.shift();
  }else{
    const ty = y_sorted[0];
    segs = segs.filter(v=>v[1]!=ty);
    y_sorted.shift();
  }


}

console.log(segs.length==0?1:0)