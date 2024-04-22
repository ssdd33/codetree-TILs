const fs =require('fs');
const input =fs.readFileSync('/dev/stdin').toString().split("\n");
const n = +input[0];
const gr = input.slice(1,1+n).map(v=>v.split(" ")).map(v=>[v[0]=="A"?0:v[0]=="B"?1:2,+v[1]]);

let scores = [0,0,0];
let d ="012";
let cnt =0;
for(let i=0;i<n;i++){
    const [c,s]=gr[i];
    scores[c]+=s;
    const win_s = Math.max(...scores);
let winners = [];
for(let i=0; i<3; i++){
    if(scores[i]==win_s){
        winners.push(i);
    }
}
const n_d = winners.join("");
if(d!=n_d){
cnt++;
d=n_d
}
}
console.log(cnt)