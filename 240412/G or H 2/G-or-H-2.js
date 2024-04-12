const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const n = +input[0];
let seq = input.slice(1,1+n).map(v=>v.split(" ")).map(v=>[+v[0],v[1]]);
seq = seq.sort((a,b)=>b[0]-a[0]);
const arr = Array(seq[0][0]+1).fill(0);

let max = seq[0][0];

for(let i=0; i<seq.length;i++){
arr[seq[i][0]]=seq[i][1];
}

while(max>1){
    let done = false;
for(let i=0; i<arr.length-max+1;i++){
    const section = arr.slice(i,i+max);
    const g_cnt = section.filter(v=>v=='G');
    const h_cnt =section.filter(v=>v=='H');
    if(g_cnt==0||h_cnt==0||g_cnt==h_cnt){
        done=true;
        break;
    }
}

if(done){
    break;
}
max--;
}

console.log(max-1);