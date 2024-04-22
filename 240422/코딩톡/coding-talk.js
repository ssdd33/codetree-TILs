const fs =require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const [n,m,p]=input[0].split(" ").map(Number);
const msg = input.slice(1,m+1).map(v=>v.split(" ")).map(v=>[v[0],+v[1]]);

if(msg[p-1][1]!=0){

function c2i(char){
    return char.charCodeAt()-65;
}
let read = Array(n).fill(true);

for(let i=0;i<p;i++){
    const [d,u]=msg[i];
    if(u>0){
 if(i!=0&&u!=msg[i-1][1]){
read = Array(n).fill(false);
}

read[c2i(d)]=true;
    }
}

for(let i=p;i<m;i++){
    const [d,u]=msg[i];
    read[c2i(d)]=true;
}

console.log(read.map((v,i)=>v?v:String.fromCharCode(i+65)).filter(v=>typeof(v)=="string").join(" "))

}