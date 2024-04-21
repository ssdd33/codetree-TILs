const fs =require('fs');
const input =fs.readFileSync("/dev/stdin").toString().split("\n");
const [n,m,p]=input[0].split(" ").map(Number);
const msg = input.slice(1,1+m).map(v=>v.split(" ")).map(v=>[v[0],+v[1]]);

if(msg[p-1][1]==0){
    console.log(0)
}else{
   const isRead = Array(n).fill(false);

for(let i=p-1;i<m;i++){
    const [d,u]=msg[i];

    isRead[d.charCodeAt()-65] =true;
}

console.log(isRead.map((v,i)=>v?v:String.fromCharCode(i+65)).filter(v=>typeof(v)=="string").join(" ")) 
}